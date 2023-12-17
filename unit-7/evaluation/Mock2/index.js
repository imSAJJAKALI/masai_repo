let userForm = document.getElementById('userForm');

userForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await loginAdmin(userForm.email.value, userForm.password.value);
});

async function loginAdmin(email, password) {
    try {
        let response = await fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            let data = await response.json();
            console.log(data)
            localStorage.setItem('token', JSON.stringify(data.token));
            alert(`Login successful Token: ${data.token}`);
            window.location.href = './dashboard.html';
        } else {
       
            alert('Login failed');
        }
    } catch (error) {
        console.log(error);
    }
}
