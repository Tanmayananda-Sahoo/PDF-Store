import { Link } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlineGlobe, HiOutlineBookOpen, HiOutlineUsers, HiOutlineShieldCheck } from 'react-icons/hi';
import { stats } from '../data/books';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <HiOutlineBookOpen size={24} />,
      title: 'Quality First',
      desc: 'Every PDF in our library is meticulously formatted and optimized for the best reading experience on any device.',
    },
    {
      icon: <HiOutlineGlobe size={24} />,
      title: 'Accessible Knowledge',
      desc: 'We believe great books should be accessible to everyone. That\'s why we offer digital formats at fair prices worldwide.',
    },
    {
      icon: <HiOutlineUsers size={24} />,
      title: 'Community Driven',
      desc: 'Our recommendations and curation are shaped by our community of over 2 million passionate readers.',
    },
    {
      icon: <HiOutlineShieldCheck size={24} />,
      title: 'Trust & Privacy',
      desc: 'Your data is yours. We use bank-level encryption and never share your reading habits with third parties.',
    },
  ];

  const team = [
    { name: 'Alexandra Reid', role: 'Founder & CEO', initials: 'AR' },
    { name: 'Marcus Chen', role: 'CTO', initials: 'MC' },
    { name: 'Sofia Ruiz', role: 'Head of Content', initials: 'SR' },
    { name: 'David Kim', role: 'Head of Design', initials: 'DK' },
  ];

  return (
    <main className="about" id="about-page">
      {/* Header */}
      <section className="about__header">
        <div className="container">
          <div className="about__header-content">
            <span className="badge badge--accent animate-fade-in-up">Our Story</span>
            <h1 className="text-hero about__title animate-fade-in-up animate-delay-1">
              We're building the<br />
              future of reading.
            </h1>
            <p className="text-body about__subtitle animate-fade-in-up animate-delay-2">
              PageVault was founded in 2020 with a simple mission: make high-quality digital books accessible to everyone, everywhere. Today, we serve over 2 million readers across 150+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about__stats">
        <div className="container">
          <div className="about__stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about__stat-card" id={`about-stat-${index}`}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about__mission section">
        <div className="container container--narrow">
          <div className="about__mission-content text-center">
            <h2 className="text-h2">Our mission</h2>
            <p className="about__mission-text">
              We believe that knowledge should be borderless. Every book we sell is an opportunity for someone, somewhere in the world, to learn something new, explore a new perspective, or simply lose themselves in a great story. Our commitment to quality formatting and fair pricing ensures that the digital reading experience matches—and often exceeds—the physical one.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about__values section section--gray">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <span className="badge badge--accent">Our Values</span>
            <h2 className="text-h2" style={{ marginTop: '16px' }}>What drives us</h2>
          </div>
          <div className="about__values-grid">
            {values.map((value, index) => (
              <div key={index} className="about__value-card" id={`value-${index}`}>
                <div className="about__value-icon">{value.icon}</div>
                <h3 className="about__value-title">{value.title}</h3>
                <p className="about__value-desc text-small">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about__team section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <span className="badge badge--accent">Our Team</span>
            <h2 className="text-h2" style={{ marginTop: '16px' }}>Meet the people behind PageVault</h2>
          </div>
          <div className="about__team-grid">
            {team.map((member, index) => (
              <div key={index} className="about__team-card" id={`team-${index}`}>
                <div className="about__team-avatar">{member.initials}</div>
                <h3 className="about__team-name">{member.name}</h3>
                <p className="about__team-role text-small">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta section">
        <div className="container">
          <div className="about__cta-inner text-center">
            <h2 className="text-h2">Ready to start reading?</h2>
            <p className="text-body" style={{ marginTop: '12px', maxWidth: '460px', margin: '12px auto 0' }}>
              Join millions of readers who trust PageVault for their digital book needs.
            </p>
            <div style={{ marginTop: '32px' }}>
              <Link to="/store" className="btn btn--dark btn--lg" id="about-cta-btn">
                Explore the Store
                <HiOutlineArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
