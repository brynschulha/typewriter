const sentence = "hello there from lighthouse labs";

let iterations = 0;


const interval = setInterval(() => {
  process.stdout.write(sentence[iterations]);
  iterations++;
  if (iterations === sentence.length) {
    console.log("");
    clearInterval(interval);
  }
}, 500);