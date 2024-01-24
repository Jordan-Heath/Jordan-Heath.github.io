class Data {
    constructor() {
        //game data
        this.properties = [];
        this.upgrades = [];
        this.jobs = [];

        //cached variables
        this.income = 0;
        this.job;
        this.xpSubstract = 0;
        this.xpGoal = 0;
    }

    loadData() {
        const loadJsonData = (url) => fetch(url).then(response => response.json());

        // Load version number and other data from data.json
        loadJsonData(DATA_URL)
            .then(data => {
                player.version = data.version;
                console.log('Version data loaded:', data);
                return Promise.all([
                    loadJsonData(PROPERTIES_URL),
                    loadJsonData(UPGRADES_URL),
                    loadJsonData(JOBS_URL)
                ]);
            })
            .then(([propertiesData, upgradesData, jobsData]) => {
                // Process properties data
                this.properties = propertiesData.properties.map(propertyData => {
                    player.ownedProperties[propertyData.id] = 0;
                    return new Property(propertyData.id, propertyData.description, propertyData.baseCost, propertyData.income);
                });

                // Process upgrades data
                this.upgrades = upgradesData.upgrades.map(upgradeData => {
                    player.ownedUpgrades[upgradeData.id] = false;
                    return new Upgrade(upgradeData.propertyId, upgradeData.id, upgradeData.description, upgradeData.cost, upgradeData.multiplier);
                });

                // Process jobs data
                this.jobs = jobsData.jobs.map(jobsData => {
                    return new Job(jobsData.id, jobsData.description, jobsData.xpRequirement, jobsData.payRate);
                });

                console.log('Data loaded successfully:', { propertiesData, upgradesData, jobsData });

                if (!player.loadFromCookies()) {
                    this.updateJob();
                    updatePageView();
                }

                startIntervals();
            })
            .catch(error => console.error('Error loading data:', error));
    }

    updateIncome() {
        this.income = 0;
        data.properties.forEach(property => {
            property.recalculateIncome();
            this.income += property.income * player.ownedProperties[property.id];
        });
    }

    updateJob() {
        if (player.xp >= this.xpGoal && data.xpGoal !== -1) {
            this.jobs.forEach(job => {
                if (player.xp >= job.xpRequirement) {
                    this.xpSubstract = job.xpRequirement;
                    this.job = job;
                    this.xpGoal = -1;
                } else if (this.xpGoal === -1) {
                    this.xpGoal = job.xpRequirement;
                }
            });
        }
        updateJobView();
    }
}

const data = new Data();