import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="relative h-[950px]">
        <Image
        className="absolute right-1 top-5"
            src="/ak.png"
            alt="Ak"
            width={900}
            height={900}
        />
        <div className="absolute w-1/2 h-[500px]">
          <h1 className="text-center pt-[250px] text-[64px]">Ak 47</h1>
          <p className="text-center pt-[50px] text-xl">
            created by Mikhail Kashnikov
          </p>
        </div>
        
      </div>
      <div className="bg-da h-[1000px]" >
          <h1 className="text-white text-center pt-[200px] text-[64px]">Meet the Misha</h1>
          <h2 className="text-white text-center pt-[50px] text-[32px]">coming soon....</h2>
      </div>
    </main>
  );
}
