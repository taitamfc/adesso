import { useCallback, useState } from 'react'

import { AdessoError } from '../../lib/error'

import { AdessoResult } from '../../models/adesso'

import { useAuth } from '../use-auth'

type Result = {
  isLogin: boolean
}

export function useLogoutPage() {
  const [pageDataResult, setPageDataResult] = useState<AdessoResult<Result>>()
  const auth = useAuth()

  const resetSiteData = useCallback(() => {
    console.info('resetSiteDate')
  }, [])

  const getPageData = useCallback(async () => {
    setPageDataResult({
      isLoading: true,
      data: undefined,
      error: undefined,
    })

    try {
      const isLogin = await auth.loginCheck()
      setPageDataResult({
        isLoading: false,
        data: { isLogin },
        error: undefined,
      })
    } catch (error) {
      setPageDataResult({
        isLoading: false,
        data: undefined,
        error: new AdessoError('Get page data: Failed!'),
      })
    }
  }, [])

  const logout = useCallback(async () => {
    await auth.logout()
    resetSiteData()
    getPageData()
    alert('Logout Success!')
  }, [])

  return { pageDataResult, getPageData, logout }
}
