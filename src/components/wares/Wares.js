import Ware from './Ware'
import Button from '../Button'
import AddWare from './AddWare'
import { useState, useEffect } from 'react'

const Wares = ({ wares, addWare, deleteWare, updateWare }) => {
    const [shownWares, setShownWares] = useState(wares)
    const [showAddWare, setShowAddWare] = useState(false)
    const [showWaresList, setShowWaresList] = useState(true)

    useEffect(() => {
        setShownWares(wares)
    }, [wares])

    //Search Wares List
    const searchWares = (text) => {
        setShownWares(wares.filter((ware) =>
            ware.name.toLowerCase().trim().includes(text.toLowerCase().trim())))
    }

    //Show Add Ware Form
    const toggleAddWare = () => {
        setShowWaresList(!showWaresList)
        setShowAddWare(!showAddWare)
    }

    //Submit New Ware Form
    const handleSubmit = (name, quantity) => {
        addWare(name, quantity)
        toggleAddWare()
    }

    return (
        <div className="wares-container">
            <div className="wares-toolbar">
                {showWaresList && <input type="text" placeholder="Find Ware"
                    onChange={(e) => searchWares(e.target.value)}
                />}
                <div className="wares-toolbar-btn-gourp">
                    <Button type="button" text="New" toggle="true" onClick={toggleAddWare} />
                </div>
            </div>
            <hr />
            {showWaresList && <div className="wares-list">
                {shownWares.map((ware) => (
                    <Ware
                        key={ware.id} 
                        ware={ware}
                        deleteWare={deleteWare}
                        updateWare={updateWare}
                    />
                ))}
            </div>}
            {showAddWare && <AddWare handleSubmit={handleSubmit} />}
        </div>
    )
}

export default Wares