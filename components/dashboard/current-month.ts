// lib/date.ts
export const getCurrentMonth = (date = new Date()) =>
  new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);

export const getDaysInMonth = (date = new Date()) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

getDaysInMonth();                    // 31 (October 2026)
getDaysInMonth(new Date(2024, 1));   // 29 (Feb 2024, leap year)
getDaysInMonth(new Date(2026, 1));   // 28 (Feb 2026)


// If you need to render a calendar grid or list of days, you can build an array from it:
// const days = Array.from({ length: getDaysInMonth() }, (_, i) => i + 1);
// [1, 2, 3, ..., 31]