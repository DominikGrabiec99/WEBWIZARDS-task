const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.match(/.{1,3}/g)?.join(' ') || ''
}

export default formatPhoneNumber
