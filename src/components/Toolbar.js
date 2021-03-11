import Button from './Button'
import { useState } from 'react'

const Toolbar = ({buttonText, buttonColor, noToggle, handleSearch, 
        handleButtonClick, handleBack}) => {
    const [buttonToggled, setButtonToggled] = useState(false)
    const [canBeToggled, setCanBeToggled] = useState(noToggle)

    const onClick = () => {
        !noToggle && setButtonToggled(!buttonToggled)
        !buttonToggled ? handleButtonClick() : handleBack()
    }

    return (
        <div className="toolbar-container default-background-color-1">
            {(!buttonToggled || noToggle) && <input className="toolbar-searchbar" 
                type="text" placeholder="search"
                onChange={(e) => handleSearch(e.target.value)}/>}
                <div className="toolbar-btn-group">
                    {(!buttonToggled && noToggle) ? <Button text={buttonText} color={buttonColor} onClick={onClick}/> 
                        : <Button text="Back" color="red" onClick={onClick}/>}
                </div>
        </div>
    )
}

export default Toolbar