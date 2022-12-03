import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { LoginPage } from './pages/Login'
import { LogoutPage } from './pages/Logout'
import { RegisterPage } from './pages/Register'

import { Quizzes } from './pages/HeartScore/Quizzes'
import { Subscription } from './pages/HeartScore/Subscription'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { HeartScore } from './pages/HeartScore/HeartScore'
import { Result } from './pages/HeartScore/Result'
import { Welcome } from './pages/Dashboard/Welcome'
import { Onboard } from './pages/Onboard/Onboard'
import { Explanation } from './pages/Dashboard/Explanation'
import { Introduction } from './pages/Dashboard/Introduction'
import { HeartJournal } from './pages/HeartJournal/HeartJournal'
import { HeartJournalAction } from './pages/HeartJournal/HeartJournalAction'
import { GoDeeperFinish } from './pages/Deeper/GoDeeperFinish'
import { HeartChart } from './pages/HeartChart/HeartChart'

import { LayoutWrapper } from './components/Layouts/'
import { FullLayout } from './components/Layouts/FullLayout'
import { NoFooter } from './components/Layouts/NoFooter'

import { MyAdessoJourney } from './pages/MyAdessoJourney'
import HeartJournalArchive from './pages/HeartJournal/HeartJournalArchive'

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL
axios.defaults.withCredentials = true
axios.defaults.headers.common['Content-Type'] = 'application/json'

const token = localStorage.getItem('token')

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      return Promise.resolve()
    }

    return Promise.reject(error)
  }
)

// const token = localStorage.getItem('token')
// if (token != null) {
//   axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<NoFooter />}>
            <Route path="/heart-score" element={<HeartScore />}>
              <Route path="subscription" element={<Subscription />} />
              <Route path="quizzes" element={<Quizzes />} />
              <Route path="result" element={<Result />} />
            </Route>
            <Route path="onboard" element={<Onboard />} />
            <Route path="welcome" element={<Welcome />} />
          </Route>

          <Route path="/" element={<FullLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="heart-journal" element={<HeartJournal />} />
            <Route path="heart-journal/archive/:date" element={<HeartJournalArchive />} />
            <Route path="heart-journal/action" element={<HeartJournalAction />} />
            <Route path="heart-chart" element={<HeartChart />} />
            <Route path="go-deeper/finish" element={<GoDeeperFinish />} />
            <Route path="my-adesso-journey" element={<MyAdessoJourney />} />
          </Route>

          <Route path="/" element={<LayoutWrapper noHeader />}>
            <Route path="explanation" element={<Explanation />} />
          </Route>

          <Route path="/" element={<LayoutWrapper noFooter />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="logout" element={<LogoutPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
