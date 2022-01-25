import React from 'react';
import styles from '../styles/404.module.css';
import Link from '@/src/Link';
export default function NotFoundPage() {
    return (
        <div>
          <div className={styles.error}            >
              <h1>404</h1>
              <h4>Broken Page</h4>
                <Link href='/'>Go Back to Website</Link>
          </div>
        </div>
    )
}
