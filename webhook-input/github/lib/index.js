/**
 * Lib
 */

module.exports.handlewebhook = function (event, cb) {
    console.log(JSON.stringify(event));
    return cb();
};