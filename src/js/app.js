const profile = [
  {
    border: "facebook",
    sosmed: "/images/icon-facebook.svg",
    user: "@nathanf",
    followers: "1987",
    nameFollowers: "FOLLOWERS",
    statsImg: "/images/icon-up.svg",
    statsColor: "green",
    stats: "12",
  },
  {
    border: "twitter",
    sosmed: "/images/icon-twitter.svg",
    user: "@nathanf",
    followers: "1044",
    nameFollowers: "FOLLOWERS",
    statsImg: "/images/icon-up.svg",
    stats: "99",
    statsColor: "green",
  },
  {
    border: "instagram",
    sosmed: "/images/icon-instagram.svg",
    user: "@realnathanf",
    followers: "11k",
    nameFollowers: "FOLLOWERS",
    statsImg: "/images/icon-up.svg",
    stats: "1099",
    statsColor: "green",
  },
  {
    border: "youtube",
    sosmed: "/images/icon-youtube.svg",
    user: "Nathan F.",
    followers: "1987",
    nameFollowers: "SUBSCRIBERS",
    statsImg: "/images/icon-down.svg",
    stats: "144",
    statsColor: "red",
  },
];

const overview = [
  {
    sosmed: "/images/icon-facebook.svg",
    name: "Page Views",
    number: "87",
    stats: "3",
    statsImg: "/images/icon-up.svg",
    statsColor: "green",
  },
  {
    sosmed: "/images/icon-facebook.svg",
    name: "Likes",
    number: "52",
    stats: "2",
    statsImg: "/images/icon-down.svg",
    statsColor: "red",
  },
  {
    sosmed: "/images/icon-instagram.svg",
    name: "Likes",
    number: "5462",
    stats: "2257",
    statsImg: "/images/icon-up.svg",
    statsColor: "green",
  },
  {
    sosmed: "/images/icon-instagram.svg",
    name: "Profile Views",
    number: "52k",
    stats: "1375",
    statsImg: "/images/icon-up.svg",
    statsColor: "green",
  },
  {
    sosmed: "/images/icon-twitter.svg",
    name: "Retweets",
    number: "117",
    stats: "303",
    statsImg: "/images/icon-up.svg",
    statsColor: "green",
  },
  {
    sosmed: "/images/icon-twitter.svg",
    name: "Likes",
    number: "507",
    stats: "553",
    statsImg: "/images/icon-up.svg",
    statsColor: "green",
  },
  {
    sosmed: "/images/icon-youtube.svg",
    name: "Likes",
    number: "107",
    stats: "19",
    statsImg: "/images/icon-down.svg",
    statsColor: "red",
  },
  {
    sosmed: "/images/icon-youtube.svg",
    name: "Towal Views",
    number: "1407",
    stats: "12",
    statsImg: "/images/icon-down.svg",
    statsColor: "red",
  },
];

let button = document.querySelector(".circle");
let body = document.querySelector("body");

const modeClick = () => {
  button.classList.toggle("is__dark");
  body.classList.toggle("dark");
};

let mainCard = document.querySelector(".main__card");
let html = ``;

profile.map((item) => {
  html += `
    <div class="card ${item.border}">
        <div class="profile">
            <img src=${item.sosmed} />
            <p class="user">${item.user}</p>
        </div>
        <div class="followers">
            <h2>${item.followers}</h2>
            <p>${item.nameFollowers}</p>
        </div>
        <div class="stats">
            <img src="${item.statsImg}" />
            <span class=${item.statsColor}>${item.stats} Today</span>
        </div>
    </div>
    `;
});

mainCard.innerHTML += html;

let mainOverview = document.querySelector(".main__overview");
html = ``;

overview.map((item) => {
  html += `
    <div class="overview">
        <div class="overview__header">
            <p>${item.name}</p>
            <img src=${item.sosmed} />
        </div>
        <div class="overview__body">
            <h4>${item.number}</h4>
            <div class="stats">
                <img src=${item.statsImg} />
                <span class="${item.statsColor}">${item.stats}</span>
            </div>
        </div>
    </div>
    `;
});

mainOverview.innerHTML += html;
