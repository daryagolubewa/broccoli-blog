document.addEventListener('DOMContentLoaded', () => {
    const btn_sign_in = document.getElementById('btn_sign_in');

    btn_sign_in.addEventListener('click', async () => {
        const email = document.getElementById('loginEmail');
        const pass = document.getElementById('loginPassword');
        userEmail = email.value;
        userPass = pass.value;

        let response = await fetch('/signin', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({usEmail: userEmail, usPass: userPass})
        });

        let answer = await response.text();
        window.location.replace("/account");
    });
});



