// Root Layout for the Next.js application
// This file sets up the HTML structure, applies RTL, and the custom font.

import './globals.css';
import React from 'react';

// Setting up metadata (essential for modern SEO and presentation)
export const metadata = {
  title: 'فان زون | رزرو کافه و مدیریت رویداد',
  description: 'پلتفرم جامع رزرو کافه، رویداد و گیم‌سنترها با اپلیکیشن‌های اختصاصی کاربران و کافه‌داران.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body
        className={`bg-gray-50 text-[#0A2647] antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
