import SignInYa from '../ui/login/signin-ya';
import styles from './page.module.css';
function LoginPage() {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <SignInYa />
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
