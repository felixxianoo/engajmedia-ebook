import React from "react";
import policyStyles from "./Policy.module.css";

function Policy() {
  return (
    <div className={policyStyles["privacyPolicy"]}>
      <h1>Engaj Media Privacy Policy</h1>
      <p>
        At Engaj Media, safeguarding your privacy is our top priority. This
        Privacy Policy is designed to provide you with clear and comprehensive
        information about how we handle your personal information. We are
        committed to ensuring that your data is protected, and we follow strict
        measures to maintain your trust.
      </p>
      <h4>1. Collection of Personal and Usage Data</h4>
      <p>
        We may collect personal and usage data to enhance and personalize your
        experience with our services. This information includes, but is not
        limited to: Name & Email Address. We collect this data to improve our
        services, understand your preferences, and provide you with a more
        tailored experience. Rest assured that we only collect data that is
        relevant to enhancing your interaction with Engaj Media.
      </p>
      <h4>2. Data Security</h4>
      <p>
        Your security is of utmost importance to us. We have implemented
        rigorous security measures to protect your personal information from
        unauthorized access, disclosure, alteration, and destruction. Our data
        security protocols include encryption, regular security audits, and
        access controls.
      </p>
      <h4>3. Data Sharing</h4>
      <p>
        Engaj Media does not share your personal information with third parties
        for marketing purposes. We respect your privacy and will never sell,
        rent, or exchange your data with external entities. Your data is used
        solely for the purpose of improving our services and your experience
        with Engaj Media.
      </p>
      <h4>4. Your Rights</h4>
      <p>
        We respect your rights as a user, and you have the following rights
        concerning your personal data: Access: You can request information about
        the personal data we hold about you and how it is processed. Correction:
        If any of your personal data is inaccurate or incomplete, you have the
        right to request corrections. Erasure: You can request the deletion of
        your personal data when it is no longer necessary for the purposes for
        which it was collected. Data Portability: You have the right to receive
        a copy of your personal data in a structured, machine-readable format.
      </p>
      <h4>5. Contact Us</h4>
      <p>
        If you have any questions, concerns, or requests regarding your privacy
        or this Privacy Policy, please do not hesitate to contact us{" "}
        <a href="mailto:team.engajmedia.com">@team.engajmedia.com</a>. Our
        dedicated team is ready to assist you with any privacy-related queries
        you may have. Thank you for choosing Engaj Media. We value your trust
        and are committed to protecting your privacy.
      </p>
    </div>
  );
}

export default Policy;
