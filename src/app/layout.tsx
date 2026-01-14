import "./globals.css";

export const metadata = {
  title: "Spatialytics Solutions — Geospatial & Web Innovation",
  description: "Geospatial Intelligence • Web Development • Data Automation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
