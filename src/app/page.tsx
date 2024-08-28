
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import BlogSection from "@/components/Home/BlogSection";
import NewsSection from "@/components/Home/NewsSection";
import Image from "next/image";
import { getToken } from "@/utils/auth";

export default function Home() {
  console.log(getToken())

  return (
   <>
       <HomeCoverSection/>
       <NewsSection/>
       
   </>
  );
}
