document.addEventListener('DOMContentLoaded', () => {
    // Send a request to your backend to retrieve the user's email
    fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.email) {
                // Display a greeting message with the email
                const greetingMessage = `Welcome, ${data.email}!`;
                document.getElementById('greeting').textContent = greetingMessage;
            }
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
        });
}); document.getElementById('logout-button').addEventListener('click', async () => {
    try {
        const refreshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWJhYzUzNDk1NGI1NDEzOTgwNmMxMTIiLCJpYXQiOjE1ODkyOTg0ODQsImV4cCI6MTU4OTMwMDI4NH0.m1U63blB0MLej_WfB7yC2FTMnCziif9X8yzwDEfJXAg'; // Replace with the actual refreshToken
        const response = await fetch('http://localhost:3000/v1/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken }),
        });

        if (response.status === 200) {
            setTimeout(function () {

                window.location.href = `./login.html`;
            }, 2000);
            // Redirect to the login page or any other desired destination
            window.location.href = './login.html';
        } else {
            // Handle logout error, e.g., display an error message
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('Logout request failed:', error);
    }
});










//EMAIL VERIFICATION

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the user's email from a session or other source
    const userEmail = document.getElementById('email').value; // Replace with the actual user's email

    // Display the user's email in the dashboard
    document.getElementById('email').textContent = userEmail;

    // Add an event listener for the "Verify Email" button
    document.getElementById('verify-email-button').addEventListener('click', () => {
        sendVerificationEmail(userEmail);
    });

    // Function to send a verification email
    async function sendVerificationEmail(email) {
        try {
            const response = await fetch('http://localhost:3000/v1/auth/send-verification-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.status === 200) {
                // Email sent successfully, display a message to the user
                document.getElementById('v-message').textContent = 'Verification email sent. Please check your inbox.';
            } else {
                // Handle the case where the email verification request fails
                document.getElementById('v-message').textContent = 'Failed to send the verification email. Please try again.';
            }
        } catch (error) {
            console.error('Email verification request failed:', error);
            document.getElementById('v-message').textContent = 'Email verification request failed. Please try again.';
        }
    }
});
