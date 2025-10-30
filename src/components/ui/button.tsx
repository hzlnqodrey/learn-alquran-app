import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    // Base Class Tailwind
    // Class	                        Description
    // inline-flex	                     Display inline as flexbox
    // items-center justify-center	    Center items horizontally & vertically
    // whitespace-nowrap	            Prevent text from wrapping
    // rounded-md	                    Medium-rounded corners
    // text-sm font-medium	            Small text, medium font weight
    // ring-offset-background	        Set background offset for focus ring
    // transition-colors	            Smooth color transitions
    // focus-visible:*	                Apply ring styles only when focused via keyboard
    // disabled:*	                    Reduce opacity and disable interactions when disabled
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",

    // Define Variants
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground", // less visible unless hover
                link: "text-primary underline-offset-4 hover:underline",
            },

            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-6",
                icon: "h-10 w-10",
            }
        },

        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean,
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        
        const Comp = asChild ? Slot : "button";

        return(
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };