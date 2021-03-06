var apiKey = require('./../.env').apiKey;

Doctor = function() {
};

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=or-portland&user_location=45.5231%2C-122.6765&skip=0&limit=15&user_key=' + apiKey)
   .then(function(response) {
      displayDoctors(response.data);
    })
   .fail(function(error){
     $('.showResult').text(error.responseText);
    });
};

exports.doctorModule = Doctor;
