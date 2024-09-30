import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Customer Care Section */}
        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#newsletters">Newsletters</a></li>
            <li><a href="#subscriptions">Subscriptions</a></li>
            <li><a href="#apps">Mobile Apps</a></li>
            <li><a href="#podcasts">Podcasts</a></li>
            <li><a href="#rss">RSS Feeds</a></li>
          </ul>
        </div>

        {/* Corporate Section */}
        <div className="footer-section">
          <h4>Corporate</h4>
          <ul>
            <li><a href="#advertise">Advertise with Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#partners">Business Partners</a></li>
            <li><a href="#press">Press Releases</a></li>
          </ul>
        </div>

        {/* More Links Section */}
        <div className="footer-section">
          <h4>More Links</h4>
          <ul>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#accessibility">Accessibility</a></li>
            <li><a href="#site-map">Site Map</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#store">Store</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2024 Your News Company. All rights reserved.</p>
        <p><a href="#terms">Terms of Use</a> | <a href="#privacy">Privacy Policy</a> | <a href="#ad-choices">Ad Choices</a></p>
      </div>
    </footer>
  );
};

export default Footer;
