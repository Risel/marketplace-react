import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {registerUser} from "../../store/user/userActions";
import styles from './RegisterPage.module.scss'
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
  const {isLoading, error, accessToken, success} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();
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
      return
    }
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
  }
  return (
    <form className={styles.root} onSubmit={handleSubmit(submitRegistration)}>
      {error && <h1>{error}</h1>}
      <div className={styles.group}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className={styles.input}
          {...register('email')}
          required
        />
      </div>
      <div className={styles.group}>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className={styles.input}
          {...register('password')}
          required
        />
      </div>
      <div className={styles.group}>
        <label htmlFor='email'>Confirm Password</label>
        <input
          type='password'
          className={styles.input}
          {...register('confirmPassword')}
          required
        />
      </div>
      <button type='submit' className={styles.btn} disabled={isLoading}>
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
