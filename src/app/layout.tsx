import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./styles/Normalize.css";
import "./styles/style.css";
import "./styles/feature.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Ukeje Michgolden",
  description:
    "Explore the portfolio of Ukeje Michgolden, showcasing expertise in Ruby, Rails, React, Redux, HTML, CSS, and JavaScript through a range of innovative projects.",
  openGraph: {
    title: "Portfolio | Ukeje Michgolden",
    description:
      "Explore the portfolio of Ukeje Michgolden, showcasing expertise in Ruby, Rails, React, Redux, HTML, CSS, and JavaScript through a range of innovative projects.",
    url: "https://michgolden.netlify.app",
    type: "website",
    images: [
      {
        url: "https://michgolden.netlify.app/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Ukeje Michgolden Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Ukeje Michgolden",
    description:
      "Explore Ukeje Michgolden's portfolio, featuring projects in Ruby, Rails, React, Redux, HTML, CSS, and JavaScript.",
    images: ["https://michgolden.netlify.app/images/profile.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-153326093-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-153326093-1');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
