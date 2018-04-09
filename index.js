function getData() {
  fetch("https://api.github.com/users/yanuaryudhistira/followers")
    .then(response => {
      return response.json();
    })
    .then(datas => {
      let list = document.getElementById("follower-list");
      let followerList = "";
      datas.map((data, index) => {
      followerList += `
      <img src="${data.avatar_url}" width="100px">
      <br> ${data.login}
      <br> ${data.url}
      <br>
      `;
      })
      list.innerHTML = followerList;
    });
};

getData();
