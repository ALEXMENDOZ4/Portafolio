import React from "react";
import InfoSection from "../../Components/InfoSection/InfoSection";
import { homeObjone } from "./Data";

export default function Home() {
  return (
    <>
      <InfoSection {...homeObjone} />
    </>
  );
}
