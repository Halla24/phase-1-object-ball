function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "Green"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["white", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }

  console.log(gameObject());

  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }

  console.log(homeTeamName()); // Should log "Brooklyn Nets"


  function awayTeamName() {
    return gameObject()["away"]["teamName"];
  }

  console.log(awayTeamName()); // Should log "Charlotte Hornets"


  function homeTeamColors() {
    return gameObject()["home"]["colors"];
  }

  console.log(homeTeamColors()); // Should log ["Black", "Green"]


  function awayTeamColors() {
    return gameObject()["away"]["colors"];
  }

  console.log(awayTeamColors()); // Should log ["white", "Purple"]


  function players() {
    return gameObject()["home"]["players"];
  }

  console.log(players()); // Should log an object containing home team players and their stats


  function playerNumber(playerName) {
    const playersObject = gameObject()["home"]["players"];
    return playersObject[playerName]["number"];
  }

  console.log(playerNumber("Alan Anderson")); // Should log 0


  function playerShoeSize(playerName) {
    const playersObject = gameObject()["home"]["players"];
    return playersObject[playerName]["shoe"];
  }

  console.log(playerShoeSize("Alan Anderson")); // Should log 16



  function numPointsScored(playerName) {
    const playersObject = gameObject().home.players;
    if (playersObject.hasOwnProperty(playerName)) {
      return playersObject[playerName].points;
    }
    // If the player name is not found in the home team, check the away team
    const awayPlayersObject = gameObject().away.players;
    if (awayPlayersObject.hasOwnProperty(playerName)) {
      return awayPlayersObject[playerName].points;
    }
    // Return null if the player name is not found in either team
    return null;
  }

  function shoeSize(playerName) {
    const playersObject = gameObject().home.players;
    if (playersObject.hasOwnProperty(playerName)) {
      return playersObject[playerName].shoe;
    }
    // If the player name is not found in the home team, check the away team
    const awayPlayersObject = gameObject().away.players;
    if (awayPlayersObject.hasOwnProperty(playerName)) {
      return awayPlayersObject[playerName].shoe;
    }
    // Return null if the player name is not found in either team
    return null;
  }

  function teamColors(teamName) {
    if (gameObject().home.teamName === teamName) {
      return gameObject().home.colors;
    } else if (gameObject().away.teamName === teamName) {
      return gameObject().away.colors;
    }
    // Return null if the team name is not found
    return null;
  }

  function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName];
  }

  function playerNumbers(teamName) {
    const teamPlayersObject =
      teamName === gameObject().home.teamName
        ? gameObject().home.players
        : gameObject().away.players;
    return Object.values(teamPlayersObject).map((player) => player.number);
  }

  function playerStats(playerName) {
    const playersObject = gameObject().home.players;
    if (playersObject.hasOwnProperty(playerName)) {
      return playersObject[playerName];
    }
    // If the player name is not found in the home team, check the away team
    const awayPlayersObject = gameObject().away.players;
    if (awayPlayersObject.hasOwnProperty(playerName)) {
      return awayPlayersObject[playerName];
    }
    // Return null if the player name is not found in either team
    return null;
  }

  function bigShoeRebounds() {
    let maxShoeSize = -1;
    let maxShoeRebounds = 0;
    const allPlayers = { ...gameObject().home.players, ...gameObject().away.players };

    for (const playerName in allPlayers) {
      const player = allPlayers[playerName];
      if (player.shoe > maxShoeSize) {
        maxShoeSize = player.shoe;
        maxShoeRebounds = player.rebounds;
      }
    }

    return maxShoeRebounds;
  }
  console.log(bigShoeRebounds());