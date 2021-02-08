const content = {
    stepsUpper: [
        {
            day: 0,
            name: "The Intake Interview",
            content: "Intake interview.",
            isDown: false,
            aosMobile: "fade-right",
            aosDesktop: "fade-down-right"
        },
        {
            day: 7,
            name: "First Impression",
            content: "Feedback on first-week training. Any doubts or questions?",
            isDown: false,
            aosMobile: "fade-right",
            aosDesktop: "fade-down"
        },
        {
            day: 30,
            name: "The Grand Finale",
            content:
                "Take final measurements, customer review, and plan feedback as a whole. Goal reached? + visual representation of your progress.",
            isDown: false,
            aosMobile: "fade-right",
            aosDesktop: "fade-down-left"
        }
    ],
    stepsDown: [
        {
            day: 1,
            name: "First Day Of Training",
            content: "First Day Of Training.",
            isDown: true,
            aosMobile: "fade-right",
            aosDesktop: "fade-up-right"
        },
        {
            day: 15,
            name: "Half-way Point",
            content: "Feedback, the general feeling, positives, and negatives.",
            isDown: true,
            aosMobile: "fade-right",
            aosDesktop: "fade-up-left"
        }
    ]
};

export default content;