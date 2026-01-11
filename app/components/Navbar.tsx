"use client";

import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Zap size={20} fill="black" />
                    </div>
                    <span className={styles.logoText}>EV FLUX</span>
                </Link>

                {/* Desktop Links */}
                <div className={styles.links}>
                    <Link href="/product" className={styles.link}>Product</Link>
                    <Link href="/solutions" className={styles.link}>Solutions</Link>
                    <Link href="/demo" className={styles.link}>Demo</Link>
                    <Link href="/pricing" className={styles.link}>Pricing</Link>
                </div>

                {/* CTA */}
                <div className={styles.cta}>
                    <button className="btn btn-primary text-sm py-2 px-4 rounded-full">
                        Request Demo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/product" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Product</Link>
                    <Link href="/solutions" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Solutions</Link>
                    <Link href="/demo" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Demo</Link>
                    <Link href="/pricing" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Pricing</Link>
                    <button className="btn btn-primary w-full mt-2">Request Demo</button>
                </div>
            )}
        </nav>
    );
}
