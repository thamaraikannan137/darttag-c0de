//problem3

function migrateRings(n, A, B, C, steps) {
  if (n >= 0) {
    if (n === 0) {
      return;
    }
    migrateRings(n - 1, A, C, B, steps);
    steps.push(`${n}:${A} to ${B}`);
    migrateRings(n - 1, C, B, A, steps);
    return steps;
  }
  return steps.push(`Rings cannot be negative value`);
}

function solution(N, A, B, C) {
  const steps = [];
  migrateRings(N, A, B, C, steps);
  return steps;
}
console.log(solution(2, 'A', 'B', 'C')); //["1:A->C", "A->B", "1:C->B"]
