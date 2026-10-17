import { Calendar1Icon, Calendar2Icon, CalendarDaysIcon } from "./icons";

const plans = [
  {
    name: "Day Pass",
    price: "₱ 40",
    term: "Per day visit pass",
    description:
      "Per day training session. Students and senior citizens are discounted.",
    icon: <Calendar1Icon />,
  },
  {
    name: "B-week Pass",
    price: "₱ 400",
    term: "Unlimited Two",
    description:
      "Unlimited two weeks pass. Students and senior citizens are discounted.",
    icon: <Calendar2Icon />,
  },
  {
    name: "Monthly Pass",
    price: "₱ 600",
    term: "Unlimited monthly pass",
    description:
      "The most affordable and budget friendly rates for all. Students and senior citizens are discounted.",
    icon: <CalendarDaysIcon />,
  },
];

export default function Rates() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 w-full">
        {plans.map((plan) => {
          // const PlanIcon = plan.icon;
          return (
            <div
              key={plan.name}
              className="col-span-1 border p-3 rounded-lg border-(--dim-grey)/40 shadow-lg/10 flex flex-col gap-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-(--orange) dark:text-(--sunflower-gold)">
                  {plan.name}
                </h3>
                <span className="text-carbon-black/70 dark:text-off-white/70">
                  {plan.icon}
                </span>
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <span className="flex flex-row">
                  <span className="text-[24px] font-semibold">
                    {plan.price} {"."}
                  </span>
                  <span className="flex items-start">
                    <span className="text-[18px] h-3">00</span>
                  </span>
                </span>
                <span className="text-[11px] font-light">{plan.term}</span>
              </div>
              <p className="text-sm font-light">{plan.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}