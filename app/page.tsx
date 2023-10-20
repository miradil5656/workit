import Image from "next/image";
import Card from "./components/Card";
import SectionCars from "./components/SectionCars";
import bg from '@/public/bg.jpg'

export default function Home() {
  return (
    <main>
      <Image src={bg} alt="bg" className="absolute top-0 left-0 w-full h-[600px] object-cover -z-50" />
      <div className="bg-black absolute top-0 left-0 w-full h-[600px] -z-10 opacity-70">1</div>
      <SectionCars />
     
    </main>
  )
}
