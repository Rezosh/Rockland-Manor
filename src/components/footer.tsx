import { cn } from "@/lib/utils";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const { locale, locales } = useRouter();

  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-xl flex-col justify-center overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 flex columns-2 justify-center space-x-12"
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
        <div className="mt-10 flex flex-row items-center justify-between">
          <p className=" text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Manoir Rockland Manor. All rights reserved.
          </p>

          <div className="text-sm text-gray-600">
            <Link
              href="/"
              locale="fr"
              className={cn(locale === "fr" ? "font-medium" : "")}
            >
              Français
            </Link>{" "}
            |{" "}
            <Link
              href="/"
              locale="en"
              className={cn(locale === "en" ? "font-medium" : "")}
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
