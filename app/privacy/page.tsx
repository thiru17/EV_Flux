import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../product/page.module.css";

export default function PrivacyPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <h1 className={styles.title}>Privacy Policy</h1>
                    </div>

                    <section className={styles.section}>
                        <div className={styles.card}>
                            <p className={styles.cardText}>
                                This is a demo application. No real user data is collected or processed.
                                In a real deployment, this page would detail how charging data, location data, and payment information is secured according to GDPR, CCPA, and SOC2 standards.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
