import { Hero } from "../components/blocks/hero";
export default function FourOhFour() {
  return (
  <>
    <title>Error 404</title>
    <div className="text-center">
      <img src="olifant.svg" className="w-full"/>
      <p className="text-xl">Ouch, we zijn in de diepe en grote jungle verdwaald.</p>
      <button onClick={() => history.back()} className="border-[2px] mr-[40px] font-sans border-black p-2">Ga terug!</button>
      <p className="text-lg">Deze pagina kon niet gevonden worden</p>
    </div>
  </>
  );
}
