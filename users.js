document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    displayUsers(users);
});

function displayUsers(users) {
    const userCards = document.getElementById('user-cards');
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2><span class="material-icons">person</span> ${user.name} (${user.username})</h2>
            <p><span class="material-icons">badge</span> <strong>ID:</strong> ${user.id}</p>
            <p><span class="material-icons">email</span> <strong>Email:</strong> ${user.email}</p>
            <p><span class="material-icons">phone</span> <strong>Phone:</strong> ${user.phone}</p>
            <p><span class="material-icons">language</span> <strong>Website:</strong> ${user.website}</p>
            <p><span class="material-icons">place</span> <strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><span class="material-icons">business</span> <strong>Company:</strong> ${user.company.name}</p>
            <button class="view-posts-button" onclick="window.location.href='posts.html?userId=${user.id}'">Gönderileri Görüntüle</button>
        `;
        userCards.appendChild(card);
    });
}
