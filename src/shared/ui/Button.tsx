import { cn } from "@shared/lib/ui/cn"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
}
export default function Button({ className, variant="primary", size="md", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition-colors"
  const sizes = { sm:"h-9 px-3 text-sm", md:"h-11 px-5", lg:"h-12 px-6 text-lg" }[size]
  const variants = {
    primary: "bg-gradient-brand text-white hover:opacity-90",
    secondary: "bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-100 hover:bg-slate-900/10 dark:hover:bg-white/20",
    ghost: "hover:bg-slate-900/5 dark:hover:bg-white/10"
  }[variant]
  return <button className={cn(base, sizes, variants, className)} {...props} />
}
