var userData = new Object();

window.onload = function () {
  fetch("userdata.json")
    .then(res => res.json())
    .then((res) => {
      console.log(res);
      userData = res;
      displayRoster();
    });
};

function displayRoster() {
  for (const o of userData.Roster) {
    //build table row
    var tr = document.createElement("tr");
    var tdName = document.createElement("td");
    var tdRarity = document.createElement("td");
    var tdClass = document.createElement("td");
    var tdRole = document.createElement("td");
    var tdRating = document.createElement("td");
    var tdHP = document.createElement("td");
    var tdATK = document.createElement("td");
    var tdDEF = document.createElement("td");
    var tdRES = document.createElement("td");
    var tdRedeploy = document.createElement("td");
    var tdDP = document.createElement("td");
    var tdBlock = document.createElement("td");
    var tdInterval = document.createElement("td");
    var tdElite = document.createElement("td");
    var tdLevel = document.createElement("td");
    var tdEXP = document.createElement("td");
    var tdSkill = document.createElement("td");
    tr.appendChild(tdName);
    tr.appendChild(tdRarity);
    tr.appendChild(tdClass);
    tr.appendChild(tdRole);
    tr.appendChild(tdRating);
    tr.appendChild(tdHP);
    tr.appendChild(tdATK);
    tr.appendChild(tdDEF);
    tr.appendChild(tdRES);
    tr.appendChild(tdRedeploy);
    tr.appendChild(tdDP);
    tr.appendChild(tdBlock);
    tr.appendChild(tdInterval);
    tr.appendChild(tdElite);
    tr.appendChild(tdLevel);
    tr.appendChild(tdEXP);
    tr.appendChild(tdSkill);
    //fill table rows
    tdName.innerHTML = o.Name;
    tdRarity.innerHTML = o.Rarity;
    tdClass.innerHTML = o.Class;
    tdRole.innerHTML = o.Role;
    tdRating.innerHTML = o.Rating;
    tdHP.innerHTML = o.Stats.HP;
    tdATK.innerHTML = o.Stats.ATK;
    tdDEF.innerHTML = o.Stats.DEF;
    tdRES.innerHTML = o.Stats.RES;
    tdRedeploy.innerHTML = o.Stats.RedeployTime
    tdDP.innerHTML = o.Stats.DPCost
    tdBlock.innerHTML = o.Stats.Block;
    tdInterval.innerHTML = o.Stats.AttackInterval;
    tdElite.innerHTML = o.Elite;
    tdLevel.innerHTML = o.Level;
    tdEXP.innerHTML = o.EXP;
    tdSkill.innerHTML = o.Skill;
    //add to table
    document.getElementById("rosterTable").appendChild(tr);
  }
}