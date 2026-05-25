import { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const InfoCard = ({ icon, label, children }) => (
  <div className="cp__info-card">
    <div className="cp__info-icon" aria-hidden="true">{icon}</div>
    <div>
      <div className="cp__info-label">{label}</div>
      <div className="cp__info-val">{children}</div>
    </div>
  </div>
);

const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9z"/>
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-7-7.58-7-13a7 7 0 0 1 14 0c0 5.42-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/>
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);

const INITIAL = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.body.classList.add('nav-solid', 'nav-scrolled');
    return () => document.body.classList.remove('nav-solid', 'nav-scrolled');
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Please enter your name';
    if (!form.email.trim())   e.email   = 'Please enter your email';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) e.message = 'Please enter your message';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(err => ({ ...err, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    // Simulate send — wire up to Formspree / EmailJS / your backend here
    await new Promise(r => setTimeout(r, 1000));
    setSending(false);
    setSubmitted(true);
    setForm(INITIAL);
  };

  return (
    <div className="cp">
      <TopBar />
      <Nav />

      {/* Hero */}
      <section className="cp__hero">
        <div className="container">
          <p className="cp__eyebrow">Get in touch</p>
          <h1 className="h-display cp__heading">We'd love to <em>hear from you.</em></h1>
          <p className="lead cp__sub">
            Whether you have a question, need prayer, or want to visit one of our branches —
            we're here for you. Reach out and our team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* Main grid */}
      <section className="cp__body">
        <div className="container cp__grid">

          {/* Left — contact info */}
          <div className="cp__info">
            <h2 className="cp__info-heading">Contact details</h2>

            <InfoCard icon={<IconEmail />} label="Email">
              <a href="mailto:ourjesuslives@gmail.com">ourjesuslives@gmail.com</a>
            </InfoCard>

            <InfoCard icon={<IconPhone />} label="Phone">
              <a href="tel:+447765450545">+44 7765 450545</a>
            </InfoCard>

            <InfoCard icon={<IconPin />} label="Main Address">
              <span>A6135, Sheffield S5 7AF</span>
              <span>United Kingdom</span>
            </InfoCard>

            <InfoCard icon={<IconClock />} label="Sunday Services">
              <span>Every Sunday</span>
              <span>Across all our branches</span>
            </InfoCard>

            <div className="cp__social">
              <p className="cp__social-label">Follow us</p>
              <div className="cp__social-links">
                <a href="#" className="cp__social-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Facebook
                </a>
                <a href="#" className="cp__social-btn" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 6.2a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.5.2a2.8 2.8 0 0 0-2 2C1.3 7.8 1.3 12 1.3 12s0 4.2.2 5.8a2.8 2.8 0 0 0 2 2C5.1 20 12 20 12 20s6.9 0 8.5-.2a2.8 2.8 0 0 0 2-2c.2-1.6.2-5.8.2-5.8s0-4.2-.2-5.8zM9.8 15.2V8.8l6 3.2-6 3.2z"/></svg>
                  YouTube
                </a>
                <a href="#" className="cp__social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                  Instagram
                </a>
                <a href="#" className="cp__social-btn" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9s-.5-.1-.7.1-.7.9-.9 1.1-.3.2-.6 0a8 8 0 0 1-2.3-1.4 8.4 8.4 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.1-.3.2-.5s0-.4 0-.5-.6-1.6-.9-2.1-.4-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c.7.3 1.3.5 1.7.6a4 4 0 0 0 1.9.1 3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="cp__form-wrap">
            {submitted ? (
              <div className="cp__success">
                <div className="cp__success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <h3>Message sent!</h3>
                <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                <button className="btn btn--primary" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <form className="cp__form" onSubmit={handleSubmit} noValidate>
                <h2 className="cp__form-heading">Send us a message</h2>

                <div className="cp__row">
                  <div className={`cp__field${errors.name ? ' cp__field--err' : ''}`}>
                    <label htmlFor="cp-name">Full name <span>*</span></label>
                    <input id="cp-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} />
                    {errors.name && <span className="cp__err">{errors.name}</span>}
                  </div>
                  <div className={`cp__field${errors.email ? ' cp__field--err' : ''}`}>
                    <label htmlFor="cp-email">Email address <span>*</span></label>
                    <input id="cp-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    {errors.email && <span className="cp__err">{errors.email}</span>}
                  </div>
                </div>

                <div className="cp__row">
                  <div className="cp__field">
                    <label htmlFor="cp-phone">Phone number <span className="cp__opt">(optional)</span></label>
                    <input id="cp-phone" name="phone" type="tel" placeholder="+44 0000 000000" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className={`cp__field${errors.subject ? ' cp__field--err' : ''}`}>
                    <label htmlFor="cp-subject">Subject <span>*</span></label>
                    <select id="cp-subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a subject…</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Prayer Request">Prayer Request</option>
                      <option value="Plan a Visit">Plan a Visit</option>
                      <option value="Donations & Giving">Donations &amp; Giving</option>
                      <option value="Branch Information">Branch Information</option>
                      <option value="Media & Press">Media &amp; Press</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && <span className="cp__err">{errors.subject}</span>}
                  </div>
                </div>

                <div className={`cp__field${errors.message ? ' cp__field--err' : ''}`}>
                  <label htmlFor="cp-message">Message <span>*</span></label>
                  <textarea id="cp-message" name="message" rows="6" placeholder="Write your message here…" value={form.message} onChange={handleChange} />
                  {errors.message && <span className="cp__err">{errors.message}</span>}
                </div>

                <button className="btn btn--primary cp__submit" type="submit" disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message →'}
                </button>

                <p className="cp__privacy">
                  We respect your privacy. Your details will only be used to respond to your enquiry.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Map strip */}
      <section className="cp__map-strip">
        <iframe
          src="https://maps.google.com/maps?q=A6135,+Sheffield+S5+7AF&output=embed&z=14"
          title="Our Jesus Lives Ministry — Sheffield"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      <Footer />
    </div>
  );
}
