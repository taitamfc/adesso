import { useCallback, useState } from 'react'
import { AdessoResult } from '../../models/adesso'

import { getMyNow } from '../../lib/request/get-mynow'

type ResultDashboard = {
  myNow: string
}

export function useDashboard() {
  const [pageDataResult, setPageDataResult] = useState<AdessoResult<ResultDashboard>>()

  const getPageData = useCallback(async () => {
    setPageDataResult({
      isLoading: true,
      data: undefined,
      error: undefined,
    })

    try {
      console.info('useDashboard')
      const dataReturn = await getMyNow()
      console.info(dataReturn)
    } catch (error) {
      console.info(error)
    }
  }, [])

  return {
    pageDataResult,
    getPageData,
  }
}
