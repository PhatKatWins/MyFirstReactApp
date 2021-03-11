const Order = ({ order, toggleOrderDetails }) => {
    return (
        <div className="order-container">
            <div className="order-body default-background-color-1"
                style={order.completed ? { borderRight: "20px inset green" }
                    : { borderRight: "20px inset red" }}
                onDoubleClick={() => toggleOrderDetails(order)}>
                <div>
                    <h1 className="default-text-color-2">{order.recipient}</h1>
                    <h3 className="default-text-color-2">{order.date}</h3>
                    <h4 className="default-text-color-2">{order.wares.length > 0 ?
                        "Wares: " + order.wares.length
                        : "There are no wares for this order"}</h4>
                </div>
            </div>
        </div>
    )
}

export default Order