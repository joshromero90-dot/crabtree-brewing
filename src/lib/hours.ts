import { site } from "./site-config";

export function getTodayStatus(now: Date = new Date()) {
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const today = site.hours[day];
  const isOpen =
    today.open !== null && today.close !== null && hour >= today.open && hour < today.close;

  return {
    today,
    isOpen,
    closesAt: today.close,
  };
}

export function formatHour(h: number | null) {
  if (h === null) return "Closed";
  const period = h >= 12 ? "PM" : "AM";
  let hour12 = h % 12;
  if (hour12 === 0) hour12 = 12;
  return `${hour12}${period}`;
}
