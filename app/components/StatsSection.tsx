import styles from "./StatsSection.module.css";

export default function StatsSection() {
    const stats = [
        { value: "+35%", label: "Revenue Uplift", color: "var(--accent)" },
        { value: "-40%", label: "Wait Times", color: "var(--primary)" },
        { value: "0", label: "Grid Violations", color: "var(--secondary)" },
        { value: "100%", label: "Automated", color: "#ffffff" },
    ];

    return (
        <section className={styles.section}>
            {/* Background Glow */}
            <div className={styles.bgGlow}></div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {stats.map((stat, idx) => (
                        <div key={idx} className={styles.statItem}>
                            <div className={styles.value} style={{ color: stat.color }}>
                                {stat.value}
                            </div>
                            <div className={styles.label}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
