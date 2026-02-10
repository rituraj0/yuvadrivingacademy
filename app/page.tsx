// app/page.tsx
// Hindi-first Landing Page – Yuva Driving Skills & Defence Academy

export const metadata = {
  title: "युवा ड्राइविंग स्किल्स एवं डिफेन्स अकादमी | नांगल चौधरी, हरियाणा",
  description:
    "युवा ड्राइविंग स्किल्स एवं डिफेन्स अकादमी, नांगल चौधरी (हरियाणा)। दिल्ली पुलिस, BRO, CISF, ITBP, SSB, हरियाणा रोडवेज के लिए प्रशिक्षण। छात्रावास सुविधा उपलब्ध।",
  keywords:
    "Defence Academy Nangal Choudhary, Driving School Haryana, Delhi Police Coaching, BRO Training, CISF Coaching, ITBP Training, SSB Preparation, Haryana Roadways Driving, Defence Academy Haryana",
  openGraph: {
    title: "Yuva Driving Skills & Defence Academy – Nangal Choudhary (HR)",
    description:
      "Defence forces और government driving jobs के लिए भरोसेमंद प्रशिक्षण। Hostel सुविधा उपलब्ध।",
    locale: "hi_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://yuva-defence-academy.example",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          युवा ड्राइविंग स्किल्स एवं डिफेन्स अकादमी
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-2">
          नांगल चौधरी (हरियाणा)
        </p>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-10 text-pink-100">
          दिल्ली पुलिस, बीआरओ, सीआईएसएफ, आईटीबीपी, एसएसबी और हरियाणा रोडवेज
          के लिए समर्पित शारीरिक, ड्राइविंग एवं अनुशासनात्मक प्रशिक्षण।
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:8930295162"
            className="rounded-2xl bg-yellow-400 text-black px-8 py-4 text-lg font-bold shadow-xl hover:bg-yellow-300 transition"
          >
            📞 कॉल करें: 8930295162
          </a>
          <a
            href="#programs"
            className="rounded-2xl border border-white/40 px-8 py-4 text-lg font-semibold hover:bg-white/10 transition"
          >
            प्रशिक्षण कार्यक्रम देखें
          </a>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="bg-white text-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            हमारे प्रशिक्षण कार्यक्रम
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">दिल्ली पुलिस</h3>
              <p>शारीरिक दक्षता, दौड़, अनुशासन और भर्ती परीक्षा केंद्रित तैयारी।</p>
            </div>
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">बीआरओ (BRO)</h3>
              <p>ड्राइविंग स्किल्स, ताकत और फील्ड-रेडी ट्रेनिंग।</p>
            </div>
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">सीआईएसएफ</h3>
              <p>शारीरिक एवं लिखित परीक्षा की पूर्ण तैयारी।</p>
            </div>
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">आईटीबीपी</h3>
              <p>स्टैमिना, सहनशक्ति और उच्च स्तरीय फिटनेस प्रशिक्षण।</p>
            </div>
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">एसएसबी</h3>
              <p>व्यक्तित्व विकास, अनुशासन और शारीरिक तैयारी।</p>
            </div>
            <div className="rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-3">हरियाणा रोडवेज</h3>
              <p>लाइट एवं हैवी व्हीकल ड्राइविंग का प्रोफेशनल प्रशिक्षण।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Section */}
      <section className="py-20 bg-slate-100 text-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">छात्रावास सुविधा उपलब्ध</h2>
          <p className="text-lg max-w-3xl mx-auto">
            बाहर से आने वाले विद्यार्थियों के लिए सुरक्षित एवं अनुशासित
            छात्रावास सुविधा उपलब्ध है। स्वच्छ कमरे, नियमित भोजन और
            अध्ययन के अनुकूल वातावरण प्रदान किया जाता है।
          </p>
        </div>
      </section>

      {/* YouTube Intro Video */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            अकादमी का परिचय वीडियो
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Yuva Defence Academy Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-slate-400 mt-4">
            (यहाँ अपना यूट्यूब इंट्रो वीडियो ID डालें)
          </p>
        </div>
      </section>

      {/* YouTube Channel Feed */}
      <section className="py-20 bg-slate-900 text-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            हमारे यूट्यूब वीडियो
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed?listType=user_uploads&list=CHANNEL_NAME"
              title="YouTube Channel Videos"
              allowFullScreen
            />
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed?listType=user_uploads&list=CHANNEL_NAME"
              title="YouTube Channel Videos"
              allowFullScreen
            />
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed?listType=user_uploads&list=CHANNEL_NAME"
              title="YouTube Channel Videos"
              allowFullScreen
            />
          </div>
          <p className="text-center text-slate-400 mt-6">
            (CHANNEL_NAME को अपने यूट्यूब चैनल नाम से बदलें)
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-emerald-500 text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">संपर्क एवं प्रवेश</h2>
          <p className="text-lg mb-2">📍 नांगल चौधरी, हरियाणा</p>
          <p className="text-2xl font-bold mb-6">📞 8930295162</p>
          <a
            href="tel:8930295162"
            className="inline-block rounded-2xl bg-black text-white px-10 py-4 text-lg font-bold shadow-xl hover:bg-slate-800 transition"
          >
            अभी कॉल करें
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-400 text-center py-6">
        © {new Date().getFullYear()} युवा ड्राइविंग स्किल्स एवं डिफेन्स अकादमी, नांगल चौधरी (हरियाणा)
      </footer>
    </main>
  );
}
