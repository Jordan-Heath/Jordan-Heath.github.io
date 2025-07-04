document.addEventListener('DOMContentLoaded', () => {
    // Create header element
    const header = document.createElement('header');
    header.innerHTML = `
        <h1 onclick="location.href='index.html'">Jordan's Web Portfolio</h1>
        <h2>games, guides and silly projects</h2>
    `;

    // Create Nav Element
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <div class="nav-buttons">
            <button ${!window.location.pathname.includes('about') ? 'class="active"' : ''} onclick="location.href='index.html'">&#127968; Home</button>
            <button ${window.location.pathname.includes('about') ? 'class="active"' : ''} onclick="location.href='about.html'">&#128214; About</button>
            <button onclick="window.open('https://github.com/Jordan-Heath', '_blank')">&#128190; Github</button>
            <button onclick="window.open('https://github.com/Jordan-Heath/Jordan-Heath.github.io', '_blank')">&#129531; Repo</button>
        </div>
        <h2 class="nav-title">Jordan's Web Portfolio</h2>
    `;

    // Determine which button to make active
    if (window.location.pathname.includes('about')) {
        loadAboutContents();
    }

    // Create footer element
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <h3>thanks for visiting!</h3>
    `;

    // Insert nav, then header at the start of the body
    document.body.insertBefore(nav, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);

    // Append footer at the end of the body
    document.body.appendChild(footer);


    //add a listener to see if the header is visible. if it is, make the nav-title visible
    window.addEventListener('scroll', () => {
        const navTitle = document.querySelector('.nav-title');

        if (window.scrollY > 150) {
            navTitle.style.display = 'block';
        } else {
            navTitle.style.display = 'none';
        }
    })
});



function loadAboutContents() {
    // Fetch the README.md content from GitHub using the GitHub API
    fetch('https://raw.githubusercontent.com/Jordan-Heath/Jordan-Heath.github.io/main/README.md')
        .then(response => response.text())
        .then(markdownContent => {
            // throw new Error('test');

            // Convert Markdown to HTML using showdown.js
            const converter = new showdown.Converter();
            const htmlContent = converter.makeHtml(markdownContent);

            // Display the HTML content in a div
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