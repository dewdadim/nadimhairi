import Cursor from '@/components/ui/cursor'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Cursor />
      {children}
    </div>
  )
}
