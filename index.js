const animeImage1 = document.querySelector(".animeImage1");
const animeImage2 = document.querySelector(".animeImage2");
const animeImage3 = document.querySelector(".animeImage3");
const animeImage4 = document.querySelector(".animeImage4");

function addEventToObject(animeImageNumber) {
  animeImageNumber.addEventListener("click", () => {
    if (!animeImageNumber.classList.contains("anime")) {
      animeImageNumber.classList.remove("animeReset");
      animeImageNumber.classList.add("anime");
    } else {
      if (animeImageNumber.classList.contains("anime")) {
        animeImageNumber.classList.remove("anime");
        animeImageNumber.classList.add("animeReset");
      }
    }
  });
}

addEventToObject(animeImage1);
addEventToObject(animeImage2)
addEventToObject(animeImage3)
addEventToObject(animeImage4)



// animeImage1.addEventListener("click", () => {
//   if (!animeImage1.classList.contains("anime")) {
//     animeImage1.classList.remove("animeReset");
//     animeImage1.classList.add("anime");
//   } else {
//     if (animeImage1.classList.contains("anime")) {
//       animeImage1.classList.remove("anime");
//       animeImage1.classList.add("animeReset");
//     }
//   }
// });

// animeImage2.addEventListener("click", () => {
//   if (!animeImage2.classList.contains("anime")) {
//     animeImage2.classList.remove("animeReset");
//     animeImage2.classList.add("anime");
//   } else {
//     if (animeImage2.classList.contains("anime")) {
//       animeImage2.classList.remove("anime");
//       animeImage2.classList.add("animeReset");
//     }
//   }
// });

// animeImage3.addEventListener("click", () => {
//   if (!animeImage3.classList.contains("anime")) {
//     animeImage3.classList.remove("animeReset");
//     animeImage3.classList.add("anime");
//   } else {
//     if (animeImage3.classList.contains("anime")) {
//       animeImage3.classList.remove("anime");
//       animeImage3.classList.add("animeReset");
//     }
//   }
// });

// animeImage4.addEventListener("click", () => {
//   if (!animeImage4.classList.contains("anime")) {
//     animeImage4.classList.remove("animeReset");
//     animeImage4.classList.add("anime");
//   } else {
//     if (animeImage4.classList.contains("anime")) {
//       animeImage4.classList.remove("anime");
//       animeImage4.classList.add("animeReset");
//     }
//   }
// });
