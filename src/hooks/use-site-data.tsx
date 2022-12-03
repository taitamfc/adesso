import { useCallback } from 'react'
import { AdessoError } from '../lib/error'
import { postLogout } from '../lib/request/post-logout'
import { getCsrfCookie } from '../lib/request/get-csrf-cookie'

export function useAuth() {
  const loginCheck = useCallback(async (): Promise<void> => {
    try {
      await getCsrfCookie()
    } catch (error) {
      throw new AdessoError('Error Login Check')
    }
  }, [])

  const logout = useCallback(async (): Promise<void> => {
    try {
      await postLogout()
    } catch (error) {
      throw new AdessoError('Error Logout')
    }
  }, [])

  return {
    loginCheck,
    logout,
  }
}
