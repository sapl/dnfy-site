import Link from "next/link";
import { footerNav, site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <Logo size={32} fontSize={18} />
            </div>
            <p className={styles.tagline}>{site.tagline}</p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <div className={styles.title}>{group.title}</div>
              <nav className={styles.links} aria-label={group.title}>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Dinify. All rights reserved.</span>
          <span>Made for families</span>
        </div>
      </div>
    </footer>
  );
}
