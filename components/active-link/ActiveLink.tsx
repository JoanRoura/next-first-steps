// * La idea dels client compoents es la de fer-los servir los menys possible, i fer us en la mesura de
// * lo possible que l'aplicacio generi tot mitjançant server compoents
// ? Encara que deseactivem el JS del client, la majoria de les funcionalitats continuarant funcionant
"use client";

import Link from "next/link";

import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}
// ? Aquest component el farem servir per renderitzar diversos fills de ell mateix
export const ActiveLink = ({ path, text }: Props) => {
  // ? Si volem implementar una classe de manera condicional podem fer servir el hook "usePathname"
  // ? El "pathName" contindra el nom de la ruta on en trobem actualment en la nostra pagina web
  const pathName = usePathname();
  console.log(pathName);

  return (
    // * Les classes es poden concatenar amb cadenes de string
    // * Si el nom de la classe te algun tipo de caracter com el de '-' s'haura de representar amb '[""]'
    <Link
      // ? El prefetch s'encarrega de prerecarga el component abans de que es mostri, pero aixó ho fa
      // ? despres de la carga inicial, lo que resulta en un temps de carga molt rapid.
      // ? També vol dir que quan es fa el build de produccio esta optimitzat per que sigui lo mes rapid
      // ? possible i pugui servir les pagines sense temps de espera i gracies a el prefetch.
      // ? El comportament pe defecte es que vagi carregant coses de la pagina sota demanda.
      // prefetch={false}
      // ? Si el path es exactament igual a el path del component que s'esta creant afegeix la classe
      className={`${style.link} ${pathName === path && style["active-link"]}`}
      href={path}
    >
      {text}
    </Link>
  );
};
