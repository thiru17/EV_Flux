import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import { Cpu, Database, CloudLightning, Shield } from "lucide-react";

export default function ProductPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.container}>
                    {/* Hero */}
                    <div className={styles.hero}>
                        <h1 className={styles.title}>The Pricing Engine</h1>
                        <p className={styles.subtitle}>
                            Our core technology uses reinforcement learning to balance grid load, user demand, and operator revenue in real-time.
                        </p>
                    </div>

                    {/* Architecture Section */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>System Architecture</h2>
                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <Cpu className="text-[var(--primary)] mb-4" size={32} />
                                <h3 className={styles.cardTitle}>Edge Computing</h3>
                                <p className={styles.cardText}>
                                    Local controllers at the charging station handle immediate safety logic and fallback pricing, ensuring 100% uptime even if connectivity is lost.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <Database className="text-[var(--secondary)] mb-4" size={32} />
                                <h3 className={styles.cardTitle}>Real-Time Ingestion</h3>
                                <p className={styles.cardText}>
                                    Processing 50+ signals per second including locational marginal pricing (LMP), weather data, and local transformers load.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How It Works Detail */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Key Capabilities</h2>
                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <CloudLightning className="text-[var(--accent)] mb-4" size={32} />
                                <h3 className={styles.cardTitle}>Grid-Aware Optimization</h3>
                                <p className={styles.cardText}>
                                    Automatically throttles charging speeds or increases prices during critical peak events to prevent demand charges.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <Shield className="text-white mb-4" size={32} />
                                <h3 className={styles.cardTitle}>Enterprise Security</h3>
                                <p className={styles.cardText}>
                                    SOC2 Type II compliant infrastructure with end-to-end encryption for all pricing signals and user data.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
