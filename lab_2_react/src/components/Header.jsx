function Header() {
  return (
    <header className="bg-teal-600/80 backdrop-blur-sm p-8 text-center text-white shadow-lg">
      <h1 className="mb-2 text-4xl font-bold tracking-wide">Владислав Хомин</h1>
      <p className="text-lg opacity-90">Студент кібербезпеки · Python та C#</p>
      <address className="mt-4 flex flex-col items-center gap-1 not-italic md:flex-row md:justify-center md:gap-6">
        <p>Місто: Львів, Україна</p>
        <p>
          Телефон:{" "}
          <a
            href="tel:+380989160355"
            className="font-semibold text-teal-200 underline hover:text-white"
          >
            +380989160355
          </a>
        </p>
        <p>
          Пошта:{" "}
          <a
            href="mailto:hominvlad@gmail.com"
            className="font-semibold text-indigo-200 underline hover:text-white"
          >
            hominvlad@gmail.com
          </a>
        </p>
      </address>
    </header>
  );
}

export default Header;