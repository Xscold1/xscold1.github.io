let currentPage = 0;
const main = document.getElementById("main");

document.getElementById("next").addEventListener("click", () => {
  if (currentPage < 1) currentPage++;
  main.style.transform = `translateX(-${currentPage * 100}vw)`;
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 0) currentPage--;
  main.style.transform = `translateX(-${currentPage * 100}vw)`;
});

main.scrollTo({
  left: window.innerWidth,
  behavior: "smooth",
});

const experiences = {
  gcg: `
    <h2>Junior Software Engineer</h2>
    <div class="keyRespCard">
      <p>Worked on policy analysis, governance reporting, and system modernization.</p>
    </div>
    <label>Skills</label>
    <ul class="skillBadge">
      <li>Alpine JS</li>
      <li>PHP</li>
      <li>Eloquent</li>
      <li>MySQL</li>
    </ul>
  `,
  da: `
    <h2>Department of Agriculture</h2>
    <div class="keyRespCard">
      <p>Worked on policy analysis, governance reporting, and system modernization.</p>
    </div>
    <div>
      <label>Skills</label>
      <ul class="skillBadge">
        <li>Alpine JS</li>
        <li>PHP</li>
        <li>Eloquent</li>
        <li>MySQL</li>
      </ul>
    </div>
  `,
  fl: `
    <h2>Freelancing</h2>
    <div class="keyRespCard">
      <p>Worked on policy analysis, governance reporting, and system modernization.</p>
    </div>
    <div>
      <label>Skills</label>
      <ul class="skillBadge">
        <li>Alpine JS</li>
        <li>PHP</li>
        <li>Eloquent</li>
        <li>MySQL</li>
      </ul>
    </div>
  `,
};

//Set default experience to present
const expContent = document.getElementById("expContent");
expContent.innerHTML = experiences["gcg"];

document.querySelectorAll(".expHeader p").forEach((el) => {
  el.addEventListener("click", () => {
    const expKey = el.dataset.exp;
    expContent.innerHTML = experiences[expKey];
  });
});
