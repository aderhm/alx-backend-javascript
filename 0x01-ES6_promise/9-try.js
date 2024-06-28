export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const op = mathFunction();
    queue.push(op);
  } catch (error) {
    queue.push(`${error}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
