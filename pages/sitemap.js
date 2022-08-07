import { Layout } from "../components/layout";

export default function SiteMap() {
  return (
  <>
    <title>Error 404</title>
    <div className="text-center">
      <img src="/olifant.svg" className="w-full"/>
      <p className="text-xl">Ouch, we zijn in de diepe en grote jungle verdwaald.</p>
      <a href="/" className="border-[2px] my-[20px] font-sans border-black p-2">Ga terug!</a>
      <p className="text-lg">Deze pagina kon niet gevonden worden</p>
    </div>
  </>
  );
}
