import {NextRequest,NextResponse} from "next/server";
export function middleware(req:NextRequest){
    const token=sessionStorage.getItem("jwt");
    if(!token){
        return NextResponse.redirect(new URL("/",req.url));
    }
    return NextResponse.next();
}
    export const config={
        matcher:["/dashboard","/profile"]
    };
