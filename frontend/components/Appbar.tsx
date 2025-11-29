"use client"
import { useRouter } from "next/navigation"
import { LinkButton } from "./LinkButton"
import { PrimaryButton } from "./PrimaryButton"

export const AppBar = ()=>{
    const router = useRouter()
    return <div className="flex border-b justify-between p-4">
        <div className="flex flex-col justify-center">
            Zapier
        </div>
        <div className="flex">
            <div className="pr-4">
            <LinkButton onClick={()=>{}}>Contact Sales</LinkButton></div>
            <div className="pr-4">
            <LinkButton onClick={()=>{
                router.push("/Login")
            }}>Login</LinkButton></div>
            <div className="pr-4">
            <PrimaryButton onClick={()=>{
                router.push("/Signup")
            }}>Signup</PrimaryButton>
            </div>
        </div>
    </div>
}