import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageBanner from "./PageBanner";

// Shared layout for legal/policy pages (Privacy Policy, Terms & Conditions).
const LegalLayout = ({ title, banner, description, lastUpdated, children }) => {
  return (
    <>
      <Header />
      <PageBanner
        title={title}
        banner={banner}
        position={"left"}
        description={description}
      />
      <div className="wrapper py-[3rem]">
        <div className="max-w-4xl mx-auto">
          {lastUpdated && (
            <p className="text-sm text-gray-500 mb-8">
              Last updated: {lastUpdated}
            </p>
          )}
          <div className="legal-content flex flex-col gap-6 text-[#333] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const LegalSection = ({ heading, children }) => (
  <section className="flex flex-col gap-3">
    {heading && (
      <h2 className="text-xl md:text-2xl font-semibold text-[#111]">
        {heading}
      </h2>
    )}
    {children}
  </section>
);

export default LegalLayout;
