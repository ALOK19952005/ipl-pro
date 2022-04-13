const url = new URL(location.href);
const teamCode = url.searchParams.get("teamCode");

const loadTeamDetails = () => {
  const teamDetailsContainer = document.getElementById("teamDetailsContainer");
  const teamDetails = teams.find((team) => team.Short_Code === teamCode);
  console.log("🚀 TCL:-  file: team.js TCL:-  line 7 TCL:-  teamDetails", teamDetails);

  document.getElementById("img_logo").src = teamDetails.Logo;
  document.getElementById("code").innerHTML = teamDetails.Short_Code;
  document.getElementById("name").innerHTML = teamDetails.Name;
  document.getElementById("TOP_BATSMAN").innerHTML = teamDetails.Name;
  document.getElementById("TOPBOWLER").innerHTML = teamDetails.Top_Batsman;
  document.getElementById("TOTAL_WIN").innerHTML = teamDetails.Top_Bowler;

  document.getElementById("TOTAL_PLAYER").innerHTML = teamDetails.Total_Player;
 

};
