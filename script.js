const users = [
  {
    name: "Amisha Rathod",
    pic: "https://i.pinimg.com/736x/c4/ee/1e/c4ee1e8a63ad02db5faf5827d4fcc083.jpg",
    bio: "Silent chaos in a loud world. Not for everyone.",
  },
  {
    name: "Riya Sharma",
    pic: "https://i.pinimg.com/736x/86/0c/a0/860ca02918c2d2db5d20bb80ecc1dac7.jpg",
    bio: "Coffee first, everything else later.",
  },
  {
    name: "Aarav Mehta",
    pic: "https://i.pinimg.com/736x/f9/19/1d/f9191dbcbd98f5c9a727280bab986a00.jpg",
    bio: "Dream big, work hard, stay humble.",
  },
  {
    name: "Kavya Patel",
    pic: "https://i.pinimg.com/736x/30/19/ec/3019ec35280b22a68f3417666bc1c4d0.jpg",
    bio: "Creating my own sunshine.",
  },
  {
    name: "Ishaan Verma",
    pic: "https://i.pinimg.com/736x/7f/71/29/7f71290fb03eb4db905590a0494be9a8.jpg",
    bio: "Coding my way through life.",
  },
  {
    name: "Meera Desai",
    pic: "https://i.pinimg.com/736x/8a/da/32/8ada327b8fafad7ea92e6f69643681d5.jpg",
    bio: "Lost in books and late-night thoughts.",
  },
  {
    name: "Kabir Singh",
    pic: "https://i.pinimg.com/736x/1a/57/73/1a5773337112183e0f08b488529cb9a1.jpg",
    bio: "Minimal words, maximum impact.",
  },
];

const container = document.querySelector(".cards-container");
const input = document.querySelector(".inp");

function showUsers(arr) {
  container.innerHTML = "";

  arr.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blur = document.createElement("div");
    blur.classList.add("blurred-layer");
    blur.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const name = document.createElement("h3");
    name.textContent = user.name;

    const bio = document.createElement("p");
    bio.textContent = user.bio;

    content.appendChild(name);
    content.appendChild(bio);

    card.appendChild(img);
    card.appendChild(blur);
    card.appendChild(content);

    container.appendChild(card);
  });
}

showUsers(users);

input.addEventListener("input", () => {
  const search = input.value.toLowerCase();

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(search),
  );

  showUsers(filtered);
});
