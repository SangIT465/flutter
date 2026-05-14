const admin = require("firebase-admin");

try {
  const serviceAccount = require("./serviceAccountKey.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (e) {
  console.warn("serviceAccountKey.json not found. Firebase Auth disabled.");
}

module.exports = admin;