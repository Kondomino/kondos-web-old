'use server'
 
import { cookies } from 'next/headers'
import { getCurrentUser } from '../data/users/users.actions';
 
export async function handleLogin2(token: string) {
  'use server'
  
  const userData = await getCurrentUser(token);

  //const encryptedSessionData = encrypt(userData) // Encrypt your session data
  // cookies().set('ksession', userData, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === 'production',
  //   maxAge: 60 * 60 * 24 * 7, // One week
  //   path: '/',
  // })
  // Redirect or handle the response after setting the cookie
}

// user is  {
//   id: 1,
//   firstName: 'Hack',
//   lastName: 'Teech',
//   picture: 'https://lh3.googleusercontent.com/a/ACg8ocLNIZOG0BPYLVU9hnkHbWidWX0yjt4A6WjT-EsyLczXLFiTUQ=s96-c',
//   password: null,
//   email: 'hackteech@gmail.com',
//   gender: null,
//   age: null,
//   active: true,
//   createdAt: '2024-07-24T20:15:50.362Z',
//   updatedAt: '2024-07-24T20:15:50.362Z'
// }