const User = require("../models/user");
const asyncWrapper = require("../middleware/asyncWrapper");


const getAllUsers = asyncWrapper( async (req, res) => {
  const all_users = await User.find();
  res.json(all_users);
});

const getSingleUser = asyncWrapper(async (req, res) => {
  const single_user = await User.findById(req.params.id);
  res.status(200).json(single_user);
});

const updateUser = asyncWrapper(async (req, res) => {
  const existingUser = await user.findById(req.params.id);
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "the specified user does not exist" });
  }

  const updated_user = await User.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    {
      new: true,
    }
  );
  res.status(200).json(updated_user);
});

const deleteUser = asyncWrapper(async (req, res) => {
  const deleted_user = await User.findByIdAndDelete({
    _id: req.params.id,
  });
  if (!deleted_user) {
    return res
      .status(404)
      .json({ message: "the specified user does not exist" });
  }
  res.status(200).json(deleted_user);
});
module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
