export const capitalize = str => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.substr(1);
}

export const truncateString = (string, maxStringLength) => {
  return string.length >= maxStringLength ? string.slice(0, 51) + '...' : string;
};

export const formatPrice = (value) => {
  const valueString = value.toFixed(2).toString();
  return valueString.replace('.', ',');
}