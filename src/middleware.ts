import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
    const path=request.nextUrl.pathname;
    const isPublicPath= path==='/'|| path==='/login'|| path==='/signup';
    const token=request.cookies.get('token');
    // console.log(isPublicPath);
   
    if(!isPublicPath && !token)
    {
        return NextResponse.redirect(new URL('/login',request.url))
    }else{
      // if(isPublicPath )
      //   {
            // console.log('redirecting to dashboard');
            return NextResponse.redirect(new URL('/', request.url))
        // }
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // '/',
    // '/login',
    // '/signup',
    // '/dashboard',
    // '/profile',   
  ]
}