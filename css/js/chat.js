document.addEventListener('DOMContentLoaded', function() {
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const fileUpload = document.getElementById('fileUpload');

    // Load chat history from localStorage (simplified for demo)
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];

    // Display chat history
    chatHistory.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `
            <strong>${message.sender}:</strong> ${message.text}
            ${message.file ? `<br><a href="${message.file}" target="_blank">View File</a>` : ''}
        `;
        chatMessages.appendChild(messageElement);
    });

    // Send a message
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const messageText = chatInput.value;
        const file = fileUpload.files;

        if (!messageText && !file) return;

        const message = {
            sender: localStorage.getItem('username'),
            text: messageText,
            file: file ? URL.createObjectURL(file) : null,
            timestamp: new Date().toISOString()
        };

        chatHistory.push(message);
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));

        // Clear input and display new message
        chatInput.value = '';
        fileUpload.value = '';
        displayMessage(message);
    });

    function displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `
            <strong>${message.sender}:</strong> ${message.text}
            ${message.file ? `<br><a href="${message.file}" target="_blank">View File</a>` : ''}
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
