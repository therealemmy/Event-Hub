document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // const password = document.getElementById('password').value;

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = {
        email,
        password,
    };

    try {
        const response = await fetch('http://localhost:3000/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });
        const result = await response.json();

        // if (response.status === 200) {
        //     const user = result.user;
        //     const greetingMessage = `Welcome, ${user.name}!`;

        //     document.getElementById('greet').textContent = greetingMessage;
        //     const result = await response.json();
        // }--



        if (response.status === 200) {
            document.getElementById('message').textContent = 'Login successful! Redirecting...';


            setTimeout(function () {

                window.location.href = `./dashboard.html`;
            }, 2000);
        } else {
            document.getElementById('error').textContent = `Incorrect email or password`;
        }
    } catch (error) {
        console.error('Login request failed:', error);
        document.getElementById('message').textContent = 'Login request failed';
    }
});














