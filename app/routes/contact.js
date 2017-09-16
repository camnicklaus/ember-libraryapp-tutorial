import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    sendMessage(newContact) {
      newContact.save().then(() => this.controller.set('responseMessage', true));
      // .then(() => this.transitionTo('libraries'));
    },
    willTransition() {
      this.controller.get('model')
      // if (model.get('isNew')) {
      //   model.destroyRecord();
      // }
      .rollbackAttributes();
    }
  }
});
