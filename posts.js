document.addEventListener('DOMContentLoaded', async () => {
    const userId = getQueryParam('userId');
    if (!userId) {
        const inputUserId = prompt('Lütfen bir kullanıcı ID girin (1-10):');
        if (inputUserId < 1 || inputUserId > 10 || isNaN(inputUserId)) {
            alert('Geçersiz kullanıcı ID.');
            throw new Error('Geçersiz kullanıcı ID.');
        }
        window.location.search = `?userId=${inputUserId}`;
        return;
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    displayPosts(posts);
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayPosts(posts) {
    const postCards = document.getElementById('post-cards');
    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card post-card';
        card.innerHTML = `
            <h2><span class="material-icons">article</span> ${post.title}</h2>
            <p>${post.body}</p>
        `;
        postCards.appendChild(card);
    });
}
