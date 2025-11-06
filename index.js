let currentPage = 0;
const main = document.getElementById("main");

function scrollToNext() {
    const scrollAmount = window.scrollX + window.innerWidth;
    window.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function scrollToPrev() {
    const scrollAmount = window.scrollX - window.innerWidth;
    window.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

const experiences = {
  gcg: `
    <div class="expContainer">
      <h1>Junior Software Engineer</h1>
      <div class="keyRespCard">
        <h1>Key Responsibilities</h1>
        <ul>
          <li>
            Led the development of the <b>Human Resource Information System</b> improving the hiring process, HR workflow efficiency, and reduce dependency on manual spreadsheet and email-based tracking
          </li>
          <li>
            Developed web applications using <b>Alpine JS</b> and <b>Typescript</b> for front-end. <b>PHP</b> with <b>Eloquent ORM</b> for back-end, and <b>Mysql</b> for the Database
          </li>
          <li>
            Ensure clean and maintainable through the integration of PHP Stan for static analysis, and improved documentation practices
          </li>
          <li>
            Collaborated on the development rebuilding of the  <b>agency's website</b> and <b>content management system</b>, contributing to both front-end and back-end features to meet project deliverables and deadlines
          </li>
        </ul>
      </div>
      <label>Skills</label>
      <ul class="skillBadge">
        <li>Alpine JS</li>
        <li>PHP</li>
        <li>Eloquent</li>
        <li>MySQL</li>
      </ul>
    </div>
  `,
  da: `
    <div class="expContainer">
      <h1>Computer Programmer I</h1>
      <div class="keyRespCard">
        <h1>Key Responsibilities</h1>
        <ul>
          <li>
            Collaborated in the development of a full-stack web application using <b>Node</b>, <b>React</b> JS, Bootstrap, and <b>MySQL</b> to improve data accuracy and usability
          </li>
          <li>
            Directed the development of a cross-matching system designed to detect and resolve duplicate or inconsistent records across multiple data sources
          </li>
          <li>
            Implemented intelligent matching logic and automated data validation routines to ensure data cleanliness, consistency, and integrity
          </li>
        </ul>
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
    </div>
  `,
  freelancing: `
    <div class="expContainer">
      <h1>Full-stack Developer</h1>
      <div class="keyRespCard">
        <h1>Key Responsibilities</h1>
        <ul>
          <li>
            Developed and maintained full stack web applications using the MERN stack: <b>MongoDB</b>, <b>Express JS</b>, <b>React JS</b> and <b>Node JS</b>. Utilized <b>Tailwind</b> for user-friendly designs with <b>DaisyUI</b> framework.
          </li>
          <li>
            Automated processes for Project Tracking for an Engineering firm, Scheduler for a school, BudgetTracker in Mobile
          </li>
        </ul>
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
    </div>
  `,
  intern: `
    <div class="expContainer">
      <h1>Full-stack Web Developer Intern</h1>
      <div class="keyRespCard">
        <h1>Key Responsibilities</h1>
        <ul>
          <li>
            Developed and integrated a robust <b>authentication system</b> using a <b>microservice architecture</b>, ensuring secure and seamless communication across internal APIs
          </li>
          <li>
            Designed <b>token-based authentication</b> workflows to support scalable, modular service interactions
          </li>
          <li>
            Conducted regular code reviews to maintain high standards of code quality, performance, and adherence to best practices
          </li>
        </ul>
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
