const form = document.getElementById('form');
const sendData = document.getElementById('sendData');
sendData.hidden = true;
let url, id, roomNo, floorNo;
const smoke = document.getElementById("smoke");
const co2 = document.getElementById("co2");

function onSubmit(e) {
    e.preventDefault();

    // alert();
    url = e.target["api"].value + "/api";
    id = e.target["id"].value;
    roomNo = parseInt(e.target["roomNo"].value);
    floorNo = parseInt(e.target["floorNo"].value);
    return fetch(url + "/isregistered/" + id)
        .then(response => response.json())
        .then(res => {
            if (res.isAvailable === true) {
                if (res.info.room_no !== roomNo || res.info.floor_no !== floorNo) {
                    alert("Room No, or the Floor No. You entered was wrong, they have been corrected.");
                    // set the correct room no and floor no
                    roomNo = res.info.room_no;
                    floorNo = res.info.floor_no;
                }
                smoke.value = res.info.smoke_level;
                co2.value = res.info.co2_level;

                const roomFloor = document.getElementById('roomFloor');
                roomFloor.innerText = `Room No: ${roomNo} | Floor No: ${floorNo}`;

                updateStatus(co2.value, smoke.value);
                sendData.hidden = false;
                form.hidden = true;

                alert("Authenticated!");
                updateLevels();
                return true;
            }else{
                alert(`Authentication of the Sensor ID: ${id} failed\nNo Sensor Registered with that ID(${id})`);
                return false;
            }
        })
        .catch(err => {
            alert("Error: " + err);
            return false;
        });
}

let timer = null;

function updateLevels() {
    timer = setInterval(() => {
        const bodyO = {
            smoke_level: parseInt(smoke.value),
            co2_level: parseInt(co2.value)
        };
        const updateUri = `${url}/sensorinfo/${id}`;
        fetch(updateUri, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyO)
        })
            .then(response => response.json())
            .then(res => {
                updateStatus(res.co2_level, res.smoke_level);
            })
            .catch(err => {
                console.log("Error: " + err);
                alert("Error from the server...\nExit?");
                clearTimeout(timer);
                window.close();
            })

    }, 5000);
}

function updateStatus(co2, smoke) {
    const status = document.getElementById('status');
    if (smoke < 5 && co2 < 5) {
        status.innerText = "Good";
        status.className = "good";
    } else if (smoke > 5 || co2 > 5) {
        status.innerText = "Dangerous";
        status.className = "danger";
    } else {
        status.innerText = "Average";
        status.className = "";
    }
}
