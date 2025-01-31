import { UIProvider } from "@/context/UIProvider";
import localFont from "next/font/local";
import "./global.css";
import { Body } from "@/components/Body";

const geomanist = localFont({
  src: "../assets/Geomanist/geomanist-book-webfont.woff2",
  variable: "--geomanist-font",
});

export const metadata = {
  title: "GIF Produkcija",
  description: "GIF Produkcija - Video Production",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geomanist.variable}>
      <UIProvider>
        <Body>{children}</Body>
      </UIProvider>
    </html>
  );
}
