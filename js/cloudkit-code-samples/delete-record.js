function deleteRecord(recordName, zoneName)
    var container = CloudKit.getDefaultContainer();
    var publicDB = container.publicCloudDatabase;

    return publicDB.deleteRecord({
    	recordName: recordName,
    	zoneID: '_defaultZone',
    }).then(function(response) {
    	if(response.hasErrors) {
    		throw response.errors[0];
    	} else {
    		var deletedRecord = response.records[0];

    		return deletedRecord.recordName
    	}
    })