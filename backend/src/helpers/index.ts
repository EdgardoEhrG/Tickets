export function firstLetterUppercase(str: string) {
  const strValue = str.toLowerCase();
  return `${strValue.charAt(0).toUpperCase()}${strValue.slice(1)}`;
}
