import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { membersToCheck } from "@/app/lib/member-check";
import Link from "next/link";
import { getInitials } from "@/app/lib/get-initials";

export default function MembersStatus() {
  return (
    <section className="w-full mt-5 py-3 px-5 sm:px-12">
      <div className="w-full p-3 flex flex-col border rounded-lg border-(--dim-grey)/30">
        <div className="w-full flex justify-between mb-3">
          <div className="flex flex-col ">
            <div className="text-md">Worth a check-in</div>
            <div className="text-[11px] font-light">
              A small nudge can help members get back into their routine.
            </div>
          </div>

          <Link
            href="/directory"
            className="flex gap-1 justify-end items-start "
          >
            <span className="text-[11px] font-light">Member directory</span>
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </Link>
        </div>

        {membersToCheck.map((member) => {
          const initial = getInitials(member.name);

          return (
            <div key={member.name}>
              <hr className="border border-t-0 border-(--dim-grey)/30 rounded-full mb-1" />
              <div className="mx-auto w-11/12 h-13 flex flex-col justify-center gap-3 mb-1">
                <span className="flex gap-2">
                  <span className="w-10 h-10 rounded-full border border-(--dim-grey) text-xs flex justify-center items-center font-semibold">
                    {initial}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm">{member.name}</span>
                    <span className="text-[11px] font-light">
                      {member.plan} - {member.visit} visits this month.
                    </span>
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}