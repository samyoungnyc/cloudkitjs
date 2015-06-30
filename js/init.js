
CKCatalog.init = function() {
  try {

    // Configure CloudKit for your app.
    CloudKit.configure({
      containers: [{

        // Change this to a container identifier you own.
        containerIdentifier: 'iCloud.computer.perma-cloud',

        // And generate an API token through CloudKit Dashboard.
        apiToken: 'c1fdb30bc021d61b9fd3e7b5b22f0261da353a487cc21ded2b09de5189bd9041',

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
