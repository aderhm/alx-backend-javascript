export default function cleanSet(set, startString) {
  const setValues = [];
  if (startString !== '') {
    for (const item of set) {
      if (item.substring(0, startString.length) === startString) {
        setValues.push(item.substring(startString.length, item.length));
      }
    }
  }
  return setValues.join('-');
}
