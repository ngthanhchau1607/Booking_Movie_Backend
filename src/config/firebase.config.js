var admin = require("firebase-admin");

var serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Thay thế các ký tự '\n' thành ký tự dòng mới thực tế
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: `gs://${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
});

const bucket = admin.storage().bucket();

module.exports = bucket;