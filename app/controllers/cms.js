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
    var cms = new CMS(req.body)
    cms.user = req.user
    cms.save()
    res.jsonp(cms)
}

/**
 * Update a page
 */
exports.update = function(req, res) {
	console.log(req.body);
	console.log(req.url);
	res.send('xx');

    var page = req.page;
    page = _.extend(page, req.body)

    page.save(function(err) {
        res.jsonp(page)
    })

}

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var cms = req.cms
    cms.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(cms);
        }
    })
}

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.page);
}

exports.all = function(req, res) {
    CMS.find().sort('-created').populate('user').exec(function(err, pages) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(pages);
        }
    });
};
