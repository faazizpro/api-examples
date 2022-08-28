const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then (res => res.json())
    .then (data => displayUsers(data.results));
}
const displayUsers = users => {
    const userContainers = document.getElementById('users-container');
    for (const user of users){
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>User Name: ${user.gender}</h3>
        <p>User Info: ${user.location.city}</p>
        `

        userContainers.appendChild(userDiv);
    }
}
loadUser();