import { useState, useCallback, useMemo } from 'react'
import { Navigate } from 'react-router-dom'

import { LoginContent } from '../components/Login/'

import { postLogin } from '../lib/request/post-login'
import { LoginOptions } from '../models/login'
import { PostResult } from '../models/result-type'

export const LoginPage = () => {
  const [postDataResult, setPostDataResult] = useState<PostResult>({ isLoading: false })

  const handlePostLogin = useCallback(
    async (params: LoginOptions) => {
      setPostDataResult({
        isLoading: true,
        success: undefined,
        error: undefined,
        errorMessage: undefined,
      })

      const resultPost = await postLogin(params)
      if (resultPost) {
        setPostDataResult({
          isLoading: false,
          success: resultPost.success,
          error: resultPost.error,
          errorMessage: resultPost.errorMessage,
        })
      }
    },
    [postDataResult]
  )

  const loginForm = useMemo(() => {
    if (postDataResult?.success) {
      return <Navigate to="/dashboard" replace={true} />
    }

    const isLoading = postDataResult?.isLoading || false
    const error = postDataResult?.error || false
    const errorMessage = postDataResult?.errorMessage || undefined

    return <LoginContent isLoading={isLoading} isError={error} errorMessage={errorMessage} onLogin={handlePostLogin} />
  }, [postDataResult, handlePostLogin])

  return <>{loginForm}</>
}
