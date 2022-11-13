const charactersAPI = new APIHandler("http://localhost:8000");
const charInfo = document.querySelector(".character-info");
//const charName = document.querySelector(".name");
//const charOccup = document.querySelector(".occupation");
//const isCartoon = document.querySelector(".cartoon");
//const charWeapon = document.querySelector(".weapon");
const charContain = document.querySelector(".characters-container");
const operation = document.querySelector(".operation");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      const { data } = await axios.get("http://localhost:8000/characters");
      charContain.innerHTML = "";
      data.forEach((character) => {
        let addChar = charInfo.cloneNode(true);
        charContain.append(addChar);
        console.log(character.name);
        addChar.querySelector(".name").textContent = character.name;
        addChar.querySelector(".id").textContent = character.id;
        addChar.querySelector(".occupation").textContent = character.occupation;
        addChar.querySelector(".cartoon").textContent = character.cartoon;
        addChar.querySelector(".weapon").textContent = character.weapon;
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      try {
        let userInput = document.querySelector(
          "input[name=character-id]"
        ).value;

        const { data } = await axios.get(
          `http://localhost:8000/characters/${userInput}`
        );

        let templateNode = document
          .querySelector(".character-info")
          .cloneNode(true);
        let toDelete = document.querySelectorAll(".character-info");
        toDelete.forEach((e) => e.remove());

        let newNode = templateNode.cloneNode(true);
        newNode.querySelector(".id").innerText = data.id;
        newNode.querySelector(".name").innerText = data.name;
        newNode.querySelector(".occupation").innerText = data.occupation;
        newNode.querySelector(".cartoon").innerText = data.cartoon;
        newNode.querySelector(".weapon").innerText = data.weapon;
        document.querySelector(".characters-container").append(newNode);
      } catch (error) {
        console.error(error);
      }
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
