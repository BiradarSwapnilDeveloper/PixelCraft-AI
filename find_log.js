const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://vaseflamingoseguru205_db_user:cWZpjkDJcz6yd4rz@cluster0.r9uhjxw.mongodb.net/pixelcraft?retryWrites=true&w=majority&appName=Cluster0';

const ForensicLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  email: String,
  sessionId: String,
  action: String,
  timestamp: { type: Date, default: Date.now },
  ipAddress: String,
  legalConsentGranted: Boolean
});

const ForensicLog = mongoose.model('ForensicLog', ForensicLogSchema);

async function findLog() {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to DB.");
    const logs = await ForensicLog.find({ sessionId: "PX-FNG-KW0IVASCY" }).lean();
    console.log(JSON.stringify(logs, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

findLog();
