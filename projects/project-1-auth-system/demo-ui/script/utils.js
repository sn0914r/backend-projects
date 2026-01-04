export const createCard = (title, desc) => {
  return `
    <div class="card m-3">
      <div class="card-body">
        <h4 class="card-title">${title}</h4>
        <p class="card-text small text-secondary">${desc}</p>
      </div>
    </div>`;
};

export const initUI = () => {
  const btns = document.querySelectorAll(".head-btn");
  const cards = document.querySelectorAll(".control-cards");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.id;

      cards.forEach((card) => {
        card.classList.toggle("active", card.dataset.target === target);
      });
    });
  });
};

export const initMessageForUnauthenticated = () => {
  let msg = `
    <h3 class="text-center m-5 small lead">
      Must be logged in to access content
    </h3>`;

  const postsContainer = document.querySelector("#posts");
  postsContainer.innerHTML = msg;
};
