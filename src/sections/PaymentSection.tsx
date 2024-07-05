import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PaymentSection() {
    const textToCopy = "1BvBMSEYstWetqTFn5A\nu4m4GFg7xJaNVN2";

    const handleCopy = () => {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                toast.success("Text copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    };
    return (
        <div className="flex flex-col items-center">
            <h3 className="text-5xl">BTC Payment</h3>
            <p className="my-4">Scan the QR code below to pay</p>
            <img src="/assets/btc-address.jpg" alt="btc" className="w-60" />
            <p className="my-4">BTC Deposit Address :</p>
            <div className="flex items-center gap-2 justify-between">
                <p className="text-center font-bold">
                    1BvBMSEYstWetqTFn5A {"\n"}u4m4GFg7xJaNVN2
                </p>
                <button
                    onClick={handleCopy}
                    className="copy-button bg-black px-2 py-1 rounded-lg text-white hover:opacity-75"
                >
                    Copy
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
