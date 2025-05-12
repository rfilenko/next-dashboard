import "../globals.css";

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased flex items-center justify-center h-screen">
                {children}
            </body>
        </html>
    );
}