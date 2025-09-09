import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    console.log({ name, email, subject, message });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b debug-header">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center debug-header-inner">
          <h1 className="text-5xl font-bold text-gray-900 mb-2 debug-header-title">Contact Us</h1>
          <nav className="text-sm text-gray-500 debug-header-nav">
            <span>Home</span> / <span>Contact Us</span>
          </nav>
          <div className="mx-auto max-w-2x2">
  <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
    <div className="aspect-[10/3]">
      <iframe
        className="h-full w-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9834.935088681053!2d-122.472866!3d37.803319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e1!3m2!1sen!2sus!4v1757400222918!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </div>
  </div>
</div>

        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between bg-white rounded-lg shadow-lg p-6">
          {/* Left Side: Contact Form */}
          <div className="w-full md:w-2/3 mb-6">
            <h2 className="text-2xl font-bold mb-4">Send Us Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border border-gray-300 p-2 w-full md:w-3/4 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-gray-300 p-2 w-full md:w-3/4 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="border border-gray-300 p-2 w-full md:w-3/4 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-gray-300 p-2 w-full md:w-3/4 rounded"
                  rows={4}
                />
              </div>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="w-full md:w-1/3 pl-0 md:pl-6">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium nisl feugiat nisl gravida, eget rutrum ligula placerat. Aenean id elit dolor. Suspendisse malesuada varius elit.
            </p>
            <h3 className="font-semibold">Our Office</h3>
            <p className="mb-2">Address: 106 Street, New City, United States.</p>
            <p className="mb-2">Phone: (0123) 245 9870</p>
            <p className="mb-2">Email: Mail@Example.com</p>
            <h3 className="font-semibold mt-4">Working Hours</h3>
            <p>Monday - Friday: 9am to 7pm</p>
            <p>Saturday: 9am to 2pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-900 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-2">Want To Work With Us?</h2>
        <p className="mb-6">Feel free to reach us with the contact form!</p>
        <button className="bg-transparent border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-900 transition-colors">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default ContactUs;