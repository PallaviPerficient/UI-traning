import Link from "next/link";

export default function DyanmicRouting(){
    return (
       <>
            <div>Dyanmic Routing</div>
            <ul>
                <li><Link  href= '/dynamicRouting/pallavi'>Pallavi</Link></li>
                <li><Link  href= '/dynamicRouting/2'>Sam</Link></li>
                <li><Link  href= '/dynamicRouting/3'>tam</Link></li>
            </ul>
       </>
    )
}
