function Skills() {
  return (
    <section className="rounded-xl border border-white/40 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
      <h2 className="mb-3 border-b-2 border-teal-600 pb-2 text-2xl font-semibold text-teal-700">
        Навички
      </h2>

      <h3 className="mb-1 font-bold">Технічні навички</h3>
      <ul className="mb-4 list-disc space-y-1 pl-5">
        <li>Linux, VS Code, JetBrains Rider</li>
        <li>Python, C#</li>
        <li>Основи кібербезпеки</li>
      </ul>

      <h3 className="mb-1 font-bold">Загальні навички</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Відповідальність і пунктуальність</li>
        <li>Стресостійкість, вміння працювати в команді</li>
        <li>Здатність швидко навчатись</li>
      </ul>
    </section>
  );
}

export default Skills;