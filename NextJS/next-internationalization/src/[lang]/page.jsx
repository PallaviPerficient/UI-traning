// "use-client";

import { getDictionary } from "../../getDictionary";
import LocaleSwitcher from "../../local-switcher";
import "./page.css";

export default async function Home({ params }) {
  const lang = await getDictionary(params.lang);
  return (
    <div className="container">
      <div>
        <LocaleSwitcher />
      </div>
      <p>Name : {lang.name}</p>
      <p>Email : {lang.email}</p>
      <p> Mobile : {lang.Mobile}</p>
    </div>
  );
}
