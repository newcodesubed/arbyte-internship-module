import { CONTACT } from "../constants"
function Contact() {
  return (
    <div className='pb-20 border-t border-stone-900'>
        <h2 className="my-10 text-center text-4xl">
            Get in Touch
        </h2>
        <div className="text-center tracking-tighter"> 
            <p className="my-4">
                {CONTACT.address}
            </p>
            <p chlassName="my-4">
                {CONTACT.phoneNo}
            </p>
            <a href="#" className="border-b  border-stone-400 text-stone-400 hover:border-stone-300 hover:text-stone-300"> 
                {CONTACT.email}
            </a>
        </div>
    </div>
  )
}

export default Contact