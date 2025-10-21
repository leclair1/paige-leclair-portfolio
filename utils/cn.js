// utils/cn.js — lightweight className combiner
export function cn(...args) {
  const classes = [];
  for (const arg of args) {
    if (!arg) continue;
    const t = typeof arg;
    if (t === 'string') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(cn(...arg));
    } else if (t === 'object') {
      for (const [key, val] of Object.entries(arg)) {
        if (val) classes.push(key);
      }
    }
  }
  return classes.join(' ');
}

export default cn;

