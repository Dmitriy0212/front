import classes from "./UserAuth.module.css";
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Link } from "react-router-dom";
import axios from '../url/axios.js'

export default function UserAuth(props) {
  const [userStatus, setUserStatus] = useState('');
  const [codeStatus, setCodeStatus] = useState(false);
  const [timeStatus, setTimeStatus] = useState('');
  const [mailValue, setMailValue] = useState('');
  const [codeTrue, setcodeTrue] = useState(true);

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({ mode: 'onSubmit' })

  const onSubmit = (data) => {
    if (isValid === true) {
      axios.post('/auth', data).then((response) => {
        if (response.data.status !== 200) {
          setUserStatus('У нас не зарегистрирован пользователь с таким адресом электронной почты')
          return
        }
        if (response.data.status === 200) {
          setMailValue(response.data.mail)
          setCodeStatus(true)
          reset()
          timeOut()
          setTimeStatus('Время действия кода закончено, попробуйте снова')
        }
      });
    }
  }

  const onSubmit1 = async (data) => {
    await axios.post('/tocenemail', { mailValue, data }).then((response) => {
      if (!response.data.token) {
        console.log('lkjonnn')
      }
      else if ('token' in response.data.token) {
        window.localStorage.setItem('token',response.data.token.token)
        props.func()
      }
      else {
        setcodeTrue(false)
      }
    });
  }

  const timeOut = () => {
    setTimeout(() => {
      setCodeStatus(false);
    }, "120000");
  }

  const handleSubmit1 = () => {
    setUserStatus('')
    setTimeStatus('')
  }
  return (
    <>
      <div className={classes.content}>
        <div className={classes.conteinerleft}>
          <img className={classes.conteinerleftimg} src="/pngwing.svg" alt="" />
        </div>
        <div className={classes.conteinerwrite}>
          {codeStatus === true ?
            <>
              <div className={classes.conteinerwriteposi}>
                <div className={classes.conteinertitle}>Введите код подтверждения</div>
                <div className={classes.conteinerwritedickrafter}>
                  <p className={classes.conteinerheder}>который мы отправили на ваш адрес электронной почты {mailValue}</p>
                </div>
                <form className={classes.formUserAuth} onSubmit={handleSubmit(onSubmit1)}>
                  {codeTrue === false ?
                    <p className={classes.notUser}>Неверный код</p> :
                    <></>
                  }
                  <input {...register('code', {
                    required: 'Поле не может быть пустым',
                    minLength: {
                      value: 3,
                      message: 'Мало символов'
                    }
                  })} className={classes.inputMail} type="text" placeholder='Код подтверждения' onChange={handleSubmit1} />
                  <label className={classes.conteinerwritedickrspun}>Код подтверждения действует 2 минуты</label>
                  {userStatus !== '' ?
                    <p className={classes.notUser}>{userStatus}</p> :
                    <></>
                  }
                  <div>{errors?.gmail && <p style={{ color: 'red' }}>{errors?.gmail.message || 'Error!'}</p>}</div>
                  <input className={classes.buttonSubmit} type="submit" value="Отправить" />
                </form>
              </div>
            </> :
            <>
              <div className={classes.conteinerwriteposi}>
                <div className={classes.conteinertitle}>Войти</div>
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
                  <div>{errors?.gmail && <p style={{ color: 'red' }}>{errors?.gmail.message || 'Error!'}</p>}</div>
                  {timeStatus !== '' ?
                    <p className={classes.notUser}>{timeStatus}</p> :
                    <></>
                  }
                  <input className={classes.buttonSubmit} type="submit" value="Отправить" />
                </form>
                <div className={classes.conteinerheder}>Вы у нас впервые? <span className={classes.registrspun}><Link href="#">ЗАРЕГИСТРИРОВАТЬСЯ</Link></span></div>
                <Link className={classes.supportUser} to="#">Поддержка пользователей онлайн</Link>
              </div></>}
          <button className={classes.buttonCloise} onClick={props.func}><img src="/Group 86.svg" alt="" /></button>
        </div>
      </div>
    </>
  );
}
