import React from "react";
import { cn } from "../../lib/utils";   // Import the utility function


// Create a Button component
export const Button = React.forwardRef(({  // Use React.forwardRef to forward the ref to the button element
  className,  // Destructure the className prop
  variant = "default",  // Destructure the variant prop with a default value of "default"
  size = "default",  // Destructure the size prop with a default value of "default"
  children,              // Destructure the children prop
  ...props                         // Destructure the rest of the props
}, ref) => {                       
  const styles = {
    base: "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants: {               // Define the variants object
      default: "bg-[#8eb486] text-white hover:bg-[#7d9e77]",          // Define the default variant
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",    // Define the outline variant
      ghost: "hover:bg-accent hover:text-accent-foreground"                     // Define the ghost variant
    },
    sizes: {
      default: "h-10 py-2 px-4",           // Define the default size
      sm: "h-9 px-3",                      // Define the sm size
      lg: "h-11 px-8"                 // Define the lg size
    }
  };

  return (
    <button                                    // Return a button element
      className={cn(
        styles.base,                      // Merge the base styles
        styles.variants[variant],                      // Merge the variant styles
        styles.sizes[size],                       // Merge the size styles
        className          
      )}
      ref={ref}                     // Pass the ref to the button element
      {...props}                       // Spread the rest of the props
    >
      {children}                     
    </button>
  );
});

Button.displayName = "Button";          // Set the display name of the Button component