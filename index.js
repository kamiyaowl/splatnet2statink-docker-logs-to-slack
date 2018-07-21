const { IncomingWebhook } = require('@slack/client');

exports.notify = (event, callback) => {
    const config = process.env;
    const body = config.message;
    const webhook = new IncomingWebhook(config.webhook_url);
    webhook.send(body, (err, res) => {
        if (err) { console.error(err); }
        callback();
    });
}; 