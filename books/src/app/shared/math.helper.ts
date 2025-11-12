export function runde(value: number): number {
  return +value.toFixed(1);
}

export function limit(value: number, min: number, max: number): number {
  return Math.max(Math.min(value, max), min);
}
