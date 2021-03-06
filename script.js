const projects = [
  "base-apparel-coming-soon-master",
  "four-card-feature-section-master",
  "intro-component-with-signup-form-master",
  "single-price-grid-component-master",
  "ping-coming-soon-page-master",
  "sign-in-up-form",
  "random-picker",
  "huddle-landing-page-master",
  "fylo-landing-page-master",
  "huddle-single-section-master",
  "insure-landing-page-master",
  "pricing-component-with-toggle-master",
  "clipboard-landing-page-master"
];

const list = document.getElementById("list");

projects.forEach((project) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = `/${project}/index.html`;
  link.innerText = `${formatProjectName(project)}`;

  const img = document.createElement("img");
  img.src = `/${project}/design/desktop-preview.jpg`;

  link.prepend(img);
  listItem.appendChild(link);
  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
