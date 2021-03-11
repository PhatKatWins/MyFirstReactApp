import Ware from '../wares/Ware'
import Toolbar from '../Toolbar'
import Button from '../Button'
import { useState, useEffect } from 'react'
import Orders from './Orders'

const OrderDetails = ({ order, wares, updateOrder, handleBackButton }) => {
    const [shownWaresInOrder, setShownWaresInOrder] = useState(order.wares)
    const [shownWaresToAdd, setShownWaresToAdd] = useState(wares)
    const [toggleAddWaresList, setToggleAddWaresList] = useState(false)

    useEffect(() => {
        setShownWaresInOrder(order.wares)
        setShownWaresToAdd(filterWaresToAdd)
        
    }, [order.wares, wares])

    //Removes wares from the add list that are already added to the order
    const filterWaresToAdd = () => {
            return wares.filter((ware) =>
            !order.wares.find((orderWare) => orderWare.id === ware.id))
    }
    
    const searchWaresInOrder = (text) => {
        setShownWaresInOrder(order.wares.filter((ware) =>
            ware.name.toLowerCase().trim().includes(text.toLowerCase().trim())))
    }

    const searchWaresToAdd = (text) => {
        setShownWaresToAdd(filterWaresToAdd().filter((ware) =>
            ware.name.toLowerCase().trim().includes(text.toLowerCase().trim())))
        
    }

    const toggleAddWare = () => {
        setToggleAddWaresList(!toggleAddWaresList)
    }

    //Drag and drop functionality for add wares menu
    const allowDrop = (e) => {
        e.preventDefault()
    }

    const drag = (e, id) => {
       e.dataTransfer.setData("id", id)
    }

    const drop = (e) => {
        e.preventDefault()
        let wareId = parseInt(e.dataTransfer.getData("id"))
        updateOrder(order.id, wareId)
        setShownWaresToAdd(filterWaresToAdd)
    }


    return (
        <div className="order-details-container">
            {toggleAddWaresList && <div className="order-details-add-order-container
                default-background-color-2 default-border-2">
                <Toolbar buttonText="Back" buttonColor="red"
                    noToggle="true"
                    handleButtonClick={toggleAddWare}
                    handleSearch={searchWaresToAdd} />
                <div className="order-details-add-order-list">
                    {shownWaresToAdd.map((ware) => (
                        <div draggable="true" key={ware.id}
                            onDragStart={(e) => drag(e, ware.id)}>
                            <Ware ware={ware} />
                        </div>
                    ))}
                </div>
            </div>}
            <div className="order-details-header default-background-color-1">
                <div className="order-details-header-left default-text-color-2">
                    <h2>Recipient: </h2>
                    <h3>Order due: </h3>
                </div>
                <div className="order-details-header-right">
                    <h1>{order.recipient}</h1>
                    <p>{order.date}</p>
                </div>
            </div>
            <div className="default-border-1">
                <div className="order-details-description-bar 
                    default-background-color-1">
                    <h2 className="order-details-description-title 
                        default-text-color-2">Details: </h2>
                    <Button text="Back" color="red" onClick={handleBackButton} />
                </div>
                <div className="order-details-description">
                    <h3 className="default-text-color-1">This is a dummy text so i'm just gonna
                    talk about cats and how awesome they are
                    mostly because they are assholes and I get
                    along just great with assholes.</h3>
                </div>
            </div>
            <div className="order-details-wares-container">
                <Toolbar buttonText="Add Ware"
                    noToggle="true"
                    handleButtonClick={toggleAddWare}
                    handleSearch={searchWaresInOrder} />
                <div className="order-details-wares-list"
                    onDragOver={allowDrop} onDrop={drop}>
                    {shownWaresInOrder.map((ware) =>
                        <Ware key={ware.id} ware={ware} />)}
                </div>
            </div>
        </div>
    )
}

export default OrderDetails