import { useCallback, useMemo, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { MainWrapper, TitlePage, FormInput, SubmitButtonCommon, ButtonStyles, ErrorMessage } from '../Common'

import { LoginOptions } from '../../models/login'

const defaultLoginData: LoginOptions = {
  email: '',
  password: '',
}

type Props = {
  isLoading?: boolean
  isError?: boolean
  errorMessage?: string
  onLogin: (params: LoginOptions) => void
}

export const LoginContent = ({ isError, errorMessage, isLoading, onLogin }: Props) => {
  const [isCheckError, setIsCheckError] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: defaultLoginData,
    validationSchema: Yup.object({
      password: Yup.string().min(6, 'Field is too Short! Minimum: 6 characters').required('Field is required'),
      email: Yup.string().email('Invalid email').required('Field is required'),
    }),
    onSubmit: (values) => {
      onLogin(values)
    },
  })

  const handleSubmit = useCallback((callback: () => void) => {
    setIsCheckError(true)
    callback()
  }, [])

  const formLogin = useMemo(() => {
    return (
      <form className="w-full space-y-6 text-black" onSubmit={formik.handleSubmit}>
        <div className="space-y-4">
          <FormInput id="email" type="email" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} />
          {isCheckError && formik.errors.email && <ErrorMessage text={formik.errors.email} />}

          <FormInput id="password" type="password" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
          {isCheckError && formik.errors.password && <ErrorMessage text={formik.errors.password} />}

          {isError && errorMessage && <ErrorMessage text={errorMessage} />}
        </div>

        <SubmitButtonCommon isLoading={isLoading} width="w-full" height="h-[53px]" text="Login" style={ButtonStyles.Dark} onClick={() => handleSubmit(formik.handleSubmit)} />
      </form>
    )
  }, [formik, isError, errorMessage])

  return (
    <MainWrapper className="space-y-5 bg-login-page py-10 text-white">
      <TitlePage title="Welcome to the MyAdesso Journey!" subTitle="Please login to your account" />
      {formLogin}
    </MainWrapper>
  )
}
