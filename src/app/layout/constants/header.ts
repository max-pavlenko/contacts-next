import {NavigationItem} from '@/app/layout/types/header';

export const HEADER_NAVIGATION = [
   {content: 'Home', link: '/1'},
   {content: 'Features', icon: 'arrow-down.svg', link: '/2'},
   {content: 'Blog', link: '/3'},
   {content: 'Shop', link: '/4'},
   {content: 'About', link: '/5'},
   {content: 'Contacts', link: '/6', className: 'font-semibold'},
] satisfies NavigationItem[];
