import Button from './Button'

const Navbar = ({toggleStartMenu}) => {
    return (
        <div className='navbar'>
            <Button type='button-start' onClick={toggleStartMenu}/>
            <p>SomeWare</p>
        </div>
    )
}

export default Navbar