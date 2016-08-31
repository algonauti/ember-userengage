import ENV from '../config/environment';
import Configuration from 'ember-userengage/configuration';

export default {

  name: 'ember-userengage',

  initialize: function(registry) {
    const config = ENV.userEngage || {};
    Configuration.setProperties(config);
  }

}
