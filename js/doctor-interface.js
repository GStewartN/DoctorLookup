var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(doctors) {
  if (doctors.length === 0) {
    $('.showResult').append("There are no Doctors matching this search.");
  } else {
    doctors.forEach(function(doctor) {
      $('.showResult').append("<li>" + doctor.profile.first_name + " " + doctor.profile.last_name + " " + doctor.profile.title + "<br><br>" + doctor.profile.bio + "<br><br><br>" + "</li>");
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
