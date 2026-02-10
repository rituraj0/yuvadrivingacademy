// app/page.tsx
// Beautiful Landing Page – Yuva Driving Skills & Defence Academy

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Yuva Driving Skills & Defence Academy
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-4">
          Nangal Choudhary (Haryana)
        </p>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-10 text-pink-100">
          Professional training for Defence Forces, Police Services, and
          Government Transport Services with discipline, dedication, and results.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:8930295162"
            className="rounded-2xl bg-yellow-400 text-black px-8 py-4 text-lg font-bold shadow-xl hover:bg-yellow-300 transition"
          >
            📞 Call Now: 8930295162
          </a>
          <a
            href="#courses"
            className="rounded-2xl border border-white/40 px-8 py-4 text-lg font-semibold hover:bg-white/10 transition"
          >
            View Training Programs
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-white text-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Our Special Training Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">Delhi Police</h3>
              <p>
                Physical training, discipline, endurance, and exam-oriented
                preparation for Delhi Police recruitment.
              </p>
            </div>
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">BRO (Border Roads Organisation)</h3>
              <p>
                Strength, driving skills, and field-ready preparation for
                Border Roads Organisation selections.
              </p>
            </div>
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">CISF</h3>
              <p>
                Complete physical and written exam guidance for Central
                Industrial Security Force aspirants.
              </p>
            </div>
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">ITBP</h3>
              <p>
                High-altitude fitness mindset, stamina building, and
                recruitment-focused training for ITBP.
              </p>
            </div>
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">SSB</h3>
              <p>
                Physical conditioning, discipline, and personality development
                for SSB-related selections.
              </p>
            </div>
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">Haryana Roadways</h3>
              <p>
                Professional heavy and light vehicle driving training with
                safety rules and confidence building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact & Admission</h2>
          <p className="text-lg mb-4">📍 Nangal Choudhary, Haryana</p>
          <p className="text-2xl font-bold mb-2">📞 8930295162</p>
          <p className="text-slate-400 mb-8">
            Call or visit us for batch timings, fees, and admission details.
          </p>
          <a
            href="tel:8930295162"
            className="inline-block rounded-2xl bg-emerald-500 text-black px-10 py-4 text-lg font-bold shadow-xl hover:bg-emerald-400 transition"
          >
            Enquire Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-400 text-center py-6">
        © {new Date().getFullYear()} Yuva Driving Skills & Defence Academy, Nangal Choudhary (HR)
      </footer>
    </main>
  );
}
