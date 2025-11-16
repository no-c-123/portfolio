import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => setStatus('success'),
        () => setStatus('error')
      );
  };

  return (
    <section id="Contact" className="min-h-screen bg-[#0d0d0d] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Contáctame</h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-purple-500" />
              <span>leal.emiliano.hector@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500" />
              <span>Monterrey, México</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <input
            type="text"
            name="from_name"
            placeholder="Tu nombre"
            required
            className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Tu correo"
            required
            className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="6"
            required
            className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 text-white rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {status === 'sending' && (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}
