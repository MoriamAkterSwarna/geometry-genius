
    let serial = 0;

    // triangle calculattion
document.getElementById('triangle_calculate').addEventListener('click',function(e){


    serial += 1;

    const area = getAllData(e);
    const triangleArea = 0.5 * parseFloat(area.shapeValueOne) * parseFloat(area.shapeValueTwo);
    const triangleAreaDecimal = triangleArea.toFixed(2);
    // console.log(triangleArea);

    displayData(area.shapeName, area.shapeValueOne,area.shapeValueTwo, triangleAreaDecimal);

    
})
// rectangle calculation
document.getElementById('rectangle-calculate').addEventListener('click',function(e){

    serial += 1;

    const area = getAllData(e);
    const rectangleArea = parseFloat(area.shapeValueOne) * parseFloat(area.shapeValueTwo);
    const rectangleAreaDecimal = rectangleArea.toFixed(2);

    displayData(area.shapeName, area.shapeValueOne, area.shapeValueTwo,rectangleAreaDecimal);

})
// parallelogram calculation
document.getElementById('parallelogram-calculate').addEventListener('click',function(e){

    serial += 1;


    const area = getAllData(e);
    const parallelogramArea = parseFloat(area.shapeValueOne) * parseFloat(area.shapeValueTwo);
    const parallelogramAreaDecimal = parallelogramArea.toFixed(2);

    displayData(area.shapeName,area.shapeValueOne,area.shapeValueTwo,parallelogramAreaDecimal);

})
// Rhombus calculation
document.getElementById('rhombus-calculate').addEventListener('click',function(e){

    serial += 1;

    const area = getAllData(e);
    const rhombusArea = 0.5 * parseFloat(area.shapeValueOne) * parseFloat(area.shapeValueTwo);
    const rhombusAreaDecimal = rhombusArea.toFixed(2);

    displayData(area.shapeName,area.shapeValueOne,area.shapeValueTwo,rhombusAreaDecimal);

})
// Pentagon calculation
document.getElementById('pentagon-calculate').addEventListener('click',function(e){

    serial += 1;

    const area = getAllData(e);
    const pentagonArea = 0.5 * parseFloat(area.shapeValueOne) * parseFloat(area.shapeValueTwo);
    const pentagonAreaDecimal = pentagonArea.toFixed(2);
   
    displayData(area.shapeName,area.shapeValueOne,area.shapeValueTwo,pentagonAreaDecimal);

})
// Ellipse calculation
document.getElementById('ellipse-calculate').addEventListener('click',function(e){

    serial += 1;

    const area = getAllData(e);
    const ellipseArea = 3.14* parseFloat(area.shapeValueOne) * parseFloat(area.shapeValueTwo);
    const ellipseAreaDecimal = ellipseArea.toFixed(2);

    displayData(area.shapeName,area.shapeValueOne,area.shapeValueTwo,ellipseAreaDecimal);

})


// common function

function displayData(shapeName, shapeValueOne, shapeValueTwo, shapeArea){
    // show the data
    const container = document.getElementById("area-list");


    const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${serial}</td>
        <td>${shapeName}</td>
        <td>${shapeValueOne}</td>
        <td>${shapeValueTwo}</td>
        <td>${shapeArea}</td>
        <td>
            <button class="btn btn-primary">Convert to  m<sup>2</sup></button>
        </td>
    
  `;
  container.appendChild(tr);
}

// common function to get data using event object

function getAllData(e) {
    const shapeName = e.target.parentNode.children[0].innerText;
    const shapeValueOne = e.target.parentNode.children[2].children[0].value;
    const shapeValueTwo = e.target.parentNode.children[2].children[2].value;

  
    const shape = {
      shapeName: shapeName,
      shapeValueOne: shapeValueOne,
      shapeValueTwo: shapeValueTwo,
    };

    // input validation 
    if (
        shapeValueOne == "" ||
        shapeValueTwo == "" ||
        shapeValueOne <= 0 ||
        shapeValueTwo <= 0
      ) {
        return alert("please enter any valid number");
      }
  
    return shape;
  }
