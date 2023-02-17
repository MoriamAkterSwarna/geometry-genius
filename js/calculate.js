
const areaListArray = [];

// function for displaying the list of the selected player
function displayAreaList() {

    const areaList = document.getElementById('area-list');
    areaList.textContent = "";

    for (let i = 0; i < areaListArray.length; i++) {

            // create a table and append the child for displaying the player lists
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <th>${i + 1}</th>
                <td>${areaListArray[i].areaName}</td>
        
            `;
           areaList.appendChild(tr);
        }
}
// function for select player 
function calculate(element) {
    const areaName = element.parentNode.children[0].innerText;

    const area = {
        areaName: areaName
    }
    areaListArray.push(area)

    displayAreaList();

}