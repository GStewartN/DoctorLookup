var Doctor = require('./../js/doctor.js').doctoryModule;

var displayDoctors = function(doctors) {
  if (doctors.length === 0) {
    $('.showResult').append("There are no doctors matching this search.");
  } else {
    doctors.forEach(function(doctor) {
      $('.showResult').append("<li>" + doctor.name + "</li>");
    });
  }
};

$(document).ready(function() {
  $('.showResult').hide();
  var currentDoctorObject = new Doctor();
  $('#input').click(function() {
    $('.showResult').empty();
    $('.showResult').show();
    var medicalIssue = $('#med-issue').val();
    currentDoctorObject.getDoctors(medicalIssue, displayDoctors);
  });
});
