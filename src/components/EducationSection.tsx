import { education, publication } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Pendidikan dan publikasi lengkap (IPK, jurnal, volume, SINTA 4),
// sesuai preview. Keahlian kini di komponen SkillsSection terpisah.
export default function EducationSection() {
  return (
    <section id="pendidikan" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Pendidikan &" accent="Publikasi" />

          <div className="space-y-4 sm:space-y-5">
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <figure className="shrink-0">
                <img
                  src="/foto-fakhri.png"
                  alt="Foto formal Fakhri, Data Analyst lulusan S1 Teknik Informatika UIN Sultan Syarif Kasim Riau"
                  className="h-[196px] w-[196px] rounded-full object-cover object-top shadow-lg ring-4 ring-white md:h-[224px] md:w-[224px] lg:h-[252px] lg:w-[252px]"
                />
              </figure>
              <article className="w-full min-w-0 flex-1 rounded-[24px] border border-border bg-panel p-5 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-[clamp(1.25rem,5vw,1.5rem)] font-extrabold break-words text-ink">
                    {education.school}
                  </h3>
                  <p className="shrink-0 font-mono text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                    JUL 2022 — JUL 2026
                  </p>
                </div>
                <p className="mt-2 leading-relaxed break-words text-muted">
                  {education.degree} · {education.location}
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                  <p className="text-5xl leading-none font-extrabold tracking-tight text-ink">
                    {education.gpa.split('/')[0]}
                  </p>
                  <div>
                    <p className="text-sm leading-relaxed text-muted">IPK dari skala 4.00</p>
                    <p className="text-sm leading-relaxed text-muted">Lulusan Juli 2026</p>
                  </div>
                </div>
              </article>
            </div>

            <article className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase sm:tracking-[0.2em]">
                  {publication.kind}
                </p>
                <span className="rounded-full border border-amber/50 bg-amber/10 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-amber-soft">
                  {publication.accreditation}
                </span>
              </div>
              <h3 className="mt-4 text-lg leading-snug font-extrabold break-words text-ink">
                &ldquo;{publication.title}&rdquo;
              </h3>
              <p className="mt-3 leading-relaxed break-words text-muted">
                {publication.journal}
              </p>
              <p className="mt-1 font-mono text-xs font-semibold tracking-[0.14em] break-words text-muted uppercase">
                {publication.detail}
              </p>
              <a
                href={publication.doiUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background-soft px-3 py-1.5 font-mono text-xs font-semibold tracking-wide text-mint transition-colors hover:border-mint"
              >
                DOI: {publication.doi} ↗
              </a>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
