class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  // Display profile on UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-3" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-dark btn-block mb-2">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repositories: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-danger">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item"><strong>Name:</strong> ${(user.name === null)?"-":user.name}</li>
              <li class="list-group-item"><strong>Company:</strong> ${(user.company === null)?"-":user.company}</li>
              <li class="list-group-item"><strong>Website/Blog:</strong> ${user.blog}</li>
              <li class="list-group-item"><strong>Location:</strong> ${(user.location === null)?"-":user.location}</li>
              <li class="list-group-item"><strong>Member Since:</strong> ${new Date(user.created_at).toDateString()}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mt-2 mb-3">Latest Repositories</h3>
      <div id="repos"></div>
    `;
  }
  //Show Repositories
  showRepos(repos) {
    let output = "";
    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.querySelector("#repos").innerHTML = output;
  }

  // Show alert message
  showAlert(message,className) {
    // Remove any existing alert
    this.clearAlert();
    // Create new alert
    const alert = `
      <div class="${className}">
        <span>${message}</span>
      </div>
    `;
    // Insert newly created alert
    document.querySelector(".searchContainer").insertAdjacentHTML("afterbegin", alert);

    // Timeout after 2 sec
    setTimeout(() => {
      this.clearAlert();
    },2000);
  }

  // Clear alert
  clearAlert() {
    const currentAlert = document.querySelector(".alert-danger");
    if(currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}