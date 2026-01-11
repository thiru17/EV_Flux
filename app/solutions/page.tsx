import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../product/page.module.css"; // Reuse product styles for consistency
import { Building2, Truck, Zap, Map } from "lucide-react";

export default function SolutionsPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <h1 className={styles.title}>Solutions for Every Network</h1>
                        <p className={styles.subtitle}>
                            Whether you operate a highway corridor or a residential complex, DPO adapts to your specific constraints and goals.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <Truck className="text-[var(--primary)] mb-4" size={32} />
                            <h3 className={styles.cardTitle}>Fleet Depots</h3>
                            <p className={styles.cardText}>
                                Ensure vehicles are charged by shift start while minimizing peak demand charges. Our algorithms prioritize urgent vehicles automatically.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Building2 className="text-[var(--primary)] mb-4" size={32} />
                            <h3 className={styles.cardTitle}>Residential & Multi-Unit</h3>
                            <p className={styles.cardText}>
                                Fair pricing for shared assets. discourage hogging with idle fees that scale based on current demand.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Map className="text-[var(--primary)] mb-4" size={32} />
                            <h3 className={styles.cardTitle}>Public Fast Charging</h3>
                            <p className={styles.cardText}>
                                Maximize turnover at high-traffic locations. Dynamic pricing incentivizes shorter sessions during queues.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Zap className="text-[var(--primary)] mb-4" size={32} />
                            <h3 className={styles.cardTitle}>Workplace Charging</h3>
                            <p className={styles.cardText}>
                                Solar-aware pricing that encourages employees to charge when the sun is shining and renewable energy is abundant.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
