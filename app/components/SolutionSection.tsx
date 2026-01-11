import { Server, Cpu, TrendingUp, Zap } from "lucide-react";
import styles from "./SolutionSection.module.css";

export default function SolutionSection() {
    const steps = [
        {
            icon: Server,
            title: "Real-Time Signals",
            desc: "Ingesting charger data, queue depth, and grid load in ms."
        },
        {
            icon: Cpu,
            title: "Pricing Engine",
            desc: "AI calculates the optimal price to balance supply & demand."
        },
        {
            icon: TrendingUp,
            title: "Optimized Price",
            desc: "Dynamic rates pushed to drivers via app & charger screen."
        },
        {
            icon: Zap,
            title: "Better Outcomes",
            desc: "Higher revenue, shorter queues, and grid stability."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>How EV Flux Works</h2>
                    <p className={styles.description}>
                        A continuous loop of optimization that turns chaotic data into profitable decisions.
                    </p>
                </div>

                <div className={styles.flowContainer}>
                    {/* Connector Line (Desktop) */}
                    <div className={styles.connectorLine}></div>

                    <div className={styles.grid}>
                        {steps.map((step, idx) => (
                            <div key={idx} className={styles.step}>
                                <div className={styles.iconCircle}>
                                    <step.icon size={32} className={styles.icon} />
                                    <div className={styles.glow}></div>
                                </div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
