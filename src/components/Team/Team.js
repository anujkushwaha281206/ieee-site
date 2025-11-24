import React from 'react';

// ErrorBoundary (class component — avoids hooks)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // Log helpful guidance to the console
    console.error('Caught render error in Team component:', error);
    console.error('If you see "Invalid hook call", common fixes:');
    console.error('  1) Ensure a single React copy: run `npm ls react` and `npm ls react-dom`');
    console.error('  2) If duplicates exist, try removing node_modules and lockfile and reinstalling');
    console.error('  3) For linked/local packages, list react as a peerDependency');
    console.error('  4) As a temporary CRA bypass only: add SKIP_PREFLIGHT_CHECK=true to .env');
  }
  render() {
    if (this.state.hasError) {
      return (
        <section style={{ padding: 24, fontFamily: 'system-ui, Arial' }}>
          <h3 style={{ color: '#b91c1c' }}>Component failed to render</h3>
          <p style={{ color: '#111827' }}>
            An error occurred while rendering this section. Open the developer console for remediation steps.
          </p>
          <details style={{ whiteSpace: 'pre-wrap', background: '#f3f4f6', padding: 12, borderRadius: 6 }}>
            {String(this.state.error)}
          </details>
        </section>
      );
    }
    return this.props.children;
  }
}

// Team content (no hooks used)
const TeamContent = () => {
  const styles = {
    section: { padding: '40px 16px', background: '#f8fafc', color: '#0f172a' },
    container: { maxWidth: 1000, margin: '0 auto', display: 'grid', gap: 16 },
    heading: { margin: 0, fontSize: 26 },
    members: { display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 12 },
    member: {
      flex: '1 1 200px',
      background: '#fff',
      borderRadius: 10,
      padding: 12,
      boxShadow: '0 4px 10px rgba(2,6,23,0.06)',
      display: 'flex',
      gap: 12,
      alignItems: 'center',
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 8,
      background: 'linear-gradient(135deg,#06b6d4,#7c3aed)',
      flexShrink: 0,
    },
    name: { margin: 0, fontSize: 15, fontWeight: 600 },
    role: { margin: 0, fontSize: 13, color: '#475569' },
  };

  return (
    <section id="team" style={styles.section} aria-label="Team">
      <div style={styles.container}>
        <h2 style={styles.heading}>Our Team</h2>
        <div style={styles.members}>
          <div style={styles.member}>
            <div style={styles.avatar} aria-hidden="true"></div>
            <div>
              <p style={styles.name}>Team Member 1</p>
              <p style={styles.role}>Role / Description</p>
            </div>
          </div>

          <div style={styles.member}>
            <div style={styles.avatar} aria-hidden="true"></div>
            <div>
              <p style={styles.name}>Team Member 2</p>
              <p style={styles.role}>Role / Description</p>
            </div>
          </div>

          <div style={styles.member}>
            <div style={styles.avatar} aria-hidden="true"></div>
            <div>
              <p style={styles.name}>Team Member 3</p>
              <p style={styles.role}>Role / Description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export wrapped component so rendering errors get caught and actionable guidance is shown
export default function Team() {
  return (
    <ErrorBoundary>
      <TeamContent />
    </ErrorBoundary>
  );
}
