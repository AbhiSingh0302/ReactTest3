import { Button } from 'react-bootstrap';
import './Header.css';

const Header = props => {
    return <header className="main-header">
        <h1 className='heading'>Medical Shop</h1>
        <Button className='cart-button' size='lg' onClick={props.onShowCart}>Cart - 0</Button>
    </header>
}

export default Header;