import './App.css'

const completedCourses = [
  {
    code: 'CP264',
    title: 'Data Structures II',
    grade: 'A',
    credit: '0.50',
    focus:
      'AVL trees, heaps, tries, hash tables, and graph traversals—profiled until time and space matched theoretical bounds.',
  },
  {
    code: 'CP216',
    title: 'Intro to Microprocessors',
    grade: 'A-',
    credit: '0.50',
    focus:
      'Microcontroller architecture, C + assembly interoperability, memory-mapped I/O, and interrupt-driven control loops.',
  },
  {
    code: 'CP220',
    title: 'Digital Electronics',
    grade: 'A+',
    credit: '0.50',
    focus:
      'Boolean minimization, combinational + sequential circuit design, and timing analysis before synthesizing to hardware.',
  },
  {
    code: 'CP213',
    title: 'Object-Oriented Programming',
    grade: 'A-',
    credit: '0.50',
    focus:
      'Medium-sized Java systems with interfaces, generics, refactoring workflows, and unit tests driven by UML sketches.',
  },
  {
    code: 'CP214',
    title: 'Discrete Structures',
    grade: 'B',
    credit: '0.50',
    focus:
      'Proofs, combinatorics, relations, modular arithmetic, and logic that fuel correctness arguments for algorithms.',
  },
  {
    code: 'CP164',
    title: 'Data Structures I',
    grade: 'B+',
    credit: '0.50',
    focus:
      'Abstract data types, recursion, stacks, queues, and complexity analysis that ground every later systems assignment.',
  },
  {
    code: 'CP104',
    title: 'Intro to Programming',
    grade: 'A+',
    credit: '0.50',
    focus:
      'Structured C programming, decomposing problems into tiny functions, and practicing daily debugging reps with gdb and Valgrind.',
  },
  {
    code: 'MA103',
    title: 'Calculus I',
    grade: 'B',
    credit: '0.50',
    focus:
      'Limits, derivatives, integrals, and numerical approximations—useful when modelling error bounds for simulations.',
  },
  {
    code: 'MA122',
    title: 'Intro to Linear Algebra',
    grade: 'B-',
    credit: '0.50',
    focus:
      'Vector spaces, matrix factorizations, eigen-analysis, and geometric transformations that later drive graphics and ML intuition.',
  },
]

const inProgressCourses = [
  {
    code: 'CP312',
    title: 'Algorithm Design and Analysis I',
    credit: '0.50',
    focus:
      'Divide-and-conquer, greedy proofs, dynamic programming, and amortized analysis with written correctness proofs.',
  },
  {
    code: 'CP317',
    title: 'Software Engineering',
    credit: '0.50',
    focus:
      'Requirements elicitation, architectural styles, testing strategies, and CI/CD hygiene for team-sized products.',
  },
  {
    code: 'CP363',
    title: 'Database I',
    credit: '0.50',
    focus:
      'Relational algebra, SQL optimization, indexing, and transaction isolation—directly applicable to Supabase projects.',
  },
  {
    code: 'CP372',
    title: 'Computer Networks',
    credit: '0.50',
    focus:
      'Tracing packets through TCP/IP, congestion control, and socket-level programming to balance reliability and latency.',
  },
]

const projects = [
  {
    name: 'JellyCLI',
    link: 'https://github.com/daudk3/JellyCLI',
    description:
      'A fast, keyboard‑friendly TUI Jellyfin client written with Textual, with mpv playback, and resume/progress sync.',
    takeaways:
      'Experience building responsive terminal UIs, managing async media streams, and syncing playback states with Jellyfin APIs fuzzy search, and keyboard-centric UI design.',
  },
  {
    name: 'Flight Management System',
    link: 'https://github.com/daudk3/flight-management-system',
    description:
      'Full-stack flight operations tool built in React with Supabase backing bookings, and staff management functionality.',
    takeaways:
      'Typed React hooks, Supabase row-level security, audit-friendly logging, and dashboards that stay reactive to streaming data.',
  },
]

const interests = [
  {
    title: 'homelab identity',
    copy:
      'Personal Debian NAS/media server with LDAP-backed users, Authelia SSO, Dockerized services, reverse proxies, monitoring, and frequent hardware builds. It is my sandbox for testing secure auth flows and day-two ops without risking production.',
  },
  {
    title: 'software development',
    copy:
      'Shipping focused builds like JellyCLI and the Flight Management System keeps my React + TypeScript, API design, and testing muscles active while translating classroom theory into production-minded features.',
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
          I'm a third-year Computer Science student at Wilfrid Laurier University focused on software development and systems engineering. I pair my coursework with hands-on experience building and maintaining real-world systems, blending code, infrastructure, and automation. I'm comfortable working across Microsoft Entra ID, Azure, Linux environments, Docker, reverse proxies, and observability tooling.
        </p>
        <div className="cta-row">
          <a className="resume-button" href="https://resume.daudkhalid.ca" target="_blank" rel="noreferrer">
            download resume
          </a>
        </div>
      </header>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">build log</p>
          <h2>Projects that keep my hands on the keys</h2>
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
          <h2>What I spend time on after class</h2>
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

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">courses in progress · fall 2025</p>
          <h2>Dialling in deeper systems thinking</h2>
        </div>
        <div className="course-list">
          {inProgressCourses.map((course) => (
            <article key={course.code} className="course-card course-card--ghost">
              <header className="course-meta">
                <div className="course-id">
                  <span className="code">{course.code}</span>
                  <span className="divider">/</span>
                  <span className="title">{course.title}</span>
                </div>
                <div className="course-grade">
                  <span className="grade">IP</span>
                  <span className="credit">{course.credit} credits</span>
                </div>
              </header>
              <p className="course-focus">{course.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">coursework</p>
          <h2>Most recently completed courses</h2>
        </div>
        <div className="course-list">
          {completedCourses.map((course) => (
            <article key={course.code} className="course-card">
              <header className="course-meta">
                <div className="course-id">
                  <span className="code">{course.code}</span>
                  <span className="divider">/</span>
                  <span className="title">{course.title}</span>
                </div>
                <div className="course-grade">
                  <span className="grade">{course.grade}</span>
                  <span className="credit">{course.credit} credits</span>
                </div>
              </header>
              <p className="course-focus">{course.focus}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
