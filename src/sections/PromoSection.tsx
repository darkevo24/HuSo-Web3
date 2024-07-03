import { useState } from "react";
import Button from "../components/Button";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY as string);

export default function PromoSection() {
    const [loading, setLoading] = useState(false);

    const handleJoinNow = async () => {
        setLoading(true);
        try {
            const stripe = await stripePromise;

            // Make a call to your server to create a checkout session
            const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer ${import.meta.env.VITE_STRIPE_SECRET_KEY}`,
                },
                body: new URLSearchParams({
                    "payment_method_types[]": "card",
                    "line_items[0][price]": "price_1PXfevBasrOlZ9Obo1JYEGT2", // Replace with your actual Price ID
                    "line_items[0][quantity]": "1",
                    mode: "payment",
                    success_url:
                        "http://localhost:5173/payment-success?session_id={CHECKOUT_SESSION_ID}",
                    cancel_url: "http://localhost:5173/payment-failed",
                }),
            });

            const session = await response.json();

            // Redirect to Stripe Checkout
            const { error } = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (error) {
                console.error("Error:", error);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative w-full min-h-[400px] row items-end justify-around gap-4">
            <img
                className="object-scale-down max-w-[200px] sm:max-w-sm max-h-[inherit] overflow-hidden"
                src="/assets/vr-person.webp"
                alt="vr_person"
            />
            <div className="bg-gradient-to-bl from-sky-700 via-purple-700 to-blue-800 rounded-3xl p-3 md:p-0 w-full sm:h-[320px] h-full absolute bottom-0 z-[-1] shadow-lg"></div>
            <article className="col gap-6 items-start justify-center h-[inherit] md:max-w-[40%] m-2 lg:-translate-y-10">
                <h4 className="font-redzone text-6xl">Join Us now</h4>
                <span className="text-gray-200">
                    Take advantage of our special offer and join the Huso Web3 Mentorship
                    Program. Enroll now for only $295, discounted from $499.
                </span>
                <Button outline onClick={handleJoinNow} disabled={loading}>
                    {loading ? "Loading..." : "Join Now"}
                </Button>
            </article>
        </section>
    );
}
