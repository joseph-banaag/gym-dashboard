import "@/app/globals.css";
import Cards from "@/components/ui/dashboard/cards";
import GraphsSection from "@/components/ui/dashboard/graphs-section";
import MembersStatus from "@/components/ui/dashboard/member-status";
import { textColor } from "@/lib/text-helper";

export default function Overview() {
  return (
    <main className="mb-20">
      <section className="ps-8 sm:ps-25 mt-20 sm:mt-30.5 flex xs:flex-row flex-col gap-3 mb-10  md:mb-12">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] font-bold tracking-wider">
          Philippians 4:13
        </h1>
        <span className={`${textColor} tracking-wider`}>
          &quot;I can do all things through Christ who strengthens me&quot;
        </span>
      </section>
      <div className="flex justify-start xl:justify-end  px-8 mb-2">
        <p className={textColor}>
          A quick read on what&apos;s happening at Oppa Fitness Gym today.
        </p>
      </div>
      {/* cards  */}
      <Cards />
      {/* graphs */}
      <GraphsSection />
      {/* member's status */}
      <MembersStatus />
    </main>
  );
}
