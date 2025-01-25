"use client";
import {Button} from "@repo/ui/button";
import {InputBox} from "@repo/ui/InputBox";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomid, setRoomid]=useState("");
  const router = useRouter();
  return (
    <div style={{height:'100vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'black', color:'white'}}>
     <div style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center',gap:'20px'}}>
      <InputBox type="text" placeholder="Enter Room" onChange={(e)=>{setRoomid(e.target.value)}}/>
      <Button appName={"ChatFrontend"} onClick={()=>{
        router.push(`/chatroom/${roomid}`);
        // router.push('/chatroom/123')
      }}>Join Room </Button>
    </div>
    </div>
  );
}
