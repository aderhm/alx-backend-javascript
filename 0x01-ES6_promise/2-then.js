export default function handleResponseFromAPI(promise) {
  // eslint-disable-next-line no-unused-vars
  return promise.then((res) => {
    console.log({ status: 200, body: 'success' });
  })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      console.error(new Error(''));
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
