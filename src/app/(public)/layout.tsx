"use client"

import Footer from "@/components/includes/Footer"
import Header from "@/components/includes/Header"

export default function Layout({ children }: { children: React.ReactNode }) {

    return(
       <div>
         <Header />
         {children}
         <Footer />
       </div>
    )
}