import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from './../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOut } from '../../redux/user/user.actions';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden, signOut }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionDiv onClick={() => signOut}>
                    SIGN OUT
                </OptionDiv>
                :
                <OptionLink to="/auth">
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
