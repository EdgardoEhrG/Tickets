import mongoose from "mongoose";

import { userSchema } from "./schema";
import { IUser } from "../../interfaces/user";

const userModel: mongoose.Model<IUser> = mongoose.model<IUser>(
  "User",
  userSchema
);

export { userModel as UserModel };
