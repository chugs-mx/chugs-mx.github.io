import Image from "next/image";
import {Button} from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <><Link href="/" className="flex justify-start ml-6 mt-6">
      <Image src={"/chug-logo.webp"} alt='Logo' width={220} height={180}></Image>
      <ul className='hidden h-full gap-12 lg:flex'></ul>
    </Link><Navbar></Navbar></>
  );
}
