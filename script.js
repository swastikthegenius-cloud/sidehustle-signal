const ideas = [
  {
    title: "Notion setup for job hunters",
    skill: "automation",
    budget: "0-50",
    time: "5-8",
    score: 92,
    summary: "Build tracker templates, resume workflows, and weekly follow-up dashboards for people applying to roles.",
    tags: ["Notion", "career", "templates"],
    path: "$29 template + $149 custom setup"
  },
  {
    title: "Local restaurant short-form clips",
    skill: "local",
    budget: "50-250",
    time: "9+",
    score: 90,
    summary: "Shoot simple phone videos for menu items and turn them into reels, shorts, and posts.",
    tags: ["local", "video", "recurring"],
    path: "$350/mo content package"
  },
  {
    title: "AI prompt packs for teachers",
    skill: "writing",
    budget: "0-50",
    time: "2-4",
    score: 86,
    summary: "Create classroom-ready prompts for lesson planning, rubrics, parent emails, and differentiation.",
    tags: ["education", "AI", "digital product"],
    path: "$19 pack + newsletter upsell"
  },
  {
    title: "Etsy listing refresh service",
    skill: "research",
    budget: "0-50",
    time: "5-8",
    score: 84,
    summary: "Rewrite titles, tags, descriptions, and photo order for underperforming handmade stores.",
    tags: ["Etsy", "SEO", "service"],
    path: "$99 audit + $249 refresh"
  },
  {
    title: "Micro newsletter for remote workers",
    skill: "writing",
    budget: "0-50",
    time: "5-8",
    score: 81,
    summary: "Curate remote job boards, productivity tools, and city guides for a narrow professional audience.",
    tags: ["newsletter", "affiliate", "sponsorship"],
    path: "affiliate links + sponsor slots"
  },
  {
    title: "Canva brand kits for coaches",
    skill: "design",
    budget: "50-250",
    time: "5-8",
    score: 80,
    summary: "Sell plug-and-play social templates, profile banners, lead magnets, and post styles.",
    tags: ["Canva", "coaches", "templates"],
    path: "$59 kit + $299 custom bundle"
  },
  {
    title: "Spreadsheet cleanup for creators",
    skill: "automation",
    budget: "0-50",
    time: "2-4",
    score: 77,
    summary: "Fix messy sponsor trackers, content calendars, and payout sheets for solo creators.",
    tags: ["Sheets", "creators", "ops"],
    path: "$75 cleanup + $20/mo maintenance"
  },
  {
    title: "Study guide packs for exams",
    skill: "research",
    budget: "0-50",
    time: "9+",
    score: 75,
    summary: "Turn public syllabus topics into concise flashcards, quizzes, and printable cram sheets.",
    tags: ["students", "printables", "quiz"],
    path: "$9 packs + bundle discounts"
  },
  {
    title: "Landing page teardown videos",
    skill: "design",
    budget: "0-50",
    time: "5-8",
    score: 74,
    summary: "Record quick UX reviews for startups and sell deeper conversion audits to founders.",
    tags: ["UX", "SaaS", "audit"],
    path: "$49 video + $399 audit"
  }
];

const grid = document.querySelector("#ideaGrid");
const budget = document.querySelector("#budget");
const time = document.querySelector("#time");
const skill = document.querySelector("#skill");
const search = document.querySelector("#search");
const shuffle = document.querySelector("#shuffle");
const ideaCount = document.querySelector("#ideaCount");
const price = document.querySelector("#price");
const sales = document.querySelector("#sales");
const costs = document.querySelector("#costs");
const income = document.querySelector("#income");

function matchesFilter(idea) {
  const term = search.value.trim().toLowerCase();
  const haystack = `${idea.title} ${idea.summary} ${idea.tags.join(" ")}`.toLowerCase();
  return (
    (budget.value === "all" || idea.budget === budget.value) &&
    (time.value === "all" || idea.time === time.value) &&
    (skill.value === "all" || idea.skill === skill.value) &&
    (!term || haystack.includes(term))
  );
}

function renderIdeas() {
  const filtered = ideas.filter(matchesFilter).sort((a, b) => b.score - a.score);
  ideaCount.textContent = filtered.length;
  grid.innerHTML = filtered
    .map(
      (idea, index) => `
        <article class="idea-card ${index === 0 ? "featured" : ""}">
          <div class="score">Signal ${idea.score}</div>
          <div>
            <h3>${idea.title}</h3>
            <p>${idea.summary}</p>
          </div>
          <div class="idea-meta">
            <span>${idea.budget}</span>
            <span>${idea.time} hrs/week</span>
            <span>${idea.skill}</span>
          </div>
          <div class="tags">${idea.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <p><strong>Money path:</strong> ${idea.path}</p>
        </article>
      `
    )
    .join("");

  if (!filtered.length) {
    grid.innerHTML = '<p class="empty">No matches yet. Try widening the filters.</p>';
  }
}

function updateIncome() {
  const monthlyRevenue = Number(price.value || 0) * Number(sales.value || 0) * 4;
  const monthlyProfit = Math.max(0, monthlyRevenue - Number(costs.value || 0));
  income.textContent = monthlyProfit.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }) + "/mo";
}

[budget, time, skill, search].forEach((control) => control.addEventListener("input", renderIdeas));
[price, sales, costs].forEach((control) => control.addEventListener("input", updateIncome));

shuffle.addEventListener("click", () => {
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  budget.value = randomIdea.budget;
  time.value = randomIdea.time;
  skill.value = randomIdea.skill;
  search.value = "";
  renderIdeas();
  document.querySelector("#ideas").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderIdeas();
updateIncome();
