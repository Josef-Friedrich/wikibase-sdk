// Generated by CoffeeScript 1.9.3
(function() {
  var buildUrl, wd_;

  wd_ = require('../utils/utils');

  buildUrl = require('../utils/build_url');

  module.exports = function(search, language, limit, format) {
    var query;
    if (language == null) {
      language = 'en';
    }
    if (limit == null) {
      limit = '20';
    }
    if (format == null) {
      format = 'json';
    }
    if (!((search != null ? search.length : void 0) > 0)) {
      throw new Error("search can't be undefined");
    }
    query = {
      action: 'wbsearchentities',
      search: search,
      language: language,
      limit: limit,
      format: format
    };
    return buildUrl('wikidata', query);
  };

}).call(this);
