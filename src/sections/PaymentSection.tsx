import React from "react";

export default function PaymentSection() {
    return (
        <div className="flex flex-col items-center">
            <h3 className="text-5xl">BTC Payment</h3>
            <p className="my-4">Scan the QR code below to pay</p>
            <img src="/assets/btc-address.jpg" alt="btc" className="w-60" />
            <p className="my-4">BTC Deposit Address :</p>
            <p className="text-center font-bold">1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</p>
        </div>
    );
}
