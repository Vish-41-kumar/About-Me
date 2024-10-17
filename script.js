document.getElementById('chatbot-send').addEventListener('click', function() {
    const input = document.getElementById('chatbot-input').value;
    const messages = document.getElementById('chatbot-messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = input;
    messages.appendChild(newMessage);
    document.getElementById('chatbot-input').value = '';

    // Simple chatbot response
    let responseText = 'I am not sure how to answer that.';
    if (input.toLowerCase().includes('introduction')) {
        responseText = 'Introduction: Hello, I am Vishal Kumar D, a Computer Science student with a passion for technology and innovation.';
    } else if (input.toLowerCase().includes('education')) {
        responseText = 'Education: Madras Institute of Technology, Chennai - B.E Computer Science and Engineering.';
    } else if (input.toLowerCase().includes('skills')) {
        responseText = 'Skills: Proficient in C, C++, Python, and more.';
    } else if (input.toLowerCase().includes('projects')) {
        responseText = 'Academic Projects: Projects related to neural networks and other technical topics.';
    } else if (input.toLowerCase().includes('achievements')) {
        responseText = 'Achievements: Participated in hackathons and have knowledge in machine learning.';
    }

    const response = document.createElement('div');
    response.textContent = responseText;
    messages.appendChild(response);
});
