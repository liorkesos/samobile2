/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    async = require('async'),
    CMS = mongoose.model('CMS'),
    _ = require('underscore');

exports.item = function(req, res, next, id) {
    var cms = mongoose.model(CMS);

    CMS.load(id, function(err, item) {
        if (err) return next(err);
        if (!item) return next(new Error('Failed to load item ' + id));
        req.item = item;
        next();
    })
}

/**
 * Create a article
 */
exports.create = function(req, res) {
    var article = new Article(req.body)
    article.user = req.user
    article.save()
    res.jsonp(article)
}

/**
 * Update a article
 */
exports.update = function(req, res) {
	console.log(req.body);
	console.log(req.url);
	res.send('xx');

   /* var article = req.article
    article = _.extend(article, req.body)

    article.save(function(err) {
        res.jsonp(article)
    })
*/

}

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var article = req.article
    article.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(article);
        }
    })
}

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.article);
}
