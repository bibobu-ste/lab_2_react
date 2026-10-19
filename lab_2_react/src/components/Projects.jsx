function Projects() {
  return (
    <section className="rounded-xl border border-white/40 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
      <h2 className="mb-3 border-b-2 border-teal-600 pb-2 text-2xl font-semibold text-teal-700">
        Проєкти та досвід
      </h2>

      <article className="mb-4 rounded-lg border-l-4 border-teal-600 bg-slate-50 p-3 transition hover:scale-105 hover:bg-teal-50">
        <h3 className="font-bold">Бекенд та автоматизація</h3>
        <p className="text-slate-600">
          Розробляв і впроваджував скрипти автоматизації, інтеграції з API та
          рішення для обробки даних на Python і C#.
        </p>
      </article>

      <article className="rounded-lg border-l-4 border-teal-600 bg-slate-50 p-3 transition hover:scale-105 hover:bg-teal-50">
        <h3 className="font-bold">Усунення несправностей та налагодження</h3>
        <p className="text-slate-600">
          Розвинув аналітичне мислення, самостійно діагностуючи, налагоджуючи
          та вирішуючи складні технічні проблеми в різних невеликих системах.
        </p>
      </article>
    </section>
  );
}

export default Projects;