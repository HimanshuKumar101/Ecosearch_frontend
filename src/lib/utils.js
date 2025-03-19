import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge Tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

//this component is a utility function that merges tailwind classes together using the tailwind-merge package
