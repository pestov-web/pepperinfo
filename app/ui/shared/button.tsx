import { PropsWithChildren } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary';

function Button(
  props: PropsWithChildren<{
    variant: Variant;
  }>
) {
  const { variant, children } = props;
  return (
    <button
      className={clsx(styles.button, {
        [styles.button_primary]: variant === 'primary',
        [styles.button_secondary]: variant === 'secondary',
      })}
    >
      {children}
    </button>
  );
}

export default Button;
