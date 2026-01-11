import { LucideIcon } from "lucide-react";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    isNegative?: boolean; // For "Problem" cards (red accent)
}

export default function FeatureCard({ icon: Icon, title, description, isNegative = false }: FeatureCardProps) {
    return (
        <div className={`glass-panel ${styles.card} ${isNegative ? styles.cardNegative : ''}`}>
            {/* Hover Gradient Background */}
            <div className={`${styles.hoverGradient} ${isNegative ? styles.hoverGradientNegative : ''}`} />

            <div className={styles.content}>
                <div className={`${styles.iconBox} ${isNegative ? styles.iconBoxNegative : ''}`}>
                    <Icon size={24} />
                </div>

                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>
                    {description}
                </p>
            </div>
        </div>
    );
}
