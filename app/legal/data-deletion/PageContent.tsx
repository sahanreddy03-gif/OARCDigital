"use client";

import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";

export default function PageContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="bg-black min-h-screen">
        <section className="relative py-16 md:py-24 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/">
              <button className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Home</span>
              </button>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#4ade80]/20 rounded-xl flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-[#4ade80]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white">Data Deletion</h1>
                <p className="text-white/60 text-sm">OARC HERMES Meta app</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-6 text-white/80 leading-relaxed">
            <p>
              To request deletion of personal data associated with the <strong className="text-white">OARC HERMES</strong> Meta
              application, email{" "}
              <a className="text-[#4ade80] underline" href="mailto:hello@oarcdigital.com">
                hello@oarcdigital.com
              </a>{" "}
              with the subject line <strong className="text-white">Meta data deletion</strong>.
            </p>
            <p>Include your Facebook user ID and/or Page name. We process verified requests within 30 days, unless retention is required by law.</p>
            <p>
              Full details:{" "}
              <Link href="/legal/privacy-policy" className="text-[#4ade80] underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
