"use client";
import Image from "next/image";
import { useState, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group flex flex-col w-full gap-[5px] mb-0"
      {...props}
    />
  );
}

interface InputLabelProps extends ComponentProps<"label"> {}

export function InputLabel(props: InputLabelProps) {
  // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
  return <label className="font-semibold text-orange text-sm " {...props} />;
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
  return (
    <input
      className="flex-1 outline-0 rounded-[100px] px-5 py-[12.5px] h-10 text-gray bg-input text-xs font-normal max-w-[333px] placeholder:text-gray"
      {...props}
    />
  );
}

interface InputPasswordProps extends ComponentProps<"input"> {}

export function InputPassword(props: InputPasswordProps) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative w-full max-w-[333px]">
      <input
        className="flex-1 outline-0 rounded-[100px] px-5 py-[12.5px] h-10 text-gray bg-input font-normal text-xs w-full placeholder:text-gray"
        type={visible ? "text" : "password"}
        {...props}
      />
      <Image
        src="/eye.svg"
        width={24}
        height={16}
        alt="eye"
        className="absolute right-5 top-3 cursor-pointer"
        onClick={() => setVisible(!visible)}
      />
    </div>
  );
}

interface InputSearchProps extends ComponentProps<"input"> {
  className?: string;
}

export function InputSearch({ className, ...props }: InputSearchProps) {
  return (
    <div className="relative w-full max-w-[203px]">
      <Image
        src="/search.svg"
        width={16}
        height={16}
        alt="eye"
        className="absolute left-2 top-2 md:left-4 md:top-3 cursor-pointer"
      />
      <input
        className={twMerge(
          "flex-1 outline-0 rounded-[100px] pl-[40px] pr-[15px] py-[10.5px] h-[36px] text-gray bg-input font-normal text-xs w-full placeholder:text-[#00000033]",
          className
        )}
        {...props}
      />
    </div>
  );
}
