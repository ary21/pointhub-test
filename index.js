let step = 0;
const movement = (s, d, e, n) => {
  if (n <= 0) {
    return;
  }

  step++;
  movement(s, e, d, n - 1);
  console.log(`Move Disk-${n} FROM ${s} TO ${d}`);

  movement(e, d, s, n - 1);
};

const howManyStep = (discs) => {
  console.clear();
  movement("start", "destination", "intermediate", 3);

  console.log("step >", step);
};

howManyStep();
