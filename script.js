// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Styled console log message for branding
    console.log(
        "%c🎮 Welcome to Gamers' Lounge! Your go-to gaming platform. 🚀",
        "color: #00ff99; font-size: 16px; font-weight: bold; background: #222; padding: 5px 10px; border-radius: 5px;"
    );

    // Performance tracking
    console.time("Page Load Time");

    // Example interactive feature - Notify when user clicks anywhere
    document.body.addEventListener("click", () => {
        console.log("🕹️ You clicked on the page! Keep gaming!");
    });

    // Example async function to fetch gaming news (mockup)
    async function fetchGamingNews() {
        try {
            const response = await fetch("https://api.example.com/gaming-news");
            const data = await response.json();
            console.log("📰 Latest Gaming News:", data);
        } catch (error) {
            console.error("❌ Error fetching gaming news:", error);
        }
    }

    // Fetch gaming news after 2 seconds
    setTimeout(fetchGamingNews, 2000);

    // Track performance
    window.onload = () => {
        console.timeEnd("Page Load Time");
    };
});
