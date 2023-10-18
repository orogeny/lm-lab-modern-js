// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(a, b) {

  let total = 0;

  for (const arg of arguments) {
    total += arg;
  }
  return total;
}

add(1, 2, 3, 4, 5);
