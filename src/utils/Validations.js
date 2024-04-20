import constants from "./constants";


export const validateEmail = email => {
  if (!email) return 'E-mail is required field';
  if (!constants.regEmail.test(email)) return 'Invalid E-mail';
};