// Write your JavaScript code here.
let takeOffButton = null;
let landButton = null;
let abortMissionButton = null;
let upButton = null;
let downButton = null;
let rightButton = null;
let leftButton = null;

let shuttleBoundry = null;


function init ()    {
    takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", takeOffOnClick);
    function takeOffOnClick()   {
        if (confirm("Confirm that the shuttle is ready for takeoff."))  {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.background = "blue";
            let oldHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
            let newHeight = oldHeight + 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = newHeight;

        }
    }

    
    shuttleBoundry = {  top: 0,
                        bottom: document.getElementById("shuttleBackground").getBoundingClientRect().height,
                        left: 0 - document.getElementById("shuttleBackground").getBoundingClientRect().width/2,
                        right: document.getElementById("shuttleBackground").getBoundingClientRect().width/2
    };
    // console.log(shuttleBoundry);

    landButton = document.getElementById("landing");
    landButton.addEventListener('click', landButtonOnClick);
    // When the "Land" button is clicked, the following should happen
    function landButtonOnClick()    {
        alert( "The shuttle is landing. Landing gear engaged.");
        document.getElementById('flightStatus').innerHTML = 'The shuttle has landed.';
        document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
        landRocket();
    }

    abortMissionButton = document.getElementById('missionAbort');
    abortMissionButton.addEventListener('click', abortMissionButtonOnclick);
    // When the "Abort Mission" button is clicked, the following should happen
    function abortMissionButtonOnclick()  {
        if (confirm("Confirm that you want to abort the mission.")) {
            document.getElementById('flightStatus').innerHTML = 'Mission aborted.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
            landRocket();
        }
    }

    // When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen
    let imgObj = document.getElementById('rocket');
    
    function landRocket() {
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = (document.getElementById("shuttleBackground").getBoundingClientRect().height - imgObj.getBoundingClientRect().height)+'px';    
    // console.log("img{top: " + imgObj.style.top +", left: "+imgObj.style.left+", height: "+imgObj.getBoundingClientRect().height+"}");
    }
    
    landRocket();


    upButton = document.getElementById('up');
    upButton.addEventListener('click', upButtonOnClick);
    function upButtonOnClick()  {
        let currentUpPosition = parseInt(imgObj.style.top);
        let newUpPosition = currentUpPosition - 10;
        // console.log("new up:"+newUpPosition);
        if (newUpPosition < shuttleBoundry.top) {
            alert("Shuttle cannot fly outside of the boundry.");
        } else {
            imgObj.style.top = newUpPosition + 'px';
        }
    }
    leftButton = document.getElementById('left');
    leftButton.addEventListener('click', leftButtonOnclick);
    function leftButtonOnclick()    {
        let currentLeftPosition = parseInt(imgObj.style.left);
        let newLeftPosition = currentLeftPosition - 10;
        // let newUpPosition = currentUpPosition - 10;
        console.log("new left:"+newLeftPosition);
        if (newLeftPosition < shuttleBoundry.left) {
            alert("Shuttle cannot fly outside of the boundry.");
        } else {
            imgObj.style.left = newLeftPosition + 'px';
        }        
    }


    downButton = document.getElementById('down');
    downButton.addEventListener('click', downButtonOnClick);
    function downButtonOnClick()  {
        let currentDownPosition = parseInt(imgObj.style.top);
        let newDownPosition = currentDownPosition + 10;
        console.log("new down:"+newDownPosition);
        if (newDownPosition > shuttleBoundry.bottom) {
            alert("Shuttle cannot fly outside of the boundry.");
        } else {
            imgObj.style.top = newDownPosition + 'px';
        }   
    }


    rightButton = document.getElementById('right');
    rightButton.addEventListener('click', rightButtonOnClick);
    function rightButtonOnClick()  {
        let currentRightPosition = parseInt(imgObj.style.left);
        let newRightPosition = currentRightPosition + 10;
        console.log("new right:"+newRightPosition);
        if (newRightPosition > shuttleBoundry.right) {
            alert("Shuttle cannot fly outside of the boundry.");
        } else {
            imgObj.style.left = newRightPosition + 'px';
        }  
    }

}


// Remember to pay attention to page loading!

window.onload = init;