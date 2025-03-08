"use client"
import { Button} from "antd";

import styles from './page.module.css';
import {useRouter} from "next/navigation";


const SplashPage = () => {
  const router =useRouter();
  const handleRedirect=()=>{
    router.push("/signup")
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Button onClick={handleRedirect}>Sign Up Trainer </Button>
      </main>
    </div>
  );
};

export default SplashPage;
