import React from 'react';
import style from './login.module.css';

export const Login = (props) => {
	return (
		<div className={style.loginPage}>
			<form action='#' className={`card`}>
				<p className={`title ${style.title}`}>Simple Hotel Check</p>

				<p className='subTitle'>Логин</p>
				<input className={`input ${style.input}`} type='email' />

				<p className='subTitle'>Пароль</p>
				<input
					className={`input ${style.input}`}
					type='password'
					minLength={8}
				/>

				<button className={`btn`} type='submit'>
					Войти
				</button>
			</form>
		</div>
	);
};
