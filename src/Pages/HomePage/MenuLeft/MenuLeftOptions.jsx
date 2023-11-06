import {
  BiHeart,
  BiPalette,
  BiBowlHot,
  BiLeaf,
  BiAtom,
  BiCar,
  BiSearchAlt,
} from "react-icons/bi";
import { BrowserRouter, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const optionsArray = [
  { text: `Following`, icon: BiHeart },
  { text: `Discover`, icon: BiSearchAlt },
  { text: `Cooking`, icon: BiBowlHot },
  { text: `Chemistry`, icon: BiAtom },
  { text: `Mechanics`, icon: BiCar },
  { text: `Art`, icon: BiPalette },
  { text: `Woodworking`, icon: BiLeaf },
];

export default function MenuLeftOptions() {
  return (
    <BrowserRouter>
      <ul className="list-none text-lg flex-col items-center pt-10">
        {optionsArray.map((e) => {
          return (
            <NavLink to={`/${e.text}`} key={e.text}>
              <motion.li
                className="flex gap-2 items-center pt-4"
                whileHover={{ scale: 1.2, originX: 0, color: "#fccf03" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {<e.icon />}
                {e.text}
              </motion.li>
            </NavLink>
          );
        })}
      </ul>
    </BrowserRouter>
  );
}
