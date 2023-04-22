import React from 'react'
import '../styles/dashboard.css'
import Dashboard_tab from '../called_components/screen_called/tabs/dashboard_tab'

const Dashboard = () => {
  return (
    <div className='cont'>
      <Dashboard_tab/>
      <div className='dashboardbox'>
        <text className='dashboardtxt'>
          Dashboard
        </text>
        
      </div>
    </div>
  )
}

export default Dashboard