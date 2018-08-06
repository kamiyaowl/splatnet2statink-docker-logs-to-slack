const { IncomingWebhook } = require('@slack/client');

// KEY - dataから取り出すデータ名
// WEBHOOL_URL - Webhook通知先
exports.notify = (event, callback) => {
    const config = process.env;
    const key = config.KEY || 'textPayload';
    // get textPayload
    if (!event.data) { 
        console.error('data is null or empty');
        callback();
        return;
     }
    const dataStr = Buffer.from(event.data.data, 'base64').toString();
    const data = JSON.parse(dataStr);
    if (!data) {
        console.error('data is null or empty');
        callback();
        return;
    }
    const text = data[key];
    if (!data) {
        console.error(`data[${key}] is null or empty`);
        callback();
        return;
    }
    // notify
    const body = text;
    const webhook = new IncomingWebhook(config.WEBHOOK_URL);
    webhook.send(body, (err, res) => {
        if (err) { console.error(err); }
        callback();
    });
}; 