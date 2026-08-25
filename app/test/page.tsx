'use client'
import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    CheckCircle2,
    Calendar,
    Sparkles,
    ShieldCheck,
    Check,
    Copy,
    MessageCircle,
    Baby
} from 'lucide-react';
import EnquiryForm from '@/components/EnquiryForm';

interface ContactSectionProps {
    onNavigate: (page: PageId) => void;
    onOpenTour: () => void;
    onSuccessToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
    onNavigate,
    onOpenTour,
    onSuccessToast
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [childAge, setChildAge] = useState('');
    const [interest, setInterest] = useState<'tour' | 'funding' | 'availability' | 'general'>('tour');
    const [preferredDays, setPreferredDays] = useState('3 Full Days');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Live status check (Mon-Fri 8:00am - 6:00pm)
    const [isOpenNow, setIsOpenNow] = useState(true);

    useEffect(() => {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const open = day >= 1 && day <= 5 && hour >= 8 && hour < 18;
        setIsOpenNow(open);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            onSuccessToast(`Thank you ${name}! Your enquiry has been received. Our Admissions Director will get back to you within 24 business hours.`);

            // Reset form after short delay
            setTimeout(() => {
                setName('');
                setEmail('');
                setPhone('');
                setChildAge('');
                setMessage('');
                setSubmitted(false);
            }, 3500);
        }, 1000);
    };

    const copyAddress = () => {
        navigator.clipboard?.writeText('14 Garden Lane, Green Meadows Campus, London, NW3 4TL');
        onSuccessToast('Address copied to clipboard: 14 Garden Lane, London, NW3 4TL');
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F3EAD5]/70 via-[#FBF6EC] to-[#FBF6EC] min-h-[calc(100vh-140px)] flex items-center py-10 sm:py-16">
            {/* Decorative ambient background accents */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E7EFE6]/60 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#F3EAD5]/80 blur-3xl pointer-events-none" />

            <div className="relative max-w-[1180px] mx-auto px-5 sm:px-7 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                    {/* Left Column: Hero Narrative & Key Contact Details */}
                    <div className="lg:col-span-6 space-y-6 text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7EFE6] border border-[#7E9B7E]/40 text-[#4F6B50] font-display text-xs font-semibold">
                            <span className="w-2 h-2 rounded-full bg-[#4F6B50] animate-pulse" />
                            <span>Admissions &amp; Visiting 2026/2027</span>
                        </div>

                        <div className="space-y-3">
                            <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl text-[#2E2A24] font-bold leading-[1.24] tracking-tight">
                                Come and see Little Garden Gate Nursery <span className="text-[#4F6B50] underline decoration-[#E8AF3F] decoration-wavy decoration-1 whitespace-pre text-xl sm:text-2xl lg:text-3xl">OPEN DAY REGISTRATION</span>.
                            </h1>
                            <p className="text-base sm:text-lg text-[#645C4F] leading-relaxed">
                                Join us for our Open Day! Meet our team, explore the nursery and discover what makes Little Garden Gate a special place for your little one.
                            </p>
                        </div>

                        {/* Quick Contact Cards */}
                        <div className="space-y-3 pt-2">
                            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFDF8] border border-[#E1D6BE] shadow-sm">
                                <div className="w-9 h-9 rounded-xl bg-[#7E9B7E] text-white flex items-center justify-center flex-none">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <strong className="font-display text-xs text-[#2E2A24]">Visit Us</strong>
                                        <button
                                            type="button"
                                            onClick={copyAddress}
                                            className="text-[11px] font-display font-semibold text-[#4F6B50] hover:text-[#2E2A24] flex items-center gap-1"
                                        >
                                            <Copy className="w-3 h-3" /> Copy
                                        </button>
                                    </div>
                                    <p className="text-xs text-[#645C4F] mt-0.5">
                                        St George's Church, Campden Hill, Aubrey Walk, London, W8 7JG                  </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFFDF8] border border-[#E1D6BE] shadow-sm">
                                    <div className="w-9 h-9 rounded-xl bg-[#7E9B7E] text-white flex items-center justify-center flex-none">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <strong className="font-display text-xs text-[#2E2A24] block">Call Reception</strong>
                                        <a
                                            href="tel:07510992963"
                                            className="text-xs text-[#645C4F] hover:text-[#4F6B50] font-medium"
                                        >
                                            07510992963
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFFDF8] border border-[#E1D6BE] shadow-sm">
                                    <div className="w-9 h-9 rounded-xl bg-[#7E9B7E] text-white flex items-center justify-center flex-none">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <strong className="font-display text-xs text-[#2E2A24] block">Email Admissions</strong>
                                        <a
                                            href="mailto:hello@littlegardengate.example"
                                            className="text-xs text-[#645C4F] hover:text-[#4F6B50] font-medium truncate block"
                                        >
                                            info@littlegardengatenursery.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hours & Trust Badges */}
                        <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#645C4F]">
                            <div className="flex items-center gap-1.5 font-display font-medium">
                                <div className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                <span className="text-[#2E2A24]">
                                    {isOpenNow ? 'Open Now (Mon–Fri, 8am–6pm)' : 'Closed Now (Opens Mon 8am)'}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#7E9B7E]" />
                                <span>15 &amp; 30 Hours Funded</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#7E9B7E]" />
                                <span>24h Response Guarantee</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: High-Craft Contact Form Card */}
                    <div className="lg:col-span-6">
                        <EnquiryForm
                            dark
                            submitLabel="Send Message"
                            fields={[
                                { id: "name", label: "Your name", type: "text", placeholder: "John Doe", required: true },
                                { id: "child_age", label: "Phone", type: "text", placeholder: "e.g. 012312435578", required: true },
                                { id: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
                                {
                                    id: "message",
                                    label: "Message",
                                    type: "textarea",
                                    placeholder: "Tell us a bit about what you're looking for...",
                                },
                            ]}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};



export default function test() {
    return (
        <>
            <ContactSection onNavigate={null} onOpenTour={null} onSuccessToast={null} key={""} />
        </>
    )
} 