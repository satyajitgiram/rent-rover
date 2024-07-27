'use client';

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";


const PropertyPage = () => {
    const router = useRouter();
    const {id} = useParams();
    const searchParams = useSearchParams();
    const name = searchParams.get('name')
    const pathname = usePathname();


  return (
    <div>Single PropertyPage <br></br> <button onClick={()=>router.push('/')} className="bg-blue-500 p-2" >Go To Home {pathname}</button></div>
    
  )
}

export default PropertyPage