import { useDispatch } from "react-redux";
import { changeStatus } from "../../../Features/OpenModal/ModalSlice";

export default function ProfileOptions() {
  const options = [
    { text: `Change E-mail`, key: `email` },
    { text: `Change Username`, key: `username` },
  ];
  const dispatch = useDispatch();
  const openModal = (el) => {
    dispatch(changeStatus(true, el));
  };

  return (
    <ul className="mt-5 flex flex-col items-center gap-2">
      {options.map((e) => {
        return (
          <li
            key={e.key}
            onClick={() => openModal(e.key)}
            className="hover:cursor-pointer"
          >{`${e.text}`}</li>
        );
      })}
      <li className="hover:cursor-pointer text-myYellow font-bold">Log out</li>
    </ul>
  );
}
