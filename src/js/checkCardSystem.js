export const checkCardSystem = (cardNum) => {
 const systems = {
  visa: /^4/,
  mastercard: /^(5[1-5])/,
  discover: /^(60|62|64|65)/,
  americanExpress: /^3[47]/,
  jcb: /^(35)/,
  diners: /^(30[0-5]|36|38|39)/,
  mir: /^220[0-4]/,
 }

 for (const [key, regex] of Object.entries(systems)) {
  if (regex.test(cardNum)) return key
 }

 return 'not a card'
}
