import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="nav-div">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="logo"><path d="M12 1.8c-3 0-5.4 2.4-5.4 5.4S9 12.6 12 12.6s5.4-2.4 5.4-5.4S15 1.8 12 1.8zm0 7.8c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z"></path><path d="M12 18.6c.1 0 .3 0 .4.1l3 3c.6.6 1.6.6 2.1 0 .6-.6.6-1.5 0-2.1l-1.8-1.8c-.1-.1-.2-.3-.1-.5 0-.2.1-.3.3-.4 1.3-.5 2.5-1.3 3.5-2.3.3-.3.4-.7.4-1.1s-.2-.8-.4-1.1c-.6-.6-1.6-.6-2.1 0-1.5 1.6-3.3 2.4-5.3 2.4s-3.8-.8-5.2-2.2c-.6-.6-1.6-.6-2.1 0-.6.6-.6 1.5 0 2.1 1 1 2.2 1.8 3.5 2.3.2.1.3.2.3.4s0 .3-.1.5l-1.8 1.8c-.6.6-.6 1.5 0 2.1.6.6 1.6.6 2.1 0l3-3c0-.1.2-.2.3-.2z"></path></svg>
          </div>
          <div className="space-x-4">
            <Link className="nav-text" href="/posts">Posts</Link>
            <Link className="nav-text" href="/">Home</Link>
            <Link className="nav-text" href="/formik">Formik</Link>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="logo"><path d="M12 1.8c-3 0-5.4 2.4-5.4 5.4S9 12.6 12 12.6s5.4-2.4 5.4-5.4S15 1.8 12 1.8zm0 7.8c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z"></path><path d="M12 18.6c.1 0 .3 0 .4.1l3 3c.6.6 1.6.6 2.1 0 .6-.6.6-1.5 0-2.1l-1.8-1.8c-.1-.1-.2-.3-.1-.5 0-.2.1-.3.3-.4 1.3-.5 2.5-1.3 3.5-2.3.3-.3.4-.7.4-1.1s-.2-.8-.4-1.1c-.6-.6-1.6-.6-2.1 0-1.5 1.6-3.3 2.4-5.3 2.4s-3.8-.8-5.2-2.2c-.6-.6-1.6-.6-2.1 0-.6.6-.6 1.5 0 2.1 1 1 2.2 1.8 3.5 2.3.2.1.3.2.3.4s0 .3-.1.5l-1.8 1.8c-.6.6-.6 1.5 0 2.1.6.6 1.6.6 2.1 0l3-3c0-.1.2-.2.3-.2z"></path></svg>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
