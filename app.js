let posts = [];

function submitData() {
  let device = document.getElementById("device").value;
  let ram = document.getElementById("ram").value;
  let sensi = document.getElementById("sensi").value;

  let post = {
    device,
    ram,
    sensi
  };

  posts.push(post);
  displayPosts();
}

function displayPosts() {
  let feed = document.getElementById("feed");
  feed.innerHTML = "";

  posts.forEach(p => {
    feed.innerHTML += `
      <div class="card">
        <p><b>Device:</b> ${p.device}</p>
        <p><b>RAM:</b> ${p.ram}</p>
        <p>${p.sensi}</p>
      </div>
    `;
  });
}
