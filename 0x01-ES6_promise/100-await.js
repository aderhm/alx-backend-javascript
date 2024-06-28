import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const data = { photo: null, user: null };
  try {
    const upp = await uploadPhoto();
    const cru = await createUser();
    data.photo = upp;
    data.user = cru;
  } catch (error) {
    //
  }
  return data;
}
