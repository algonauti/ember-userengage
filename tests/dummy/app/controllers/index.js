import Ember from 'ember';

export default Ember.Controller.extend({

  userengage: Ember.inject.service(),

  userengageInitialized: false,

  actions: {

    initUserengageForGuests() {
      this.get('userengage').initialize();
      this.set('fullName', 'Guest');
      this.set('userengageInitialized', true);
    },

    login() {
      this.get('userengage').initialize({
        email: this.get('email'),
        name: this.get('fullName')
      });
      this.set('userengageInitialized', true);
    },

    destroy() {
      this.get('userengage').destroy();
      this.set('email', null);
      this.set('fullName', null);
      this.set('userengageInitialized', false);
    }
  }

});
