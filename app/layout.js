import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '옥소폴리틱스 정치성향테스트',
  description: '옥소폴리틱스 정치성향 테스트 by.옥소',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className} style={{margin: "0", padding: "0"}}>{children}</body>
    </html>
  )
}
