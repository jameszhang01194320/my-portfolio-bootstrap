// components/Contact.js
import React from "react";

export default function Contact() {
  return (
    <div className="container my-5" id="contact">
      <div className="row">
        {/* Map Section */}
        <div className="col-md-6 mb-4">
          <iframe
            src="https://www.google.com/maps?q=220+Lobos+St,+San+Francisco,+CA+94112&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Contact Info Box */}
          <div className="bg-dark text-light p-4 mt-3 rounded shadow-sm">
            <h5 className="mb-3 fw-bold">Say hello</h5>
            <p className="mb-2">
              📍 <strong>220 Lobos St, San Francisco, CA 94112</strong>
            </p>
            <p className="mb-2">
              ✉️ <a href="mailto:wuab@yahoo.com" className="text-light">wuab@yahoo.com</a>
            </p>
            <p className="mb-0">
              🐙 <a href="https://github.com/" target="_blank" className="text-light me-3">GitHub</a>
              💼 <a href="https://www.linkedin.com/" target="_blank" className="text-light">LinkedIn</a>
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-4">Want to know more? Let&apos;s talk</h3>
          <form>
            <div className="mb-3 d-flex gap-3">
              <input type="text" className="form-control" placeholder="Your Name" />
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn-warning px-4">
              Send Button
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
