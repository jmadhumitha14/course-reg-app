document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;

    document.getElementById('confirmation').textContent = `Thank you, ${name}, for registering for the ${course} course!`;
});
