import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return {
    photo: await uploadPhoto().then((data) => data),
    user: await createUser().then((data) => data),
  };
}
