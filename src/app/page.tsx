"use client"
import { Button} from "antd";

import styles from './page.module.css';
import {useRouter} from "next/navigation";


const SplashPage = () => {
  const router =useRouter();
  const handleRedirect=()=>{
    router.push("/signup")
  }
  const handleRedirectLogin=()=>{
    router.push("/login")
  }
  const handleRedirecRegister=()=>{
    router.push("/register")
  }
  const handlecreatUser=()=>{
    router.push("/createclient")
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Button onClick={handleRedirect}>Sign Up Trainer </Button>
          <Button onClick={handleRedirectLogin}>Login </Button>
          <Button onClick={handleRedirecRegister}>Register Client </Button>
          <Button onClick={handlecreatUser}>Create</Button>
      </main>
    </div>
  );
};

export default SplashPage;
