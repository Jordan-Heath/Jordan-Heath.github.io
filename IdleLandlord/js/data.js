class Data {
    constructor() {
        //game data
        this.properties = [];
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
        return Promise.all([
            loadJsonData(VERSION_URL ),
            loadJsonData(PROPERTIES_URL),
            loadJsonData(UPGRADES_URL),
            loadJsonData(JOBS_URL)
        ])
            .then(([versionData, propertiesData, upgradesData, jobsData]) => {
                // Process version data
                player.version = versionData.version;
                //console.log('Version data loaded:', data);

                // Process properties data
                this.properties = propertiesData.properties.map(propertyData => {
                    player.ownedProperties[propertyData.id] = 0;
                    var upgrades = [];
                    propertyData.upgrades.forEach(upgradeData => {
                        var upgrade = new Upgrade(propertyData.id, upgradeData.id, upgradeData.description, upgradeData.cost, upgradeData.multiplier)
                        upgrades.push(upgrade);
                    });

                    var property =  new Property(propertyData.id, propertyData.description, propertyData.baseCost, propertyData.income, upgrades);
                    return property;
                });

                // Process jobs data
                this.jobs = jobsData.jobs.map(jobsData => {
                    return new Job(jobsData.id, jobsData.description, jobsData.xpRequirement, jobsData.payRate);
                });

                //console.log('Data loaded successfully:', { propertiesData, upgradesData, jobsData });

                if (!player.loadFromCookies()) {
                    this.updateJob();
                }
                
                initialiseViews();
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