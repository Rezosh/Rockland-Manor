import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, MapPinIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import useScrollPosition from "@/hooks/useScrollPosition";
import { classNames } from "@/utils/helperFunctions";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const { t } = useTranslation("navbar");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, locales } = useRouter();

  const scrollPosition = useScrollPosition();
  //"fixed top-0 left-0 z-20 mb-10 w-full bg-white/80"

  const navigation = [
    { name: t("home-link"), href: "/" },
    { name: t("about-link"), href: "/about-us" },
    { name: t("services-link"), href: "/#services" },
    { name: t("accommodations-link"), href: "/accommodations" },
  ];

  return (
    <header
      className={classNames(
        scrollPosition > 140 ? "shadow" : "shadow-none",
        `trasition  top-0 left-0 z-20 w-full bg-white transition-shadow duration-500 ease-in-out ${
          mobileMenuOpen ? "hidden" : "fixed"
        }`
      )}
    >
      <nav
        className={classNames(
          scrollPosition > 140
            ? "trasition py-2 duration-500 ease-in-out"
            : "py-6",
          "mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 lg:px-8"
        )}
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Rockland Manor</span>
            <Image
              className="h-16 w-auto"
              src="/logo.png"
              width={64}
              height={64}
              alt=""
            />
          </Link>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <NavigationMenu className="hidden lg:flex lg:gap-x-12">
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuItem>
                <Link key={item.name} href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-4 lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/"
            locale={locale === "en" ? "fr" : "en"}
            className="mr-4"
          >
            {locale === "en" ? "FR" : "EN"}
          </Link>
          {/* Address */}
          <div className="flex items-center gap-2 border-r-2 pr-4">
            <MapPinIcon className="h-6 w-6" aria-hidden="true" />
            <div className="flex flex-col text-sm">
              <strong>9045 County Road 17</strong>
              Rockland, ON K4K 0J9
            </div>
          </div>

          {/* Phone Number CTA */}

          <div className="flex flex-col">
            {t("call-us")}
            <a
              href="tel:6136274654"
              className="text-sm font-semibold uppercase leading-6 text-dark-brown-900"
            >
              613-627-4854
            </a>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Rockland Manor</span>
              <Image
                className="h-8 w-auto"
                width={32}
                height={32}
                src="/logo.png"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root h-full">
            <div className="-my-6 flex h-full flex-col justify-between divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-between gap-4 py-6">
                <Link
                  href="/"
                  locale={locale === "en" ? "fr" : "en"}
                  className="mr-4"
                >
                  {locale === "en" ? "FR" : "EN"}
                </Link>
                {/* Address */}
                <div className="flex items-center gap-2 border-r-2 pr-4">
                  <MapPinIcon className="h-6 w-6" aria-hidden="true" />
                  <div className="flex flex-col text-sm">
                    <strong>9045 County Road 17</strong>
                    Rockland, ON K4K 0J9
                  </div>
                </div>

                {/* Phone Number CTA */}
                <div className="flex flex-col">
                  {t("call-us")}
                  <a
                    href="tel:6136274654"
                    className="text-sm font-semibold uppercase leading-6 text-dark-brown-900"
                  >
                    613-627-4854
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
