document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store user data (simplified for demo)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
});
