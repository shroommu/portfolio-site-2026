/**
 * Frontmatter dates are written as M-D-YY or M-D-YYYY (e.g. "8-19-26",
 * "09-14-2023"). Parse them manually instead of relying on `new Date(str)`,
 * whose behavior for non-ISO strings varies across engines and timezones.
 */
export function parsePostDate(date: string): Date {
  const [month, day, year] = date.split("-").map(Number);
  const fullYear = year < 100 ? 2000 + year : year;
  return new Date(fullYear, month - 1, day);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
    parsePostDate(date),
  );
}

export function toISODate(date: string): string {
  const d = parsePostDate(date);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
