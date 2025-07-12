// script.js for Dynamic Profile Card Generator
const form = document.getElementById('profileForm');
const previewBtn = document.getElementById('previewBtn');
const previewArea = document.getElementById('previewArea');
const cardsContainer = document.getElementById('cardsContainer');

// Helper: Read file as DataURL
function readImageFile(file) {
    return new Promise((resolve, reject) => {
        if (!file) return resolve(null);
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Helper: Card HTML
function createCardHTML(card, idx) {
    return `<div class="profile-card${card.theme === 'dark' ? ' dark' : ''}" data-idx="${idx}">
        <img class="profile-img ${card.borderStyle}" src="${card.image}" alt="Profile">
        <div class="profile-name">${card.name}</div>
        <div class="profile-bio">${card.bio}</div>
        <div class="card-actions">
            <button class="theme-toggle">${card.theme === 'dark' ? 'Light' : 'Dark'} Mode</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    </div>`;
}

// Save/load cards
function saveCards(cards) {
    localStorage.setItem('profileCards', JSON.stringify(cards));
}
function loadCards() {
    return JSON.parse(localStorage.getItem('profileCards') || '[]');
}

// Render all cards
function renderCards() {
    const cards = loadCards();
    cardsContainer.innerHTML = cards.map((c, i) => createCardHTML(c, i)).join('');
}

// Show preview
previewBtn.onclick = async function() {
    const name = form.name.value.trim();
    const bio = form.bio.value.trim();
    const borderStyle = form.borderStyle.value;
    const file = form.image.files[0];
    if (!name || !bio || !file) {
        previewArea.innerHTML = '<div style="color:red">Fill all fields and select an image.</div>';
        return;
    }
    const image = await readImageFile(file);
    const card = { name, bio, image, borderStyle, theme: 'light' };
    previewArea.innerHTML = createCardHTML(card, -1);
};

// Add card
form.onsubmit = async function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const bio = form.bio.value.trim();
    const borderStyle = form.borderStyle.value;
    const file = form.image.files[0];
    if (!name || !bio || !file) return;
    const image = await readImageFile(file);
    let cards = loadCards();
    if (form.dataset.editIdx !== undefined) {
        // Edit mode
        const idx = +form.dataset.editIdx;
        cards[idx] = { name, bio, image, borderStyle, theme: cards[idx].theme };
        delete form.dataset.editIdx;
        previewArea.innerHTML = '';
        form.reset();
    } else {
        cards.push({ name, bio, image, borderStyle, theme: 'light' });
        previewArea.innerHTML = '';
        form.reset();
    }
    saveCards(cards);
    renderCards();
};

// Card actions (theme, delete, edit)
cardsContainer.onclick = function(e) {
    const cardDiv = e.target.closest('.profile-card');
    if (!cardDiv) return;
    const idx = +cardDiv.dataset.idx;
    let cards = loadCards();
    if (e.target.classList.contains('delete')) {
        cards.splice(idx, 1);
        saveCards(cards);
        renderCards();
    } else if (e.target.classList.contains('theme-toggle')) {
        cards[idx].theme = cards[idx].theme === 'dark' ? 'light' : 'dark';
        saveCards(cards);
        renderCards();
    } else if (e.target.classList.contains('edit')) {
        // Fill form for editing
        const card = cards[idx];
        form.name.value = card.name;
        form.bio.value = card.bio;
        form.borderStyle.value = card.borderStyle;
        form.dataset.editIdx = idx;
        previewArea.innerHTML = createCardHTML(card, -1);
    }
};

// On load, render cards
window.addEventListener('DOMContentLoaded', renderCards);
