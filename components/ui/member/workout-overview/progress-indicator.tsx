import { jetbrainsMono, textColor } from "@/lib/text-helper";
import { NotepadText } from "lucide-react";

export default function ProgressIndicator() {
  return (
    <div className="col-span-1 p-3 rounded-xl bg-carbon-overlay shadow-xl/15 border border-(--dim-grey)/20">
      <div className={`${textColor} flex justify-between items-center mb-2`}>
        <strong>Progress indicator</strong>
        <div className="p-1 rounded-sm bg-(--dim-grey)/20">
          <NotepadText className="w-3 h-3" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className={`${jetbrainsMono.className}`}>
          <strong>Week 4</strong>
          <strong className={textColor}> of 8</strong>
        </div>
        <div className="relative flex flex-col">
          <span className={textColor}>You are halfway through your plan</span>
        </div>
      </div>
    </div>
  );
}
