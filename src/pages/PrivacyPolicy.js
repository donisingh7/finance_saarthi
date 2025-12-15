import React from "react";

function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        <strong>Effective Date:</strong> 15 December 2025
      </p>

      <p className="mb-4">
        Finance Saarthi Advisory (“we”, “our”, “us”) respects your privacy and is
        committed to protecting the personal information of our clients and users.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Name</li>
        <li>Mobile number</li>
        <li>Email address</li>
        <li>WhatsApp messages and communication details</li>
        <li>Appointment and consultation details</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Purpose of Data Collection
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Providing taxation, GST, accounting, and advisory services</li>
        <li>Scheduling consultations and appointments</li>
        <li>Customer support and communication</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <p className="mb-4">
        We do not sell or rent personal data. Information may be shared only with
        service providers such as WhatsApp (Meta Platforms) and Google Calendar
        strictly for operational purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We take reasonable technical and organizational measures to protect user
        data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at:{" "}
        <a
          href="mailto:team.financesaarthi@gmail.com"
          className="text-blue-600 underline"
        >
          team.financesaarthi@gmail.com
        </a>
      </p>
    </div>
  );
}

export default PrivacyPolicy;
