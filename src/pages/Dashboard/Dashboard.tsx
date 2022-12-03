import { useEffect, useMemo, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { DashboardContent } from '../../components/Dashboard/'

import { useDashboard } from '../../hooks/pages/dashboard'

export const Dashboard = () => {
  const { pageDataResult, getPageData } = useDashboard()
  const [score, setScore] = useState<number>(60)
  const doneIntroduction = localStorage.getItem('doneIntroduction') ?? ''

  // useEffect(() => {
  //   getPageData()
  // }, [])

  if (!doneIntroduction || !JSON.parse(doneIntroduction)) {
    return <Navigate to="/introduction" />
  }

  const dashboard = useMemo(() => {
    // const { myNow } = pageDataResult?.data
    return <DashboardContent myNowData="" score={score} /> || undefined
  }, [pageDataResult?.data])

  return <>{dashboard}</>
}
