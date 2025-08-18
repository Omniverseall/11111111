export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-block rounded-full px-3 py-1 text-sm bg-slate-900/5 dark:bg-white/10">{children}</span>
}
