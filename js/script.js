// ============================================
// State Management
// ============================================
const STORAGE_KEY = 'jordansWebPortfolio';

const state = {
    selectedMenu: 'home',
    featuredProjectsIndex: 1
};

let featuredProjectsTimer = null;

// ============================================
// Utility Functions
// ============================================
const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

const isCreditsValid = (credits) => {
    if (!Array.isArray(credits)) return false;
    
    const cleaned = credits
        .map(c => String(c).trim())
        .filter(c => c.length > 0);
    
    if (cleaned.length === 0) return false;
    if (cleaned.length === 1 && cleaned[0].toUpperCase() === 'TODO') return false;
    
    return true;
};

// ============================================
// Local Storage Management
// ============================================
const saveState = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadState = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        Object.assign(state, JSON.parse(savedData));
        changeMenu(state.selectedMenu);
    }
};

// ============================================
// Navigation
// ============================================
const changeMenu = (selectedMenu) => {
    state.selectedMenu = selectedMenu;
    
    // Update navigation buttons
    document.querySelectorAll('.nav-buttons button').forEach(button => 
        button.classList.remove('active')
    );
    
    // Hide all views
    document.getElementById('aboutView').classList.add('hidden');
    document.getElementById('homeView').classList.add('hidden');
    
    // Show selected view and activate corresponding button
    const viewMap = {
        'home': { viewId: 'homeView', buttonIndex: 0 },
        'about': { viewId: 'aboutView', buttonIndex: 1 }
    };
    
    const { viewId, buttonIndex } = viewMap[selectedMenu];
    document.getElementById(viewId).classList.remove('hidden');
    document.querySelectorAll('.nav-buttons button')[buttonIndex].classList.add('active');
    
    saveState();
};

// ============================================
// Featured Projects Carousel
// ============================================
const showFeaturedProjects = (n = 1) => {
    state.featuredProjectsIndex = n;
    
    const slides = document.getElementsByClassName('featuredProject');
    const dots = document.getElementsByClassName('dot');
    
    // Handle boundary conditions
    if (n > slides.length) state.featuredProjectsIndex = 1;
    if (n < 1) state.featuredProjectsIndex = slides.length;
    
    // Update slides
    Array.from(slides).forEach(slide => slide.style.display = 'none');
    slides[state.featuredProjectsIndex - 1].style.display = 'flex';
    
    // Update dots
    Array.from(dots).forEach(dot => dot.classList.remove('active'));
    dots[state.featuredProjectsIndex - 1]?.classList.add('active');
    
    // Reset timer
    clearInterval(featuredProjectsTimer);
    featuredProjectsTimer = setInterval(
        () => showFeaturedProjects(state.featuredProjectsIndex + 1), 
        10000
    );
};

const createFeaturedProjectsElement = () => {
    const container = document.createElement('div');
    container.className = 'FeaturedProjects';
    
    const grid = document.createElement('div');
    grid.className = 'featuredProjectsGrid';
    container.appendChild(grid);
    
    const featuredProjects = projects.filter(p => p.featured);
    
    // Create project slides
    featuredProjects.forEach(project => {
        grid.appendChild(createFeaturedProjectSlide(project));
    });
    
    // Add navigation arrows
    grid.appendChild(createCarouselArrow('leftArrow', '❮', () => 
        showFeaturedProjects(state.featuredProjectsIndex - 1)
    ));
    grid.appendChild(createCarouselArrow('rightArrow', '❯', () => 
        showFeaturedProjects(state.featuredProjectsIndex + 1)
    ));
    
    // Add dots
    grid.appendChild(createCarouselDots(featuredProjects.length));
    
    return container;
};

const createFeaturedProjectSlide = (project) => {
    const slide = document.createElement('div');
    slide.className = 'featuredProject';
    
    // Details section
    const details = document.createElement('div');
    details.className = 'featuredProjectDetails';
    
    details.appendChild(createElement('h2', {}, project.name));
    details.appendChild(createProjectMeta(project));
    details.appendChild(createElement('p', {}, project.description));
    details.appendChild(createFeatureList(project.features));
    
    slide.appendChild(details);
    
    // Screenshot section
    const screenshotContainer = document.createElement('div');
    screenshotContainer.className = 'featuredProjectScreenshotContainer';
    
    const screenshot = document.createElement('img');
    Object.assign(screenshot, {
        src: project.screenshot,
        alt: project.name,
        title: project.name
    });
    screenshotContainer.appendChild(screenshot);
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Open';
    openButton.onclick = () => window.location.href = project.link;
    screenshotContainer.appendChild(openButton);
    
    slide.appendChild(screenshotContainer);
    
    return slide;
};

