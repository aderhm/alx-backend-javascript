export default function updateStudentGradeByCity(arr, city, newGrades) {
  const studentsFromCity = arr.filter((obj) => obj.location === city);
  return studentsFromCity.map((obj) => {
    const stdGrade = newGrades.filter((gr) => gr.studentId === obj.id)[0];
    return ({
      ...obj,
      grade: stdGrade ? stdGrade.grade : 'N/A',
    });
  });
}
