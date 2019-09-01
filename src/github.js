class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }
  getUser(user) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(data => resolve({
          profile : data
        }))
        .catch(error => error);
    })
  }

  getRepos(user) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`)
        .then(response => response.json())
        .then(data => resolve({
          repos : data
        }))
        .catch(error => error);
    })
  }
}