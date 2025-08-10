
import profilePic from '../assets/raviKumarProfile.webp';
import {HERO_CONTENT} from '../constants';
function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <img src={profilePic} alt="subed shah" className="border border-stone-900 rounded-3xl" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start mt-10'>
                    <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Subed Shah</h2>
                    <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Full stack developer</span>
                    <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>{HERO_CONTENT}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero