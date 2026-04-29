const ideas = [
  {
    id: "notion-job-hunters",
    title: "Notion setup for job hunters",
    skill: "automation",
    model: "service",
    difficulty: "medium",
    budget: "0-50",
    time: "5-8",
    score: 92,
    profit: 3,
    speed: 2,
    summary: "Build tracker templates, resume workflows, and weekly follow-up dashboards for people applying to roles.",
    tags: ["Notion", "career", "templates"],
    path: "$29 template + $149 custom setup",
    firstStep: "Post a before-and-after job tracker demo on LinkedIn and Reddit."
  },
  {
    id: "restaurant-clips",
    title: "Local restaurant short-form clips",
    skill: "local",
    model: "local",
    difficulty: "medium",
    budget: "50-250",
    time: "9+",
    score: 90,
    profit: 4,
    speed: 2,
    summary: "Shoot simple phone videos for menu items and turn them into reels, shorts, and posts.",
    tags: ["local", "video", "recurring"],
    path: "$350/mo content package",
    firstStep: "Make one free sample reel from a public menu photo and pitch the owner."
  },
  {
    id: "teacher-prompts",
    title: "AI prompt packs for teachers",
    skill: "writing",
    model: "digital",
    difficulty: "easy",
    budget: "0-50",
    time: "2-4",
    score: 86,
    profit: 2,
    speed: 4,
    summary: "Create classroom-ready prompts for lesson planning, rubrics, parent emails, and differentiation.",
    tags: ["education", "AI", "digital product"],
    path: "$19 pack + newsletter upsell",
    firstStep: "Create 20 prompts for one grade level and share a free sample PDF."
  },
  {
    id: "etsy-refresh",
    title: "Etsy listing refresh service",
    skill: "research",
    model: "service",
    difficulty: "easy",
    budget: "0-50",
    time: "5-8",
    score: 84,
    profit: 3,
    speed: 3,
    summary: "Rewrite titles, tags, descriptions, and photo order for underperforming handmade stores.",
    tags: ["Etsy", "SEO", "service"],
    path: "$99 audit + $249 refresh",
    firstStep: "Find 10 stores with weak listings and send a 3-point audit."
  },
  {
    id: "remote-newsletter",
    title: "Micro newsletter for remote workers",
    skill: "writing",
    model: "content",
    difficulty: "medium",
    budget: "0-50",
    time: "5-8",
    score: 81,
    profit: 3,
    speed: 1,
    summary: "Curate remote job boards, productivity tools, and city guides for a narrow professional audience.",
    tags: ["newsletter", "affiliate", "sponsorship"],
    path: "affiliate links + sponsor slots",
    firstStep: "Publish a 25-link issue for one profession and invite feedback."
  },
  {
    id: "canva-coaches",
    title: "Canva brand kits for coaches",
    skill: "design",
    model: "digital",
    difficulty: "medium",
    budget: "50-250",
    time: "5-8",
    score: 80,
    profit: 3,
    speed: 3,
    summary: "Sell plug-and-play social templates, profile banners, lead magnets, and post styles.",
    tags: ["Canva", "coaches", "templates"],
    path: "$59 kit + $299 custom bundle",
    firstStep: "Build one sample kit for a fitness, finance, or life coach niche."
  },
  {
    id: "creator-spreadsheets",
    title: "Spreadsheet cleanup for creators",
    skill: "automation",
    model: "service",
    difficulty: "easy",
    budget: "0-50",
    time: "2-4",
    score: 77,
    profit: 2,
    speed: 4,
    summary: "Fix messy sponsor trackers, content calendars, and payout sheets for solo creators.",
    tags: ["Sheets", "creators", "ops"],
    path: "$75 cleanup + $20/mo maintenance",
    firstStep: "Record a 45-second cleanup demo using a fake creator sponsor sheet."
  },
  {
    id: "exam-study-guides",
    title: "Study guide packs for exams",
    skill: "research",
    model: "digital",
    difficulty: "medium",
    budget: "0-50",
    time: "9+",
    score: 75,
    profit: 2,
    speed: 2,
    summary: "Turn public syllabus topics into concise flashcards, quizzes, and printable cram sheets.",
    tags: ["students", "printables", "quiz"],
    path: "$9 packs + bundle discounts",
    firstStep: "Choose one exam and publish a free 25-question mini quiz."
  },
  {
    id: "landing-teardowns",
    title: "Landing page teardown videos",
    skill: "design",
    model: "service",
    difficulty: "advanced",
    budget: "0-50",
    time: "5-8",
    score: 74,
    profit: 4,
    speed: 2,
    summary: "Record quick UX reviews for startups and sell deeper conversion audits to founders.",
    tags: ["UX", "SaaS", "audit"],
    path: "$49 video + $399 audit",
    firstStep: "Record three public teardowns of landing pages with obvious fixes."
  },
  {
    id: "resume-roast",
    title: "Resume roast voice notes",
    skill: "writing",
    model: "service",
    difficulty: "easy",
    budget: "0-50",
    time: "2-4",
    score: 88,
    profit: 2,
    speed: 5,
    summary: "Send quick Loom or voice-note feedback on resumes, LinkedIn profiles, and cover letters.",
    tags: ["career", "Loom", "feedback"],
    path: "$25 quick roast + $99 rewrite",
    firstStep: "Offer 10 free mini-roasts in one job-search community."
  },
  {
    id: "ai-automation-audits",
    title: "AI automation audits for solopreneurs",
    skill: "automation",
    model: "service",
    difficulty: "advanced",
    budget: "50-250",
    time: "9+",
    score: 89,
    profit: 5,
    speed: 2,
    summary: "Map repetitive admin work and recommend simple automations using forms, email rules, and no-code tools.",
    tags: ["AI", "Zapier", "ops"],
    path: "$299 audit + implementation upsell",
    firstStep: "Create a one-page checklist for finding 5 hours of weekly admin waste."
  },
  {
    id: "pet-portrait-printables",
    title: "Custom pet portrait printables",
    skill: "design",
    model: "marketplace",
    difficulty: "medium",
    budget: "50-250",
    time: "5-8",
    score: 72,
    profit: 2,
    speed: 3,
    summary: "Sell stylized digital portraits through Etsy, Instagram, or local gift groups.",
    tags: ["Etsy", "gifts", "custom"],
    path: "$18 digital file + print upsell",
    firstStep: "Make five sample styles and list a limited opening offer."
  },
  {
    id: "tutoring-micro-lessons",
    title: "Micro tutoring lessons",
    skill: "teaching",
    model: "service",
    difficulty: "easy",
    budget: "0-50",
    time: "5-8",
    score: 85,
    profit: 3,
    speed: 4,
    summary: "Teach 20-minute focused sessions for one topic students repeatedly search before exams.",
    tags: ["students", "tutoring", "Zoom"],
    path: "$15 session + $60 pack",
    firstStep: "Post one free problem walkthrough and invite students to book a mini session."
  },
  {
    id: "digital-planner-bundles",
    title: "Digital planner bundles",
    skill: "design",
    model: "digital",
    difficulty: "easy",
    budget: "0-50",
    time: "5-8",
    score: 76,
    profit: 2,
    speed: 3,
    summary: "Create planners for a specific life moment like finals week, content batching, or wedding prep.",
    tags: ["GoodNotes", "templates", "planning"],
    path: "$12 planner + seasonal bundles",
    firstStep: "Design a one-page freebie and collect emails from a niche audience."
  },
  {
    id: "local-google-profile",
    title: "Google Business Profile tune-ups",
    skill: "local",
    model: "local",
    difficulty: "easy",
    budget: "0-50",
    time: "2-4",
    score: 87,
    profit: 3,
    speed: 4,
    summary: "Help local services improve photos, descriptions, posts, categories, and review replies.",
    tags: ["local SEO", "small business", "reviews"],
    path: "$149 tune-up + monthly posts",
    firstStep: "Audit five nearby businesses and send each a screenshot with one fix."
  },
  {
    id: "ugc-product-demos",
    title: "UGC product demo videos",
    skill: "local",
    model: "content",
    difficulty: "medium",
    budget: "50-250",
    time: "5-8",
    score: 83,
    profit: 3,
    speed: 3,
    summary: "Film authentic product videos for small ecommerce brands that need ad creatives.",
    tags: ["UGC", "ecommerce", "ads"],
    path: "$75 video + 3-pack bundles",
    firstStep: "Create three sample demos with products you already own."
  },
  {
    id: "micro-saas-research",
    title: "Micro-SaaS research briefs",
    skill: "research",
    model: "digital",
    difficulty: "advanced",
    budget: "0-50",
    time: "9+",
    score: 79,
    profit: 4,
    speed: 1,
    summary: "Sell compact reports on underserved software niches, competitor gaps, keywords, and pricing.",
    tags: ["SaaS", "research", "founders"],
    path: "$39 brief + custom research",
    firstStep: "Publish one public teardown of a boring software category."
  },
  {
    id: "airbnb-guidebooks",
    title: "Airbnb digital guidebooks",
    skill: "writing",
    model: "service",
    difficulty: "medium",
    budget: "0-50",
    time: "5-8",
    score: 78,
    profit: 3,
    speed: 3,
    summary: "Create polished guest guidebooks with local recommendations, house rules, and check-in details.",
    tags: ["Airbnb", "travel", "local"],
    path: "$120 guidebook + update fee",
    firstStep: "Mock up a guidebook for one popular stay in your city."
  },
  {
    id: "print-on-demand-niche",
    title: "Niche print-on-demand drops",
    skill: "commerce",
    model: "marketplace",
    difficulty: "medium",
    budget: "50-250",
    time: "9+",
    score: 73,
    profit: 2,
    speed: 2,
    summary: "Launch tiny apparel or sticker collections around communities with strong identity and inside jokes.",
    tags: ["POD", "Etsy", "community"],
    path: "$7-$18 margin per sale",
    firstStep: "Validate 10 designs with a poll before listing anything."
  },
  {
    id: "newsletter-sponsor-list",
    title: "Newsletter sponsor lead lists",
    skill: "research",
    model: "digital",
    difficulty: "easy",
    budget: "0-50",
    time: "2-4",
    score: 82,
    profit: 2,
    speed: 4,
    summary: "Build curated sponsor prospect lists for small newsletter operators in narrow niches.",
    tags: ["newsletter", "B2B", "leads"],
    path: "$29 list + monthly refresh",
    firstStep: "Create a free list of 25 sponsor leads for one niche."
  },
  {
    id: "course-repurposing",
    title: "Course content repurposing",
    skill: "writing",
    model: "service",
    difficulty: "medium",
    budget: "0-50",
    time: "9+",
    score: 84,
    profit: 4,
    speed: 2,
    summary: "Turn course videos into worksheets, emails, social posts, lesson notes, and sales page snippets.",
    tags: ["creators", "courses", "repurpose"],
    path: "$500 project + retainer",
    firstStep: "Repurpose one public webinar into a sample content pack."
  },
  {
    id: "kids-party-kits",
    title: "Kids party printable kits",
    skill: "design",
    model: "marketplace",
    difficulty: "easy",
    budget: "0-50",
    time: "5-8",
    score: 71,
    profit: 2,
    speed: 3,
    summary: "Sell themed invitations, games, signs, and favor labels for parents planning quick parties.",
    tags: ["printables", "parents", "party"],
    path: "$14 kit + custom name upsell",
    firstStep: "Build one complete theme and publish mockups for Pinterest."
  },
  {
    id: "local-event-pages",
    title: "Local event landing pages",
    skill: "local",
    model: "local",
    difficulty: "medium",
    budget: "0-50",
    time: "5-8",
    score: 80,
    profit: 3,
    speed: 3,
    summary: "Create simple event pages for workshops, pop-ups, school fairs, and small community events.",
    tags: ["local", "events", "websites"],
    path: "$199 page + update fee",
    firstStep: "Build a demo page for an imaginary neighborhood pop-up."
  },
  {
    id: "virtual-assistant-starter",
    title: "Virtual assistant starter packages",
    skill: "automation",
    model: "service",
    difficulty: "easy",
    budget: "0-50",
    time: "9+",
    score: 82,
    profit: 3,
    speed: 3,
    summary: "Offer inbox cleanup, calendar setup, simple SOPs, and client intake organization.",
    tags: ["VA", "ops", "admin"],
    path: "$250 starter package",
    firstStep: "Create a checklist of 12 admin fixes and pitch busy solo business owners."
  },
  {
    id: "language-practice-club",
    title: "Language practice clubs",
    skill: "teaching",
    model: "content",
    difficulty: "medium",
    budget: "0-50",
    time: "5-8",
    score: 74,
    profit: 2,
    speed: 3,
    summary: "Host small group speaking practice sessions around travel, interviews, or daily conversation.",
    tags: ["language", "community", "teaching"],
    path: "$10/session + membership",
    firstStep: "Host one free 30-minute group and collect testimonials."
  }
];

const grid = document.querySelector("#ideaGrid");
const budget = document.querySelector("#budget");
const time = document.querySelector("#time");
const skill = document.querySelector("#skill");
const model = document.querySelector("#model");
const difficulty = document.querySelector("#difficulty");
const sort = document.querySelector("#sort");
const search = document.querySelector("#search");
const shuffle = document.querySelector("#shuffle");
const resetFilters = document.querySelector("#resetFilters");
const ideaCount = document.querySelector("#ideaCount");
const savedCount = document.querySelector("#savedCount");
const shortlistPanel = document.querySelector("#shortlistPanel");
const price = document.querySelector("#price");
const sales = document.querySelector("#sales");
const costs = document.querySelector("#costs");
const income = document.querySelector("#income");
const savedIdeas = new Set(JSON.parse(localStorage.getItem("savedIdeas") || "[]"));

function saveShortlist() {
  localStorage.setItem("savedIdeas", JSON.stringify([...savedIdeas]));
}

function matchesFilter(idea) {
  const term = search.value.trim().toLowerCase();
  const haystack = `${idea.title} ${idea.summary} ${idea.tags.join(" ")} ${idea.path}`.toLowerCase();
  return (
    (budget.value === "all" || idea.budget === budget.value) &&
    (time.value === "all" || idea.time === time.value) &&
    (skill.value === "all" || idea.skill === skill.value) &&
    (model.value === "all" || idea.model === model.value) &&
    (difficulty.value === "all" || idea.difficulty === difficulty.value) &&
    (!term || haystack.includes(term))
  );
}

function ideaCost(idea) {
  if (idea.budget === "0-50") return 1;
  if (idea.budget === "50-250") return 2;
  return 3;
}

function sortedIdeas(list) {
  return [...list].sort((a, b) => {
    if (sort.value === "profit") return b.profit - a.profit || b.score - a.score;
    if (sort.value === "speed") return b.speed - a.speed || b.score - a.score;
    if (sort.value === "cost") return ideaCost(a) - ideaCost(b) || b.score - a.score;
    return b.score - a.score;
  });
}

function renderShortlist() {
  savedCount.textContent = savedIdeas.size;
  const saved = ideas.filter((idea) => savedIdeas.has(idea.id));
  if (!saved.length) {
    shortlistPanel.innerHTML = "<p>No saved ideas yet. Use the save button on any idea card.</p>";
    return;
  }

  shortlistPanel.innerHTML = saved
    .map(
      (idea) => `
        <article>
          <strong>${idea.title}</strong>
          <span>${idea.path}</span>
          <button type="button" data-save="${idea.id}">Remove</button>
        </article>
      `
    )
    .join("");
}

function renderIdeas() {
  const filtered = sortedIdeas(ideas.filter(matchesFilter));
  ideaCount.textContent = filtered.length;
  grid.innerHTML = filtered
    .map(
      (idea, index) => `
        <article class="idea-card ${index === 0 ? "featured" : ""}">
          <div class="card-top">
            <div class="score">Signal ${idea.score}</div>
            <button type="button" class="save-btn ${savedIdeas.has(idea.id) ? "saved" : ""}" data-save="${idea.id}">
              ${savedIdeas.has(idea.id) ? "Saved" : "Save"}
            </button>
          </div>
          <div>
            <h3>${idea.title}</h3>
            <p>${idea.summary}</p>
          </div>
          <div class="idea-meta">
            <span>${idea.budget}</span>
            <span>${idea.time} hrs/week</span>
            <span>${idea.skill}</span>
            <span>${idea.model}</span>
            <span>${idea.difficulty}</span>
          </div>
          <div class="tags">${idea.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <p><strong>Money path:</strong> ${idea.path}</p>
          <p><strong>First move:</strong> ${idea.firstStep}</p>
        </article>
      `
    )
    .join("");

  if (!filtered.length) {
    grid.innerHTML = '<p class="empty">No matches yet. Try widening the filters.</p>';
  }

  renderShortlist();
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

[budget, time, skill, model, difficulty, sort, search].forEach((control) => control.addEventListener("input", renderIdeas));
[price, sales, costs].forEach((control) => control.addEventListener("input", updateIncome));

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save]");
  if (!button) return;
  const id = button.dataset.save;
  if (savedIdeas.has(id)) {
    savedIdeas.delete(id);
  } else {
    savedIdeas.add(id);
  }
  saveShortlist();
  renderIdeas();
});

shuffle.addEventListener("click", () => {
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  budget.value = randomIdea.budget;
  time.value = randomIdea.time;
  skill.value = randomIdea.skill;
  model.value = randomIdea.model;
  difficulty.value = randomIdea.difficulty;
  search.value = "";
  renderIdeas();
  document.querySelector("#ideas").scrollIntoView({ behavior: "smooth", block: "start" });
});

resetFilters.addEventListener("click", () => {
  [budget, time, skill, model, difficulty, sort].forEach((control) => {
    control.value = control.id === "sort" ? "score" : "all";
  });
  search.value = "";
  renderIdeas();
});

renderIdeas();
updateIncome();
