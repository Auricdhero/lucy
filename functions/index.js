const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json') 

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lucy-enammr.firebaseio.com"
}); 

const { sessiionsClient } = require('dialogflow');


exports.dialogflowGateway = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const{ queryInput, sessionId } = request.body;

        const sessiionsClient = new sessiionsClient({ credentials: serviceAccount });
        const session = sessionClient.sessionPath('fireship-lessons')
    });
});