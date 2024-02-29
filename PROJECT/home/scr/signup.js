document.getElementById('registration-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const registrationData = {
        name,
        phone,
        password,
        email,
    };

    try {
        const response = await fetch('http://localhost:3000/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
        });

        const result = await response.json();

        if (response.status === 201) {
            document.getElementById('message').textContent = 'Registration successful! Goto login';
        } else {
            document.getElementById('error').textContent = `Registration failed: Invalid parameters`;
        }
    } catch (error) {
        console.error('Registration request failed:', error);
        document.getElementById('message').textContent = 'Registration request failed';
    }
});
