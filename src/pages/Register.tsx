import { useState, useCallback, useMemo } from 'react'
import { Navigate } from 'react-router-dom'

import { RegisterContent } from '../components/Register/'

import { postRegister } from '../lib/request/post-register'
import { RegisterOptions } from '../models/register'
import { PostResult } from '../models/result-type'

export const RegisterPage = () => {
  const [postDataResult, setPostDataResult] = useState<PostResult>({ isLoading: false })

  const handlePostRegister = useCallback(
    async (params: RegisterOptions) => {
      setPostDataResult({
        isLoading: true,
        success: undefined,
        error: undefined,
        errorMessage: undefined,
      })

      const resultPost = await postRegister(params)
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

  const registerContent = useMemo(() => {
    if (postDataResult?.success) {
      return <Navigate to="/heart-score/subscription" replace={true} />
    }

    const isLoading = postDataResult?.isLoading || false
    const error = postDataResult?.error || false
    const errorMessage = postDataResult?.errorMessage || undefined

    return <RegisterContent isLoading={isLoading} isError={error} errorMessage={errorMessage} onRegister={handlePostRegister} />
  }, [postDataResult, handlePostRegister])

  return <>{registerContent}</>
}
