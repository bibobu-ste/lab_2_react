function Education() {
  return (
    <section className="rounded-xl border border-white/40 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
      <h2 className="mb-3 border-b-2 border-teal-600 pb-2 text-2xl font-semibold text-teal-700">
        Освіта
      </h2>

      <article className="mb-4 rounded-lg border-l-4 border-teal-600 bg-slate-50 p-3 transition hover:scale-105 hover:bg-teal-50">
        <h3 className="font-bold">Бакалавр з кібербезпеки</h3>
        <p className="text-slate-600">
          <a
            href="https://lpnu.ua/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline hover:text-teal-800"
          >
            Львівська політехніка
          </a>
          <br />
          2025 – дотепер
        </p>
      </article>

      <article className="rounded-lg border-l-4 border-teal-600 bg-slate-50 p-3 transition hover:scale-105 hover:bg-teal-50">
        <h3 className="font-bold">Повна загальна середня освіта</h3>
        <p className="text-slate-600">
          Вигодський ліцей
          <br />
          2014 – 2025
        </p>
      </article>
    </section>
  );
}

export default Education;