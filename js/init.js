
CKCatalog.init = function() {
  try {

    // Configure CloudKit for your app.
    CloudKit.configure({
      containers: [{

        // Change this to a container identifier you own.
        containerIdentifier: 'iCloud.computer.perma-cloud',

        // And generate an API token through CloudKit Dashboard.
        apiToken: 'd5dbeee0209a5715835442067c9b36386cb611a2924575b6709fb0a737f79da3',

        auth: {
          buttonSize: 'medium',
          persist: true // Sets a cookie.
        },
        environment: 'development'
      }]
    });



    var failAuth = function() {
      var span = document.getElementById('username');
      span.textContent = 'Authentication Failed';
    };

    // Try to run the authentication code.
    try {
      CKCatalog.tabs['authentication'][0].sampleCode().catch(failAuth);
    } catch (e) {
      failAuth();
    }
  } catch (e) {
    CKCatalog.dialog.showError(e);
  }
};
