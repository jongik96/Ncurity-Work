function emailValidation(email) {
  let regex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (regex.test(email)) return true;
  else return false;
}

export { emailValidation };
