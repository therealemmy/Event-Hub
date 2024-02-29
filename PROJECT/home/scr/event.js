document.getElementById('event-details').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const language = document.getElementById('lanuage').value;
    const country = document.getElementById('country').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const planner_email = document.getElementById('planner_email').value;
    const format = document.getElementById('format').value;
    const venue = document.getElementById('venue').value;
    const event_date = document.getElementById('event_date').value;
    const event_time = document.getElementById('event_time').value;

    const eventData = {
        title,
        category,
        language,
        country,
        first_name,
        last_name,
        planner_email,
        format,
        venue,
        event_date,
        event_time
    };

    try {
        fetch('http://localhost:3000/v1/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTQ5MTYzZjM3NGVhMzM2NzgyYjE5NzAiLCJpYXQiOjE2OTk0ODcwMjAsImV4cCI6MTY5OTQ4ODgyMCwidHlwZSI6ImFjY2VzcyJ9.m3EdiU-33INQfxBeu8Vrm47a29fOD1id4L6E_V7raY4'}`


            },
            body: JSON.stringify(eventData),
        });

        console.log(response)


        document.getElementById('login-form').addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
        })
        if (response.status === 201) {
            document.getElementById('message').textContent = 'Event created successfully! Goto dashboard and view analytics';
        } else {
            document.getElementById('error').textContent = `Event not created!`;
        }
    
    }
});





