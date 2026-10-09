import "@/app/globals.css";
import Cards from "@/app/ui/dashboard/cards";
import GraphsSection from "@/app/ui/dashboard/graphs-section";
import MembersStatus from "@/app/ui/dashboard/member-status";

export default function Overview() {
  return (
    <main className="mb-20">
      <section className="ps-8 sm:ps-25 mt-20 sm:mt-30.5 flex xs:flex-row flex-col gap-3 mb-6  md:mb-8">
        <h1 className="text-4xl font-bold tracking-wider">Philippians 4:13</h1>
        <span className="text-[10px] xs:text-[12px] font-extralight tracking-wider">
          &quot;I can do all things through Christ who strengthens me&quot;
        </span>
      </section>
      <div className="flex justify-start xl:justify-end  px-8 mb-2">
        <p className="text-[12px] font-extralight">
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