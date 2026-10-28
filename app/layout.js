import "./globals.css";

export const metadata = {
  title: "AI Product Recommender | AI Engineer Assessment",
  description: "An AI-powered product recommendation system built with Next.js, React, and OpenAI API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
