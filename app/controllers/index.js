import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon?',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');
      let _this = this;

      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! we've just saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });

      Ember.run.later((function() {
        _this.transitionToRoute('admin.invitations');
      }), 5000)
    }
  }
});
