import {NextRequest,NextResponse} from "next/server";

export function middleware(req:NextRequest){
    const token=req.cookies.get("token");//reading the jwt from the cookie 
    if(!token){
        return NextResponse.redirect(new URL("login",req.url));
    }
    return NextResponse.next();//access is allowed if token exists
}
    export const config={
        matcher:["/dashboard","/profile"],//protected routes
    };
