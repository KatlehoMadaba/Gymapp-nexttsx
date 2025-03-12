"use client"
import { Button} from "antd";
import {useRouter} from "next/navigation";

export default function AdminLandinPage() {
const router =useRouter();

 const handleRedirecRegister=()=>{
    router.push("/register")
  }
   const handleRedirectClient=()=>{
    router.push("/clientlogin")
  }

  return (
 
    <div>
           <h1>A warm welcome to our favourite client</h1>
           <Button onClick={handleRedirecRegister}>Register Client </Button>
           <Button onClick={handleRedirectClient}>Client Login </Button>
    </div>
  )
}
