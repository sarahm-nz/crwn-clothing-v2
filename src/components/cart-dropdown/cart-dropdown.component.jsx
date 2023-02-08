import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

export default function CartDropdown() {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'> 
              { cartItems.map((item) => ( <CartItem key={item.id} cartItem={item} />
              ))}
            </div>               
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}