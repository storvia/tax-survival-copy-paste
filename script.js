const laws = document.querySelectorAll(".law");
const panelTitle = document.getElementById("panel-title");

const lawTitles = {
  1: "Law 1 — Never Outshine the Master",
  2: "Law 2 — Trust Carefully",
  3: "Law 3 — Conceal Intentions"
};

function updatePanel(lawNumber) {
  panelTitle.textContent = lawTitles[lawNumber] || "Insight Panel";
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lawNumber = entry.target.dataset.law;
        updatePanel(lawNumber);
      }
    });
  },
  {
    threshold: 0.6
  }
);

laws.forEach(law => observer.observe(law));
