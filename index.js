const rcloadenv = require('@google-cloud/rcloadenv')
const config_names = ['webhook_url', 'new_message', 'empty_message'];
exports.notify = (event, callback) => {
    const config = {};
    config_names.forEach(v => {
        config[v] = rcloadenv.getVariables(v, '');
    });

    const data = event.data;
    // debug
    console.log('event', event, 'config', config);
    callback();
}; 