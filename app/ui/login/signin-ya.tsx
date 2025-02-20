import { signIn, signOut } from '@/auth';

export default function SignInYa() {
  return (
    <div>
      {' '}
      <form
        action={async () => {
          'use server';
          await signIn('yandex');
        }}
      >
        <button type="submit">Signin with Yandex</button>
      </form>{' '}
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
