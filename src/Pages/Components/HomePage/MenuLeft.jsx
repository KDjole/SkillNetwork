import {
  BiHome,
  BiPalette,
  BiBowlHot,
  BiLeaf,
  BiAtom,
  BiCar,
} from "react-icons/bi";

export default function MenuLeft() {
  return (
    <ul className="list-none text-lg">
      <li>
        <BiHome />
        Home
      </li>
      <li>
        <BiBowlHot />
        Cooking
      </li>
      <li>
        <BiAtom />
        Chemistry
      </li>
      <li>
        <BiCar />
        Mechanics
      </li>
      <li>
        <BiPalette />
        Art
      </li>
      <li>
        <BiLeaf />
        Woodworking
      </li>
    </ul>
  );
}
