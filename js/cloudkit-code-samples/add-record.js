
function saveRecord(placeName, state, zipCode) {
	alert("placeName:"+ placeName + "\n" + "state" + state + "\n" + "zip" + zipCode);

	var container = CloudKit.getDefaultContainer();
	var privateDB = container.privateCloudDatabase;

	var record = {
		// recordName: recordName,
		zoneID: '_defaultZone',
		recordType: 'Locations',

		fields: {
			placeName: {
				value: placeName
			},
			state: {
				value: state
			},
			zipCode: {
				value: zipCode
			}
		}
	};

return privateDB.saveRecord(record).then(function(response) {
		alert("privateDB")

		if (response.hasErrors) {
			throw response.errors[0];
		} else {
			var createdRecord = response.records[0];
			var fields = createdRecord.fields;
			var placeName = fields['placeName'];
			var state = fields['state'];
			var zipCode = fields['zipCode'];

			return createdRecord
		}
	})
}