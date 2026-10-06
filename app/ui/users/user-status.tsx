export default function UserStats() {
  const statusColor = {
    available: "border-green-500",
    away: "border-amber-400",
    busy: "border-red-500",
    offline: "border-gray-400", // default status if not logged in
  };
  const currentUserStatus: string = "busy";
  let statusIndicator: string;

  if (currentUserStatus === "available") {
    statusIndicator = statusColor.available;
  } else if (currentUserStatus === "away") {
    statusIndicator = statusColor.away;
  } else if (currentUserStatus === "busy") {
    statusIndicator = statusColor.busy;
  } else {
    statusIndicator = statusColor.offline;
  }

  // todo: get the user's current status from the database
  return <span className={`${statusIndicator} border-2 rounded-full`} />;
}
