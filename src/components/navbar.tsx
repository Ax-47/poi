import Link from "next/link";

export default function Navbar() {
  return(
    <nav className="flex justify-between fixed px-6 align-middle h-[50px] backdrop-blur-sm bg-white/5 w-full z-50">
      <div className="text-2xl self-center">
        Akhsakov
      </div>
      <ul className="flex gap-3">
        <li className="self-center hover:border-b-[2px]  hover:border-black">Prodzhektz</li>
        <li className="self-center  hover:border-b-[2px]  hover:border-black">WhoIsMisha</li>
      </ul>
    </nav>

  );
}
