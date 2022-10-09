import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import styles from './LoginPage.module.scss'
import {loginUser} from "../../store/user/userActions";
import Error from '../../components/Error';

const LoginPage = () => {
  const {isLoading, error, accessToken} = useSelector((state) => state.user)
  const {register, handleSubmit, reset} = useForm()

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/profile')
    }
  }, [accessToken, navigate]);


  const submitForm = (data) => {
    dispatch(loginUser(data))
    reset()
  }
  return (
    <div>
      <form className={styles.root} onSubmit={handleSubmit(submitForm)}>
        {error && <Error>{error}</Error>}
        <div className={styles.group}>
          <label className={styles.label} htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='Email...'
            className={styles.input}
            {...register('email')}
            required
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Password...'
            className={styles.input}
            {...register('password')}
            required
          />
        </div>
        <button type='submit' className={styles.button} disabled={isLoading}>
          Login
        </button>
        <div className={styles.register}>
          <span>Do not have account?</span>
          <Link to='/register'>Create now</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
