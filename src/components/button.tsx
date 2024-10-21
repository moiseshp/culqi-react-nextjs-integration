import { cn } from '@/utils/cn';
import { Spinner } from './spinner';

type ButtonProps = {
  isLoading: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-2 rounded-md border-none font-semibold transition duration-300 focus:outline-none text-white w-full h-12',
        isLoading ? 'bg-zinc-200' : 'bg-zinc-800 hover:bg-zinc-700',
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
