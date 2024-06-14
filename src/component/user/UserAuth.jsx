import classes from "./UserAuth.module.css";
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios';
export default function UserAuth(props) {
  const [userStstus, setUserStstus] = useState('');

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onSubmit' })
  
  const onSubmit = (data) => {
    if (isValid === true) {
      axios.post("https://jihugy-7507e8053d51.herokuapp.com/auth", data).then((response) => {

        if (response.data.status !== 200) {
          setUserStstus('Пользователь не зарегестрирован')
          return
        }
        if (response.data.status === 200) {
          props.func()
        }
      });
    }
  }
  const handleSubmit1 = (e)=>{
    setUserStstus('')
  }
  return (
    <>
      <div className={classes.content}>
        <div className={classes.conteinerleft}>
          <img className={classes.conteinerleftimg} src="/pngwing.svg" alt="" />
        </div>
        <div className={classes.conteinerwrite}>
          <div className={classes.conteinerwriteposi}>
            <div className={classes.conteinertitle}>Войти</div>
            <div className={classes.conteinerwritedickr}>
              <p className={classes.conteinerheder}>Продолжая, вы соглашаетесь с нашим <span className={classes.conteinerwritedickrspun}>Пользовательским соглашением,</span> <span className={classes.conteinerwritedickrspun}>Политикой конфиденциальности</span> и использованием файлов <span className={classes.conteinerwritedickrspun}>COOKIE</span></p>
            </div>
            <form className={classes.formUserAuth} onSubmit={handleSubmit(onSubmit)}>
              <input {...register('gmail', {
                required: 'Поле не может быть пустым',
                minLength: {
                  value: 5,
                  message: 'Мало символов'
                },
                pattern: {
                  value: /[A-Za-zA-Za-z]+[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/,
                  message: 'Mail не корктный'
                },
                ero: {
                  value: 501,
                  message: 'uer'
                }
              })} className={classes.inputMail} type="text" placeholder='Адрес электронной почты' onChange={handleSubmit1} />
              <div>{errors?.gmail && <p style={{ color: 'red' }}>{errors?.gmail.message || 'Error!'}</p>}</div>
              {userStstus !== '' ?
                            <p style={{ color: 'red' }}>{userStstus}</p>:
                            <></>
                        }
              <input className={classes.buttonSubmit} type="submit" value="Отправить" />
            </form>
            <div className={classes.conteinerheder}>Вы у нас впервые? <span className={classes.registrspun}><Link href="#">ЗАРЕГИСТРИРОВАТЬСЯ</Link></span></div>
            <Link className={classes.supportUser} to="#">Поддержка пользователей онлайн</Link>
          </div>
          <button className={classes.buttonCloise} onClick={props.func}><img src="/Group 86.svg" alt="" /></button>
        </div>
      </div>
    </>
  );
}
