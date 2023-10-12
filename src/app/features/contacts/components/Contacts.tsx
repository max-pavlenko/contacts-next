import BannerContacts from '@/app/features/contacts/components/BannerContacts';
import FormContacts from '@/app/features/contacts/components/FormContacts';
import Image from 'next/image';

const Contacts = () => {
   return (
       <div className="flex flex-col md:shadow-[0_0_30px_0_#eee] lg:flex-row relative mx-5 lg:mx-0 p-1.5 lg:p-2.5 gap-[30px] lg:gap-[50px]
        rounded-[10px] bg-white">
          <BannerContacts className="p-4 lg:p-10 pb-6 lg:pb-9 lg:text-start basis-[40%] rounded-br-none"/>
          <FormContacts className="lg:mr-10 lg:pt-12 lg:px-0 px-4 lg:mb-[50px] lg:pb-0 pb-[64px] basis-[60%] lg:gap-11"/>
          
          <Image priority={true} src="/icons/letter-send.svg" alt="letter-send" width={280} height={228}
                 className="absolute lg:-bottom-[39px] lg:right-[11%] bottom-[-15px] right-[48%] lg:w-[280px] lg:h-[228px] w-[104px] h-[86px]"/>
       </div>
   );
};

export default Contacts;
