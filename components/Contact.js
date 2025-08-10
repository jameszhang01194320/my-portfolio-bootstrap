// components/Contact.js
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-body">
      <div className="container">
        <div className="row">
          {/* Map Section */}
          <div className="col-md-6 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.250557297801!2d-122.48312018468128!3d37.78125557975836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587d6e6a1f0a5%3A0x6b87d6b8b0e7d6a5!2s220%20Lobos%20St%2C%20San%20Francisco%2C%20CA%2094112!5e0!3m2!1sen!2sus!4v1625078512345!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="card mt-3 shadow-sm">
              <div className="card-body">
                <h5 className="mb-3 fw-bold">Say hello</h5>
                <p className="mb-2">
                  📍 <strong>220 Lobos St, San Francisco, CA 94112</strong>
                </p>
                <p className="mb-2">
                  ✉️{" "}
                  <a href="mailto:wuab@yahoo.com" className="link-body-emphasis">
                    wuab@yahoo.com
                  </a>
                </p>
                <p className="mb-0">
                  🐙{" "}
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-body-emphasis me-3"
                  >
                    GitHub
                  </a>
                  💼{" "}
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-body-emphasis"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-4">Want to know more? Lets talk</h3>
            {/* ✅ 将 Formspree 端点 URL 添加到 action 属性 */}
            <form action="https://formspree.io/f/mzzvygwd" method="POST">
              <div className="mb-3 d-flex gap-3">
                <input type="text" name="name" className="form-control" placeholder="Your Name" />
                <input type="email" name="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea name="message" className="form-control" rows="5" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-warning px-4">
                Send Button
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}