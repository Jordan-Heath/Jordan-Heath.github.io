let save = {
    selectedMenu: 'home',
    featuredProjectsIndex: 1
}

let featuredProjectsTimer;

document.addEventListener('DOMContentLoaded', () => {
    loadHomeContents();
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

function loadHomeContents() {
    const main = document.getElementById('homeView');
    main.innerHTML = '';

    // featured projects
    main.appendChild(buildFeaturedProjectsElement());
    setTimeout(() => showFeaturedProjects(save.featuredProjectsIndex), 50);

    // all projects
    main.appendChild(buildAllProjectsElement());
}

function buildFeaturedProjectsElement() {
    const featuredProjectsElement = document.createElement('div');
    featuredProjectsElement.className = 'FeaturedProjects';

    // const featuredTitle = document.createElement('h1');
    // featuredTitle.textContent = 'Featured Projects';
    // featuredProjectsElement.appendChild(featuredTitle);

    const featuredProjectsGrid = document.createElement('div');
    featuredProjectsGrid.className = 'featuredProjectsGrid';
    featuredProjectsElement.appendChild(featuredProjectsGrid);

    projects.forEach(project => {
        if (project.featured) {
            const featuredProjectElement = document.createElement('div');
            featuredProjectElement.className = 'featuredProject';
            
            // project name
            const featuredProjectName = document.createElement('h2');
            featuredProjectName.textContent = project.name;

            // project year/category
            const featuredProjectYear = document.createElement('p');
            featuredProjectYear.innerHTML = `Release Year: ${project.releaseyear}` 
            const featuredProjectCategory = document.createElement('p');
            featuredProjectCategory.innerHTML = `Category: ${project.category}`;
            const featuredProjectYearCategory = document.createElement('div');
            featuredProjectYearCategory.className = 'featuredProjectYearCategory';
            featuredProjectYearCategory.appendChild(featuredProjectYear);
            featuredProjectYearCategory.appendChild(featuredProjectCategory);

            // project description
            const featuredProjectDescription = document.createElement('p');
            featuredProjectDescription.textContent = project.description;

            // project features
            const featuredProjectFeatures = document.createElement('ul');
            project.features.forEach(feature => {
                const featureItem = document.createElement('li');
                featureItem.textContent = feature;
                featuredProjectFeatures.appendChild(featureItem);
            });

            // project button
            const featuredProjectButton = document.createElement('button');
            featuredProjectButton.textContent = 'Open';
            featuredProjectButton.onclick = () => location.href = project.link;

            // project details
            const featuredProjectDetails = document.createElement('div');
            featuredProjectDetails.className = 'featuredProjectDetails';
            featuredProjectDetails.appendChild(featuredProjectName);
            featuredProjectDetails.appendChild(featuredProjectYearCategory);
            featuredProjectDetails.appendChild(featuredProjectDescription);
            featuredProjectDetails.appendChild(featuredProjectFeatures);
            featuredProjectDetails.appendChild(featuredProjectButton);
            featuredProjectElement.appendChild(featuredProjectDetails);
            
            // screnshot image
            const featuredProjectScreenshot = document.createElement('img');
            featuredProjectScreenshot.src = project.screenshot;
            featuredProjectScreenshot.alt = project.name;
            featuredProjectScreenshot.title = project.name;
            featuredProjectElement.appendChild(featuredProjectScreenshot);
            
            featuredProjectsGrid.appendChild(featuredProjectElement);
        }
    });

    // carousel arrows
    const leftArrow = document.createElement('div');
    leftArrow.className = 'leftArrow';
    leftArrow.innerText = '❮';
    leftArrow.onclick = () => showFeaturedProjects(save.featuredProjectsIndex - 1);
    featuredProjectsGrid.appendChild(leftArrow);

    const rightArrow = document.createElement('div');
    rightArrow.className = 'rightArrow';
    rightArrow.innerText = '❯';
    rightArrow.onclick = () => showFeaturedProjects(save.featuredProjectsIndex + 1);
    featuredProjectsGrid.appendChild(rightArrow);

    // build dots
    const dots = document.createElement('div');
    dots.className = 'dots';
    featuredProjectsGrid.appendChild(dots);
    for (let i = 0; i < projects.filter(project => project.featured).length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => showFeaturedProjects(i + 1);
        dots.appendChild(dot);
    }

    return featuredProjectsElement;
}

function buildAllProjectsElement() {
    const allProjectsElement = document.createElement('div');
    allProjectsElement.className = 'AllProjects';

    const allProjectsTitle = document.createElement('h1');
    allProjectsTitle.textContent = 'All Projects';
    allProjectsElement.appendChild(allProjectsTitle);

    const allProjectsGrid = document.createElement('div');
    allProjectsGrid.className = 'projectsGrid';
    allProjectsElement.appendChild(allProjectsGrid);

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';

        const projectImage = document.createElement('img');
        projectImage.src = project.thumbnail;
        projectImage.alt = project.name;
        projectImage.title = project.name;
        projectImage.onclick = () => location.href = project.link;
        projectElement.appendChild(projectImage);

        // add year to the top left corner
        const yearElement = document.createElement('div');
        yearElement.className = 'year';
        yearElement.textContent = project.releaseyear == 0 ? 'Incomplete' : project.releaseyear;
        projectElement.appendChild(yearElement);

        // add category to the top right corner
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category';
        categoryElement.textContent = project.category;
        projectElement.appendChild(categoryElement);

        allProjectsGrid.appendChild(projectElement);
    });

    return allProjectsElement;
}

function showFeaturedProjects(n = 1) {
    save.featuredProjectsIndex = n;

    let i;
    let slides = document.getElementsByClassName("featuredProject");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { save.featuredProjectsIndex = 1 }
    if (n < 1) { save.featuredProjectsIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[save.featuredProjectsIndex - 1].style.display = "flex";
    dots[save.featuredProjectsIndex - 1].className += " active";

    clearInterval(featuredProjectsTimer);
    featuredProjectsTimer = setInterval(() => { showFeaturedProjects(save.featuredProjectsIndex + 1) }, 10000);
}