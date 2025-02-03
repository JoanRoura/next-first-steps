// ? En next hi han noms d'arxius reservats per fer funcions especifiques
// ? Els layout serveixen per aplicar estrucures especifiques a un conjunt de "pages", layouts anidats
// ? Nosaltres podem aplicar els layouts per pagines concretes creant el arxiu layout dintre de una carpeta
// * Si volem que un layout s'apliqui a un conjunt de pagines en concret el que podem fer es agrupar totes les
// * carpetes amb el page dintre i posar totes en una mateixa carpeta, i al mateix nivell que les carpetes
// * posar el layout, així aplicara a totes

import { Navbar } from "@/components";

// ? Si volem que una carpeta no sigui part de la url, haurem de posar el nom entre parentesi
export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}
