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
        fetch(DATA_URL)
            .then(response => response.json())
            .then(data => {
                this.version = data.version;
                this.properties = data.properties.map(propertyData => {
                    player.ownedProperties[propertyData.id] = 0;
                    return new Property(propertyData.id, propertyData.description, propertyData.baseCost, propertyData.income);
                });
                this.upgrades = data.upgrades.map(upgradeData => {
                    player.ownedUpgrades[upgradeData.id] = false;
                    return new Upgrade(upgradeData.propertyId, upgradeData.id, upgradeData.description, upgradeData.cost, upgradeData.multiplier);
                });
                this.jobs = data.jobs.map(jobsData => {
                    return new Job(jobsData.id, jobsData.description, jobsData.xpRequirement, jobsData.payRate);
                });
                
                console.log(data);

                this.updateJob();
                updatePageView();
                startIntervals();
            })
            .catch(error => console.error('Error loading data:', error));
    }

    updateIncome() {
        this.income = this.properties.reduce((totalIncome, property) => totalIncome + property.income * player.ownedProperties[property.id], 0);
    }

    updateJob() {
        if (player.xp >= this.xpGoal && player.xp !== -1) {
            this.jobs.forEach(job => {
                if (player.xp >= job.xpRequirement) {
                    this.workExperienceSubtract = job.xpRequirement;
                    this.job = job;
                    this.workExperienceGoal = -1;
                } else if (this.workExperienceGoal === -1) {
                    this.workExperienceGoal = job.xpRequirement;
                }
            });
        }
        updateJobView();
    }
}

const data = new Data();