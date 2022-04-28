import "./components/UserCard.js";

const URL = "https://randomuser.me/api";

const createCard = (data) => {
  const gen = data.gender;
  const nom = data.name.first + data.name.last;
  const country = data.location.country;
  const city = data.location.city;
  const email = data.email;
  const tel = data.phone;
  const photo = data.pciture.large;

  const userData = {
    gen, nom, country, city, email, tel, photo
  };
  const userCard = document.querySelector(".user-card");
  userCard.setData(userData);
};

fetch(URL)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Fallo");
    }
  })
  .then(data => createCard(data.results[0]));
