import mongoose, { Model, Schema, Document } from "mongoose";

interface IPostMessage {
  title: string;
  message: string;
  creator: string;
  tags: String[];
  selectedFile: string;
  likeCount?: Number;
  createdAt?: Date;
}
interface IPostMessageDocument extends Document, IPostMessage {
  iPostMeaageId: string;
}
const iPostMessageSchema = new Schema<IPostMessageDocument>(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    creator: { type: String, required: true },
    tags: { type: [String] },
    selectedFile: { type: String },
    likeCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    toJSON: {
      transform: function (dec, ret) {
        ret.iPostMeaageId = ret._id.toString();
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const PostMessageModel: Model<IPostMessageDocument> =
  mongoose.model<IPostMessageDocument>("PostMessage", iPostMessageSchema);

export { IPostMessage, IPostMessageDocument, PostMessageModel };
