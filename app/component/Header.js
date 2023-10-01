import styles from './component.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <>
    <div className={styles.header}>
      <Link href={'/'}>
        <img className={styles.logo} src='/img/oxopolitics-logo.jpg'/>
      </Link>
    </div>
    </>
  )
}