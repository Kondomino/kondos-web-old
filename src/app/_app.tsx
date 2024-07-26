import { SessionProvider } from "next-auth/react"
import { Component } from "react"
export default function App({
  Component: any,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}