import { useMemo } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Wrapper, FormInput, ErrorMessage, FormCheckbox, FormListRadio, SubmitButtonCommon, ButtonStyles } from '../../Common'
import { SubscriptionOptions } from '../../../models/heartscore-subscription'

const defaultSubscriptionData: SubscriptionOptions = {
  text_frequency: '',
  phone_number: '',
  email_frequency: '',
  email: '',
}

const frequencyValues = ['Daily', 'Weekly Digest', 'Monthly Digest']

type Props = {
  isLoading?: boolean
  isError?: boolean
  errorMessage?: string
  onSubscription: (params: SubscriptionOptions) => void
}

export const SubscriptionContent = ({ isLoading, isError, errorMessage, onSubscription }: Props) => {
  const formik = useFormik({
    initialValues: defaultSubscriptionData,
    validationSchema: Yup.object({
      text_frequency: Yup.string().oneOf(frequencyValues, 'Invalid text frequency'),
      phone_number: Yup.string().min(9, 'Invalid Phone Number!').max(12, 'Invalid Phone Number!'),
      email_frequency: Yup.string().oneOf(frequencyValues, 'Invalid text frequency'),
      email: Yup.string().email('Invalid email address'),
    }),
    onSubmit: (values) => {
      onSubscription(values)
    },
  })

  const formSubscription = useMemo(() => {
    return (
      <form className="w-full space-y-6 text-black" onSubmit={formik.handleSubmit}>
        <div className="space-y-4">
          <FormCheckbox name="checkbox_phoneNumber" value="checkbox_phoneNumber" label="TEXT" />
          <FormListRadio name="text_frequency" labels={frequencyValues} onChange={formik.handleChange} />
          {formik.errors.text_frequency && <ErrorMessage text={formik.errors.text_frequency} />}

          <FormInput type="text" id="phone_number" name="phone_number" placeholder="Phone Number" value={formik.values.phone_number} onChange={formik.handleChange} />
          {formik.errors.phone_number && <ErrorMessage text={formik.errors.phone_number} />}

          <FormCheckbox name="checkbox_Email" value="checkbox_Email" label="EMAIL" />
          <FormListRadio name="email_frequency" labels={frequencyValues} onChange={formik.handleChange} />
          {formik.errors.email_frequency && <ErrorMessage text={formik.errors.email_frequency} />}

          <FormInput id="email" type="email" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && <ErrorMessage text={formik.errors.email} />}

          {isError && errorMessage && <ErrorMessage text={errorMessage} />}
        </div>

        <SubmitButtonCommon isLoading={isLoading} width="w-[174px]" height="h-[53px]" text="Confirm" style={ButtonStyles.Dark} onClick={formik.handleSubmit} />
      </form>
    )
  }, [formik, isError, errorMessage])

  return (
    <Wrapper>
      <div className="space-y-5">
        <h1 className="text-[24px] font-semibold leading-[1.6667]">Patient Data and Confidentiality</h1>
        <p className="text-[17x] font-semibold leading-[1.235]">
          Adesso is a journey to a healthy heart and life. The journey is a daily one and requires setting intentions towards your habits and goals. We recommend setting reminders to help you check in
          on how you are doing.
          <br />
          <br />
          Please select your preferred notification settings to help encourage your growth.
        </p>

        {formSubscription}
      </div>
    </Wrapper>
  )
}
