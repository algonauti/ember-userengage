/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-userengage',

  contentFor: function(type, config) {
    var content = '';
    if (type === 'head') {
      var src = 'https://widget.userengage.io/widget.js';
      content = '<script data-cfasync="false" src="'+src+'"></script>';
    }
    return content;
  }

};
