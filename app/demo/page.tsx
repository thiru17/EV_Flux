import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingSimulator from "../components/PricingSimulator";

export default function DemoPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow pt-24 pb-12">
                <div className="container">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Pricing Engine Simulator</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Adjust real-time variables to see how our DPO engine optimizes rates for revenue and grid stability.
                        </p>
                    </div>
                    <PricingSimulator />
                </div>
            </div>
            <Footer />
        </main>
    );
}
