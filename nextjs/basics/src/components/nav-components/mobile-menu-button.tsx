import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";

export default function MobileMenuBtn({ onClick }: { onClick: () => void }) {
  return (
    <button className="absolute right-2 top-2 bg-white px-3 py-2 rounded-sm shadow" onClick={onClick}>
      <FontAwesomeIcon className="text-4xl" icon={faBars} />
    </button>
  );
}
