const roomOfEstudent = new Map();

roomOfEstudent.set(1, ['Michael Douglas Barbosa Araujo', 27]);
roomOfEstudent.set(2, ['Mrs. Steve', 60]);

const [studentName, age] = roomOfEstudent.get(1);
const [teacherName, room] = roomOfEstudent.get(2);

let message = `
      Hello: ${studentName} 
      to the your age: ${age} 
      please see ${teacherName} 
      in: (${room})λ
`;

console.log(message);
