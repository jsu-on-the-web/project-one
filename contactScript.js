
/*=============================================
=            Function Definitions            =
=============================================*/
const sendMessage = function (event) {
    event.preventDefault();
    console.log("It is working.");
    const email = document.getElementById("email").value;
    const fullName = document.getElementById("fullName").value;
    const message = document.getElementById("message").value;

    const messageData = {
        email: email,
        fullName: fullName,
        message: message
    }
    console.log(messageData);

    // Actually storing the message in session storage.
    let currentMessages = [];

    if (window.sessionStorage.getItem("messages")) {

        currentMessages = JSON.parse(
            window.sessionStorage.getItem("messages")
        );
    }
    currentMessages.push(messageData);

    window.sessionStorage.setItem(
        "messages",
        JSON.stringify(currentMessages)
    );

    // Calling the renderMessages function so the message feed is automatically updated.
    renderMessages();

}

const deleteMessages = function (event) {
    if (window.sessionStorage.getItem("messages")) {
        window.sessionStorage.removeItem("messages");
    }

    renderMessages();
}

const renderMessages = function () {
    let currentMessages = [];

    if (window.sessionStorage.getItem("messages")) {

        currentMessages = JSON.parse(
            window.sessionStorage.getItem("messages")
        );
    }

    let listItems = [];
    for (let i = 0; i < currentMessages.length; i++) {
        let listItem = "";
        const currentMessage = currentMessages[i];

        // By using backticks, we can append a template string to listItem, which allows us to use HTML tags and templating in the string.

        // Dt is the Description Title tag, Dd is the Description Body tag.

        listItem += `<dt>${currentMessage.fullName} - ${currentMessage.email}</dt>`
        listItem += `<dd>${currentMessage.message}</dd> <br/>`
        listItems.push(listItem);
    }

    // Actually displaying the messages.
    let descList = document.getElementById("currentMessages");
    descList.innerHTML = listItems.join("");
}


/*=============================================
=            Variable Definitions            =
=============================================*/


/*=============================================
=            Script Assignments            =
=============================================*/
renderMessages();





