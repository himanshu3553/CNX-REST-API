const validateData = (data) => {
  if (data.length == 0) {
    return false;
  } else {
    return true;
  }
};

module.exports = { validateData };
