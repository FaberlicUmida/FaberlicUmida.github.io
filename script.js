function buyurtma() {
  const username = "AllambergenovaUmida"; // bu yerga HAQIQIY username
  window.open(`https://t.me/${username}`, "_blank");
}

function qidiruv() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
