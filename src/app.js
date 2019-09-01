// Init Github
const github =  new Github();

// Init UI
const ui =  new UI();

// Search input
const searchUser = document.querySelector("#searchUser");

// Search input Event listener
searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;

  if(userText.trim() !== "") {
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === "Not Found") {
          // show error alert
          ui.showAlert("User Not Found", "alert alert-danger");
        } else {
          ui.showProfile(data.profile);
        }
      });
      github.getRepos(userText)
        .then(data => {
          ui.showRepos(data.repos);
        });
  } else {
    // clear profile
    ui.clearProfile();
  }
});