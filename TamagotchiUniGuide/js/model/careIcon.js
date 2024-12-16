/* 
Name 	Description 	Sprite(s) 	Tier 1 	Tier 2 	Tier 3
Gave Meals 	Feed Tamagotchi at least 100 meals. 	
Careicon Gave100Meals 1
	100 	500 	1000
Gave Snacks 	Feed Tamagotchi at least 100 snacks. 	
Careicon Gave100Snacks 1
Careicon Gave500Snacks 2
	100 	500 	1000
Gave Bath 	Give Tamagotchi 30 baths. 	
Careicon Gave30Baths 1
	30 	100 	500
Perfect Score at Arcade 	Get a perfect score in at least 30 games (DLC minigames included). 	
Careicon PerfectScoreArcade30 1
Careicon PerfectScoreArcade100 2
	30 	100 	500
Got Fav Item 	Leave an item in the room and wait for the Tamagotchi to interact with it. 		1
Item Pro 	After getting a favorite item, the Tamagotchi will continue to interact with it until it becomes a “pro.” (This is usually indicated by a unique animation that plays after interacting.) 		1
Made Accessory 	Craft an accessory (connection DIYs excluded). 	
Careicon Made1Accessory 1
	1 	25 	54
Went on walk 	Go out for a Tama Walk (Tama Farm excluded). 	
Careicon WentOn1Walk 1
	1 	50 	100
Toilet Count 	Send Tamagotchi to the toilet at least once. 	
Careicon Toilet1 1
	1 	10 	30
Flushed Poo 	Clean up Tamagotchi’s poop at least once. 	
Tier 3 "Flushed Poo" Care Icon.
	1 	30 	100
Ambulance Called 			1 	5 	10
Connect with Friends 	Connect two Uni devices at least once. 		1 	5 	10
Tamaverse Event Joined 	Participate in the game events at the Tama Arena. 		1 	10 	20
Found Partner 	Marry off your Tamagotchi at least once (does not include connection marriages). 		1 	50 	100
Outfits displayed in fashion 	Display your Tamagotchi’s accessories in Tama Fashion (located in the Tamaverse). 		1 	50 	100
Went on Jungle Tour 	Visit the Jungle on a Tama Travel trip. 		1 	(N/A) 	(N/A)
Went on Desert Ruins Tour 	Visit the Desert Ruins on a Tama Travel trip. 		1 	(N/A) 	(N/A)
Went on Water City Tour 	Visit the Water City on a Tama Travel trip. 		1 	(N/A) 	(N/A)
Went on Tropical Island Tour 	Visit the Tropical Island on a Tama Travel trip. 		1 	(N/A) 	(N/A)
Went on Aurora Village Tour 	Visit the Aurora Village on a Tama Travel trip. 		1 	(N/A) 	(N/A) */

