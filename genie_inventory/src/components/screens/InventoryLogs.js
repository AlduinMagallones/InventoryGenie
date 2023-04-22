// import React, { useState, useEffect } from 'react';
// import InventoryLogs_Tab from '../called_components/screen_called/tabs/inventorylogs_tab';
// import '../styles/inventorylogs.css';

// const InventoryLogs = () => {
//   const [localStorageData, setLocalStorageData] = useState([]);

//   useEffect(() => {
//     const localStorageItems = localStorage.getItem('products_list');
//     if (localStorageItems) {
//       setLocalStorageData(JSON.parse(localStorageItems));
//     }
//   }, []);

//   return (
//     <div className='cont'>
//       <InventoryLogs_Tab/>
//       <div className='inventorylogbox'>
//         <text className='inventorylogtxt'>Inventory Logs</text>
//         {localStorageData.map((data) => (

//           <tex className='productssss'>{data.product_id}</tex>






//         //  <p className='productssss'>{data.product_id},{data.product_name},{data.product_category},{data.expiry},{data.quantity}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InventoryLogs;
import React, { useState, useEffect } from 'react';
import InventoryLogs_Tab from '../called_components/screen_called/tabs/inventorylogs_tab';
import '../styles/inventorylogs.css';

const InventoryLogs = () => {
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    const localStorageItems = localStorage.getItem('products_list');
    if (localStorageItems) {
      setLocalStorageData(JSON.parse(localStorageItems));
    }
  }, []);

  return (
    <div className='cont'>
      <InventoryLogs_Tab/>
      <div className='inventorylogbox'>
        <h2 className='inventorylogtxt'>Inventory Logs</h2>
        <table className='ilhead'>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Expiry Date</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {localStorageData.map((data) => (
              <tr key={data.product_id}>
                <td>{data.product_id}</td>
                <td>{data.product_name}</td>
                <td>{data.product_category}</td>
                <td>{data.product_expiry}</td>
                <td>{data.product_quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryLogs;


