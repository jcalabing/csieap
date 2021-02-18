import React from "react";
import { FieldDivider } from "../../components/FormField/FormField";
import AddComponent from "./../../components/AddComponent/AddComponent";

export default function ProfileView() {
  return (
    <>
      <h1>My Profile</h1>
      <AddComponent>{FieldDivider}</AddComponent>
    </>
  );
}
