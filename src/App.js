import Navbar from './components/Navbar'
import StartMenu from './components/StartMenu'
import Wares from './components/wares/Wares'
import Orders from './components/orders/Orders'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showWares, setShowWares] = useState(false)
  const [showOrders, setShowOrders] = useState(false)
  const [waresList, setWares] = useState([
    {
      id: 1,
      name: 'Cats',
      quantity: 10
    },
    {
      id: 2,
      name: 'Fat Cats',
      quantity: 7
    },
    {
      id: 3,
      name: 'Really Fat Cats',
      quantity: 1
    },
    {
      id: 4,
      name: 'THICC Cats',
      quantity: 5
    },
    {
      id: 5,
      name: 'Chonky Cats',
      quantity: 17
    },
    {
      id: 6,
      name: 'Big Chungus Cats',
      quantity: 2
    },
  ])
  const [ordersList, setOrders] = useState([
    {
      id: 1,
      recipient: "Mark",
      date: "Feb 2nd",
      completed: true,
      wares: [
        {
          id: 1,
          name: 'Cats',
          quantity: 1
        },
        {
          id: 2,
          name: 'Fat Cats',
          quantity: 3
        },
        {
          id: 3,
          name: 'Really Fat Cats',
          quantity: 2
        },
      ]
    },
    {
      id: 2,
      recipient: "Willem",
      date: "Feb 3nd",
      completed: false,
      wares: []
    },
  ])

  //Display Start Menu
  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu)
  }

  //Add New Ware
  const addWare = (name, quantity) => {
    let newWareId = waresList[waresList.length - 1].id + 1
    let newWare = { id: newWareId, name: name, quantity: quantity }
    setWares([...waresList, newWare])
  }

  //Delete Ware 
  const deletWare = (id) => {
    setWares(waresList.filter((ware) => ware.id !== id))
  }

  //Update Ware
  const updateWare = (id, quantity) => {
    setWares(waresList.map((ware) =>
      ware.id === id ? { ...ware, quantity: quantity } : ware))
  }

  //Add New Order
  const addOrder = (recipient, date) => {
    let newOrderId = ordersList[ordersList.length - 1].id + 1
    let newOrder = {
      id: newOrderId, recipient: recipient,
      date: date, completed: false, wares: []
    }

    setOrders([...ordersList, newOrder])
  }

  //Update Order
  const updateOrder = (orderId, wareId) => {
    let ware = waresList.find((ware) => ware.id === wareId)
    let orderWares = ordersList.find((order) => order.id === orderId).wares
    orderWares.push(ware)
    setOrders(ordersList.map((order) => 
      order.id === orderId ? {...order, wares: orderWares} : order
    ))
    console.log(orderWares)

  }

//Display Wares Menu
const toggleWares = () => {
  setShowWares(!showWares)
  showStartMenu && setShowStartMenu(!showStartMenu)
  showOrders && setShowOrders(!showOrders)
}

//Display Orders Menu
const toggleOrders = () => {
  setShowOrders(!showOrders)
  showStartMenu && setShowStartMenu(!showStartMenu)
  showWares && setShowWares(!showWares)
}

return (
  <div className="container default-border-1">
    <Navbar toggleStartMenu={toggleStartMenu} />
    <div className="main">
      {showStartMenu && <StartMenu toggleWares={toggleWares} toggleOrders={toggleOrders} />}
      {showWares && <Wares
        wares={waresList} addWare={addWare}
        deleteWare={deletWare} updateWare={updateWare} />}
      {showOrders && <Orders orders={ordersList} 
        wares={waresList} addOrder={addOrder}
        updateOrder={updateOrder}/>}
    </div>
    <Footer />
  </div>
);
}

export default App;
