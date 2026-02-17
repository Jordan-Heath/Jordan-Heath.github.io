let save = {
    selectedMenu: 'home',
}

document.addEventListener('DOMContentLoaded', () => {
    loadAboutContents();

    window.addEventListener('scroll', () => {
        const navTitle = document.querySelector('.nav-title');

        if (window.scrollY > 110) {
            navTitle.style.display = 'block';
        } else {
            navTitle.style.display = 'none';
        }
    })

    loadFromLocalStorage();
    changeMenu(save.selectedMenu);
});


function saveToLocalStorage() {
    // Save the selected menu to local storage
    localStorage.setItem('jordansWebPortfolio', JSON.stringify(save));
}

function loadFromLocalStorage() {
    // Load the selected menu from local storage
    const savedData = localStorage.getItem('jordansWebPortfolio');
    if (savedData) {
        save = JSON.parse(savedData);
        changeMenu(save.selectedMenu);
    }
}

function changeMenu(selectedMenu) {
    save.selectedMenu = selectedMenu;

    const navButtons = document.querySelectorAll('.nav-buttons button');
    navButtons.forEach(button => button.classList.remove('active'));

    const aboutView = document.getElementById('aboutView');
    const homeView = document.getElementById('homeView');
    aboutView.className = 'hidden';
    homeView.className = 'hidden';

    switch (save.selectedMenu) {
        case 'home':
            document.getElementById('homeView').className = '';
            navButtons[0].classList.add('active');
            break;
        case 'about':
            document.getElementById('aboutView').className = '';
            navButtons[1].classList.add('active');
            break;
        default:
            break;
    }

    saveToLocalStorage();
}



function loadAboutContents() {
    // Fetch README.md content from GitHub
    fetch('https://raw.githubusercontent.com/Jordan-Heath/Jordan-Heath.github.io/main/README.md')
        .then(response => response.text())
        .then(markdownContent => {
            // Convert Markdown to HTML
            const converter = new showdown.Converter();
            const htmlContent = converter.makeHtml(markdownContent);

            // Print HTML content
            document.getElementById('aboutView').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error fetching README:', error)
            document.getElementById('aboutView').innerHTML = `
                <h1>Error loading page</h1>
                <p>Page was unable to load, but do not worry.</p>
                <p>The content of the page can be found here: <a href="https://github.com/Jordan-Heath/Jordan-Heath.github.io/blob/main/README.md">https://github.com/Jordan-Heath/Jordan-Heath.github.io/blob/main/README.md</a></p>
                `;
        });
}