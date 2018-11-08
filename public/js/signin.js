document.addEventListener('DOMContentLoaded', () => {
    const btn_sign_in = document.getElementById('btn_sign_in');

    btn_sign_in.addEventListener('click', async () => {
        const name = document.getElementById('loginName');
        const email = document.getElementById('loginEmail');
        const pass = document.getElementById('loginPassword');
        userName = name.value;
        userEmail = email.value;
        userPass = pass.value;

        let response = await fetch('/signin', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({usName: userName, usEmail: userEmail, usPass: userPass})
        });

        window.location.replace("/account");
    });
});



