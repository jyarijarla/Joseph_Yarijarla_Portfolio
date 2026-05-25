export const workItems = [
    {
        id: "acfi-project",
        role: "Web Administrator",
        org: "Austin Christian Fellowship of India",
        period: "Jul 2024 – Present",
        title: "CFC Conference Platform",
        summary: "A full-stack conference site for ACFI's annual event — covering everything from the public schedule to a multi-attendee registration flow backed by a live Google Sheets pipeline.",
        highlights: [
            "Built and deployed a React + TypeScript site (Vite, React Router) with responsive pages for schedule, hotels, FAQ, and registration.",
            "Engineered a multi-attendee registration flow with client-side validation, tiered pricing logic including a family cap, and automated PDF confirmation generation.",
            "Integrated submissions into Google Sheets via an Apps Script webhook pipeline — with timeout handling and graceful fallback behavior for reliable data capture.",
        ],
        tags: ["React", "TypeScript", "Vite", "React Router", "Google Sheets API", "Apps Script"],
        image: "/CFCWebsite.png",
        github: "https://github.com/digitalweb-acfi/cfcWebsite2026",
        demo: "https://cfcaustin.org",
    },
]
