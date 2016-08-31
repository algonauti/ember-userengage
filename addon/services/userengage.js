/* global UE */
import Ember from 'ember';
import Configuration from '../configuration';

export default Ember.Service.extend({

  initialize(options = {}) {
    options['apiKey'] = Configuration.apiKey;
    UE.init(options);
  },

  pageHit() {
    UE.pageHit({
      apiKey: Configuration.apiKey
    });
  },

  refresh(options) {
    UE.refresh(options);
  },

  destroy() {
    UE.destroy();
  }


});
