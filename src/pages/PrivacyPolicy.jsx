import React from "react";
import { Link } from "react-router-dom";
import LegalLayout, { LegalSection } from "../components/Website/LegalLayout";
import banner from "../assets/about-us-banner.webp";
import { clientDetails } from "../constants";

const PrivacyPolicy = () => {
  return (
    <LegalLayout
      title="Privacy Policy"
      banner={banner}
      description="How Webora AI collects, uses, and protects your personal information."
      lastUpdated="September 10, 2026"
    >
      <LegalSection>
        <p>
          Webora AI (&ldquo;Webora AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
          or &ldquo;our&rdquo;) is committed to protecting your privacy. This
          Privacy Policy explains what information we collect when you visit{" "}
          <span className="whitespace-nowrap">weboraai.com</span> (the
          &ldquo;Website&rdquo;), how we use it, and the choices you have. By
          using the Website or submitting information through our contact forms,
          you agree to the practices described in this policy.
        </p>
      </LegalSection>

      <LegalSection heading="Information We Collect">
        <p>We collect the following types of information:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>
            <strong>Information you provide:</strong> When you submit an enquiry
            or contact form, we collect your name, email address, phone number,
            subject, the service you are interested in, and any message you
            send.
          </li>
          <li>
            <strong>Usage and device information:</strong> When you browse the
            Website, we may automatically collect information such as your IP
            address, browser type, device type, pages viewed, and referring
            pages, through cookies and similar technologies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>Respond to your enquiries and provide the services you request;</li>
          <li>
            Contact you about your enquiry by email, phone, or WhatsApp;
          </li>
          <li>
            Operate, maintain, improve, and secure the Website and our services;
          </li>
          <li>
            Measure and improve our advertising and marketing campaigns,
            including understanding which pages and actions lead to enquiries;
          </li>
          <li>Comply with legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Cookies &amp; Tracking Technologies">
        <p>
          We use cookies and similar tracking technologies to understand how
          visitors use the Website and to measure the performance of our
          advertising. This includes the{" "}
          <strong>Meta Pixel</strong> provided by Meta Platforms, Inc.
          (Facebook and Instagram), which helps us measure the effectiveness of
          our ad campaigns and show relevant ads to people who have visited the
          Website.
        </p>
        <p>
          These technologies may collect information such as your interactions
          with the Website (for example, submitting a form or clicking to call
          or message us). You can control cookies through your browser settings
          and manage ad preferences through your Meta account settings. For more
          information, please review{" "}
          <a
            href="https://www.facebook.com/privacy/policy/"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            Meta&rsquo;s Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="How We Share Your Information">
        <p>
          We do not sell your personal information. We may share it only with:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>
            <strong>Service providers</strong> who help us operate the Website
            and communicate with you (for example, email delivery and analytics
            or advertising platforms such as Meta), and only to the extent
            necessary to perform those services;
          </li>
          <li>
            <strong>Legal and regulatory authorities</strong> where required by
            applicable law, or to protect our rights, safety, and property.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Data Security">
        <p>
          We take reasonable technical and organisational measures to protect
          your personal information against unauthorised access, loss, or
          misuse. However, no method of transmission over the Internet or
          electronic storage is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="Data Retention">
        <p>
          We retain your personal information only for as long as necessary to
          fulfil the purposes described in this policy, to respond to your
          enquiry, and to comply with our legal obligations.
        </p>
      </LegalSection>

      <LegalSection heading="Your Rights">
        <p>
          Subject to applicable law, you may request to access, correct, or
          delete the personal information we hold about you, or object to
          certain processing. To make a request, contact us using the details
          below and we will respond within a reasonable timeframe.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Links">
        <p>
          The Website may contain links to third-party websites or services that
          are not operated by us. We are not responsible for the privacy
          practices of those third parties, and we encourage you to review their
          privacy policies.
        </p>
      </LegalSection>

      <LegalSection heading="Children&rsquo;s Privacy">
        <p>
          The Website is not directed to children under the age of 18, and we do
          not knowingly collect personal information from children.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated &ldquo;Last updated&rdquo; date.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your information, please contact us:
        </p>
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
        <p className="mt-2">
          See also our{" "}
          <Link
            to="/terms"
            className="text-primary underline underline-offset-2"
          >
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
