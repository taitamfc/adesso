import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExplanationContent } from '../../components/Explanation/'

const localStorageName = 'explained'
const pageRedirect = '/dashboard'

export const Explanation = () => {
  const navigate = useNavigate()

  const explained = localStorage.getItem(localStorageName) ?? ''

  useEffect(() => {
    if (explained && JSON.parse(explained) === true) {
      navigate(pageRedirect)
    }
  }, [])

  const handleClickNextScreen = useCallback(() => {
    localStorage.setItem(localStorageName, 'true')
    navigate(pageRedirect)
  }, [])

  return <ExplanationContent nextScreen={handleClickNextScreen} />
}
