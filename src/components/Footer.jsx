export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10 mt-12">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-sm">
        {/* Om meg */}
        <div>
          <h2 className="font-semibold mb-2">Christian Westby</h2>
          <p className="text-gray-400">
            Jr. Frontend Developer med interesse for visuell kode og digitale opplevelser.
          </p>
        </div>

        {/* Kontaktinfo */}
        <div>
          <h2 className="font-semibold mb-2">Kontakt</h2>
          <ul className="text-gray-400 space-y-1">
            <li>E-post: <a href="mailto:christianwestby@stud.noroff.no">christianwestby@stud.noroff.no</a></li>
            <li>Telefon: +47 999 88 777</li>
            <li>LinkedIn: <a href="https://linkedin.com/in/christianwestby" target="_blank" rel="noopener noreferrer">/christianwestby</a></li>
          </ul>
        </div>

        {/* Lenker */}
        <div>
          <h2 className="font-semibold mb-2">Lenker</h2>
          <ul className="text-gray-400 space-y-1">
            <li><a href="/about">Om meg</a></li>
            <li><a href="/projects">Prosjekter</a></li>
            <li><a href="/contact">Kontakt</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} Christian Westby. All rights reserved.
      </div>
    </footer>
  );
}