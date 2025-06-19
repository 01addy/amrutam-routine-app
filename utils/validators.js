// utils/validators.js
export const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const validatePhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10;
};

export const isEmpty = (val) => {
  return !val || val.trim().length === 0;
};
