import { AlertTriangle, ZapOff, Clock, CloudOff } from "lucide-react";
import FeatureCard from "./FeatureCard";
import styles from "./ProblemSection.module.css";

export default function ProblemSection() {
    const problems = [
        {
            icon: AlertTriangle,
            title: "Static Price Congestion",
            description: "Fixed rates cause massive queues during rush hour, frustrating drivers and reducing throughput.",
            isNegative: true,
        },
        {
            icon: ZapOff,
            title: "Grid Overload Risks",
            description: "Uncontrolled demand spikes threaten local transformers and incur massive demand charges.",
            isNegative: true,
        },
        {
            icon: Clock,
            title: "Idle Off-Peak Capacity",
            description: "Expensive hardware sits unused at night due to lack of incentives for flexible charging.",
            isNegative: true,
        },
        {
            icon: CloudOff,
            title: "Wasted Green Energy",
            description: "Solar peaks occur at noon, but charging happens at night. No signal to align them.",
            isNegative: true,
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>The Static Pricing Problem</h2>
                    <p className={styles.description}>
                        Traditional flat-rate charging fails to balance supply and demand, leading to inefficient networks and unhappy users.
                    </p>
                </div>

                <div className={styles.grid}>
                    {problems.map((prob, idx) => (
                        <FeatureCard key={idx} {...prob} />
                    ))}
                </div>
            </div>
        </section>
    );
}