const createProjectMeta = (project) => {
    const container = document.createElement('div');
    container.className = 'featuredProjectYearCategory';
    
    container.appendChild(createElement('p', {}, `Release Year: ${project.releaseyear}`));
    container.appendChild(createElement('p', {}, `Category: ${project.category}`));
    
    return container;
};

const createCarouselArrow = (className, text, onClick) => {
    const arrow = document.createElement('div');
    arrow.className = className;
    arrow.innerText = text;
    arrow.onclick = onClick;
    return arrow;
};

const createCarouselDots = (count) => {
    const dots = document.createElement('div');
    dots.className = 'dots';
    
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => showFeaturedProjects(i + 1);
        dots.appendChild(dot);
    }
    
    return dots;
};

// ============================================
// All Projects Grid
// ============================================
const createAllProjectsElement = () => {
    const container = document.createElement('div');
    container.className = 'AllProjects';
    
    // first add games
    const gameProjects = projects.filter(p => p.category === 'Game');
    container.appendChild(createElement('h2', {}, 'Games'));
    container.appendChild(createProjectsGrid(gameProjects));

    // then add guides
    const guideProjects = projects.filter(p => p.category === 'Guide');
    container.appendChild(createElement('h2', {}, 'Guides'));
    container.appendChild(createProjectsGrid(guideProjects));
    
    // then add utilities
    const utilityProjects = projects.filter(p => p.category === 'Utility');
    container.appendChild(createElement('h2', {}, 'Utilities'));
    container.appendChild(createProjectsGrid(utilityProjects));
    
    return container;
};

const createProjectsGrid = (projects) => {
    const grid = document.createElement('div');
    grid.className = 'projectsGrid';
    
    projects.forEach(project => {
        grid.appendChild(createProjectCard(project));
    });

    return grid;
}

const createProjectCard = (project) => {
    const card = document.createElement('div');
    card.className = 'project';
    
    const image = document.createElement('img');
    Object.assign(image, {
        src: project.thumbnail,
        alt: project.name,
        title: project.name
    });
    image.onclick = () => window.location.href = project.link;
    card.appendChild(image);
    
    // Year badge
    const yearBadge = document.createElement('div');
    yearBadge.className = 'year';
    yearBadge.textContent = project.releaseyear === 0 ? 'Incomplete' : project.releaseyear;
    card.appendChild(yearBadge);
    
    // Category badge
    const categoryBadge = document.createElement('div');
    categoryBadge.className = 'category';
    categoryBadge.textContent = project.category;
    card.appendChild(categoryBadge);
    
    return card;
};

// ============================================
// About View
// ============================================
const loadAboutContents = () => {
    const aboutView = document.getElementById('aboutView');
    aboutView.innerHTML = '';
    
    aboutView.appendChild(createElement('h1', {}, 'About'));
    aboutView.appendChild(createElement('p', {}, 
        'Explore my collection of projects. Most of my work is not shared publicly. This collection does not comprehensively represent my work.'
    ));
    
    const completedProjects = projects.filter(p => p.releaseyear !== 0);
    const incompleteProjects = projects.filter(p => p.releaseyear === 0);
    
    aboutView.appendChild(createTableOfContents(completedProjects, incompleteProjects));
    aboutView.appendChild(createProjectSection('Completed Projects', completedProjects, 'completed-projects-title'));
    aboutView.appendChild(createProjectSection('Incomplete Projects', incompleteProjects, 'incomplete-projects-title'));
    aboutView.appendChild(createCreditsSection());
};

const createTableOfContents = (completed, incomplete) => {
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    
    toc.appendChild(createElement('h2', {}, 'Table of Contents'));
    
    const list = document.createElement('ul');
    
    // Completed projects
    list.appendChild(createTocItem('Completed Projects', '#completed-projects-title'));
    const completedSubList = document.createElement('ul');
    completed.forEach(p => {
        completedSubList.appendChild(createTocItem(p.name, `#about-${slugify(p.name)}-title`));
    });
    list.appendChild(completedSubList);
    
    // Incomplete projects
    list.appendChild(createTocItem('Incomplete Projects', '#incomplete-projects-title'));
    const incompleteSubList = document.createElement('ul');
    incomplete.forEach(p => {
        incompleteSubList.appendChild(createTocItem(p.name, `#about-${slugify(p.name)}-title`));
    });
    list.appendChild(incompleteSubList);
    
    // Credits
    list.appendChild(createTocItem('Credits', '#credits-title'));
    const creditsSubList = document.createElement('ul');
    projects.forEach(p => {
        if (isCreditsValid(p.credits)) {
            creditsSubList.appendChild(createTocItem(p.name, `#about-${slugify(p.name)}-credits-title`));
        }
    });
    list.appendChild(creditsSubList);
    
    toc.appendChild(list);
    return toc;
};