const CARE_ICONS = [
    {
        name: "Gave Meals 1",
        image: "careIcons/GaveMeals1.webp",
        description: "Feed Tamagotchi at least 100 meals."
    },
    {
        name: "Gave Meals 2",
        image: "careIcons/GaveMeals2.webp",
        description: "Feed Tamagotchi at least 500 meals."
    },
    {
        name: "Gave Meals 3",
        image: "careIcons/GaveMeals3.webp",
        description: "Feed Tamagotchi at least 1000 meals."
    },
    {
        name: "Gave Snacks 1",
        image: "careIcons/GaveSnacks1.webp",
        description: "Feed Tamagotchi at least 100 snacks."
    },
    {
        name: "Gave Snacks 2",
        image: "careIcons/GaveSnacks2.webp",
        description: "Feed Tamagotchi at least 500 snacks."
    },
    {
        name: "Gave Snacks 3",
        image: "careIcons/GaveSnacks3.webp",
        description: "Feed Tamagotchi at least 1000 snacks."
    },
    {
        name: "Gave Bath 1",
        image: "careIcons/GaveBath1.webp",
        description: "Give Tamagotchi at least 30 baths."
    },
    {
        name: "Gave Bath 2",
        image: "careIcons/GaveBath2.webp",
        description: "Give Tamagotchi at least 100 baths."
    },
    {
        name: "Gave Bath 3",
        image: "careIcons/GaveBath3.webp",
        description: "Give Tamagotchi at least 500 baths."
    },
    {
        name: "Perfect Score at Arcade 1",
        image: "careIcons/PerfectScoreAtArcade1.webp",
        description: "Get a perfect score in at least 30 games (DLC minigames included)."
    },
    {
        name: "Perfect Score at Arcade 2",
        image: "careIcons/PerfectScoreAtArcade2.webp",
        description: "Get a perfect score in at least 100 games (DLC minigames included)."
    },
    {
        name: "Perfect Score at Arcade 3",
        image: "careIcons/PerfectScoreAtArcade3.webp",
        description: "Get a perfect score in at least 500 games (DLC minigames included)."
    },
    {
        name: "Got Fav Item",
        image: "careIcons/GotFavItem.webp",
        description: "Leave an item in the room and wait for the Tamagotchi to interact with it."
    },
    {
        name: "Item Pro",
        image: "careIcons/ItemPro.webp",
        description: "After getting a favorite item, the Tamagotchi will continue to interact with it until it becomes a “pro.”"
    },
    {
        name: "Made Accessory 1",
        image: "careIcons/MadeAccessory.webp",
        description: "Craft an accessory (connection DIYs excluded)."
    },
    {
        name: "Made Accessory 2",
        image: "careIcons/MadeAccessory2.webp",
        description: "Craft 25 accessories (connection DIYs excluded)."
    },
    {
        name: "Made Accessory 3",
        image: "careIcons/MadeAccessory3.webp",
        description: "Craft 54 accessories (connection DIYs excluded)."
    },
    {
        name: "Went on Walk 1",
        image: "careIcons/WentOnWalk.webp",
        description: "Go out for a Tama Walk (Tama Farm excluded)."
    },
    {
        name: "Went on Walk 2",
        image: "careIcons/WentOnWalk2.webp",
        description: "Go out for 50 Tama Walks (Tama Farm excluded)."
    },
    {
        name: "Went on Walk 3",
        image: "careIcons/WentOnWalk3.webp",
        description: "Go out for 100 Tama Walks (Tama Farm excluded)."
    },
    {
        name: "Toilet Count 1",
        image: "careIcons/ToiletCount.webp",
        description: "Send Tamagotchi to the toilet at least once."
    },
    {
        name: "Toilet Count 2",
        image: "careIcons/ToiletCount2.webp",
        description: "Send Tamagotchi to the toilet 10 times."
    },
    {
        name: "Toilet Count 3",
        image: "careIcons/ToiletCount3.webp",
        description: "Send Tamagotchi to the toilet 30 times."
    },
    {
        name: "Flushed Poo 1",
        image: "careIcons/FlushedPoo.webp",
        description: "Clean up Tamagotchi's poop at least once."
    },
    {
        name: "Flushed Poo 2",
        image: "careIcons/FlushedPoo2.webp",
        description: "Clean up Tamagotchi's poop 30 times."
    },
    {
        name: "Flushed Poo 3",
        image: "careIcons/FlushedPoo3.webp",
        description: "Clean up Tamagotchi's poop 100 times."
    },
    {
        name: "Ambulance Called 1",
        image: "careIcons/AmbulanceCalled.webp",
        description: "Call the ambulance at least once."
    },
    {
        name: "Ambulance Called 2",
        image: "careIcons/AmbulanceCalled2.webp",
        description: "Call the ambulance 5 times."
    },
    {
        name: "Ambulance Called 3",
        image: "careIcons/AmbulanceCalled3.webp",
        description: "Call the ambulance 10 times."
    },
    {
        name: "Connect with Friends 1",
        image: "careIcons/ConnectWithFriends.webp",
        description: "Connect two Uni devices at least once."
    },
    {
        name: "Connect with Friends 2",
        image: "careIcons/ConnectWithFriends2.webp",
        description: "Connect two Uni devices 5 times."
    },
    {
        name: "Connect with Friends 3",
        image: "careIcons/ConnectWithFriends3.webp",
        description: "Connect two Uni devices 10 times."
    },
    {
        name: "Tamaverse Event Joined 1",
        image: "careIcons/TamaverseEventJoined.webp",
        description: "Participate in the game events at the Tama Arena."
    },
    {
        name: "Tamaverse Event Joined 2",
        image: "careIcons/TamaverseEventJoined2.webp",
        description: "Participate in the game events at the Tama Arena 10 times."
    },
    {
        name: "Tamaverse Event Joined 3",
        image: "careIcons/TamaverseEventJoined3.webp",
        description: "Participate in the game events at the Tama Arena 20 times."
    },
    {
        name: "Found Partner 1",
        image: "careIcons/FoundPartner.webp",
        description: "Marry off your Tamagotchi at least once (does not include connection marriages)."
    },
    {
        name: "Found Partner 2",
        image: "careIcons/FoundPartner2.webp",
        description: "Marry off your Tamagotchi 50 times (does not include connection marriages)."
    },
    {
        name: "Found Partner 3",
        image: "careIcons/FoundPartner3.webp",
        description: "Marry off your Tamagotchi 100 times (does not include connection marriages)."
    },
    {
        name: "Outfits displayed in fashion 1",
        image: "careIcons/OutfitsDisplayedInFashion.webp",
        description: "Display your Tamagotchi's accessories in Tama Fashion (located in the Tamaverse)."
    },
    {
        name: "Outfits displayed in fashion 2",
        image: "careIcons/OutfitsDisplayedInFashion2.webp",
        description: "Display your Tamagotchi's accessories in Tama Fashion 50 times (located in the Tamaverse)."
    },
    {
        name: "Outfits displayed in fashion 3",
        image: "careIcons/OutfitsDisplayedInFashion3.webp",
        description: "Display your Tamagotchi's accessories in Tama Fashion 100 times (located in the Tamaverse)."
    },
    {
        name: "Went on Jungle Tour",
        image: "careIcons/WentOnJungleTour.webp",
        description: "Visit the Jungle on a Tama Travel trip."
    },
    {
        name: "Went on Desert Ruins Tour",
        image: "careIcons/WentOnDesertRuinsTour.webp",
        description: "Visit the Desert Ruins on a Tama Travel trip."
    },
    {
        name: "Went on Water City Tour",
        image: "careIcons/WentOnWaterCityTour.webp",
        description: "Visit the Water City on a Tama Travel trip."
    },
    {
        name: "Went on Tropical Island Tour",
        image: "careIcons/WentOnTropicalIslandTour.webp",
        description: "Visit the Tropical Island on a Tama Travel trip."
    },
    {
        name: "Went on Aurora Village Tour",
        image: "careIcons/WentOnAuroraVillageTour.webp",
        description: "Visit the Aurora Village on a Tama Travel trip."
    }
]