export default function updateStudentGradeByCity(list, city, newGrades) {
  const stdByCity = list.filter((student) => student.location === city);
  return stdByCity.map((student) => {
    const studentGr = newGrades.filter((stdg) => stdg.studentId === student.id)[0];
    return ({
      ...student,
      grade: studentGr ? studentGr.grade : 'N/A',
    });
  });
}
