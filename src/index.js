module.exports = function toReadable (number) {

  if (number < 0 || typeof(number) !== 'number') return;
  if (number === 0) return 'zero';

  const str = number.toString();
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if (number < 20) {
      return ones[number];
  }

  if (str.length === 2) {
      return `${tens[str[0]]} ${ones[str[1]]}`.trim();
  }

  if (str.length === 3) {

      if (str[1] === '0' && str[2] === '0') {
          return `${ones[str[0]]} hundred`;
      }

      if (str[1] === '0') {
          return `${ones[str[0]]} hundred ${ones[str[2]]}`
      }

      if (number % 100 < 20) {
          return `${ones[str[0]]} hundred ${ones[number % 100]}`
      }
      
      return `${ones[str[0]]} hundred ${tens[str[1]]} ${ones[str[2]]}`.trim();
  }

}