"use client";

import { useState, useEffect } from "react";
import { Sliders, DollarSign, TrendingUp } from "lucide-react";
import styles from "./PricingSimulator.module.css";

export default function PricingSimulator() {
    // Inputs
    const [timeOfDay, setTimeOfDay] = useState(14); // 0-24
    const [queueLength, setQueueLength] = useState(2); // 0-10 cars
    const [gridLoad, setGridLoad] = useState(60); // 0-100%
    const [renewableSupply, setRenewableSupply] = useState(40); // 0-100%

    // Outputs
    const [price, setPrice] = useState(0.35); // $/kWh
    const [revenueUplift, setRevenueUplift] = useState(0); // %

    // Logic
    useEffect(() => {
        const calculatePrice = () => {
            const basePrice = 0.30;

            // 1. Time Factor (Peak hours 17-21)
            let timeMultiplier = 1.0;
            if (timeOfDay >= 17 && timeOfDay <= 21) timeMultiplier = 1.5;
            else if (timeOfDay >= 0 && timeOfDay <= 6) timeMultiplier = 0.8; // Off-peak discount

            // 2. Congestion Pricing (Queue length)
            const congestionMultiplier = 1 + (queueLength * 0.05); // +5% per car in queue

            // 3. Grid Stress (If > 80%, price spikes to discourage)
            let gridMultiplier = 1.0;
            if (gridLoad > 80) gridMultiplier = 1.4;

            // 4. Renewable Discount (High solar = cheaper)
            const renewableDiscount = renewableSupply > 70 ? 0.9 : 1.0;

            // Final Price
            const finalPrice = basePrice * timeMultiplier * congestionMultiplier * gridMultiplier * renewableDiscount;

            // Revenue Uplift (Mock calculation vs static 0.35)
            const uplift = ((finalPrice - 0.35) / 0.35) * 100;

            setPrice(Number(finalPrice.toFixed(2)));
            setRevenueUplift(Number(uplift.toFixed(1)));
        };

        calculatePrice();
    }, [timeOfDay, queueLength, gridLoad, renewableSupply]);

    return (
        <div className={styles.container}>
            {/* Controls Panel */}
            <div className={`glass-panel ${styles.controlsPanel}`}>
                <h3 className={styles.title}>
                    <Sliders size={20} className="text-[var(--primary)]" />
                    Input Variables
                </h3>

                <div>
                    {/* Time of Day */}
                    <div className={styles.inputGroup}>
                        <div className={styles.labelRow}>
                            <label className={styles.label}>Time of Day (24h)</label>
                            <span className={styles.value} style={{ color: 'var(--foreground)' }}>{timeOfDay}:00</span>
                        </div>
                        <input
                            type="range" min="0" max="23" value={timeOfDay}
                            onChange={(e) => setTimeOfDay(parseInt(e.target.value))}
                            className={styles.rangeInput}
                            style={{ accentColor: 'var(--primary)' }}
                        />
                    </div>

                    {/* Queue Length */}
                    <div className={styles.inputGroup}>
                        <div className={styles.labelRow}>
                            <label className={styles.label}>Queue Length (Cars)</label>
                            <span className={styles.value} style={{ color: 'var(--foreground)' }}>{queueLength} cars</span>
                        </div>
                        <input
                            type="range" min="0" max="10" value={queueLength}
                            onChange={(e) => setQueueLength(parseInt(e.target.value))}
                            className={styles.rangeInput}
                            style={{ accentColor: 'var(--secondary)' }}
                        />
                    </div>

                    {/* Grid Load */}
                    <div className={styles.inputGroup}>
                        <div className={styles.labelRow}>
                            <label className={styles.label}>Grid Load (%)</label>
                            <span className={styles.value} style={{ color: gridLoad > 80 ? '#ef4444' : 'var(--foreground)' }}>{gridLoad}%</span>
                        </div>
                        <input
                            type="range" min="0" max="100" value={gridLoad}
                            onChange={(e) => setGridLoad(parseInt(e.target.value))}
                            className={styles.rangeInput}
                            style={{ accentColor: '#ef4444' }}
                        />
                    </div>

                    {/* Renewable Supply */}
                    <div className={styles.inputGroup}>
                        <div className={styles.labelRow}>
                            <label className={styles.label}>Renewable Supply (%)</label>
                            <span className={styles.value} style={{ color: 'var(--accent)' }}>{renewableSupply}%</span>
                        </div>
                        <input
                            type="range" min="0" max="100" value={renewableSupply}
                            onChange={(e) => setRenewableSupply(parseInt(e.target.value))}
                            className={styles.rangeInput}
                            style={{ accentColor: 'var(--accent)' }}
                        />
                    </div>
                </div>
            </div>

            {/* Visualization Panel */}
            <div className={styles.visualizationPanel}>

                {/* Main Results */}
                <div className={styles.resultsGrid}>
                    <div className={`${styles.resultCard} ${styles.priceCard}`}>
                        <div>
                            <p className={styles.labelSmall}>Dynamic Price</p>
                            <p className={styles.bigValue} style={{ color: 'var(--primary)' }}>${price}<span className={styles.unit}>/kWh</span></p>
                        </div>
                        <div className={styles.iconCircle} style={{ background: 'rgba(0, 242, 234, 0.2)' }}>
                            <DollarSign className="text-[var(--primary)]" />
                        </div>
                    </div>

                    <div className={`glass-panel ${styles.resultCard}`}>
                        <div>
                            <p className={styles.labelSmall}>Revenue Uplift</p>
                            <p className={styles.bigValue} style={{ color: revenueUplift >= 0 ? 'var(--accent)' : '#ef4444' }}>
                                {revenueUplift > 0 ? '+' : ''}{revenueUplift}%
                            </p>
                        </div>
                        <div className={styles.iconCircle} style={{ background: 'rgba(0, 255, 157, 0.2)' }}>
                            <TrendingUp className="text-[var(--accent)]" />
                        </div>
                    </div>
                </div>

                {/* Explanation / Breakdown */}
                <div className={`glass-panel ${styles.breakdownPanel}`}>
                    <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Algorithm Breakdown</p>
                    <div className={styles.formula}>
                        <span style={{ color: '#6b7280' }}>Base($0.30)</span>
                        <span>×</span>
                        <span style={{ color: timeOfDay >= 17 && timeOfDay <= 21 ? '#f87171' : '#d1d5db' }}>Time</span>
                        <span>×</span>
                        <span style={{ color: queueLength > 2 ? 'var(--secondary)' : '#d1d5db' }}>Demand</span>
                        <span>×</span>
                        <span style={{ color: gridLoad > 80 ? '#ef4444' : '#d1d5db' }}>Grid</span>
                        <span>−</span>
                        <span style={{ color: renewableSupply > 70 ? 'var(--accent)' : '#d1d5db' }}>Green</span>
                    </div>
                    <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#6b7280' }}>
                        {gridLoad > 80 && "⚠️ Grid Stress High - Price surge active to reduce load."}
                        {renewableSupply > 70 && "🌿 High Renewable output - Discount active."}
                        {queueLength > 5 && "🚗 High Congestion - Demand pricing active."}
                    </p>
                </div>

            </div>
        </div>
    );
}
