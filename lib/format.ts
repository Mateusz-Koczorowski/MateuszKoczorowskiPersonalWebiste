import type { DateRange } from "@/content";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "07.2024" -> "Jul 2024". Returns the input unchanged if it is not MM.YYYY. */
export function formatMonthYear(value: string) {
  const match = /^(\d{2})\.(\d{4})$/.exec(value);
  if (!match) return value;
  const month = months[Number(match[1]) - 1];
  return month ? `${month} ${match[2]}` : value;
}

/** One date format for the whole site: "Jul 2024 – now", "Mar 2023 – Jun 2024". */
export function formatDateRange(range?: DateRange) {
  if (!range) return "";
  const start = formatMonthYear(range.start);
  const end =
    range.isCurrent || range.end === "Present"
      ? "now"
      : range.end
        ? formatMonthYear(range.end)
        : "";
  return end ? `${start} – ${end}` : start;
}
