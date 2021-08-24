export const encodeDate = (date: Date) =>
  encodeURIComponent(
    date.toISOString().slice(0, 10).split("-").reverse().join("/"),
  );
