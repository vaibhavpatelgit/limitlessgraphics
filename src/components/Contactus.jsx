// components/ContactSection.jsx
import { useState } from "react";
import styles from "./ContactSection.module.css";

const ContactSectionUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h1 className={styles.companyName}>Limitless Grz</h1>
          <p className={styles.tagline}>Image is everything</p>
          <p className={styles.description}>
            Full-service graphics for vet glass. In-house design and
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Get in touch</h2>
            <ul>
              <li>
                <strong>CALL</strong> +1 (555) 123-4567
              </li>
              <li>
                <strong>EMAIL</strong> hello@limitlessgrz.com
              </li>
              <li>
                <strong>VISIT</strong> 401
              </li>
            </ul>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone:</label>
                <div className={styles.phoneInput}>
                  <span className={styles.phonePrefix}>+1</span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="555"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionUs;
