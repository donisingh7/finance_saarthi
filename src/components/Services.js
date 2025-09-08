// src/components/Services.js – Grid of service categories with icons and hover effects
import React from 'react';

function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Audit & Assurance */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-md">
            <div className="service-icon text-4xl">📊</div>
            <h3 className="text-xl font-semibold mb-2">Audit & Assurance</h3>
            <p className="text-gray-600">
              Statutory audits, internal audits, and assurance services ensuring financial transparency and compliance.
            </p>
          </div>

          {/* Taxation Services */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-md">
            <div className="service-icon text-4xl">💼</div>
            <h3 className="text-xl font-semibold mb-2">Taxation Services</h3>
            <p className="text-gray-600">
              Corporate and personal tax planning, GST compliance, international taxation, and transfer pricing advisory.
            </p>
          </div>

          {/* Advisory & Consulting */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-md">
            <div className="service-icon text-4xl">💡</div>
            <h3 className="text-xl font-semibold mb-2">Advisory & Consulting</h3>
            <p className="text-gray-600">
              Business advisory, transaction support, mergers & acquisitions due diligence, and strategic financial consulting.
            </p>
          </div>

          {/* Risk & Compliance */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-md">
            <div className="service-icon text-4xl">⚖️</div>
            <h3 className="text-xl font-semibold mb-2">Risk & Compliance</h3>
            <p className="text-gray-600">
              Risk assessments, internal control reviews, IT risk audits, and regulatory compliance services to mitigate business risks.
            </p>
          </div>

          {/* Outsourcing & Accounting */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-md">
            <div className="service-icon text-4xl">📑</div>
            <h3 className="text-xl font-semibold mb-2">Outsourcing & Accounting</h3>
            <p className="text-gray-600">
              Bookkeeping, payroll management, and virtual CFO services to streamline your accounting and financial processes.
            </p>
          </div>

          {/* Corporate Law & Secretarial */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-md">
            <div className="service-icon text-4xl">📜</div>
            <h3 className="text-xl font-semibold mb-2">Corporate Law & Secretarial</h3>
            <p className="text-gray-600">
              Corporate formation, company secretarial compliance, legal advisory on corporate governance, and regulatory filings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
