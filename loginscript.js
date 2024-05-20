const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById("form")
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(username.value);
    console.log(password.value)
    let x = 0
    const relod = function () {
        location.reload();
    }
    for (let i = 0; i < user.length; i++) {
        if (user[i].user === username.value && user[i].paasword === password.value) {
            // const p = document.createElement('div')
            // p.innerHTML = "Welcome"
            // p.style.textAlign = "center"
            // p.style.textDecoration = "bolder"
            // form.appendChild(p);

            // const time = setTimeout(relod, 3000)

            // x = 1;
            document.getElementById("submit").addEventListener("click", function () {
                window.location.href = "index.html";
            })
        }
        else if (x === 0) {
            if (i === user.length - 1) {
                
                const p = document.createElement('div')
                p.innerHTML = "Incorrect username or password"
                p.style.textAlign = "center"
                p.style.textDecoration = "bolder"
                form.appendChild(p);
                const time = setTimeout(relod, 1000)

            }
        }
    }
})

// createing four user data

const user = [{
    user: "user1",
    paasword: "abc"
},
{
    user: "user2",
    paasword: "xyz"
},
{
    user: "user3",
    paasword: "pqr"
},
{
    user: "user4",
    paasword: "lmn"
},
]
