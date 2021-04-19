const timeline = new TimelineLite();

timeline
    .to('.title', 0.75, {
        y: 0,
        opacity: 1,
    })
    .to('.sub-title', 0.45, {
        y: 0,
        opacity: 1,
    })
    .to('.icon', 0.45, {
        scale: 1,
        stagger: 0.2,
    })
    .to('.upload-module', 0.5, {
        y: 0,
        opacity: 1,
    });
