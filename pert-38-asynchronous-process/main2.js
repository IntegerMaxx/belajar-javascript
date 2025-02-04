import { readFile } from 'fs';

readFile('./sample.txt', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const greeting = data.toString()
    .replace('%name%', 'IntegerMaxx')
    .replace('%your_name%', 'Ucup');

  console.log(greeting);
});