Meteor.startup(function() {
  ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
      $set: {
        clientId: '863762479280-633td35bok35nlicln5ap1pvanjrdq6m.apps.googleusercontent.com',
        loginStyle: 'popup',
        secret: 'B-RDZMjf96EOW32ZnXA9O7i6'
      }
    }
  );
});