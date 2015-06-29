
function saveRecord(placeName, category, address, city, state, zipCode, country, daysAndHours, contact, phone, email, site, facebook, twitter, instagram, notes) {

	var container = CloudKit.getDefaultContainer();
	var publicDB = container.publicCloudDatabase;

	var record = {
		// recordName: recordName,
		zoneID: '_defaultZone',
		recordType: 'Locations',

		fields: {
			placeName: {
				value: placeName
			},
			category: {
				value: category
			},
			address: {
				value: address
			},
			city: {
				value: city
			},
			state: {
				value: state
			},
			zipCode: {
				value: zipCode
			},
			country: {
				value: country
			},
			daysAndHours: {
				value: daysAndHours
			},
			contact: {
				value: contact
			},
			phone: {
				value: phone
			},
			email: {
				value: email
			},
			site: {
				value: site
			},
			facebook: {
				value: facebook
			},
			twitter: {
				value: twitter
			},
			instagram: {
				value: instagram
			},
			notes: {
				value: notes
			}
		}
	};

return publicDB.saveRecord(record).then(function(response) {

		if (response.hasErrors) {
			throw response.errors[0];
		} else {
			var createdRecord = response.records[0];
			var fields = createdRecord.fields;
			var placeName = fields['placeName'];
			var category = fields['category'];
			var address = fields['address'];
			var city = fields['city'];
			var state = fields['state'];
			var zipCode = fields['zipCode'];
			var country = fields['country'];
			var daysAndHours = fields['daysAndHours'];
			var contact = fields['contact'];
			var phone = fields['phone'];
			var email = fields['email'];
			var site = fields['site'];
			var facebook = fields['facebook'];
			var twitter = fields['twitter'];
			var instagram = fields['instagram'];
			var notes = fields['notes'];


			return createdRecord
		}
	})
}