document.addEventListener('DOMContentLoaded', function() {
    const postsList = document.getElementById('postsList');
    const createPostForm = document.getElementById('createPostForm');

    // Load posts from localStorage (simplified for demo)
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Display posts
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <p>${post.content}</p>
            <p>Posted by: ${post.username}</p>
            <button class="btn" onclick="requestChat('${post.username}')">Request Chat</button>
        `;
        postsList.appendChild(postElement);
    });

    // Create a new post
    createPostForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const postContent = document.getElementById('postContent').value;
        const username = localStorage.getItem('username');

        const newPost = {
            content: postContent,
            username: username,
            timestamp: new Date().toISOString()
        };

        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));

        // Clear input and refresh posts
        document.getElementById('postContent').value = '';
        postsList.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <p>${post.content}</p>
                <p>Posted by: ${post.username}</p>
                <button class="btn" onclick="requestChat('${post.username}')">Request Chat</button>
            `;
            postsList.appendChild(postElement);
        });
    });
});

function requestChat(username) {
    alert(`Chat request sent to ${username}!`);
    // In a real app, this would send a notification to the user.
}
