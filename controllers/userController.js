const bcrypt = require("bcrypt");
const { User } = require("../models/User");

const createUser = async (request, h) => {
  try {
    const { email, password } = request.payload;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashedPassword });
    return h.response({ id: user.id, email: user.email }).code(201);
  } catch (error) {
    console.error("User creation error:", error.message);
    return h.response({ error: error.message }).code(400);
  }
};

module.exports = { createUser };
