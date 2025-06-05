import BrLine from '@comp/BrLine'
import ProjectLinks from '@comp/ProjectLinks'
import LogoChristian from '@comp/LogoChristian'
import Footer from '@comp/Footer'
import Section from '@comp/Section'

export default function Home() {
  return (
    <div className="bg-black text-beige min-h-screen px-4 py-12 flex flex-col items-center">
     <LogoChristian />
      <h1 className="text-3xl md:text-4xl font-bold">Christian Westby</h1>
      <BrLine />
      <p className="text-lg mt-2">Jr. Front-End Developer</p>
      <BrLine />
      <p className="text-sm">Velkommen til min portefølje!</p>
      <BrLine />
      <p className="text-sm">Her kan du se mine prosjekter og erfaringer.</p>
      <BrLine />
      <p className="text-sm">
        Ta gjerne kontakt for samarbeid eller spørsmål.
      </p>
      <BrLine />
      <p className="text-sm">
        E-post:{" "}
        <a href="mailto:christian@example.com" className="underline hover:opacity-80">
          christian@example.com
        </a>
      </p>

      {/* Prosjektlenker under tekst */}
      <BrLine />
      <Section title="Mine prosjekter">
      <ProjectLinks />
      </Section>
      <BrLine />
      <Footer />
    </div>
  )
}