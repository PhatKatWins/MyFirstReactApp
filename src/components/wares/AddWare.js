import { useState } from 'react'

const AddWare = ({handleSubmit}) => {
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        handleSubmit(name, quantity)

        setName("")
        setQuantity(0)
    }

    return (
        <form className="add-ware-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Ware Name"
                onChange={(e) => setName(e.target.value)} />
            <label>Quantity:</label>
            <input type="number" placeholder="0" min="0"
                onChange={(e) => setQuantity(e.target.value)} />
            <input type="submit" value="Confirm" />
        </form>
    )
}

export default AddWare