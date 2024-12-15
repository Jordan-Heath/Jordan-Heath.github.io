const likesDislikesElement = document.getElementById('likes-dislikes');
const navButtonLikesDislikes = document.getElementById('nav-button-likes-dislikes');

let likesDislikesRendered = false;

function openLikesDislikes() {
    SAVE.openedPage = 'likes-dislikes';
    saveToLocalStorage();

    if (likesDislikesElement.style.display == 'none') {
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        likesDislikesElement.style.display = 'block';
    }

    if (!navButtonLikesDislikes.classList.contains('active')) {
        document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'));
        navButtonLikesDislikes.classList.add('active');
    }

    if (!likesDislikesRendered) renderLikesDislikes();
}

function renderLikesDislikes() {
    // build the controls
    const speciesSelect = document.getElementById('likes-dislikes-species-select');
    const personalitySelect = document.getElementById('likes-dislikes-personality-select');

    // need to populate species select with the names of all TAMAS
    speciesSelect.innerHTML = '';

    const option = document.createElement('option');
    option.value = 'Other';
    option.textContent = 'Other...';
    speciesSelect.appendChild(option);

    const availableTamas = TAMAS.filter(tama => tama.stage == 'Adult');
    availableTamas.sort((a, b) => a.name.localeCompare(b.name));
    availableTamas.forEach(tama => {
        const option = document.createElement('option');
        option.value = tama.name;
        option.textContent = tama.name;
        speciesSelect.appendChild(option);
    });

    // dont need to populate personality select

    // add event listeners
    speciesSelect.addEventListener('change', determineLikesDislikes);
    personalitySelect.addEventListener('change', determineLikesDislikes);

    determineLikesDislikes();
    likesDislikesRendered = true;
}

function determineLikesDislikes() {
    const tama = TAMAS.find(t => t.name == document.getElementById('likes-dislikes-species-select').value) 
                || TAMAS[0]; // TAMAS[0] is "Egg" which has no likes
    const personality = PERSONALITIES.find(p => p.name == document.getElementById('likes-dislikes-personality-select').value);

    // build the arrays
    const likedMeals = Array.from(new Set([...tama.likes.meals, ...personality.likes.meals])).sort();
    const likedSnacks = Array.from(new Set([...tama.likes.snacks, ...personality.likes.snacks])).sort();
    const likedHeadAccessories = Array.from(new Set([...tama.likes.headAccessories, ...personality.likes.headAccessories])).sort();
    const likedFaceAccessories = Array.from(new Set([...tama.likes.faceAccessories, ...personality.likes.faceAccessories])).sort();
    const likedBodyAccessories = Array.from(new Set([...tama.likes.bodyAccessories, ...personality.likes.bodyAccessories])).sort();
    const likedBackAccessories = Array.from(new Set([...tama.likes.backAccessories, ...personality.likes.backAccessories])).sort();
    const dislikedItems = Array.from(new Set([...personality.dislikes.items])).sort();

    // build the tables
    const tableContainer = document.getElementById('likes-dislikes-table-container');
    tableContainer.innerHTML = '';
    tableContainer.appendChild( buildLikesTables(likedMeals, "Liked Meals") );
    tableContainer.appendChild( buildLikesTables(likedSnacks, "Liked Snacks") );
    tableContainer.appendChild( buildLikesTables(likedHeadAccessories, "Liked Head Accessories") );
    tableContainer.appendChild( buildLikesTables(likedFaceAccessories, "Liked Face Accessories") );
    tableContainer.appendChild( buildLikesTables(likedBodyAccessories, "Liked Body Accessories") );
    tableContainer.appendChild( buildLikesTables(likedBackAccessories, "Liked Back Accessories") );
    tableContainer.appendChild( buildLikesTables(dislikedItems, "Disliked Items") );
}


function buildLikesTables(likes, label) {
    const tableElement = document.createElement('table');

    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = label;
    tr.appendChild(th);
    tableElement.appendChild(tr);

    likes.forEach(like => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = like;
        tr.appendChild(td);
        tableElement.appendChild(tr);
    });

    return tableElement;
}