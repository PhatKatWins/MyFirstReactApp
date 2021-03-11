import { useState } from 'react'

const AddOrder = ({addOrder, toggleAddOrder}) => {
    const [recipient, setRecipient] = useState("")
    const [date, setDate] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        addOrder(recipient, date)

        setRecipient("")
        setDate("")

        toggleAddOrder()
    }

    return (
        <form className="add-order-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Recipient"
                onChange={(e) => setRecipient(e.target.value)} />
            <input type="text" placeholder="Date"
                onChange={(e) => setDate(e.target.value)} />
            <input type="submit" value="Confirm" />
        </form>
    )
}
export default AddOrder