import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutStart } from "../../store/user/user.action";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.styles.scss';
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from "../../store/cart/cart.selector";

export default function Navigation() {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>          
            <div className='links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>

                {currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>
                    {' '}
                    SIGN OUT{' '}
                    </span>
                ) : (
                    <Link className='nav-link' to='/auth'>
                    SIGN IN
                    </Link>
                )}
                <CartIcon />                
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    )
  }

  