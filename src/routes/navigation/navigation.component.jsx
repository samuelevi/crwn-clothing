import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component.jsx'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context.jsx';

import {signOutUser} from '../../utils/firebase/firebase.utils..js'

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          
          {currentUser ? (
             <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;