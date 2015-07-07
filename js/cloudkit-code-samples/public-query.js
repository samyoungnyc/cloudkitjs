function readQuery() {

    var container = CloudKit.getDefaultContainer();
    var publicDB = container.publicCloudDatabase;

    // var query = {
    //     recordType: 'Locations',
    //     sortBy: [{ fieldName: '___createTime',
    //     ascending: true 
    //     }]
    // };


    var query = {
        recordType: 'Locations'
    };

    // Execute the query.
    return publicDB.performQuery(query)
        .then(function(response) {
            if (response.hasErrors) {
                // Handle them in your app.
                throw response.errors[0];
            } else {
                var myRecords = response.records;
                var numberOfRecords = myRecords.length;
                alert(myRecords.length);

                if (numberOfRecords === 0) {
                    return render('No matching locations');
                } else {
                    document.getElementById('tableHeader').innerHTML ='<table border=1><tr><th>ID</th><th>Place Name</th><th>Category</th></tr>';

                    myRecords.forEach(function(record) {
                       var fields = record.fields; 


                    //     // var tableActual = "<tr><td>" + record['created'].timestamp + "</td><td>" + fields['placeName'].value + "</td><td>" + fields['category'].value + "</td><td>" + fields['address'].value + "</td><td>" + fields['city'].value + "</td><td>" + fields['state'].value + "</td><td>" + fields['zipCode'].value + "</td><td>" + fields['country'].value + "</td><td>" + fields['daysAndHours'].value + "</td><td>" + fields['contact'].value + "</td><td>" + fields['phone'].value + "</td><td>" + fields['email'].value + "</td><td>" + fields['site'].value + "</td><td>" + fields['facebook'].value + "</td><td>" + fields['twitter'].value + "</td><td>" + fields['instagram'].value + "</td><td>" + fields['notes'].value + "</td><td><button>Delete</button></td></tr>"
                    //     // var tableActual = "<tr><td>" + record['created'].timestamp + "</td><td>" + fields['placeName'].value + "</td><td>" + fields['category'].value + "</td><td>" + fields['address'].value + "</td><td>" + fields['city'].value + "</td><td>" + fields['state'].value + "</td><td>" + fields['zipCode'].value + "</td><td>" + fields['country'].value + "</td><td>" + fields['daysAndHours'].value + "</td><td>" + fields['contact'].value + "</td><td>" + fields['phone'].value + "</td><td>" + fields['email'].value + "</td><td>" + fields['site'].value + "</td><td>" + fields['facebook'].value + "</td><td>" + fields['twitter'].value + "</td><td>" + fields['instagram'].value + "</td><td>" + fields['notes'].value + "</td><td><button>Delete</button></td></tr>";
                        var timeStamp = record['created'].timestamp;
                        document.getElementById('tableHeader').innerHTML += "<tr><td>" + record['created'].timestamp + "</td><td>" + fields['placeName'].value + "</td><td>" + fields['category'].value + "</td></tr>";
                        // document.write("<tr><td>foo</td></tr>");
                        // document.write("TimeStamp:" + timeStamp + "<br>");
                        // document.write("foo" + fields['placeName'].value + "<br>");
                    });
                        // document.getElementById('tableHeader').innerHTML += "</table>";

                    // var endOfTable = "</table>";
                    // document.write(endOfTable);

                    // document.write("</table>");
                    
                }
            }
        });
}
