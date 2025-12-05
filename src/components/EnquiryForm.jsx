import { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // TODO: Replace with actual backend API call
    setTimeout(() => {
      console.log('Form data:', formData);
      setSubmitMessage('Thank you! We will contact you soon.');
      setIsSubmitting(false);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <div className="card p-4 md:p-6">
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
          Quick Enquiry
        </h3>
        <p className="text-sm text-gray-600">
          Get in touch with us
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              placeholder="Your name"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <div className="relative">
            <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              placeholder="10-digit number"
            />
          </div>
        </div>

        {/* Course Selection */}
        <div>
          <label htmlFor="course" className="block text-xs font-medium text-gray-700 mb-1">
            Course *
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
          >
            <option value="">Select course</option>
            <option value="d-el-ed">D.El.Ed</option>
            <option value="btc">BTC</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
            Message (Optional)
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-2.5 top-2.5 text-gray-400" size={16} />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
              placeholder="Your message..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 px-4 text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send size={16} />
              Submit Enquiry
            </>
          )}
        </button>

        {/* Success Message */}
        {submitMessage && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-3 py-2 rounded-lg text-center text-sm">
            {submitMessage}
          </div>
        )}
      </form>

      <p className="text-xs text-gray-500 mt-3 text-center">
        We'll get back to you within 24 hours
      </p>
    </div>
  );
};

export default EnquiryForm;
