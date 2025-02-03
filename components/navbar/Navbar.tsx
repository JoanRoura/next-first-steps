// * En Next, qualsevol component que creem, sera un Server Component, aixo inclueix algunes limitacions
// * Pero també algunes aventatges, com components asyncrones, o Server Actions, que ataquin a BBDD...
// * Si volem fer que sigui un Client Component, haurem de posar 'use client', a dalt del component

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

// ? Client Component: Component generat del canto del client, el carregara el navegador del client
// ? Server Client: Component generat del canto del servidor

// ? Amb aquest funcio generem una espera de dos segons abans de que es monti el components
// const temporalAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 2000);
//   });
// };

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = async () => {
  // ? Fara que el component "Navbar" trigui dos segons abans de construirse
  // ? Aixo ens demostra que podem fer conexions a BD, espera respostes de promeses...
  // * En aquests segons previs de cargar seria el moment perfecte per posar un loading, spinner...
  //   await temporalAsync();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2"></HomeIcon>
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {/* // * Manera de Next de navegacio */}
      {/* 
      // ? Hi han certs components que si funcionaran del canto del client, pero la resta, es procura
      // ? de que tot sigui server component, per millor la velocitat del client i carregar menys JS 
      */}
      {/* 
      // ? Quan passem el cursor per sobre de una de les opcions, fa una peticio per el seguent Server
      // ? Component, es a dir fer un "prefetch" de la seguent pantalla, aixó fa que doni la sensacio
      // ? de un single page aplication, quan realment es tot generat de part del servidor. També te la
      // ? aventatge, de que, el client te deshabilitat JS, treballarant com els enllaços tradicionals.
      */}
      {navItems.map((navItem) => (
        <ActiveLink
          key={navItem.path}
          // * Manera 1 de passar les dades al component (desestructuracio del navitem):
          // path={navItem.path}
          // text={navItem.text}
          // * Manera 2 de passar les dades al component (operador spread del navitem):
          {...navItem}
        />
      ))}

      {/* // * Manera tradicional de navegacio, recarrega tota la pagina */}
      {/* <a className="mr-2" href="/about">
        Abouts
      </a>
      <a className="mr-2" href="/pricing">
        Pricing
      </a>
      <a className="mr-2" href="/contact">
        Contact
      </a> */}
    </nav>
  );
};
