let students = ['Bob','Steve'];
for (let i = 0; i < students.length; i++) {
    console.log("first loop >>>",students[i]);
  }

  for (let student of students) {
    console.log("second loop >>>", student);
  }

 while (students.length >0) {
     student=students.pop();
    console.log("third loop >>>",student);
  }