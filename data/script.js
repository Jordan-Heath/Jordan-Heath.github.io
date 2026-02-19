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
    const aboutView = document.getElementById('aboutView');
    aboutView.innerHTML = '';

    const title = document.createElement('h1');
    title.textContent = 'About';
    aboutView.appendChild(title);

    const intro = document.createElement('p');
    intro.textContent = 'Explore my collection of projects. Most of my work is not shared publicly. This collection does not comprehensively represent my work.';
    aboutView.appendChild(intro);

    function creditsValid(credits) {
        if (!credits) return false;
        if (Array.isArray(credits)) {
            const cleaned = credits.map(String).map(s => s.trim()).filter(s => s);
            if (!cleaned.length) return false;
            if (cleaned.length === 1 && cleaned[0].toUpperCase() === 'TODO') return false;
            return true;
        }
        return false;
    }

    // Completed vs incomplete
    const completed = projects.filter(p => (p.releaseyear || 0) !== 0);
    const incomplete = projects.filter(p => (p.releaseyear || 0) === 0);

    // build table of contents
    const tableOfContents = document.createElement('div');
    tableOfContents.className = 'table-of-contents';
    aboutView.appendChild(tableOfContents);

    const tableOfContentsTitle = document.createElement('h2');
    tableOfContentsTitle.textContent = 'Table of Contents';
    tableOfContents.appendChild(tableOfContentsTitle);

    const tableOfContentsList = document.createElement('ul');
    tableOfContents.appendChild(tableOfContentsList);

    // add completed projects
    tableOfContentsList.innerHTML += `<li class="toc-item"><a href="#completed-projects-title">Completed Projects</a></li>`;
    const completedProjectsList = document.createElement('ul');
    tableOfContentsList.appendChild(completedProjectsList);
    completed.forEach(project => {
        const completedProject = document.createElement('li');
        completedProject.className = 'toc-item';
        completedProject.innerHTML = `<a href="#about-${project.name.replace(/\s+/g, '-').toLowerCase()}-title">${project.name}</a>`;
        completedProjectsList.appendChild(completedProject);
    });

    // add incomplete projects
    tableOfContentsList.innerHTML += `<li class="toc-item"><a href="#incomplete-projects-title">Incomplete Projects</a></li>`;
    const incompleteProjectsList = document.createElement('ul');
    tableOfContentsList.appendChild(incompleteProjectsList);
    incomplete.forEach(project => {
        const incompleteProject = document.createElement('li');
        incompleteProject.className = 'toc-item';
        incompleteProject.innerHTML = `<a href="#about-${project.name.replace(/\s+/g, '-').toLowerCase()}-title">${project.name}</a>`;
        incompleteProjectsList.appendChild(incompleteProject);
    });

    // add credits
    tableOfContentsList.innerHTML += `<li class="toc-item"><a href="#credits-title">Credits</a></li>`;
    const creditsList = document.createElement('ul');
    tableOfContentsList.appendChild(creditsList);
    projects.forEach(project => {
        if (creditsValid(project.credits)) {
            const credit = document.createElement('li');
            credit.className = 'toc-item';
            credit.innerHTML = `<a href="#about-${project.name.replace(/\s+/g, '-').toLowerCase()}-credits-title">${project.name}</a>`;
            creditsList.appendChild(credit);
        }
    })

    function buildAboutProjectElement(project) {
        const container = document.createElement('div');
        container.className = 'about-project';

        // heading
        const heading = document.createElement('h3');
        heading.id = `about-${project.name.replace(/\s+/g, '-').toLowerCase()}-title`;
        heading.className = 'about-project-heading';
        const name = document.createElement('a');
        name.href = project.link || '#';
        name.textContent = project.name || 'Unnamed';
        name.className = 'about-project-name';
        heading.appendChild(name);
        if (project.releaseyear !== 0) {
            const year = document.createElement('span');
            year.className = 'about-project-year';
            year.textContent = ` (${project.releaseyear})`;
            heading.appendChild(year);
        }
        container.appendChild(heading);

        // thumbnail
        if (project.thumbnail) {
            const thumb = document.createElement('img');
            thumb.src = project.thumbnail;
            thumb.alt = project.name || '';
            thumb.className = 'about-project-thumb';
            thumb.onclick = () => location.href = project.link;
            container.appendChild(thumb);
        }

        // description
        if (project.description) {
            const desc = document.createElement('p');
            desc.textContent = project.description;
            container.appendChild(desc);
        }

        // features
        if (Array.isArray(project.features) && project.features.length) {
            const ul = document.createElement('ul');
            project.features.forEach(f => {
                const li = document.createElement('li');
                li.textContent = f;
                ul.appendChild(li);
            });
            container.appendChild(ul);
        }

        return container;
    }

    // Completed
    const completedTitle = document.createElement('h2');
    completedTitle.id = 'about-completed-title';
    completedTitle.textContent = 'Completed Projects';
    aboutView.appendChild(completedTitle);
    completed.forEach(project => {
        aboutView.appendChild(buildAboutProjectElement(project));
    });

    // Incomplete
    const incompleteTitle = document.createElement('h2');
    incompleteTitle.id = 'about-incomplete-title';
    incompleteTitle.textContent = 'Incomplete Projects';
    aboutView.appendChild(incompleteTitle);
    incomplete.forEach(p => {
        aboutView.appendChild(buildAboutProjectElement(p));
    });

    // Credits
    const creditsTitle = document.createElement('h2');
    creditsTitle.id = 'about-credits-title';
    creditsTitle.textContent = 'Credits';
    aboutView.appendChild(creditsTitle);
    let anyCredits = false;
    projects.forEach(p => {
        if (creditsValid(p.credits)) {
            anyCredits = true;
            const block = document.createElement('div');
            block.className = 'about-credits-project';
            const pname = document.createElement('h3');
            pname.id = `about-${p.name.replace(/\s+/g, '-').toLowerCase()}-credits-title`;
            pname.textContent = p.name || 'Unnamed';
            block.appendChild(pname);
            const ul = document.createElement('ul');
            p.credits.forEach(c => {
                const cstr = String(c || '').trim();
                if (!cstr || cstr.toUpperCase() === 'TODO') return;
                const li = document.createElement('li');
                li.textContent = cstr;
                ul.appendChild(li);
            });
            block.appendChild(ul);
            aboutView.appendChild(block);
        }
    });

    if (!anyCredits) {
        const p = document.createElement('p');
        p.textContent = 'Project credits and assets go here.';
        aboutView.appendChild(p);
    }
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