// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for graph
    // You can add JavaScript code here to populate the graph
    // For example:
    var ctx = document.getElementById('workoutGraph').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['12:00', '6:00', '12:00', '6:00'],
            datasets: [{
                label: 'Workout Progress',
                data: [12, 19, 3, 5],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // Toggle switch functionality
    document.querySelectorAll('.switch input').forEach(function(input) {
        input.addEventListener('change', function() {
            var isChecked = this.checked;
            var workoutName = this.parentNode.parentNode.querySelector('.workout-name').textContent;
            var message = isChecked ? 'Enabled' : 'Disabled';
            console.log(workoutName + ' ' + message);
            // You can add your code here to perform actions based on the toggle switch state
        });
    });

    document.getElementById('createAccountForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var terms = document.getElementById('terms').checked;

        // Perform validation
        if (!firstName || !lastName || !email || !password || !terms) {
            alert('Please fill in all fields and agree to the terms and conditions.');
            return;
        }

        // Display success message
        alert('Account successfully created!');

        // Redirect to the login page
        window.location.href = 'login.html';
    });

    document.querySelector('button[type="submit"]').addEventListener('click', function() {
        window.location.href = 'tracking.html';
    // script.js

    document.addEventListener('DOMContentLoaded', function() {
    // Initialize Flatpickr for the calendar
    flatpickr('#calendar', {
        enableTime: false,
        dateFormat: "Y-m-d",
        minDate: "today",
        maxDate: new Date().fp_incr(30) // Allow scheduling up to 30 days in the future
    });
});

    });
});
