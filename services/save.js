const User = require("./../models/User");

const save = async (data) => {
  data.forEach(async function (item, index) {
    let status = await User.createUser(item);
  });
};

module.exports = { save };
