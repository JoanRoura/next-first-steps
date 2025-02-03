// ? Per defecte quan nosaltres fem el build de produccio, fa un prefetch de les pagines, per que es
// ? senti com si fo nu single page application, de manera que

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-20">
      <span className="text-5xl">Hola mundo</span>

      <Link href={"/about"}>About Page</Link>
    </div>
  );
}
