import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import styles from './LoginPage.module.scss'
import {loginUser} from "../../store/user/userActions";

const LoginPage = () => {
  const {isLoading, error} = useSelector((state) => state.user)
  const {register, handleSubmit, formState:{errors,isValid}} = useForm()

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const submitForm = (data) => {
    dispatch(loginUser(data))
  }
  const fromPage = location.state?.from?.pathname || '/';
  return (
    <>
      {fromPage}
      <form onSubmit={handleSubmit(submitForm)}>
        {error && <h1>Произошла ошибка...</h1>}
        <div className={styles.form}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            className={styles.input}
            {...register('email')}
            required
          />
        </div>
        <div className={styles.form}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className={styles.input}
            {...register('password')}
            required
          />
        </div>
        <button type='submit' className={styles.btn} disabled={isLoading}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginPage;
