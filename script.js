function contactFaculty(name) {
  alert(`You chose to contact ${name}. Please fill out the form below.`);
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
}
