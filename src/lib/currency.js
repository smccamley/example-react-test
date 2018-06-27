export default number =>
  number.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP'
  })
