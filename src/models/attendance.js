import mongoose from "mongoose";

const attendSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true,
  },
  latitudeIn: {
    type: Number,
    required: true,
  },
  longitudeIn: {
    type: Number,
    required: true,
  },
  ipIn: {
    type: String,
    required: true,
  },
  clockInTime: {
    type: Date,
    required: true,
  },
  latitudeOut: {
    type: Number,
  },
  longitudeOut: {
    type: Number,
  },
  ipOut: {
    type: String,
  },
  clockOutTime: {
    type: Date,
  },
})

const Attendance = mongoose.model('Attendance', attendSchema);

export default Attendance;