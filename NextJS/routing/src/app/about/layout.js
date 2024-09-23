'use client'
import { usePathname } from "next/navigation"

export default function Layout({children}){
    const pathname = usePathname();
    return(
        <div>Common Layout for About page{
            pathname =='/about/aboutstudent' ?
                <h1>Conditional Layout Working </h1>
            : 
                null
            }
        {children}</div>

    )
}