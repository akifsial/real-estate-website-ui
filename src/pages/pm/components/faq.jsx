import React, { useState } from "react";

const faqs = [
    {
        question: "Is there a monthly fee?",
        answer:
            "No. It’s completely free to receive leads on HostSwitch. You only pay if you win a client.",
    },
    {
        question: "Do I have to accept every lead?",
        answer:
            "No, you can choose which leads you want to accept based on your preferences and availability.",
    },
    {
        question: "What kind of property info do I get?",
        answer:
            "You’ll see key property details such as size, location, and service needs before deciding to respond.",
    },
    {
        question: "How does payment work if I close a deal?",
        answer:
            "Once you close a deal, payment is processed securely through our platform. You’ll receive funds promptly after confirmation.",
    },
    {
        question: "Can I chat with the owner before sending a proposal?",
        answer:
            "Yes, you can message the owner directly to clarify details before submitting a proposal.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#FFF7F6] min-h-screen flex flex-col items-center justify-center p-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 playfair-display-uniquifier">
                Frequently Asked Questions
            </h2>

       

            <div className="w-full max-w-2xl space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 ease-in-out overflow-hidden ${isOpen
                                ? "border-gray-300 bg-white shadow-[0px_15px_30px_0px_rgba(0,0,0,0.08)]"
                                : "border-gray-200 bg-white hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.05)]"
                                }`}
                        >
                            <button
                                className="flex justify-between items-center w-full p-5 text-left text-gray-800 font-medium focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold text-[18px]">{faq.question}</span>
                                <span
                                    className={`text-2xl transform transition-transform duration-300 ${isOpen ? "rotate-180 text-gray-600" : "rotate-0 text-gray-500"
                                        }`}
                                >
                                    {isOpen ? "−" : "+"}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out px-5 ${isOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0 pb-0"
                                    } overflow-hidden text-gray-600 text-[15px] leading-relaxed`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default FAQ;
