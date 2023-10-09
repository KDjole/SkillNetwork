import {
  BiHome,
  BiPalette,
  BiBowlHot,
  BiLeaf,
  BiAtom,
  BiCar,
} from "react-icons/bi";

const optionsArray = [
  { text: `Home`, icon: BiHome },
  { text: `Cooking`, icon: BiBowlHot },
  { text: `Chemistry`, icon: BiAtom },
  { text: `Mechanics`, icon: BiCar },
  { text: `Art`, icon: BiPalette },
  { text: `Woodworking`, icon: BiLeaf },
];

export default function MenuLeftOptions() {
  return (
    <ul className="list-none text-lg flex-col items-center ">
      {optionsArray.map((e) => {
        return (
          <li key={e.text} className="flex items-center">
            {<e.icon />}
            {e.text}
          </li>
        );
      })}
    </ul>
  );
}
