const projects = [
  {
    name: "Elgaratours",
    url: "https://github.com/Boody2004/elgalatours-app",
  },
  {
    name: "Yrwo Web",
    url: "https://github.com/Boody2004/yrwo-website",
  },
  {
    name: "Mnen App",
    url: "https://github.com/Boody2004/mnen-app-new",
  },
  {
    name: "Week Days",
    url: "https://github.com/Boody2004/week-days",
  },
  {
    name: "Kasper Template",
    url: "https://github.com/Boody2004/kasper-template-two-responsive",
  },
  {
    name: "Leon Template",
    url: "https://github.com/Boody2004/leon-template-one-responsive",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name, url }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<p>${i + 1}. ${formatProjectName(name)}</p>
		<div class="links-container">
			<a href="${url}" target="_blank">
        <i class="fab fa-github-alt"></i>      
			</a>
		</div>
	`;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
