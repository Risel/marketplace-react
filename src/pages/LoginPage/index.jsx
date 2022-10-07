import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import styles from './LoginPage.module.scss'
import {loginUser} from "../../store/user/userActions";

const LoginPage = () => {
  const {isLoading, error, accessToken} = useSelector((state) => state.user)
  const {register, handleSubmit, formState:{errors,isValid}} = useForm()

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(accessToken){
      navigate('/profile')
    }
  }, [accessToken,navigate]);


  const submitForm = (data) => {
    dispatch(loginUser(data))
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        {error && <h2>{error}</h2>}
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
    </div>
  );
};

export default LoginPage;
