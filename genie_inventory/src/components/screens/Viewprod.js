import React, { useState, useEffect } from 'react'
import ViewProd_Tab from '../called_components/screen_called/tabs/viewprod_tab'
import '../styles/viewprod.css'

const ViewProd = () => {

  return (
    <div className='cont'>
      <ViewProd_Tab/>
      <div className='viewproductbox'>
        <text className='viewproducttxt'>View Products</text>
      </div>
  </div>
  )
}

export default ViewProd