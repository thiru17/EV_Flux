import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../product/page.module.css";
import { Check } from "lucide-react";

export default function PricingPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <h1 className={styles.title}>Simple, Transparent Pricing</h1>
                        <p className={styles.subtitle}>
                            Pay for performance. We only make money when you increase revenue or save on demand charges.
                        </p>
                    </div>

                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {/* Pilot */}
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Pilot</h3>
                            <p className="text-3xl font-bold text-white mb-4">$0 <span className="text-sm font-normal text-gray-400">/ mo</span></p>
                            <p className={styles.cardText}>Perfect for testing DPO at a single site.</p>
                            <ul className="mt-8 space-y-4 mb-8">
                                <li className="flex items-center gap-2 text-gray-300"><Check size={18} className="text-[var(--primary)]" /> Up to 10 Chargers</li>
                                <li className="flex items-center gap-2 text-gray-300"><Check size={18} className="text-[var(--primary)]" /> Basic Rules Engine</li>
                                <li className="flex items-center gap-2 text-gray-300"><Check size={18} className="text-[var(--primary)]" /> Email Support</li>
                            </ul>
                            <button className="btn btn-secondary w-full">Start Pilot</button>
                        </div>

                        {/* Growth */}
                        <div className={styles.card} style={{ borderColor: 'var(--primary)', boxShadow: '0 0 20px rgba(0,242,234,0.1)' }}>
                            <h3 className={styles.cardTitle} style={{ color: 'var(--primary)' }}>Growth</h3>
                            <p className="text-3xl font-bold text-white mb-4">$15 <span className="text-sm font-normal text-gray-400">/ charger / mo</span></p>
                            <p className={styles.cardText}>For growing networks needing automation.</p>
                            <ul className="mt-8 space-y-4 mb-8">
                                <li className="flex items-center gap-2 text-gray-300"><Check size={18} className="text-[var(--primary)]" /> Unlimited Chargers</li>
                                <li className="flex items-center gap-2 text-gray-300"><Check size={18} className="text-[var(--primary)]" /> AI Optimization</li>
                                <li className="flex items-center gap-2 text-gray-300"><Check size={18} className="text-[var(--primary)]" /> API Access</li>
                            </ul>
                            <button className="btn btn-primary w-full">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
