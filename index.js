import {
  bio,
  skills,
  education,
  projects,
  experience,
  footer,
} from "./data.js";

const $ = (s) => document.querySelector(s);
const esc = (s) =>
  String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
const tags = (arr) =>
  `<ul class="tags">${arr.map((t) => `<li>${esc(t.trim())}</li>`).join("")}</ul>`;
const clean = (s) => s.replace(/\s+/g, " ").trim();

// Hero + About
const bioText = clean(bio.join(" "));
$("#lead").textContent = bioText.split(". ").slice(0, 1).join(". ") + ".";
$("#bio").innerHTML = bio.map((p) => `<p>${esc(clean(p))}</p>`).join("");

// Projects: filter chips + cards
const groups = [
  ["All", null],
  ["Embedded", projects.embeddedProjects],
  ["Desktop / Software", projects.softwareProjects],
  ["Web", projects.webProjects],
];
const all = groups.slice(1).flatMap(([, list]) => list);
groups[0][1] = all;

const renderProjects = (list) => {
  $("#project-grid").innerHTML = list
    .map(
      (p) => `
    <article class="card">
      <img src="${esc(p.image)}" alt="${esc(p.projectName)} screenshot" loading="lazy" />
      <div class="card-b">
        <h3>${esc(p.projectName)}</h3>
        <p>${esc(clean(p.summary))}</p>
        ${tags(p.techStack.slice(0, 6))}
        <a class="more" href="${esc(p.preview)}" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>`,
    )
    .join("");
};

$("#filters").innerHTML = groups
  .map(
    ([name], i) =>
      `<button class="chip-btn" data-i="${i}" aria-pressed="${i === 0}">${name}</button>`,
  )
  .join("");
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  document
    .querySelectorAll("#filters button")
    .forEach((x) => x.setAttribute("aria-pressed", x === b));
  renderProjects(groups[b.dataset.i][1]);
});
renderProjects(all);

// Skills: grouped tags, duplicates removed across groups
const seen = new Set();
$("#skill-list").innerHTML = skills
  .map((s) => {
    const items = s.skillName
      .split(",")
      .map((x) => x.trim())
      .filter((x) => {
        const k = x.toLowerCase();
        return x && !seen.has(k) && seen.add(k);
      });
    return items.length
      ? `<div><h3>${esc(s.title.replace(/:$/, ""))}</h3>${tags(items)}</div>`
      : "";
  })
  .join("");

// Timelines
const timeline = (list, withDetails) =>
  list
    .map(
      (x) => `
  <li>
    <h3>${esc(x.title)}</h3>
    <div class="role">${esc(x.subtitle)}</div>
    <p class="when">${esc(x.duration)}</p>
    ${
      withDetails && x.details.length
        ? `<ul class="d">${x.details
            .map((d) => {
              const [head, ...rest] = clean(d).split(": ");
              return `<li>${rest.length ? `<b>${esc(head)}:</b> ${esc(rest.join(": "))}` : esc(head)}</li>`;
            })
            .join("")}</ul>`
        : ""
    }
    ${x.tags.length ? tags(x.tags) : ""}
  </li>`,
    )
    .join("");
$("#exp").innerHTML = timeline(experience, true);
$("#edu").innerHTML = timeline(education, false);

// Footer links
const links = footer
  .filter((g) => g.label !== "copyright-text")
  .flatMap((g) => g.data)
  .filter((d) => d.link)
  .map(
    (d) =>
      `<a href="${esc(d.link)}" target="_blank" rel="noopener">${esc(d.text)}</a>`,
  );
$("#footer").innerHTML =
  `<span>© ${new Date().getFullYear()} Osman Mazinov</span>${links.join("")}`;

// Theme toggle (dark by default, choice is remembered)
const themeBtn = $("#theme");
const applyTheme = (t) => {
  document.documentElement.dataset.theme = t;
  const toLight = t === "dark";
  themeBtn.innerHTML = `<span aria-hidden="true">${toLight ? "☀" : "☾"}</span><span class="lbl">${toLight ? "Light" : "Dark"}</span>`;
  themeBtn.setAttribute(
    "aria-label",
    toLight ? "Switch to light theme" : "Switch to dark theme",
  );
  try {
    localStorage.setItem("theme", t);
  } catch (e) {}
};
applyTheme(
  document.documentElement.dataset.theme === "light" ? "light" : "dark",
);
themeBtn.addEventListener("click", () =>
  applyTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
  ),
);

// Show "Download CV" only if the file exists
fetch("cv/Osman_Mazinov_CV.pdf", { method: "HEAD" })
  .then((r) => {
    if (r.ok) $("#cv").hidden = false;
  })
  .catch(() => {});

// Scroll-spy
const navLinks = [...document.querySelectorAll("#menu a")];
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        navLinks.forEach((a) =>
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + en.target.id,
          ),
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);
document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
