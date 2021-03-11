const StartMenu = ({toggleWares, toggleOrders}) => {
    return (
        <div className="start-menu">
            <p onClick={toggleWares}>Wares</p>
            <p onClick={toggleOrders}>Orders</p>
            <p>Exit</p>
        </div>
    )
}

export default StartMenu