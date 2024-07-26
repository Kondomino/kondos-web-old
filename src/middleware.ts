import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

  console.log('running middleware');
  // { name: 'ksession', value: 'value99' }
  const cookie = request.cookies.get('ksession') || false;  

  // If the user is authenticated, continue as normal
  if (cookie && cookie.value == 'on') {
    return NextResponse.next()
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/author', '/author/:path*']
  //matcher: '/author'
}