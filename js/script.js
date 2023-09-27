// Script modal
$(document).ready(function() {
  $("#form-login").on("submit", function(event) {
    alert("Login berhasil");
    event.preventDefault();
  });

  $("#form-faq").on("submit", function(event) {
    alert("Data tersimpan");
    event.preventDefault();
  });

  $("#form-contact-us").on("submit", function(event) {
    alert("Pesan Terkirim");
    event.preventDefault();
  });
});
