import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const output = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => {
      data.forEach((d) => {
        if (d.status === 'rejected') {
          output.push({ status: d.status, value: String(d.reason) });
        } else {
          output.push(d);
        }
      });
      return output;
    });
}
