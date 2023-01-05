// add a click event listener on the form submit button
// don't forget to "prevent" the form from being sent

    const btn = document.getElementById("comment-submit");

    function handleSubmit(event) {
        // console.log("bonjour");
        event.preventDefault();
    }

    btn.addEventListener("click", handleSubmit);

    
    
    function takeInfo(event) {
        let userName = document.getElementById("comment-username").value;
        let message = document.getElementById("comment-content").value;

        // console.log(userName);
        // console.log(message);
    }

    btn.addEventListener("click", takeInfo);

// create a new comment with the user name, the current date (french format: dd/mm/yyyy)

    function newComment(event) {
        let userName = document.getElementById("comment-username").value;
        let message = document.getElementById("comment-content").value;
        let ul = document.getElementById("comments-list")
        let date = new Date();

        let addLi = document.createElement("li");
        let addUser = document.createElement("h5");
        let addDate = document.createElement("h6");
        let addMessage = document.createElement("p");
        addUser.append(userName);
        addLi.append(addUser);
        addDate.append(date.toLocaleDateString('fr-FR'));
        addLi.append(addDate);
        addMessage.append(message);
        addLi.append(addMessage);
        // console.log(addLi);
        ul.append(addLi);
        
    }

    btn.addEventListener("click", newComment);

// new comments must have the same HTML structure as existing comments.