import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Spatialytics Solutions — Geospatial & Web Innovation",
  description: "Geospatial Intelligence • Web Development • Data Automation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
