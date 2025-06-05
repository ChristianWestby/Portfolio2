export default function ProjectLinks() {
  return (
    <section className="w-full max-w-3xl mx-auto text-center mt-12 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Utvalgte prosjekter</h2>

      <ul className="space-y-4">
        <li>
          <a
            href="https://ditt-lenkedomain.no/js-frameworks"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript Frameworks – Prosjekt
          </a>
        </li>
        <li>
          <a
            href="https://ditt-lenkedomain.no/semesterproject2"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Semester Project 2
          </a>
        </li>
        <li>
          <a
            href="https://ditt-lenkedomain.no/examproject2"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Exam Project 2
          </a>
        </li>
      </ul>
    </section>
  );
}