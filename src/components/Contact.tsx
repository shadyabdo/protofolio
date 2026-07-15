import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Trash2, Milestone } from 'lucide-react';
import { HERO_DATA } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const { scrollY } = useScroll();

  // Gentle drifting for contact elements
  const contactDriftY = useTransform(scrollY, [2500, 4800], [0, -60]);

  // Sent state & list of messages in local storage
  const [isSent, setIsSent] = useState(false);
  const [savedMessages, setSavedMessages] = useState<ContactMessage[]>([]);
  const [showLogModal, setShowLogModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('hassan_portfolio_messages');
    if (stored) {
      try {
        setSavedMessages(JSON.parse(stored));
      } catch (err) {
        console.error('Failed to parse messages', err);
      }
    }
  }, []);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!firstName.trim()) tempErrors.firstName = 'First name is required';
    if (!lastName.trim()) tempErrors.lastName = 'Last name is required';
    if (!email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!message.trim()) {
      tempErrors.message = 'Message cannot be empty';
    } else if (message.length < 10) {
      tempErrors.message = 'Please write a message of at least 10 characters';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newMessage: ContactMessage = {
      id: 'msg-' + Date.now(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toLocaleString()
    };

    const updated = [newMessage, ...savedMessages];
    setSavedMessages(updated);
    localStorage.setItem('hassan_portfolio_messages', JSON.stringify(updated));

    setIsSent(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setErrors({});

    // Reset success animation after 5 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 5000);
  };

  const clearMessages = () => {
    localStorage.removeItem('hassan_portfolio_messages');
    setSavedMessages([]);
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative Parallax Background shapes */}
      <motion.div 
        style={{ y: contactDriftY }}
        className="absolute bottom-[-10%] left-[-15%] w-[500px] h-[500px] bg-pastel-blue/15 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        style={{ y: contactDriftY }}
        className="absolute top-[-10%] right-[-15%] w-[500px] h-[500px] bg-pastel-pink/15 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-vibrant-blue text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200/40 shadow-3xs">
            <Mail className="w-3.5 h-3.5 text-vibrant-blue animate-pulse" />
            <span>Connect</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-dark mb-4">
            Contact Me.
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-sans max-w-lg">
            Have an exciting idea or project in mind? Let's connect and build something exceptional together. Fill in the form or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-5xl mx-auto">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-b from-white to-white/40 backdrop-blur-xl rounded-[32px] p-8 md:p-10 border border-white/60 shadow-lg relative">
              
              {/* Success Notification overlay */}
              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="absolute inset-4 bg-white rounded-2xl z-20 flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-4 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-neutral-dark mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6 font-sans">
                      Thank you for reaching out! I appreciate your message and will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="px-6 py-3 bg-neutral-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* First Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Hassan"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50/40 text-sm outline-hidden border transition-all duration-300 ${
                        errors.firstName ? 'border-red-300 focus:bg-white' : 'border-gray-200/60 focus:border-brand-red focus:bg-white'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Elsaid"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50/40 text-sm outline-hidden border transition-all duration-300 ${
                        errors.lastName ? 'border-red-300 focus:bg-white' : 'border-gray-200/60 focus:border-brand-red focus:bg-white'
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hassan@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50/40 text-sm outline-hidden border transition-all duration-300 ${
                      errors.email ? 'border-red-300 focus:bg-white' : 'border-gray-200/60 focus:border-brand-red focus:bg-white'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project, timelines, or just say hello..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50/40 text-sm outline-hidden resize-none border transition-all duration-300 ${
                      errors.message ? 'border-red-300 focus:bg-white' : 'border-gray-200/60 focus:border-brand-red focus:bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full font-display py-4 bg-neutral-dark hover:bg-zinc-800 text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Submit Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Direct Contact Info with subtle aesthetic integration */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            <div className="bg-gradient-to-br from-warm-white/60 to-warm-peach/40 rounded-[32px] p-8 border border-white/40 shadow-xs space-y-8 flex-1 relative overflow-hidden">
              {/* Dynamic decorative backdrop light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-pastel-pink/20 rounded-full blur-xl pointer-events-none"></div>
              
              <div>
                <h3 className="font-display text-2xl font-extrabold text-neutral-dark mb-1">Direct Reach</h3>
                <p className="text-gray-400 text-xs">Feel free to message or contact me anytime</p>
              </div>

              <div className="space-y-6">
                {/* Email Detail with pastel blue */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-pastel-blue text-vibrant-blue flex items-center justify-center border border-white shadow-3xs shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Email Address</h4>
                    <a href="mailto:massan@gmail.com" className="text-sm font-bold text-neutral-dark hover:text-brand-red transition-colors">
                      massan@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Detail with pastel pink */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-pastel-pink text-pink-700 flex items-center justify-center border border-white shadow-3xs shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Phone Call</h4>
                    <a href="tel:+821236758" className="text-sm font-bold text-neutral-dark hover:text-brand-red transition-colors">
                      +82-123 6758
                    </a>
                  </div>
                </div>

                {/* Location Detail with pastel green */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-pastel-green text-emerald-800 flex items-center justify-center border border-white shadow-3xs shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Office Location</h4>
                    <p className="text-sm font-bold text-neutral-dark">
                      Distxcoe, Graon, +853-608-3580
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Submissions Log Modal */}
      <AnimatePresence>
        {showLogModal && (
          <div className="fixed inset-0 bg-neutral-dark/45 backdrop-blur-xs flex items-center justify-center z-50 p-6">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col shadow-xl border border-gray-100/50"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100/50 mb-4">
                <h3 className="font-display text-lg font-bold text-neutral-dark">Local Message Logs</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={clearMessages}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-md cursor-pointer"
                    title="Clear All Submissions"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setShowLogModal(false)}
                    className="text-sm font-bold text-gray-400 hover:text-neutral-dark cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 pr-1 font-sans">
                {savedMessages.length === 0 ? (
                  <p className="text-center py-10 text-xs text-gray-400 font-mono">No submissions logged locally.</p>
                ) : (
                  savedMessages.map((msg) => (
                    <div key={msg.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100/50 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
                        <span>{msg.createdAt}</span>
                        <span>{msg.email}</span>
                      </div>
                      <h4 className="text-xs font-bold text-neutral-dark">From: {msg.firstName} {msg.lastName}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed bg-white p-2.5 rounded-lg border border-gray-100/50">{msg.message}</p>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
