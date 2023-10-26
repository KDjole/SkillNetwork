/* eslint-disable react/prop-types */
export default function Input({ type }) {
  return (
    <input
      type={type}
      className="rounded border-0 mb-5 py-1.5 pl-10 pr-10 text-myGray ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-myGray"
    ></input>
  );
}
