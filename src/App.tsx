import './App.css'

const projects = [
  {
    name: 'Flight Management System',
    link: 'https://github.com/daudk3/flight-management-system',
    description:
      'A full-stack flight booking and management application built with React and Supabase, supporting flight search, booking workflows, and role-based staff operations.',
    takeaways:
      'Implemented end-to-end booking workflows with Supabase authentication and authorization, client-side security checks, and relational data modeling; integrated Supabase Edge Functions to ingest real-time flight data from the Aviationstack API and populate normalized database schemas.',
  },
  {
    name: 'JellyCLI',
    link: 'https://github.com/daudk3/JellyCLI',
    description:
      'A cross-platform, keyboard-driven TUI client for Jellyfin, built with Textual and Python, providing authenticated media playback via mpv and seamless resume/progress synchronization.',
    takeaways:
      'Designed a modular client architecture separating API communication, data models, and command execution; implemented authenticated REST interactions, paginated data retrieval, playback state synchronization, and robust error handling for reliable client–server operation.',
  },
]


const interests = [
  {
    title: 'software development',
    copy:
      'Building and shipping projects such as JellyCLI and the Flight Management System gives me hands-on experience with TypeScript and JavaScript across Node.js and React, RESTful API design, relational data modeling, automated testing, and modular architecture, with an emphasis on correctness, maintainability, and production-ready code.',
  },
  {
    title: 'homelab identity',
    copy:
      'Personal Debian NAS/media server with LDAP-backed users, Authelia SSO, Dockerized services, reverse proxies, monitoring, and frequent hardware builds. It is my sandbox for testing secure auth flows and day-two ops without risking production.',
  },
  {
    title: 'devops & identity',
    copy:
      'Working across Microsoft Entra ID, Azure, Active Directory, Microsoft 365, and Alemba Service Manager to script onboarding workflows, troubleshoot federation, and keep identity tooling dependable.',
  },
]

function App() {
  return (
    <main className="page">
      <header className="hero">
        <h1>Daud Khalid</h1>
        <p className="lede">
          Computer Science student at Wilfrid Laurier University building and operating software systems end to end. I write production-oriented code, deploy and maintain Linux-based services, and automate infrastructure using Docker, reverse proxies, and monitoring tooling. My experience includes identity and access management with Microsoft Entra ID and Azure.        </p>
        <div className="cta-row">
          <a className="resume-button" href="https://resume.daudkhalid.ca" target="_blank" rel="noreferrer">
            download resume
          </a>
        </div>
      </header>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">build log</p>
          <h2>Build Log</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <header className="project-meta">
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  {project.name}
                </a>
              </header>
              <p className="project-description">{project.description}</p>
              <p className="project-takeaways">{project.takeaways}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">interests</p>
          <h2>Interests</h2>
        </div>
        <div className="interest-list">
          {interests.map((interest) => (
            <article key={interest.title} className="interest-card">
              <p className="interest-title">{interest.title}</p>
              <p className="interest-copy">{interest.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
