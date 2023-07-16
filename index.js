const apiUrl = 'https://api.lanyard.rest/v1/users/983465136561991760';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        var status = "";

        if(data.data.activities.length > 0) {
            status = data.data.activities[0].emoji.name + " " + data.data.activities[0].state;
        }

        var pfp = `https://cdn.discordapp.com/avatars/983465136561991760/${data.data.discord_user.avatar}.png?size=160`;

        var statusIcon = data.data.discord_status;

        if(statusIcon === "dnd") {
            document.getElementById("pfp").style = `background-image: url(${pfp}); border-color: #f04747;`;
        }

        if(statusIcon === "idle") {
            document.getElementById("pfp").style = `background-image: url(${pfp}); border-color: #faa61a;`;
        }
        
        if(statusIcon === "online") {
            document.getElementById("pfp").style = `background-image: url(${pfp}); border-color: #43b581;`;
        }

        if(statusIcon === "offline") {
            document.getElementById("pfp").style = `background-image: url(${pfp}); border-color: #636b75;`;
        }

        document.getElementById("status").innerHTML = status;
    })
    .catch(error => console.error('Error fetching data:', error));

    function jumpDown() {
        const viewportHeight = window.innerHeight;
        window.scrollTo(0, viewportHeight);
      }