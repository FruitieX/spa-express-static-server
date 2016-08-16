'use strict';

/**
 * Add headers to response
 */
module.exports = function addHeaders(headers) {
    return function(req, res, next) {
        for (var header in headers) {
            res.setHeader(header, headers[header]);
        }
        next();
    };
};
