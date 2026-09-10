import React from "react";
import { Link } from "react-router-dom";
import LegalLayout, { LegalSection } from "../components/Website/LegalLayout";
import banner from "../assets/services-banner.webp";
import { clientDetails } from "../constants";

const Terms = () => {
  return (
    <LegalLayout
      title="Terms & Conditions"
      banner={banner}
      description="The terms that govern your use of the Webora AI website."
      lastUpdated="September 10, 2026"
    >
      <LegalSection>
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access
          to and use of{" "}
          <span className="whitespace-nowrap">weboraai.com</span> (the
          &ldquo;Website&rdquo;), operated by Webora AI (&ldquo;Webora AI,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing
          or using the Website, you agree to be bound by these Terms. If you do
          not agree, please do not use the Website.
        </p>
      </LegalSection>

      <LegalSection heading="Our Services">
        <p>
          Webora AI provides technology services including web and app
          development, artificial intelligence and machine learning, cloud
          computing, UI/UX design, and related digital solutions. Information on
          the Website is provided for general informational purposes and does
          not constitute a binding offer. Specific engagements are governed by
          separate written agreements.
        </p>
      </LegalSection>

      <LegalSection heading="Use of the Website">
        <p>You agree that you will not:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>Use the Website in any way that violates applicable laws or regulations;</li>
          <li>
            Attempt to gain unauthorised access to the Website, its servers, or
            any related systems;
          </li>
          <li>
            Introduce any viruses, malicious code, or otherwise interfere with
            the proper working of the Website;
          </li>
          <li>
            Submit false, misleading, or fraudulent information through our
            forms.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Intellectual Property">
        <p>
          All content on the Website, including text, graphics, logos, images,
          and software, is the property of Webora AI or its licensors and is
          protected by applicable intellectual property laws. You may not copy,
          reproduce, distribute, or create derivative works from any content
          without our prior written permission.
        </p>
      </LegalSection>

      <LegalSection heading="Enquiries &amp; Communications">
        <p>
          When you submit an enquiry through the Website or click to call or
          message us, you consent to being contacted by Webora AI regarding your
          request. Your information is handled in accordance with our{" "}
          <Link
            to="/privacy-policy"
            className="text-primary underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Links">
        <p>
          The Website may contain links to third-party websites and services. We
          do not control and are not responsible for the content, policies, or
          practices of any third-party sites. Accessing them is at your own
          risk.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimer of Warranties">
        <p>
          The Website and its content are provided on an &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; basis without warranties of any kind,
          whether express or implied. We do not warrant that the Website will be
          uninterrupted, error-free, or free of harmful components, or that the
          information provided is complete or accurate.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Webora AI shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising out of or related to your use of, or inability to use,
          the Website.
        </p>
      </LegalSection>

      <LegalSection heading="Governing Law">
        <p>
          These Terms are governed by and construed in accordance with the laws
          of India, and you agree to submit to the exclusive jurisdiction of the
          courts of Bengaluru, Karnataka, for the resolution of any disputes.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to These Terms">
        <p>
          We may update these Terms from time to time. Changes will be posted on
          this page with an updated &ldquo;Last updated&rdquo; date, and your
          continued use of the Website constitutes acceptance of the revised
          Terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul className="list-none flex flex-col gap-1">
          <li>
            Email:{" "}
            <a
              href={`mailto:${clientDetails.email}`}
              className="text-primary underline underline-offset-2"
            >
              {clientDetails.email}
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href={`tel:${clientDetails.phone}`}
              className="text-primary underline underline-offset-2"
            >
              {clientDetails.phoneDisplay ?? clientDetails.phone}
            </a>
          </li>
          <li>Address: {clientDetails.address}</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
};

export default Terms;
