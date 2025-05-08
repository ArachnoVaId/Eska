import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        birucyanHover:
          "bg-linear-[90deg,rgba(250,250,250,0.30)_0%,rgba(250,250,250,0.00)_50%,rgba(250,250,250,0.20)_100%] animated-button before:[--animated-bg:linear-gradient(113deg,#256EB0_14.92%,#14A9A0_49.95%,#64D7CB_84.97%)] border-2 border-putih  backdrop-blur-sm shadow-[1px_2px_10px_rgba(255,255,255,0.5)]",
        biruMuda:
          "bg-[radial-gradient(233.71%_141.42%_at_100%_0%,_#7E9BFC_0%,_#7D9BFC_49.1%,_#D6BABC_100%)] animated-button before:[--animated-bg:linear-gradient(315deg,#012B53_0%,#0F5291_50%,#7FA3C4_100%)] border-2 border-putih  backdrop-blur-sm shadow-[1px_2px_10px_rgba(255,255,255,0.5)]",
        pinkHover:
          "bg-linear-[90deg,rgba(250,250,250,0.30)_0%,rgba(250,250,250,0.00)_50%,rgba(250,250,250,0.20)_100%] animated-button before:[--animated-bg:linear-gradient(270deg,_#FF4291_0%,_#FBB1D0_100%)] border-2 border-putih backdrop-blur-sm shadow-[1px_2px_10px_rgba(255,255,255,0.5)]",
        hijauHover:
          "bg-linear-[90deg,rgba(250,250,250,0.30)_0%,rgba(250,250,250,0.00)_50%,rgba(250,250,250,0.20)_100%] animated-button before:[--animated-bg:linear-gradient(98deg,#FAFAFA_0%,#78B07A_27.72%,#3D8289_85.65%)] border-2 border-putih backdrop-blur-sm shadow-[1px_2px_10px_rgba(255,255,255,0.5)]",
        biruMudaHover:
          "bg-linear-[90deg,rgba(250,250,250,0.30)_0%,rgba(250,250,250,0.00)_50%,rgba(250,250,250,0.20)_100%] animated-button before:[--animated-bg:radial-gradient(233.71%_141.42%_at_100%_0%,_#7E9BFC_0%,_#7D9BFC_49.1%,_#D6BABC_100%)] border-2 border-putih  backdrop-blur-sm shadow-[1px_2px_10px_rgba(255,255,255,0.5)]",
        biruTuaHover:
          "bg-linear-[90deg,rgba(250,250,250,0.30)_0%,rgba(250,250,250,0.00)_50%,rgba(250,250,250,0.20)_100%] animated-button before:[--animated-bg:linear-gradient(315deg,#012B53_0%,#0F5291_50%,#7FA3C4_100%)] border-2 border-putih  backdrop-blur-sm shadow-[1px_2px_10px_rgba(255,255,255,0.5)]",
        hijauIdeasHover:
          "bg-linear-[90deg,rgba(250,250,250,0.30)_0%,rgba(250,250,250,0.00)_50%,rgba(250,250,250,0.20)_100%] animated-button before:[--animated-bg:linear-gradient(98deg,#FAFAFA_0%,#78B07A_27.72%,#3D8289_85.65%)] border-2 border-putih  backdrop-blur-sm shadow-[1px_2px_10px_rgba(255,255,255,0.5)]",
        gmbccHover:
          "bg-linear-[90deg,rgba(250,250,250,0.30)_0%,rgba(250,250,250,0.00)_50%,rgba(250,250,250,0.20)_100%] animated-button before:[--animated-bg:linear-gradient(115deg,#0CD5BF_0%,#003C73_75%)] border-2 border-putih  backdrop-blur-sm shadow-[1px_2px_10px_rgba(255,255,255,0.5)]",
        biruHover:
          "bg-linear-[90deg,rgba(250,250,250,0.30)_0%,rgba(250,250,250,0.00)_50%,rgba(250,250,250,0.20)_100%] animated-button before:[--animated-bg:linear-gradient(90deg,#537FD1_0%,#9DC8FF_100%)] border-2 border-putih  backdrop-blur-sm shadow-[1px_2px_10px_rgba(255,255,255,0.5)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "px-6 py-3 rounded-[60px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
