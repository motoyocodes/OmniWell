import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import type { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [ismenmuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navBarBackground = isTopOfPage ? "" : "bg-nav drop-shadow";
  return (
    <nav>
      <div
        className={`${navBarBackground} ${flexBetween} fixed  top-0 z-30 w-full `}
      >
        <div
          className={`${flexBetween} w-full mx-auto py-2  2xl:py-3 px-10 md:px-28 `}
        >
          {/* left side */}
          <div>
            <p className="font-secondary text-xl font-bold ">
              OMNI<span className="span-color italic ">WELL</span>
            </p>
          </div>

          {/* middle side */}

          {isAboveMediumScreens ? (
            <>
              <div className="flex gap-8 ">
                {/* LINKS */}
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>

              {/* right side */}
              <div className="flex items-center gap-4 link-color font-semibold">
                <p>Sign In</p>
                <ActionButton>Become a member</ActionButton>
              </div>
            </>
          ) : (
            <button
              className="rounded-full bg-button-primary p-2 text-white "
              onClick={() => setIsMenuToggled(!ismenmuToggled)}
            >
              <Bars3Icon className="h-6 w-6  text-white" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && ismenmuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-mobile-modal drop-shadow-xl">
          {/* CLOSE ICON */}

          <div className={`flex justify-end p-12`}>
            <button onClick={() => setIsMenuToggled(!ismenmuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-10 ml-[33%] text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <ActionButton>Become a member</ActionButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
