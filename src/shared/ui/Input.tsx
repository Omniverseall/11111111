import { cn } from "@shared/lib/ui/cn"
import { forwardRef } from "react"

type Props = React.InputHTMLAttributes<HTMLInputElement>
const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn("w-full h-11 px-4 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary", className)} {...props}/>
))
Input.displayName = "Input"
export default Input
