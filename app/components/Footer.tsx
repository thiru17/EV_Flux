import Link from "next/link";
import { Zap } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.brandLink}>
                            <div className={styles.logoBox}>
                                <Zap size={20} fill="black" />
                            </div>
                            <span className={styles.brandName}>EV FLUX</span>
                        </Link>
                        <p className={styles.brandDesc}>
                            Dynamic Pricing Intelligence for the next generation of charging networks.
                            Optimize revenue and grid health automatically.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className={styles.heading}>Product</h4>
                        <ul className={styles.list}>
                            <li><Link href="/product" className={styles.link}>How It Works</Link></li>
                            <li><Link href="/product" className={styles.link}>Pricing Engine</Link></li>
                            <li><Link href="/product" className={styles.link}>Architecture</Link></li>
                            <li><Link href="/pricing" className={styles.link}>Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.heading}>Company</h4>
                        <ul className={styles.list}>
                            <li><Link href="/about" className={styles.link}>About Us</Link></li>
                            <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                            <li><Link href="/privacy" className={styles.link}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {new Date().getFullYear()} EV FLUX Inc. All rights reserved.</p>
                    <div className={styles.bottomLinks}>
                        <Link href="#" className={styles.bottomLink}>Terms</Link>
                        <Link href="#" className={styles.bottomLink}>Privacy</Link>
                        <Link href="#" className={styles.bottomLink}>Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
