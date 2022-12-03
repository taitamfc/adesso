import { useCallback, useMemo, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { MainWrapper, TitlePage, FormInput, SubmitButtonCommon, ButtonCommon, ButtonStyles, ErrorMessage } from '../Common'

import { RegisterOptions } from '../../models/register'

const defaultRegisterData: RegisterOptions = {
  name: '',
  email: '',
  password: '',
  phone_number: '',
}

type Props = {
  isLoading?: boolean
  isError?: boolean
  errorMessage?: string
  onRegister: (params: RegisterOptions) => void
}

export const RegisterContent = ({ isError, errorMessage, isLoading, onRegister }: Props) => {
  const [isConfirm, setIsConfirm] = useState<boolean>(false)
  const [isCheckError, setIsCheckError] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: defaultRegisterData,
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Field is too Short! Minimum: 3 characters').max(50, 'Field is too Long! Maximum: 50 characters').required('Field is required'),
      password: Yup.string().min(6, 'Field is too Short! Minimum: 6 characters').required('Field is required'),
      email: Yup.string().email('Invalid email').required('Field is required'),
      phone_number: Yup.string().min(9, 'Invalid Phone Number!').max(12, 'Invalid Phone Number!').required('Phone Number is required'),
    }),
    onSubmit: (values) => {
      onRegister(values)
    },
  })

  const handleConfim = useCallback(() => {
    setIsConfirm(true)
  }, [])

  const handleSubmit = useCallback((callback: () => void) => {
    setIsCheckError(true)
    callback()
  }, [])

  const formRegister = useMemo(() => {
    return (
      <form className="w-full space-y-6 text-black" onSubmit={formik.handleSubmit}>
        <div className="space-y-4">
          <FormInput type="text" id="name" name="name" placeholder="Name" value={formik.values.name} onChange={formik.handleChange} />
          {isCheckError && formik.errors.name && <ErrorMessage text={formik.errors.name} />}

          <FormInput id="email" type="email" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} />
          {isCheckError && formik.errors.email && <ErrorMessage text={formik.errors.email} />}

          <FormInput id="password" type="password" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
          {isCheckError && formik.errors.password && <ErrorMessage text={formik.errors.password} />}

          <FormInput type="text" id="phone_number" name="phone_number" placeholder="Phone Number" value={formik.values.phone_number} onChange={formik.handleChange} />
          {isCheckError && formik.errors.phone_number && <ErrorMessage text={formik.errors.phone_number} />}

          {isError && errorMessage && <ErrorMessage text={errorMessage} />}
        </div>

        <SubmitButtonCommon isLoading={isLoading} width="w-full" height="h-[53px]" text="Create Account" style={ButtonStyles.Dark} onClick={() => handleSubmit(formik.handleSubmit)} />
      </form>
    )
  }, [formik, isError, errorMessage])

  return (
    <MainWrapper className={`bg-login-page text-white ${isConfirm ? 'space-y-5 py-10' : 'space-y-10 py-5'}`}>
      {isConfirm ? (
        <>
          <TitlePage title="Welcome to the MyAdesso Journey!" subTitle="Please create an account" />
          {formRegister}
        </>
      ) : (
        <>
          <p className="text-ma-lg font-semibold">
            Welcome to MyAdesso. This is the first step in your journey. We're going to ask you a series of questions related to your lifestyle, heart health and risk factors. This process will take
            about 10 minutes. The purpose of this exercise is to help you gather important information in oneplace. Answer each question as honestly and realistically as you can. There's no need to
            feelinsecure or critical as you answer. You are where you are right now and we're in this togetherto make progress towards a better future for ourselves and those we love.
            <br />
            <br />
            Ready? Here we go..."
          </p>
          <ButtonCommon width="w-[147px]" height="h-[53px]" text="Confirm" onClick={handleConfim} />
        </>
      )}
    </MainWrapper>
  )
}
