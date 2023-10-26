/* eslint-disable react/prop-types */
import Input from "../UI/Input";

function UserSettings({ children }) {
  return (
    <form className="flex flex-col justify-center items-center">
      {children}
    </form>
  );
}

function OldEmail() {
  return (
    <>
      <label>Enter old email:</label>
      <Input type="email" />
    </>
  );
}

function NewEmail() {
  return (
    <>
      <label>Enter new email:</label>
      <Input type="email" />
    </>
  );
}

function OldUser() {
  return (
    <>
      <label>Enter old username:</label>
      <Input type="text" />
    </>
  );
}

function NewUser() {
  return (
    <>
      <label>Enter new username:</label>
      <Input type="text" />
    </>
  );
}

UserSettings.OldEmail = OldEmail;
UserSettings.NewEmail = NewEmail;
UserSettings.OldUser = OldUser;
UserSettings.NewUser = NewUser;

export default UserSettings;
