// Get all open modal buttons
var btns = document.querySelectorAll('.openModalBtn');

// Get all close buttons
var spans = document.querySelectorAll('.close');

// Add event listeners to open modal buttons
btns.forEach((btn) => {
  btn.addEventListener('click', function() {
    var modalId = this.getAttribute('data-modal');
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

// Add event listeners to close buttons
spans.forEach((span) => {
  span.addEventListener('click', function() {
    var modal = this.parentElement.parentElement;
    modal.style.display = 'none';
  });
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
