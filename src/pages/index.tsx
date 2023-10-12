import Contacts from '@/app/features/contacts/components/Contacts';

export default function ContactUsPage() {
   return (
       <main className='md:my-12 mb-[50px] mt-[14px] lg:container mx-auto'>
          <div className='flex flex-col text-center items-center gap-2.5 mb-5 lg:mb-[50px]'>
             <h2 className='text-2xl lg:text-5xl font-bold'>Contact Us</h2>
             <p className='text-[#717171] md:flex-row text-sm lg:text-[16px] w-max font-medium'>
                Any question or remarks?&nbsp;
                <br className='md:hidden'/>
                Just write us a message!
             </p>
          </div>

          <Contacts/>
       </main>
   )
}
