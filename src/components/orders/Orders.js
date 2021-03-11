import Button from '../Button'
import Order from './Order'
import AddOrder from './AddOrder'
import OrderDetails from './OrderDetails'
import Toolbar from '../Toolbar'
import { useState, useEffect } from 'react'

const Orders = ({ orders, wares, addOrder, updateOrder }) => {
    const [shownOrders, setShownOrders] = useState(orders)
    const [selectedOrder, setSelectedOrder] = useState(orders[0])
    const [showOrderList, setShowOrderList] = useState(true)
    const [showAddOrder, setShowAddOrder] = useState(false)
    const [showOrderDetails, setShowOrderDetails] = useState(false)

    useEffect(() => {
        setShownOrders(orders)
    }, [orders])


    //Search In Orders
    const searchOrders = (text) => {
        setShownOrders(orders.filter((order) =>
            order.recipient.toLowerCase().trim()
                .includes(text.toLowerCase().trim())
        ))
    }

    const toggleOrdersList = () => {
        setShowOrderList(!showOrderList)
        showAddOrder && setShowAddOrder(!showAddOrder)
        showOrderDetails && setShowOrderDetails(!showOrderDetails)
    }

    //Toggle Add Order
    const toggleAddOrder = () => {
        setShowAddOrder(!showAddOrder)
        showOrderList && setShowOrderList(!showOrderList)
        showOrderDetails && setShowOrderDetails(!showOrderDetails)
    }

    const toggleOrderDetails = (order) => {
        setSelectedOrder(order)
        setShowOrderDetails(!showOrderDetails)
        showAddOrder && setShowAddOrder(!showAddOrder)
        showOrderList && setShowOrderList(!showOrderList)
    }

    return (
        <div className="orders-container">
            {showOrderList && <Toolbar buttonText="Add Order"
                handleSearch={searchOrders}
                handleButtonClick={toggleAddOrder}
                handleBack={toggleOrdersList} />}
            {showOrderList && <div className="orders-list">
                {shownOrders.map((order) => (
                    <Order key={order.id} order={order}
                        toggleOrderDetails={toggleOrderDetails} />
                ))}
            </div>}
            {showAddOrder && <AddOrder addOrder={addOrder}
                toggleAddOrder={toggleAddOrder} />}
            {showOrderDetails && <OrderDetails order={selectedOrder}
                wares={wares} updateOrder={updateOrder}
                handleBackButton={toggleOrdersList} />}
        </div>
    )
}

export default Orders