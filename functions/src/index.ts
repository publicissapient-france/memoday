import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';

const corsHandler = cors({ origin: true });

admin.initializeApp();

// noinspection JSUnusedGlobalSymbols
export const subscribeToTopic = functions.https.onRequest(async (request, response) => {
  corsHandler(request, response, async () => {
    try {
      const subResponse = await admin.messaging()
        .subscribeToTopic([request.body.registration_token], request.body.topic_name);
      response.send({ successCount: subResponse.successCount });
    } catch (e) {
      response.redirect(500, e.toString());
    }
  });
});
