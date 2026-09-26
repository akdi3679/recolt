import { Hero } from "@/components/sections/Hero";
import { Triade } from "@/components/sections/Triade";
import { HomeWhyTabs } from "@/components/sections/HomeWhyTabs";
import { HomeMethodTabs } from "@/components/sections/HomeMethodTabs";
import { ValeurBusiness } from "@/components/sections/ValeurBusiness";
import { Laboratoire } from "@/components/sections/Laboratoire";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Triade />
      <HomeWhyTabs />
      <HomeMethodTabs />
      <ValeurBusiness />
      <Laboratoire />
      <FAQ />
      <FinalCTA />
    </>
  );
}