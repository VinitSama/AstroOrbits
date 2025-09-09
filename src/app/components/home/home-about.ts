import { IAboutCard } from "../../interfaces/iabout-card";
import { IFAQCard } from "../../interfaces/ifaq-card";

export const homeAboutCard: IAboutCard = {
    title: "AstroOrbits – Free Kundli, Horoscope, Tarot & Astrology Guidance",
    column1: `
      <div><h2>Welcome to AstroOrbits – Your Trusted Astrology & Spiritual</h2></div>
      <div><h3>Best astrology site India</h3></div>
      <div>
        AstroOrbits brings the wisdom of authentic Vedic astrology to your fingertips. Every prediction is crafted by experienced astrologers with decades of practice, blending ancient knowledge with modern-day guidance to help you make informed decisions in love, career, health, and life. Unlike platforms that rely on automation, our insights are personally created by certified astrologers, ensuring a depth of cultural understanding and spiritual sensitivity that technology alone cannot match.
      </div>
      <div><h3>Why Choose AstroOrbits?</h3></div>
      <div>
        <ul>
          <li>Always Free – No subscriptions, hidden charges, or upgrade pressures.</li>
          <li>Human-Crafted Predictions – Zero AI content; every reading is prepared by expert astrologers.</li>
          <li>Trusted Vedic Tradition – Based on classical texts like Brihat Parashara Hora Shastra & Saravali.</li> 
          <li>Culturally Aligned – Guidance tailored for Indian lifestyle, traditions, and values.</li> 
          <li>Complete Privacy – Your details remain encrypted, never shared.</li>
        </ul>
      </div>
      <div><h3>Free Astrology Services</h3></div>
      <div>
        <ul>
          <li><a href="kundli">Personalized Kundli (Birth Chart) Analysis</a> – Detailed charts with 16+ divisional breakdowns.</li> 
          <li><a href="kundli-matching">Kundli Matching</a> – In-depth 36-point compatibility for marriage.</li> 
          <li><a href="kundli">Dasha Predictions</a> – Life events decoded through Vimshottari & Yogini dashas.</li>
          <li><a href="kundli">Dosha Analysis & Remedies</a> – Insights into Mangal, Kaal Sarp, Pitra doshas.</li> 
          <li><a href="">Daily, Weekly & Monthly Horoscopes</a> – Fresh predictions for clarity in everyday life.</li> 
          <li><a href="">Free Panchang</a> – Complete Hindu calendar with auspicious timings.</li>
        </ul>
      </div>
      <div><h3>Specialized Guidance for Life’s Key Areas</h3></div>
      <div>
        <ul>
          <li><a href="">Love Horoscope</a> – Understand relationships and compatibility.</li> 
          <li><a href="">Career Horoscope</a> – Plan professional growth and right timing.</li> 
          <li><a href="">Finance Horoscope</a> – Gain clarity on wealth, investments, and savings.</li> 
          <li><a href="">Health Horoscope</a> – Planetary influences on mind-body balance.</li>
        </ul>
      </div>
    `,
    column2: `
      <div><h3>Spiritual Tools & Resources</h3></div>
      <div>
        <ul>
          <li><a href="">Tarot Readings</a> – One-card, three-card, and Celtic Cross spreads.
          <li><a href="">Numerology Calculator</a> – Discover your life path number, lucky colors, and mantras. 
          <li><a href="">Vastu Guidance</a> – Balance energies in home and workspace. 
          <li><a href="">Love Compatibility Tool</a> – Check compatibility using Vedic principles.
        </ul>
      </div>
      <div><h3>Our Expert Methodology</h3></div>
      <div>
        <ul>
          <li>Certified Vedic Astrologers with 15–20+ years of consulting experience.</li> 
          <li>Specialists in Parashara, Jaimini, and Saravali traditions.</li> 
          <li>Cross-verified with Swiss Ephemeris & astronomical software.</li> 
          <li>Regular accuracy audits and client feedback integration.</li> 
          <li>Professional ethics with absolute confidentiality.</li>
        </ul>
      </div>
      <div><h3>How It Works</h3></div>
      <div>
        <ol>
          <li>Enter your birth details.</li> 
          <li>Receive instant analysis & insights.</li>
          <li>Get remedies, mantras, and guidance.</li> 
          <li>Make life decisions with clarity.</li>
        </ol>
      </div>
      <div><h3>Privacy & Security Commitment</h3></div>
      <div>
        <ul>
          <li>Bank-level encryption for all personal data.</li> 
          <li>No third-party sharing under any circumstances.</li> 
          <li>Transparent policies with full professional discretion.</li>
        </ul>
      </div>
    `
  };

export const homeFaqCard: IFAQCard[] = [
    {
        ques: `Is AstroOrbits really free?`,
        ans: `Yes. All services are permanently free, supported by donations and ethical partnerships.`,
    },
    {
        ques: `How accurate are the predictions?`,
        ans: `Accuracy depends on correct birth details. Our astrologers merge classical Vedic methods with modern astronomy for precise guidance.`,
    },
    {
        ques: `Will my data remain safe?`,
        ans: `Absolutely. Your details are encrypted, stored securely, and never shared.`,
    },
    {
        ques: `Can digital astrology match traditional methods?`,
        ans: `We combine computational precision with human intuition, often delivering more reliable results than hand-drawn charts.`,
    },
];