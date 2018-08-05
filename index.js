const { IncomingWebhook } = require('@slack/client');

exports.notify = (event, callback) => {
    const config = process.env;
    if (!event.data) { return; }
    const text = event.data.textPayload;
    if (!text) { return; }
    const body = text;
    const webhook = new IncomingWebhook(config.webhook_url);
    webhook.send(body, (err, res) => {
        if (err) { console.error(err); }
        callback();
    });
}; 