import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../product/page.module.css";

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <h1 className={styles.title}>About EV DPO</h1>
                        <p className={styles.subtitle}>
                            We are building the intelligence layer for the electrified future.
                        </p>
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Our Vision</h2>
                        <div className={styles.card}>
                            <p className={styles.cardText} style={{ fontSize: '1.1rem' }}>
                                The transition to electric vehicles creates massive stress on the electrical grid.
                                We believe that price is the most efficient signal to coordinate millions of distributed batteries.
                                By making charging dynamic and grid-aware, we turn EVs from a liability into a grid asset.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
