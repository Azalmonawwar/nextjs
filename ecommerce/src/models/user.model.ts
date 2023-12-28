//User models
import { Document, Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

type NextFunction = (err?: any) => void;

//interface for user
interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

//Schema for user
const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//encrypt password using bcrypt
userSchema.pre("save", async function (this: IUser, next: NextFunction) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);

  this.password = hash;
  next();
});

//compare password
userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User = models.User || model<IUser>('User', userSchema);

export default User;
