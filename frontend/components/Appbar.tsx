"use client"
import { useRouter } from "next/navigation"
import { LinkButton } from "./Buttons/LinkButton"
import { PrimaryButton } from "./Buttons/PrimaryButton"

export const AppBar = ()=>{
    const router = useRouter()
    return <div className="flex border-b justify-between p-4">
        <div className="flex flex-col justify-center font-bold">
            Zapier
        </div>
        <div className="flex">
            <div className="pr-4">
            <LinkButton onClick={()=>{}}>Contact Sales</LinkButton></div>
            <div className="pr-4">
            <LinkButton onClick={()=>{
                router.push("/login")
            }}>Login</LinkButton></div>
            <div className="pr-4">
            <PrimaryButton onClick={()=>{
                router.push("/signup")
            }}>Signup</PrimaryButton>
            </div>
        </div>
    </div>
}