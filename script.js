function searchYouTube() {
    // Get the user's search query
    const query = document.getElementById('searchBox').value;
    const resultDiv = document.getElementById('result');

    if (!query) {
        resultDiv.innerHTML = "Please enter a search query!";
        return;
    }

    // Display a loading message
    resultDiv.innerHTML = `Searching for "${query}"...`;

    // Mock search and download function
    setTimeout(() => {
        resultDiv.innerHTML = `Found video for "${query}"! <br> Downloading...`;
        // Simulate download completion
        setTimeout(() => {
            resultDiv.innerHTML = `Download of "${query}" completed!`;
        }, 2000);
    }, 1500);
}
