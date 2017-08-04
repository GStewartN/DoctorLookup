var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(doctors) {
  if (doctors.length === 0) {
    $('.showResult').append("There are no Doctors matching this search.");
  } else {
    doctors.forEach(function(doctor) {
      console.log(doctor);
      $('.showResult').append("<li>" + doctor.first_name + doctor.last_name + "</li>");
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
