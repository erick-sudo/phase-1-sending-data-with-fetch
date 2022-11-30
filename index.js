// Add your code here
document.addEventListener("DOMContentLoaded", event => {
    let form = document.querySelector("form")
    form.addEventListener('submit', event => {
        event.preventDefault()
        submitData(event.target.name.value, event.target.email.value)
        
    })
})

function updateDOM(data){
    document.getElementById("id").textContent = data.id
    document.getElementById("name").textContent = data.name
    document.getElementById("email").textContent = data.email
    document.getElementById("state").textContent = "Registration Succesful"
}

function submitData(name, email){

    const requestconfig = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
        }),
    }

    return fetch('http://localhost:3000/users', requestconfig)
    .then(response => {
        return response.json()
    })
    .then(data => {
        updateDOM(data) 
        return data.json()
    })
    .catch(error => {
        document.getElementById("state").textContent = error.message
    })
}