import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  username: String
}, {collection: 'tuits'});
export default schema;