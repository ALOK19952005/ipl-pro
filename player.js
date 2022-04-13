let url = new URL(location.href);
let playerId = url.searchParams.get("playerCode");

const loadplayerDetails = () => {
  const playerDetailsContainer = document.getElementById("playerDetailsContainer");
  const playerDetails = players.find((player) => player.id === playerId);

  document.getElementById("img_logo").src = playerDetails.Logo;
  document.getElementById("code").innerHTML = playerDetails.Short_Code;
  document.getElementById("name").innerHTML = playerDetails.Name;
};
