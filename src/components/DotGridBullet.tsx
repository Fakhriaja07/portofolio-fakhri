// Penanda bullet: SATU titik hijau lembut per poin penjelasan.
// Dikoreksi 24 Nov 2026 ("jangan 9 buah, 1 buah aja") — sebelumnya
// grid 3×3 sembilan titik, kini satu titik saja. Nama file/komponen
// dipertahankan supaya tidak ada file mati di repo.
export default function DotGridBullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-[9px] h-[8px] w-[8px] shrink-0 rounded-[2px] bg-mint/60"
    />
  )
}