const createTocItem = (text, href) => {
    const item = document.createElement('li');
    item.className = 'toc-item';
    item.innerHTML = `<a href="${href}">${text}</a>`;
    return item;
};

const createProjectSection = (title, projects, id) => {
    const fragment = document.createDocumentFragment();
    
    fragment.appendChild(createElement('h2', { id }, title));
    
    projects.forEach(project => {
        fragment.appendChild(createAboutProjectElement(project));
    });
    
    return fragment;
};

const createAboutProjectElement = (project) => {
    const container = document.createElement('div');
    container.className = 'about-project';
    
    // Heading
    const heading = document.createElement('h3');
    heading.id = `about-${slugify(project.name)}-title`;
    heading.className = 'about-project-heading';
    
    const nameLink = document.createElement('a');
    nameLink.href = project.link || '#';
    nameLink.textContent = project.name || 'Unnamed';
    nameLink.className = 'about-project-name';
    heading.appendChild(nameLink);
    
    if (project.releaseyear !== 0) {
        const year = document.createElement('span');
        year.className = 'about-project-year';
        year.textContent = ` (${project.releaseyear})`;
        heading.appendChild(year);
    }
    container.appendChild(heading);
    
    // Thumbnail
    if (project.thumbnail) {
        const thumb = document.createElement('img');
        Object.assign(thumb, {
            src: project.thumbnail,
            alt: project.name,
            className: 'about-project-thumb'
        });
        thumb.onclick = () => window.location.href = project.link;
        container.appendChild(thumb);
    }
    
    // Description
    if (project.description) {
        container.appendChild(createElement('p', {}, project.description));
    }
    
    // Features
    if (project.features?.length) {
        container.appendChild(createFeatureList(project.features));
    }
    
    return container;
};

const createCreditsSection = () => {
    const fragment = document.createDocumentFragment();
    
    fragment.appendChild(createElement('h2', { id: 'credits-title' }, 'Credits'));
    
    let hasCredits = false;
    
    projects.forEach(project => {
        if (isCreditsValid(project.credits)) {
            hasCredits = true;
            
            const block = document.createElement('div');
            block.className = 'about-credits-project';
            
            const title = document.createElement('h3');
            title.id = `about-${slugify(project.name)}-credits-title`;
            title.textContent = project.name;
            block.appendChild(title);
            
            const list = document.createElement('ul');
            project.credits.forEach(c => {
                const credit = String(c).trim();
                if (credit && credit.toUpperCase() !== 'TODO') {
                    list.appendChild(createElement('li', {}, credit));
                }
            });
            block.appendChild(list);
            
            fragment.appendChild(block);
        }
    });
    
    if (!hasCredits) {
        fragment.appendChild(createElement('p', {}, 'Project credits and assets go here.'));
    }
    
    return fragment;
};

// ============================================
// Home View
// ============================================
const loadHomeContents = () => {
    const homeView = document.getElementById('homeView');
    homeView.innerHTML = '';
    
    homeView.appendChild(createFeaturedProjectsElement());
    homeView.appendChild(createAllProjectsElement());
    
    // Initialize carousel
    setTimeout(() => showFeaturedProjects(state.featuredProjectsIndex), 50);
};

// ============================================
// Helper Functions
// ============================================
const createElement = (tag, attributes = {}, textContent = '') => {
    const element = document.createElement(tag);
    Object.assign(element, attributes);
    if (textContent) element.textContent = textContent;
    return element;
};

const createFeatureList = (features) => {
    const list = document.createElement('ul');
    features.forEach(feature => {
        list.appendChild(createElement('li', {}, feature));
    });
    return list;
};

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadHomeContents();
    loadAboutContents();
    
    // Scroll handler for nav title
    window.addEventListener('scroll', () => {
        const navTitle = document.querySelector('.nav-title');
        navTitle.style.display = window.scrollY > 110 ? 'block' : 'none';
    });
    
    loadState();
    changeMenu(state.selectedMenu);
});