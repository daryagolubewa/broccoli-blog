document.addEventListener('DOMContentLoaded', () => {
    const btn_sign_up = document.getElementById('btn_sign_up');

    btn_sign_up.addEventListener('click', async () => {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const pass = document.getElementById('password');
        userName = name.value;
        userEmail = email.value;
        userPass = pass.value;

        let response = await fetch('/signup', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({usName: userName, usEmail: userEmail, usPass: userPass})
        });

        let blabla = await response.text();
        window.location.replace("/entries");

    });
});
