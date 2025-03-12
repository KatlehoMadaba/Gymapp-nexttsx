"use client"
import { Button} from "antd";

import styles from './page.module.css';
import {useRouter} from "next/navigation";


const SplashPage = () => {
  const router =useRouter();
  // const handleRedirect=()=>{
  //   router.push("/signup")
  // }
  // const handleRedirectLogin=()=>{
  //   router.push("/login")
  // }
 
  // const handlecreatUser=()=>{
  //   router.push("/createclient")
  // }
 
  const handleTrainer=()=>{
    router.push("/adminview")
  }
  const handleClient=()=>{
    router.push("/clientview")
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button onClick={handleTrainer}>Trainer</Button>
        <Button onClick={handleClient}>Client</Button>
          {/* 
          
          <Button onClick={handlecreatUser}>Create</Button> */}
      </main>
    </div>
  );
};

export default SplashPage;
