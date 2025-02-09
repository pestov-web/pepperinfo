'use client';
import Button from './shared/Button';
import styles from './UserMenu.module.css';
function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <Button variant="primary">Войти</Button>
      <Button variant="secondary">Регистрация</Button>
    </div>
  );
}

export default UserMenu;
