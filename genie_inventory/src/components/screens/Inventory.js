import React from 'react'
import Inventory_Tab from '../called_components/screen_called/tabs/inventory_tab'
import viewprod from '../pics/viewp.png'
import addprod from '../pics/addp.png'
import '../styles/inventory.css'
import { useNavigate } from 'react-router-dom'

const Inventory = () => {
  const navigate = useNavigate()

  return (
    <div className='cont'>
      <Inventory_Tab/>
      <div className='inventorybox'>
        <text className='inventorytxt'>Inventory</text>
        <button className='viewbtn' onClick={() => navigate('/inventory/view_products')}>
          <img src={viewprod} className='imgview'/>
        </button>
        <text className='viewtxt'>View Products</text>

        <button className='addbtn' onClick={() => navigate('/inventory/add_products')}>
          <img src={addprod} className='imageadd'/>
        </button>
        <text className='addtxt'>Add Products</text>
      </div>
    </div>
  )
}

export default Inventory