import "../globals.css";
import { ToastContainer } from "react-toastify";

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased flex items-center justify-center h-screen">
                {children}
                <ToastContainer position="bottom-right" />
            </body>
        </html>
    );
}