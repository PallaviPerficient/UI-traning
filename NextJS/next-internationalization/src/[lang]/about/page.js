import { getDictionary } from "@/getDictionary";
import React from "react";
import LocaleSwitcher from "../../../local-switcher";

async function About({ params }) {
  const lang = await getDictionary(params.lang);
  return (
    <div>
      <div className="container">
        <div>
          <LocaleSwitcher />
        </div>
        <p>Name : {lang.name}</p>
        <p>Email : {lang.email}</p>
        <p> Mobile : {lang.Mobile}</p>
      </div>
    </div>
  );
}

export default About;
