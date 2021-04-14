const ourGames = [
    {
        name: "Apex Legends",
        img: "./img/games/Apex-Legends.jpg",
        category: ["Action", "Adventure"],
        link: ""
    },
    {
        name: "Albion Online",
        img: "./img/games/albion-online.jpg",
        category: ["Adventure", "Action", "MMO"],
        link: ""
    },
    {
        name: "Brawlhalla",
        img: "./img/games/brawlhalla.jpg",
        category: ["Adventure"],
        link: ""
    },
    {
        name: "Counter-Strike: Global Offensive",
        img: "./img/games/cs-go.jpg",
        category: ["Action"],
        link: ""
    },
    {
        name: "Destiny 2",
        img: "./img/games/Destiny-2.jpg",
        category: ["Action", "Adventure"],
        link: ""
    },
    {
        name: "Dead Frontier 2",
        img: "./img/games/dead-frontier-2.jpg",
        category: ["Survival"],
        link: ""
    },
    {
        name: "Dota 2",
        img: "./img/games/dota-2.jpg",
        category: ["Action", "MMO"],
        link: ""
    },
    {
        name: "DCS World",
        img: "./img/games/DCSjpg.jpg",
        category: ["Simulation"],
        link: ""
    },
    {
        name: "Team Fortress 2",
        img: "./img/games/team-fortress-2.jpg",
        category: ["Adventure", "Action"],
        link: ""
    },{
        name: "Trove",
        img: "./img/games/trove.jpg",
        category: ["Adventure"],
        link: ""
    },
    {
        name: "Paladins",
        img: "./img/games/paladins.jpg",
        category: ["Action", "Strategy"],
        link: ""
    },
    {
        name: "Warframe",
        img: "./img/games/warframe.jpg",
        category: ["Adventure", "Action"],
        link: ""
    },
    {
        name: "War Thunder",
        img: "./img/games/war-thunder.jpg",
        category: ["Adventure", "Action", "Simulation"],
        link: ""
    },{
        name: "Warface",
        img: "./img/games/warface.jpg",
        category: ["Action", "Adventure", "Simulation"],
        link: ""
    },
    {
        name: "EVE Online",
        img: "./img/games/eve-online.jpg",
        category: ["Adventure", "MMO"],
        link: ""
    },
    {
        name: "World of Tanks Blitz",
        img: "./img/games/word-of-tanks-blitz.jpg",
        category: ["Action", "Simulation"],
        link: ""
    },
    {
        name: "World of Warships",
        img: "./img/games/world-of-warships.jpg",
        category: ["Adventure", "Action", "Simulation"],
        link: ""
    }

]

function ShowGames(gen){
    
    var ourGamesSection = document.getElementsByClassName('ourGamesSection')[0]
    var navBtn = document.getElementsByClassName('btnNavGames');
    ourGamesSection.innerHTML = ""
    for (let navIndex = 0; navIndex < navBtn.length; navIndex++) {
        if(gen === navBtn[navIndex].innerHTML){
            navBtn[navIndex].id = "ativo"
        }else{
            navBtn[navIndex].id = ""
        }
    }


    for (let i = 0; i < ourGames.length; i++) {
        if(gen === "All Games"){
            var ourGamesItem = document.createElement('div');
            var ourGamesImg = document.createElement('img');
            var ourGamesH1 = document.createElement('h1');
            ourGamesH1.innerHTML = ourGames[i].name;
            ourGamesItem.className = "ourGamesItem";
            ourGamesImg.src = ourGames[i].img;
            ourGamesSection.appendChild(ourGamesItem);
            ourGamesItem.appendChild(ourGamesImg);
            ourGamesItem.appendChild(ourGamesH1);
        }else{
            for (let f = 0; f < ourGames[i].category.length; f++) {
                if(gen === ourGames[i].category[f]){
                    var ourGamesItem = document.createElement('div');
                    var ourGamesImg = document.createElement('img');
                    var ourGamesH1 = document.createElement('h1');
                    ourGamesH1.innerHTML = ourGames[i].name;
                    ourGamesItem.className = "ourGamesItem";
                    ourGamesImg.src = ourGames[i].img;
                    ourGamesSection.appendChild(ourGamesItem);
                    ourGamesItem.appendChild(ourGamesImg);
                    ourGamesItem.appendChild(ourGamesH1);
                }
            }

        }
        
    }
}

ShowGames('All Games')