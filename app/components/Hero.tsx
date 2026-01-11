"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.section}>
            {/* Background Effects */}
            <div className={styles.bgGlowTop} />
            <div className={styles.bgGlowBottom} />

            <div className={styles.container}>

                {/* Badge */}
                <div className={styles.badge} style={{ animationDelay: "0.1s" }}>
                    <span className={styles.badgeDot}></span>
                    <span className={styles.badgeText}>LIVE: 18% Revenue Uplift Observed</span>
                </div>

                {/* Headline */}
                <h1 className={styles.headline} style={{ animationDelay: "0.2s" }}>
                    Dynamic Pricing Intelligence <br />
                    <span className="text-gradient-primary">for EV Charging Networks</span>
                </h1>

                {/* Subtext */}
                <p className={styles.subtext} style={{ animationDelay: "0.3s" }}>
                    Reduce congestion, protect the grid, and increase revenue—automatically.
                    The first AI-driven pricing engine for enterprise charging operators.
                </p>

                {/* CTAs */}
                <div className={styles.ctaGroup} style={{ animationDelay: "0.4s" }}>
                    <button className="btn btn-primary min-w-[160px] group" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        Request Demo
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <Link href="/demo">
                        <button className="btn btn-secondary min-w-[160px] group" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Play size={18} className="mr-2 fill-current" />
                            Pricing Simulator
                        </button>
                    </Link>
                </div>



            </div>
        </section>
    );
}
