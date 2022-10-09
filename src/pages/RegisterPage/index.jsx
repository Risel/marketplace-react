import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {registerUser} from "../../store/user/userActions";
import styles from './RegisterPage.module.scss'
import {useNavigate} from "react-router-dom";
import Error from '../../components/Error';

const RegisterPage = () => {
  const {isLoading, error, accessToken, success} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {register, handleSubmit,reset} = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate('/login')
    if (accessToken){
      navigate('/profile', {replace: true})
      alert("You already logged in")
    }
  }, [navigate, accessToken, success])

  const submitRegistration = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!')
      reset()
      return
    }
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
  }
  return (
    <form className={styles.root} onSubmit={handleSubmit(submitRegistration)}>
      {error && <Error>{error}</Error>}
      <div className={styles.group}>
        <label className={styles.label} htmlFor='email'>Email</label>
        <input
          type='email'
          className={styles.input}
          placeholder="Enter email..."
          {...register('email')}
          required
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor='password'>Password</label>
        <input
          type='password'
          className={styles.input}
          placeholder="Enter password..."
          {...register('password')}
          required
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor='email'>Confirm Password</label>
        <input
          type='password'
          className={styles.input}
          placeholder="Confirm password..."
          {...register('confirmPassword')}
          required
        />
      </div>
      <button type='submit' className={styles.button} disabled={isLoading}>
        Sign in
      </button>
    </form>
  );
};

export default RegisterPage;
