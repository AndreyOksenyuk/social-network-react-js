import React from 'react';
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/Image/ava.jpg'

const Header = (props) => {

	return (
		<div className={s.header}>
			<div className={s.login}>
				{!props.isAuth
					? <NavLink to='/login' replace  className={s.login__link}>Login</NavLink>
					: <div className={s.login__nik}>
						<NavLink to='/Myprofile' replace >{props.login}</NavLink>
						<img src={props.myAvatar || avatar} alt="avatar" />
					</div>
				}
			</div>
		</div>
	)
}

export default Header;