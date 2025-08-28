import type { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage?: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/\s+/g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage ? "link-color-selected" : "link-color "
      } transition duration-500 hover:link-color-hover font-semibold`}
      onClick={() => {
        if (setSelectedPage) {
          setSelectedPage(lowerCasePage);
        }
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
