import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react";
import './navigation.styles.scss'

import CrwnLogo from '../../assets/crown.svg?react'

const Navigation = () => {
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
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;