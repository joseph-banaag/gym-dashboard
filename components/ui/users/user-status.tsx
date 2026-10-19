const userStatus: string = "busy"; // todo: change this string from the user status in the database

export default function UserStats() {
  const statusColor = {
    available: "border-green-500",
    away: "border-amber-400",
    busy: "border-red-500",
    offline: "border-gray-400", // default status if not logged in
  };
  let statusIndicator: string;

  if (status === "available") {
    statusIndicator = statusColor.available;
  } else if (status === "away") {
    statusIndicator = statusColor.away;
  } else if (status === "busy") {
    statusIndicator = statusColor.busy;
  } else {
    statusIndicator = statusColor.offline;
  }

  // todo: get the user's current status from the database
  return <span className={`${statusIndicator} border-2 rounded-full`} />;
}

// todo: update this value from the database and make sure the value is a string
export const status: string = userStatus;