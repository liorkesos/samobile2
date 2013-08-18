
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema;

/**
 * User Schema
 */

var CMSSchema = new Schema({});
mongoose.model('CMS', CMSSchema);

