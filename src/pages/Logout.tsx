import { useMemo, useEffect } from 'react'

import { useLogoutPage } from '../hooks/pages/logout'

export const LogoutPage = () => {
  const { pageDataResult, getPageData, logout } = useLogoutPage()

  useEffect(() => {
    getPageData()
  }, [])

  useEffect(() => {
    if (!pageDataResult?.data || !pageDataResult.data.isLogin) {
      return
    }
    logout()
  }, [pageDataResult?.data])

  const logoutContent = useMemo(() => {
    if (!pageDataResult?.data || pageDataResult.data.isLogin) {
      return <>...check logout</>
    }
    console.info('logoutContent', pageDataResult?.data)
    return <>Logout success!</>
  }, [pageDataResult?.data])

  return <div className="flex h-full w-full items-center justify-center">{logoutContent}</div>
}
