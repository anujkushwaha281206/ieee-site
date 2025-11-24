import React from 'react';
import Logo from './Logo.png';
//name the img Logo
import './About.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error) {
    console.error('Caught error in About component:', error);
    console.error('If you see "Invalid hook call": run `npm ls react && npm ls react-dom` and dedupe/reinstall duplicates.');
  }
  render() {
    if (this.state.hasError) {
      return (
        <section className="about" style={{ padding: 24, fontFamily: 'system-ui, Arial' }}>
          <h3 style={{ color: '#b91c1c' }}>Section failed to render</h3>
          <p>An error occurred while rendering About. Open the console for remediation steps.</p>
          <details style={{ whiteSpace: 'pre-wrap', background: '#f3f4f6', padding: 12, borderRadius: 6 }}>
            {String(this.state.error)}
          </details>
        </section>
      );
    }
    return this.props.children;
  }
}

const About = () => {
  const styles = {
    section: {
      padding: '48px 16px',
      background: 'linear-gradient(135deg, #0f172a 0%, #001f3f 100%)',
      color: '#e6eef8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      maxWidth: 1000,
      width: '100%',
      display: 'flex',
      gap: 32,
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    card: {
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 12,
      padding: 24,
      flex: '1 1 360px',
      boxShadow: '0 6px 20px rgba(2,6,23,0.6)',
      minWidth: 280,
    },
    heading: {
      margin: 0,
      fontSize: 28,
      lineHeight: 1.1,
      color: '#ffffff',
    },
    paragraph: {
      marginTop: 12,
      marginBottom: 18,
      color: '#cfe6ff',
      fontSize: 15,
      lineHeight: 1.6,
    },
    avatarWrap: {
      width: 180,
      height: 180,
      borderRadius: 12,
      background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 180px',
      boxShadow: '0 8px 30px rgba(124,58,237,0.25)',
      minWidth: 140,
    },
    cta: {
      display: 'inline-block',
      padding: '10px 16px',
      background: '#06b6d4',
      color: '#01213a',
      borderRadius: 8,
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 14,
    },
    small: {
      fontSize: 13,
      color: '#b9d7ff',
      marginTop: 8,
    },
  };

  return (
    <section id="about" style={styles.section} aria-label="About IEEE student branch at RGPV">
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>About Us</h2>
          <p style={styles.paragraph}>
            We are the IEEE student branch at RGPV — a welcoming community of students passionate about
            technology, innovation, and hands-on learning. We run workshops, hackathons, and projects to help
            members grow technical and professional skills.
          </p>
          <a href="#contact" style={styles.cta}>Get Involved</a>
          <div style={styles.small}>Open to all majors · Events, mentorship, and projects</div>
        </div>
        <div style={styles.avatarWrap} aria-hidden="true">
          <img src={Logo} alt="IEEE logo" style={{ width: 110, height: 110, borderRadius: 12 }} />
        </div>
      </div>
    </section>
  );
};

export default function AboutWithBoundary() {
  return (
    <ErrorBoundary>
      <About />
    </ErrorBoundary>
  );
}
