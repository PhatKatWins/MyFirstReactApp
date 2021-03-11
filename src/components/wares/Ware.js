import Button from "../Button"
import { useState } from 'react'

const Ware = ({ ware, deleteWare, updateWare }) => {
    const [showToolbar, setShowToolbar] = useState(false)

    return (
        <div className="ware-container">
            <div className="ware-body default-background-color-1 default-border-2"
                draggable="true" onDoubleClick={() => setShowToolbar(!showToolbar)}>
                <h1 className="default-text-color-2">{ware.name}</h1>
                <h3 className="default-text-color-2">Quantity: {ware.quantity}</h3>
            </div>
            {showToolbar && <div className="ware-toolbar">
                <h4 className="default-text-color-1">New Quantity: </h4>
                <input id="quantity" type="number" defaultValue={ware.quantity} min="0" />
                <Button type="button" color="green" text="✓" onClick={() =>
                    updateWare(ware.id, parseInt(document.getElementById("quantity").value, 10))} />
                <Button type="button" color="red" text="X" onClick={() => deleteWare(ware.id)} />
            </div>}
        </div>
    )
}

export default Ware