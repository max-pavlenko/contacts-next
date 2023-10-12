import {ComponentProps, FC, PropsWithChildren} from 'react';
import {twMerge} from 'tailwind-merge';

type Props = ComponentProps<'button'>;

const Button: FC<PropsWithChildren<Props>> = ({children, className, ...props}) => {
   return (
       <button className={twMerge(`bg-black rounded-md px-12 py-4 text-white shadow-md`, className)} {...props}>
          {children}
       </button>
   );
};

export default Button;
