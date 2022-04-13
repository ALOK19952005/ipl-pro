const getTeamDetails = (teamCode) => {
  location.href = `teamDetails.html?teamCode=${teamCode}`;
};

const loadTeams = () => {
  const row = document.getElementById("row");

  teams.forEach((team) => {
    const card = `
          <div class="card" onclick="getTeamDetails('${team.Short_Code}')" key="${team.Id}">
            <div class="image">
              <img src="${team.Logo}" class="team-logo" alt="${team.Logo}" />
            </div>
            <div class="container">
              <h3>${team.Short_Code}</h3>
              <h4>${team.Name}</h4>
              <h4>Captain: <a href="playerDetails.html?playerCode=${team.Captain_ID}" class="captain"> ${team.Captain_Name} </a></h4>
              <h5>Top Batsman: ${team.Top_Batsman}</h5>
              <h5>Top Bowler: ${team.Top_Bowler}</h5>
              <h5>Total Player: ${team.Total_Player}</h5>
              <h5>Total Wins: ${team.Total_Wins}</h5>
            </div>
        </div>
          `;
    row.innerHTML += card;
  });
};
