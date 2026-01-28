// --- Page Navigation ---
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const promptBox = document.getElementById("promptBox");

function showPage(pageToShow, pageToHide) {
    pageToHide.classList.remove("active");
    pageToShow.classList.add("active");

    // Trigger shimmer animation when page1 is visible
    if (pageToShow === page1) {
        promptBox.classList.remove("shimmer");
        // Restart animation
        void promptBox.offsetWidth; 
        promptBox.classList.add("shimmer");
    }
}

nextBtn.addEventListener("click", () => {
    showPage(page2, page1);
});

prevBtn.addEventListener("click", () => {
    showPage(page1, page2);
});

// --- Copy Prompt to Clipboard ---
const copyBtn = document.getElementById("copyPromptBtn");
const promptText = document.getElementById("promptText");

copyBtn.addEventListener("click", () => {
    const textToCopy = promptText.innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => copyBtn.textContent = "Copy Prompt", 1500);
        })
        .catch(err => {
            console.error("Copy failed:", err);
        });
});
