import classes from "./UserRegistr.module.css";
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios'
import Url from "../url/Url.js";

export default function UserRegistr(props) {
  const [userStatus, setUserStatus] = useState('');

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({ mode: 'onSubmit' })

  const onSubmit = (data) => {
    debugger
    if (isValid === true) {
      axios.post(Url + "/registr", data).then((response) => {
        /*if (response.data.status !== 200) {
          setUserStatus('У нас не зарегистрирован пользователь с таким адресом электронной почты')
          return
        }*/
      });
    }
    reset()
  }

  const handleSubmit1 = () => {
    setUserStatus('')
  }
  return (
    <>
      <div className={classes.content}>
        <div className={classes.conteinerleft}>
          <img className={classes.conteinerleftimg} src="/pngwing.svg" alt="" />
        </div>
        <div className={classes.conteinerwrite}>
          <div className={classes.conteinerwriteposi}>
            <div className={classes.conteinertitle}>Регистрация</div>
            <div className={classes.conteinerwritedickr}>
              <p className={classes.conteinerheder}>Продолжая, вы соглашаетесь с нашим <span className={classes.conteinerwritedickrspun}>Пользовательским соглашением,</span> <span className={classes.conteinerwritedickrspun}>Политикой конфиденциальности</span> и использованием файлов <span className={classes.conteinerwritedickrspun}>COOKIE</span></p>
            </div>
            <form className={classes.formUserAuth} onSubmit={handleSubmit(onSubmit)}>
              {userStatus !== '' ?
                <p className={classes.notUser}>{userStatus}</p> :
                <></>
              }
              <input {...register('gmail', {
                required: 'Поле не может быть пустым',
                minLength: {
                  value: 5,
                  message: 'Мало символов'
                },
                pattern: {
                  value: /[A-Za-zA-Za-z]+[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/,
                  message: 'Mail не корктный'
                }
              })} className={classes.inputMail} type="text" placeholder='Адрес электронной почты' onChange={handleSubmit1} />
              <input {...register('name', {
                required: 'Поле не может быть пустым',
                minLength: {
                  value: 2,
                  message: 'Мало символов'
                }
              })} className={classes.inputMail} type="text" placeholder='Имя' onChange={handleSubmit1} />
              <input {...register('surname', {
                required: 'Поле не может быть пустым',
                minLength: {
                  value: 2,
                  message: 'Мало символов'
                }
              })} className={classes.inputMail} type="text" placeholder='Фамилия' onChange={handleSubmit1} />
              <div>{errors?.gmail && <p style={{ color: 'red' }}>{errors?.gmail.message || 'Error!'}</p>}</div>
              <input className={classes.buttonSubmit} type="submit" value="Отправить" />
            </form>
            <div className={classes.conteinerheder}>Вы уже регистрировались?<span className={classes.registrspun}><div className={classes.registrdiv} onClick={props.toRegistr}>ВОЙТИ</div></span></div>
            <Link className={classes.supportUser} to="#">Поддержка пользователей онлайн</Link>
          </div>
          <button className={classes.buttonCloise} onClick={props.auth}><img src="/Group 86.svg" alt="" /></button>
        </div>
      </div>
    </>
  );
}
