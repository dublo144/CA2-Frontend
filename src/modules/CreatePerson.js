const newPersonForm = document.getElementById('newPersonForm');
newPersonForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const newUser = Object.fromEntries(formData);
  console.log(newUser);
});
