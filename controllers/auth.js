import User from "../models/user";

export const register = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  // validation
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and should be min 6 chars long");
  let userExists = await User.findOne({ email }).exec();
  if (userExists) return res.status(400).send("Email is taken");
  //register
  const user = new User(req.body);
  try {
    await user.save();
    console.log("USER CREATED", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err, "CREATE USER FAILED");
    return res.status(400).send("Error. Try again.");
  }
};
