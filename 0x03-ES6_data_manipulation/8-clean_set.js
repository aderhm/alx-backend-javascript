export default function cleanSet(set, startString) {
  const setValues = [];
  if (!set || !startString || typeof startString !== 'string') {
    return '';
  }
  const filteredSet = [...set].filter((e) => typeof e === 'string' && e.startsWith(startString));
  for (const item of filteredSet) {
    setValues.push(item.slice(startString.length));
  }
  return setValues.join('-');
}
