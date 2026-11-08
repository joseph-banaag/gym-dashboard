export default function Ring() {
  return (
    <>
      {/* RING */}
      <span className="absolute w-94 h-94 border rounded-full bg-carbon-black/50 border-(--dim-grey)/30 -z-20 right-0 bottom-0 translate-x-5 translate-y-10">
        <span className="absolute w-74 h-74 rounded-full bg-(--deep-crimson)/30  inset-shadow-sm/20 inset-shadow-slate-500 -z-20 right-0 bottom-0 translate-x-5 translate-y-10">
          <span className="absolute w-54 h-54 border rounded-full border-(--dim-grey)/30 -z-20 bg-(--deep-crimson)/80 right-0 bottom-0 translate-x-5 translate-y-10" />
        </span>
      </span>
    </>
  );
}
