const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const historyList = document.getElementById('history-list');
const clearHistoryButton = document.getElementById('clear-history-button');

window.onload = function () {
    loadSearchHistory();
};


function loadSearchHistory() {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    historyList.innerHTML = '';
    history.forEach(term => {
        addHistoryItem(term);
    });
}

function addHistoryItem(term) {
    const li = document.createElement('li');
    li.textContent = term;
    historyList.appendChild(li);
}

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        history.push(searchTerm);
        localStorage.setItem('searchHistory', JSON.stringify(history));
        addHistoryItem(searchTerm);
        searchInput.value = '';
    }
});

clearHistoryButton.addEventListener('click', () => {
    localStorage.removeItem('searchHistory');
    historyList.innerHTML = '';
});
