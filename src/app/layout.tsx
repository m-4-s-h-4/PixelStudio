import Link from "next/link";
import "./global.css";
import styles from "./Layout.module.css";
import { ThemeSwitcher } from "./components/theme-switcher/theme-switcher";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.linkContainer}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/all-projects" className={styles.linkContainer}>
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/reach-out" className={styles.linkContainer}>
                Reach Out
              </Link>
            </li>
          </ul>
          <ThemeSwitcher />
        </nav>
        {children}
      </body>
    </html>
  );
}
