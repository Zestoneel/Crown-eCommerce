import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react";
import './navigation.styles.scss'

import CrwnLogo from '../../assets/crown.svg?react'
import { UserContext } from "../../context/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    {/* <img src='crown.svg' /> */}
                    <CrwnLogo />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;