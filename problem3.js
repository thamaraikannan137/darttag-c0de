//problem3

function migrateRings(n, A, B, C, steps) {
  if(n>0 &&A>0&&B>0&&C>0){
    if (n === 1) {
      steps.push(`${A}->${B}`);
    } else {
      migrateRings(n - 1, A, C, B, steps);
      steps.push(`${A}->${B}`);
      migrateRings(n - 1, C, B, A, steps);
    }
    return steps;
  }
 return steps.push(`Rings cannot be negative value`)
}

function solution(N, A, B, C) {
  const steps = [];
  migrateRings(N, A, B, C, steps);
  return steps;
}
console.log(solution(2,5,4,3)) //["5->3", "5->4", "3->4"]
