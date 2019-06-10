import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';

const corsHandler = cors({ origin: true });

admin.initializeApp();

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

// @ts-ignore
export const scheduleSendMessageToReminderTopic = functions.pubsub.schedule('55 11,17 * * *')
  .timeZone('Europe/Paris')
  .onRun(async () => {
    await admin.messaging().send({
      topic: 'reminder',
      notification: {
        body: 'Any achievements to write down?',
        title: 'Hands up 🙌'
      },
      webpush: {
        headers: {
          Urgency: 'high'
        },
        notification: {
          body: 'Any achievements to write down?',
          title: 'Hands up 🙌',
          requireInteraction: true,
          icon: '/img/icons/favicon-196x196.png',
          badge: '/img/notification.png'
        },
        fcm_options: {
          link: 'https://memoday-e29ea.firebaseapp.com/'
        }
      }
    });
  });
