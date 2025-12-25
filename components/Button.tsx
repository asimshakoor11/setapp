import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "outline"
    | "ghost"
    | "hero"
    | "store"
    | "dark"
    | "dark-outline";
  children: React.ReactNode;
}

export const Button = ({
  className = "",
  variant = "outline",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-normal text-[14px] leading-[20px] tracking-[1px] text-center align-middle transition-colors rounded-[6px]";

  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    outline:
      "border border-white text-white hover:bg-white/10 pt-[5.5px] pr-[23px] pb-[6.5px] pl-[23px] h-[32px]",
    ghost: "text-white hover:bg-white/10",
    hero: "bg-white text-setapp-dark border border-white hover:bg-white/95 w-[209.93px] h-[52px] pt-[14px] pr-[30.93px] pb-[14px] pl-[32px] text-base",
    store:
      "bg-white text-black border border-white hover:bg-white/95 w-[62px] h-[52px] pt-[10px] pr-[15px] pb-[10px] pl-[15px]",
    dark: "bg-setapp-dark text-white hover:bg-setapp-darkHover px-8 py-3 h-[52px] text-base",
    "dark-outline":
      "border border-setapp-dark text-setapp-dark hover:bg-setapp-dark/5 px-8 py-3 h-[52px] text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
