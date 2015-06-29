/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
The first use of the CloudKit namespace should be to set the configuration parameters.
*/

/**
 * This function is run immediately after CloudKit has loaded.
 */
CKCatalog.init = function() {
  try {

    // Configure CloudKit for your app.
    CloudKit.configure({
      containers: [{

        // Change this to a container identifier you own.
        containerIdentifier: 'iCloud.computer.perma-cloud',

        // And generate an API token through CloudKit Dashboard.
        apiToken: 'f87615ca1664ecb6c9c4492e68765556458733532e241a1e2e0d09d805a5092e',

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
