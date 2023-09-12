'use client';
import { BeakerIcon,LanguageIcon } from '@heroicons/react/24/solid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useThemeContext } from './context/theme';

/** HOOKS useRouter =>next/router
 *                  => next/navigation
 * 
 */
export default function Home() {
  const router = useRouter();
  const currentRouter = usePathname();
  const searchParams = useSearchParams();
  console.log(router);
  console.log(currentRouter);
  console.log(searchParams.get('search'));

  const {color} = useThemeContext();
  return (<>
  <section className={color+' h-screen'}>
    <div className="p-8 ">
            <h1 className="text-4xl py-4 ">Page home</h1>
        </div>
        <BeakerIcon className="h-6 w-6 text-blue-500" onClick={()=>{
          router.push('/about')
        }}/>
        <LanguageIcon className="h-6 w-6 text-blue-500" onClick={()=>{
          router.back()
        }}/>
        <FontAwesomeIcon icon={faCoffee}  className="h-6 w-6 text-blue-500"
         onClick={()=>{
          router.forward();
        }} />

        
<FontAwesomeIcon icon={faCoffee}  className="h-6 w-6 text-blue-500"
         onClick={()=>{
          router.replace('/about');
        }} />

        <div className='grid grid-cols-1 lg:grid-cols-4'>
          <div className='hover:bg-red-700 hover:text-gray-400'>UNO</div>
          <div>dos</div>
          <div>tres</div>
          <div>UNO</div>
          <div>dos</div>
          <div>tres</div>
          <div>UNO</div>
          <div>dos</div>
          <div>tres</div>

        </div>
        </section>
        </>
  )
}
