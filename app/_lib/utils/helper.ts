export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});


export const scaled = (value: number) =>
  `[calc(${value}rem*var(--scale-factor))]`;