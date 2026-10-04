
export default function UserStats() {

  const statuses = {
    available: "border-green-500",
    away: "border-amber-400",
    busy: "border-red-500",
    offline: "border-gray-400",
  };

  return (
    <span className={`${statuses.available} border-2 rounded-full w-1 h-1`} />
  );
}
