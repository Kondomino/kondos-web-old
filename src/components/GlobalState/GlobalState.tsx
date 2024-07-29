// @ts-nocheck
"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken"
import { getCurrentUser } from "../../data/users/users.actions";
import { getCookie } from "cookies-next";

export const GlobalContext = createContext(null);

export const initialUserData = {
  email: null,
  jwt: null
}

export default function GlobalState({
  children,
}: {
  children: React.ReactNode;
}) {
 
  const [isAuthUser, setIsAuthUser] = useState(null);
  const [user, setUser] = useState(null);

  console.log('[GlobalState] isAuthUser', isAuthUser);
  console.log('[GlobalState] user', user);

  const searchParams = useSearchParams()
  let token = searchParams.get('token')
  
  if (!user) {
    console.log('[GlobalState] reading from cookie ');
    // Let's try to read the user again from token
    const cookie = getCookie('koken');
  
    console.log('[GlobalState] cookie is ', cookie);
    if (cookie) {
      token = cookie;
    }
  }
  
  useEffect(() => {

    console.log('useEffect user', user);
    if (token) {
      jwt.verify(token, 'BOLOTA123', async function(err, decoded) {
        if (err) {
          /*
            err = {
              name: 'TokenExpiredError',
              message: 'jwt expired',
              expiredAt: 1408621000
            }
          */
          console.log('invalid jwt');
          setIsAuthUser(null);
          setUser(null);
        }
        else if (decoded) {
          // Let's get the full user
          const fullUser = await getCurrentUser(token);
          setIsAuthUser(true);
          setUser(fullUser);
        }
      });
    }
    // Sometimes, for a reason still unknown, the Global session is being lost
    else if (!user) {
      
    }
  }, [user, token]);

  return (
    <GlobalContext.Provider
      value={{
        isAuthUser,
        setIsAuthUser,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
