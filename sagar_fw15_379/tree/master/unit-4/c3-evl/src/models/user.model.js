const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImages: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema("preSave", (next) => {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

module.exports = mongoose.model("user", userSchema);
