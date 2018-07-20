const { IncomingWebhook } = require('@slack/client');

const config_names = ['webhook_url', 'new_message', 'empty_message', 'skip_empty'];
exports.notify = (event, callback) => {
    const config  = process.env;
    // notify
    const body = `テストメッセージだよ！\r\n#event\r\n${event}\r\n#config\r\n${config}`;
    const webhook = new IncomingWebhook(config.webhook_url);
    webhook.send(body, (err, res) => {
        if (err) { console.error(err); }
        if (res) { console.error(res); }
        callback();
    });
}; 