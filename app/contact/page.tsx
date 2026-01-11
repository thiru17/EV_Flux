import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../product/page.module.css";

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <h1 className={styles.title}>Get in Touch</h1>
                        <p className={styles.subtitle}>
                            Ready to optimize your network? Our team is here to help.
                        </p>
                    </div>

                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <form className={styles.card} style={{ display: 'grid', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#d1d5db' }}>Company Name</label>
                                <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#d1d5db' }}>Email</label>
                                <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#d1d5db' }}>Message</label>
                                <textarea rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}></textarea>
                            </div>
                            <button className="btn btn-primary" type="button">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
