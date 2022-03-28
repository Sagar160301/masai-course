const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 8);
  this.password = hash;
  console.log(this.password, "hash");
  return next();
});

module.exports = mongoose.model("user", userSchema);
