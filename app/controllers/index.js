import Ember from 'ember';

export default Ember.Controller.extend({
  // isDisabled: true,

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! we've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
  // emailAddressChanged: Ember.observer('emailAddress', function() {
  //   console.log('observer is called', this.get('emailAddress'));
  // })
});
