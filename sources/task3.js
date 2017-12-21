'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (q) => {
  return new Promise((resolve, reject) => {
    rl.question(q, (answer) => {
      if (answer)
        resolve(answer);
      else
        reject(new Error('Answer is empty!'));
    });
  });
};

(async () => {
  try {
    const answer1 = await question('What is your name? ');
    console.log(`Hello ${ answer1 }`);

    const answer2 = await question('Do you like CIT? ');
    console.log(`Thnx for your answer \"${ answer2 }\" :)`);

    rl.close();
  } catch (err) {
    console.log(err.message);
    rl.close();
  }
})();
