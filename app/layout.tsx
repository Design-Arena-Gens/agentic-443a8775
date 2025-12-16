export const metadata = {
  title: 'Loyalty ki Kahani - एक सच्ची कहानी',
  description: 'Wafadari aur loyalty par ek interactive story',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
