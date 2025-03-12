"use client"
import { Button} from "antd";
import {useRouter} from "next/navigation";

export default function AdminLandinPage() {
    const router =useRouter();
     const handleRedirectLogin=()=>{
    router.push("/login")
  }
  const handleRedirect=()=>{
    router.push("/signup")
  }

  return (
    <div>
      <Button onClick={handleRedirect}>Sign Up Trainer </Button>
      <Button onClick={handleRedirectLogin}>Login </Button>
    </div>
  )
}
