import { useState } from 'react'
import { kmeansDemo, publication } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Demo interaktif dari publikasi SINTA 4: bandingkan 5 jarak pada K-Means
// untuk evaluasi kepuasan masyarakat. Angka DBI & Silhouette persis dari
// Tabel 4 publikasi; tidak ada scatter plot karena data mentahnya tidak ada.
type KMeansValue = (typeof kmeansDemo.methods)[number]['values'][number]

const ks = [2, 3, 4, 5]

function MetricBars({
  title,
  hint,
  values,
  pick,
  selectedK,
  best,
  max,
}: {
  title: string
  hint: string
  values: KMeansValue[]
  pick: (value: KMeansValue) => number
  selectedK: number
  best: number
  max: number
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-bold break-words text-ink">{title}</h4>
        <p className="text-sm text-muted">{hint}</p>
      </div>
      <ul className="mt-4 space-y-3">
        {values.map((value) => {
          const number = pick(value)
          const isSelected = value.k === selectedK
          const isBest = number === best
          return (
            <li key={value.k} className="flex items-center gap-3">
              <span className="w-10 shrink-0 font-mono text-xs font-semibold text-muted">
                k = {value.k}
              </span>
              <div className="h-3 min-w-0 flex-1 rounded-full bg-background-soft">
                <div
                  className={`h-3 rounded-full ${isSelected ? 'bg-mint' : 'bg-mint/40'}`}
                  style={{ width: `${(number / max) * 100}%` }}
                />
              </div>
              <span className="w-16 shrink-0 text-right font-mono text-sm font-semibold text-ink">
                {number}
              </span>
              {isBest ? (
                <span className="shrink-0 rounded-full bg-mint/10 px-2 py-0.5 font-mono text-xs font-semibold text-mint">
                  ★ terbaik
                </span>
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function KMeansDemoSection() {
  const [methodName, setMethodName] = useState('Euclidean')
  const [k, setK] = useState(3)

  const method =
    kmeansDemo.methods.find((item) => item.name === methodName) ??
    kmeansDemo.methods[0]
  const selected =
    method.values.find((value) => value.k === k) ?? method.values[0]

  const allValues = kmeansDemo.methods.flatMap((item) => item.values)
  const bestDbi = Math.min(...allValues.map((value) => value.dbi))
  const bestSil = Math.max(...allValues.map((value) => value.sil))
  const maxDbi = Math.max(...method.values.map((value) => value.dbi))
  const maxSil = Math.max(...method.values.map((value) => value.sil))
  const bestDbiForMethod = Math.min(...method.values.map((value) => value.dbi))
  const bestSilForMethod = Math.max(...method.values.map((value) => value.sil))

  return (
    <section id="demo" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Demo Interaktif" accent="K-Means" />

          <p className="max-w-3xl text-base leading-[1.6] text-muted">
            Demo dari publikasi saya — pilih jarak dan jumlah cluster (k), lalu
            lihat hasil evaluasinya.
          </p>

          <article className="mt-8 min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-8">
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase sm:tracking-[0.2em]">
              Jarak
            </p>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Pilih jarak"
            >
              {kmeansDemo.methods.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={item.name === method.name}
                  onClick={() => setMethodName(item.name)}
                  className={
                    item.name === method.name
                      ? 'rounded-full bg-mint px-4 py-2 text-sm font-bold break-words text-white'
                      : 'rounded-full border border-border bg-background-soft px-4 py-2 text-sm font-bold break-words text-ink transition-colors hover:border-mint/60'
                  }
                >
                  {item.name}
                </button>
              ))}
            </div>

            <p className="mt-6 font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase sm:tracking-[0.2em]">
              Jumlah cluster (k)
            </p>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Pilih jumlah cluster"
            >
              {ks.map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={value === k}
                  onClick={() => setK(value)}
                  className={
                    value === k
                      ? 'rounded-full bg-mint px-4 py-2 text-sm font-bold text-white'
                      : 'rounded-full border border-border bg-background-soft px-4 py-2 text-sm font-bold text-ink transition-colors hover:border-mint/60'
                  }
                >
                  {value}
                </button>
              ))}
            </div>

            <p className="mt-6 rounded-[16px] border border-border bg-background-soft px-4 py-3 font-mono text-sm break-words text-ink">
              <span className="font-semibold text-mint">{method.name}: </span>
              {method.formula}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[20px] border border-border bg-background-soft p-5">
                <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase">
                  Davies–Bouldin Index
                </p>
                <p className="mt-3 text-5xl leading-none font-extrabold tracking-tight text-ink">
                  {selected.dbi}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  DBI lebih kecil = cluster lebih baik.
                </p>
                {selected.dbi === bestDbi ? (
                  <p className="mt-3 inline-flex rounded-full bg-mint px-3 py-1 text-xs font-bold break-words text-white">
                    DBI terendah dari semua kombinasi
                  </p>
                ) : null}
              </div>
              <div className="rounded-[20px] border border-border bg-background-soft p-5">
                <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase">
                  Silhouette
                </p>
                <p className="mt-3 text-5xl leading-none font-extrabold tracking-tight text-ink">
                  {selected.sil}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Silhouette lebih besar = cluster lebih baik.
                </p>
                {selected.sil === bestSil ? (
                  <p className="mt-3 inline-flex rounded-full bg-mint px-3 py-1 text-xs font-bold break-words text-white">
                    Silhouette tertinggi dari semua kombinasi
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <MetricBars
                title="DBI per k"
                hint="lebih kecil lebih baik"
                values={method.values}
                pick={(value) => value.dbi}
                selectedK={k}
                best={bestDbiForMethod}
                max={maxDbi}
              />
              <MetricBars
                title="Silhouette per k"
                hint="lebih besar lebih baik"
                values={method.values}
                pick={(value) => value.sil}
                selectedK={k}
                best={bestSilForMethod}
                max={maxSil}
              />
            </div>

            <p className="mt-8 text-sm leading-relaxed text-muted">
              Nilai DBI dan Silhouette dari Tabel 4 publikasi.{' '}
              <a
                href={publication.doiUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-mint transition-colors hover:underline"
              >
                DOI: {publication.doi} ↗
              </a>
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
