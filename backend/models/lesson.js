const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: String,
  status: {
    type: String,
    default: "Pending"
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }
});

module.exports = mongoose.model("Lesson", lessonSchema);