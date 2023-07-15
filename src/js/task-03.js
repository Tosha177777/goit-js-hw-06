const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.style.display = "flex";
galleryEl.style.gap = "16px";
// const makeGalleryFun = ({ url, alt }) => {
//   return `<li><img src="${url}" alt="${alt}"></li>`;
// };

const galleryArray = images.reduce(
  (acc, { url, alt }) => acc + `<li><img src="${url}" alt="${alt}"></li>`,
  ""
);

galleryEl.insertAdjacentHTML("beforeend", galleryArray);

const imgsEl = document.querySelectorAll("img");

imgsEl.forEach((img) => {
  img.style.width = "250px";
});

// map(makeGalleryFun).join("");
