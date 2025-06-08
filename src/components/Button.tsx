import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
}
export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center bg-orange text-white py-[12.5px] rounded-[100px] cursor-pointer h-10 w-full max-w-[300px] text-[13px] leading-4 font-medium transition-300 hover:brightness-90",
        className
      )}
      {...props}
    />
  );
}
