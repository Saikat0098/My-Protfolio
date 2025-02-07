import React, { useRef, useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp, 
  FaPaperPlane,
  FaCopy
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [showCopied, setShowCopied] = useState({
    email: false,
    phone: false,
    whatsapp: false
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const contactInfo = {
    email: "saikatislam7659@gmail.com",
    phone: "+8801325210769",
    whatsapp: "+8801325210769"
  };

  const copyToClipboard = (type, value) => {
    navigator.clipboard.writeText(value);
    setShowCopied(prev => ({ ...prev, [type]: true }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, error: null, success: false });

    emailjs
      .sendForm(
        'service_icrog19',
        'template_yd0h825',
        form.current,
        {
          publicKey: 'ClPcXLcrC7ia_OrfH',
        }
      )
      .then(
        () => {
          setSubmitStatus({ loading: false, error: null, success: true });
          form.current.reset();
          setTimeout(() => setSubmitStatus(prev => ({ ...prev, success: false })), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setSubmitStatus({ 
            loading: false, 
            error: 'Failed to send message. Please try again.', 
            success: false 
          });
        }
      );
  };

  const ContactCard = ({ icon, title, value, type }) => (
    <div className="bg-purple-900/40 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="bg-pink-500/20 p-3 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-3">{value}</p>
          <button
            onClick={() => copyToClipboard(type, value)}
            className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors"
          >
            {showCopied[type] ? (
              <span className="text-green-400">Copied!</span>
            ) : (
              <>
                <FaCopy className="text-sm" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-purple-950/80 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries, collaboration opportunities, 
            or just to say hello. I'm always excited to connect with new people!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <ContactCard
              icon={<FaEnvelope className="text-2xl text-pink-500" />}
              title="Email"
              value={contactInfo.email}
              type="email"
            />
            <ContactCard
              icon={<FaPhone className="text-2xl text-pink-500" />}
              title="Phone"
              value={contactInfo.phone}
              type="phone"
            />
          </div>

          <div className="bg-purple-900/40 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full bg-purple-950/50 border border-purple-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full bg-purple-950/50 border border-purple-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  className="w-full bg-purple-950/50 border border-purple-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors h-32"
                  placeholder="Your message"
                  required
                />
              </div>
              {submitStatus.error && (
                <div className="text-red-500">{submitStatus.error}</div>
              )}
              {submitStatus.success && (
                <div className="text-green-500">Message sent successfully!</div>
              )}
              <button
                type="submit"
                disabled={submitStatus.loading}
                className={`bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors ${
                  submitStatus.loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FaPaperPlane />
                {submitStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;