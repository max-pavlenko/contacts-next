import {FooterColumnsMap} from '@/app/layout/types/footer';

export const FOOTER_CONTENT: FooterColumnsMap = {
   'reach us': {
      options: [
         {content: '+1012 3456 789', href: 'tel:00496170961709', icon: 'phone-call.svg'},
         {content: 'demo@gmail.com', href: 'mailto:someone@yoursite.com', icon: 'email.svg'},
         {
            content: '132 Dartmouth Street Boston, Massachusetts 02156 United States',
            href: 'https://www.google.com/maps/@31.4719456,74.4173874', icon: 'location-mark.svg'
         },
      ],
      className: 'lg:flex-grow-[2.5] flex-grow-[0.95]',
   },
   company: {
      options: [
         {content: 'About', href: '/'},
         {content: 'Contact', href: '/'},
         {content: 'Blogs', href: '/'},
      ],
      className: 'flex-grow-0'
   },
   legal: {
      options: [
         {content: 'Privacy Policy', href: '/'},
         {content: 'Terms & Services', href: '/'},
         {content: 'Terms of Use', href: '/'},
         {content: 'Refund Policy', href: '/'},
      ],
   },
   'quick links': {
      options: [
         {content: 'Techlabz Keybox', href: '/'},
         {content: 'Downloads', href: '/'},
         {content: 'Forum', href: '/'},
      ],
   },
};
