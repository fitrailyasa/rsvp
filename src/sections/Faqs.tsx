"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "What is the RSVP system and how does it work?",
        answer: "Our RSVP system allows guests to confirm their attendance online through a simple form. You can easily track responses, manage guest lists, and monitor attendance in real time from your dashboard.",
    },
    {
        question: "Can I manage multiple events at the same time?",
        answer: "Yes. You can create and manage multiple events in one place. Each event has its own RSVP link, guest list, and response tracking so everything stays organized.",
    },
    {
        question: "Will I be notified when someone confirms their attendance?",
        answer: "Absolutely. You’ll receive notifications whenever a guest submits their RSVP, making it easy to stay updated on who is attending your event.",
    },
    {
        question: "Can guests update their RSVP after submitting?",
        answer: "Yes. Guests can update their RSVP if their plans change, ensuring your guest list and attendance numbers remain accurate.",
    },
    {
        question: "Is the RSVP page customizable?",
        answer: "Yes. You can customize the RSVP page with event details, themes, and messages to match your event style and provide a better experience for your guests.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="py-24 ">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got{" "}
                    <span className="text-lime-400">answers</span>
                </h2>

                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            onClick={() => setSelectedIndex(faqIndex)}
                            className="bg-violet-900 rounded-2xl border border-white/10 p-6 "
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium m-0">
                                    {faq.question}
                                </h3>
                                <Plus
                                    size={30}
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                />
                            </div>

                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
