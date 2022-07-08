export const parseInstructions = (instructions) => {
  if (instructions == null) {
    return [];
  }
  let separator = '</li><li>';
  let begin_string = '<ol><li>';
  let end_string = '</li></ol>';
  let parsed = instructions.slice(begin_string.length, instructions.length - end_string.length)
  parsed = parsed.split(separator);
  return parsed;
}
