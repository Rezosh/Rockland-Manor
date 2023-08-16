import { useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      <Navbar />

      <main className="mt-28">{children}</main>

      {/* <div
        id="bottom-banner"
        tabIndex={-1}
        className={`${
          showBanner ? "fixed" : "hidden"
        } bottom-0 left-0 z-50 flex w-full justify-between  bg-coral p-4`}
      >
        <div className="mx-auto flex items-center">
          <p className="flex items-center">
            <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 ">
              <svg
                className="h-3 w-3 text-coral"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
              </svg>
              <span className="sr-only">Announcement</span>
            </span>
            <span className="text-base font-medium text-white">
              A French version of our website will be coming soon!
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <button
            data-dismiss-target="#bottom-banner"
            type="button"
            onClick={() => setShowBanner(false)}
            className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg p-1.5 text-sm text-white hover:bg-gray-200 hover:text-gray-900 "
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </div> */}

      <Footer />
    </>
  );
}
