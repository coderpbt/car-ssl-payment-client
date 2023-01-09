import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const transtionId = query.get("transID")

  const [order, setOrder] = useState({})
console.log(order);
  useEffect(() =>{
    fetch(`http://localhost:5000/orders/by-trsnstion-id/${transtionId}`)
    .then(res => res.json())
    .then(data => setOrder(data))
  },[transtionId])

  if (!order?._id) {
    return (
      <div>
        <h2>Order not found</h2>
      </div>
    )
  }

  return (
    <div>
             <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Service Name</th>
                            <th>Transition ID</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr>
                        <td>{order.serviceName}</td>
                        <td>{order.price}</td>
                        <td>{order.address}</td>
                        <td>{transtionId}</td>
                        <td>{order.pasid}</td>
                       </tr>
                    </tbody>
                </table>
            </div>

            <button onClick={()=> window.print()}>Print</button>
    </div>
  );
};

export default PaymentSuccess;