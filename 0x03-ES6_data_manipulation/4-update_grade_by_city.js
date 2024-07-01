export default function updateStudentGradeByCity(arr, city, newGrades) {
  const studentsFromCity = arr.filter((obj) => obj.location === city);
  studentsFromCity.forEach((element) => {
    const elementGrades = newGrades.filter((gr) => gr.studentId === element.id);
    if (elementGrades[0]) {
      // eslint-disable-next-line no-param-reassign
      element.grade = elementGrades[0].grade;
    } else {
      // eslint-disable-next-line no-param-reassign
      element.grade = 'N/A';
    }
  });
  return studentsFromCity;
}
