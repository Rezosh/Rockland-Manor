import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t } = useTranslation("footer");
  const navigation = {
    main: [
      { name: t("home-link"), href: "/" },
      { name: t("about-link"), href: "/about-us" },
      { name: t("services-link"), href: "/#services" },
      { name: t("jobs-link"), href: "/careers" },
    ],
  };
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Manoir Rockland Manor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
