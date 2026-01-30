export function lerp(start, end, t) {
  return start + (end - start) * t;
}

export function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}