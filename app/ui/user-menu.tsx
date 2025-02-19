'use client';
import Button from '@/app/ui/shared/button';
import styles from './user-menu.module.css';
function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <Button variant="primary">Войти</Button>
      <Button variant="secondary">Регистрация</Button>
    </div>
  );
}

export default UserMenu;
