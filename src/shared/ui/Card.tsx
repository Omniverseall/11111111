import { cn } from "@shared/lib/ui/cn"
export default function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-2xl glass shadow-card", className)}>{children}</div>
}
