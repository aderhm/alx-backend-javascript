const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift();

    const fields = {};
    let numberOfStudents = 0;

    lines.forEach((line) => {
      const [firstName, lastName, age, field] = line.split(',');

      if (firstName && lastName && age && field) {
        numberOfStudents += 1;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    console.log(`Number of students: ${numberOfStudents}`);

    for (const [k, v] of Object.entries(fields)) {
      console.log(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
