// Una de les raons per les quals la gent prefereix fer servir next es per que son SEO (Search Engine Optimization) Friendly
// * Aixó fa referencia a els metatags, que es basicament elements que nesessiten els
// * El minim de metatags que necessita una pagina son el "title" i la "descripcio"
// * Aixó ajudara a que Google i altres motors de busqueda puguins indexar-la i asociar-la a les respostes de
// * busqueda que la persona esta buscant
// * En next es poden crear metatags per cada una de les pantallas creades

import type { Metadata } from "next";

// * Next verificara si la pagina te metadata, si no la té, buscara la metadata del layout principal
// * o el subsequent layout. També es pot tipar, pero nomes si volem ser especifics
// ? També cal recalcar que aixó esta siguent generat de manera estatica, quan necessitem genera aquesta
// ? metadata basat en informacio de una BBDD, es ha dir li em de passar arguments, es realitza diferetn
// ? Per si que podem fer us de funcions dintre del objecte de "metadata"
export const metadata: Metadata = {
  title: "SEO Title" + new Date().toString(),
  description: "SEO Title",
  keywords: ["About Page", "Joan", "información", "..."],
};

// ? Si volem tenir un estructura predifinida per unes pagines en concret, haurem de crear layout anidats
export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
