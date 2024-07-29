import React from 'react';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Your Company Name</h1>
        <p className="text-lg">Your reliable partner in helping monitor defendants out on bond and probation. Our innovative tool aids prosecuting attorneys in Missouri by automatically searching Casenet weekly, identifying those who violate the terms of their release by picking up new cases. Our mission is to arm prosecutors with the information to hold defendants accountable for not committing new law violations while their cases are pending, thus helping limit potential dangers to the community.</p>
      </header>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p>At Your Company Name, we identified that it is difficult to know what defendants are doing in other jurisdictions in Missouri. Our team is committed to delivering the monitoring tools to prosecuting attorneys to uphold the Court’s conditions. Because justice delayed is justice denied, we search Casenet automatically every week, instead of waiting for information to be shared by chance to an attorney.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside">
          <li>Automated Search: Our tool conducts weekly searches of the Casenet database, identifying individuals who have new cases.</li>
          <li>Reporting: Receive detailed reports of all defendants that have broken the terms of their bond or probation, ensuring you stay informed and prepared.</li>
          <li>Document Creation: Our tool can generate bond revocation motions, ready for submission to the court, streamlining the legal process for prosecuting attorneys and their staff.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Reviews</h2>
        <div className="bg-white p-4 rounded shadow">
          <p><strong>Sarah R.:</strong> &ldquo;This tool has significantly streamlined our process, saving us time and ensuring we stay on top of violations. Highly recommend!&rdquo;</p>
        </div>
        <div className="bg-white p-4 rounded shadow mt-4">
          <p><strong>Bradley D.:</strong> &ldquo;An invaluable resource for our office. The automated searches and document creation have made a huge difference in our efficiency.&rdquo;</p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Pricing</h2>
        <ul className="list-disc list-inside">
          <li>Search 100: Up to 100 names searched. $50 per month.</li>
          <li>Docs 100: Up to 100 names searched, and documents created. $70 per month.</li>
          <li>Search 500: Up to 500 names searched. $120 per month.</li>
          <li>Docs 500: Up to 500 names searched, and documents created. $200 per month.</li>
          <li>Contact us if you need more than 500 names or for custom solutions.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p>Have questions or need more information? Reach out to us at [Your Contact Information]. Our team is here to assist you and provide the support you need to keep your community safe.</p>
      </section>
      
      <div className="flex justify-center mt-8">
        <button className="mr-4 bg-blue-500 text-white py-2 px-4 rounded">Request a Demo</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Free Trial</button>
      </div>
    </div>
  );
}
