const skills = [
    
    {
        icon:"🌐",
        name:"Frontend Development",
        level:"Advanced",
        progress:95
    },
    {
        icon:"☕",
        name:"Java Progarmming",
        level:"Intermediate",
        progress:55
    },
    {
        icon:"C",
        name:"C Programming",
        level:"Upper-Intermediate",
        progress:85
    },
    {
        icon:"🎯",
        name:"DSA",
        level:"Beginner",
        progress:25
    },
    {
        icon:"🐍",
        name:"Python",
        level:"Intermediate",
        progress:70
    },
    {
        icon:"⚡",
        name:"Express.js / Node.js",
        level:"Beginner",
        progress:20
    },
    {
        icon:"📦",
        name:"Git & GitHub",
        level:"Upper-Intermediate",
        progress:85
    }

];

export function renderSkills(){
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.innerHTML = '';
    skills.forEach((skill) => {
        skillsContainer.innerHTML += `
            <div class="skill-card">
                <div class="skill-icon"> ${skill.icon} </div>
                <div class="skill-name"> ${skill.name} </div>
                <div class="skill-level"> ${skill.level} </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${skill.progress}%;"></div>
                </div>
            </div>
        `
    });
}