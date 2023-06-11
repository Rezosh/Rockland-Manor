import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, MapPinIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "#services" },
  { name: "Accommodations", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              scroll={false}
              className="group text-sm uppercase leading-6 text-dark-brown-900 transition duration-300"
            >
              {item.name}
              <span className="block h-0.5 max-w-0 bg-dark-brown-600 transition-all duration-500 group-hover:max-w-full"></span>
            </Link>
          ))}
        </div>
        <div className="hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
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
            Call Us Today
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
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Rockland Manor</span>
              <Image
                className="h-8 w-auto"
                width={32}
                height={32}
                src="/logo.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
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
              <div className="flex gap-4 py-6">
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
                  Call Us Today
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
