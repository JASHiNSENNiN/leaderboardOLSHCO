const teams = [
  { name: "Golden Blazing Phoenix", score: 92 },
  { name: "Blue Mighty Peryton", score: 85 },
  { name: "Red Raging Dragons", score: 75 },
  { name: "Green Mischievous Kitsune", score: 100 },
];

teams.sort((a, b) => b.score - a.score);

const tableBody = document.getElementById("scoreTableBody");

teams.forEach((team, index) => {
  const row = document.createElement("tr");
  const rankCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const scoreCell = document.createElement("td");

  rankCell.textContent = index + 1;
  nameCell.textContent = team.name;
  scoreCell.textContent = team.score;

  row.appendChild(rankCell);
  row.appendChild(nameCell);
  row.appendChild(scoreCell);
  tableBody.appendChild(row);
});
