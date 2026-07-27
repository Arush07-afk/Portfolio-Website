export const achievements = [

    {
        title: "Social Internship Certificate",
        description: "Certificate for completing my social internship.",
        image: "./assets/Social Internship Certificate.jpg"
    },
    {
        title: "AWS Certified AI Practitioner",
        description: "Certificate for giving and passing the AI Practitioner exam, certified by AWS.",
        image: "./assets/AWS Certified AI Practitioner-img.jpg"
    },
    {
        title: "ArtPark PhotoDash",
        description: "Certification for participating in ArtPark PhotoDash organised by IISc Bangalore.",
        image: "./assets/ArtPark PhotoDash-img.jpg"
    },
    {
        title: "Innotech'25",
        description: "Certification for participating in Innotech'25.",
        image: "./assets/innotech.png"
    },
    {   
        title: "Node.js Bootcamp",
        description: "Certification for completing the Node.js Bootcamp organised by LetsUpgrade.",
        image: "./assets/Nodejs Bootcamp Certificate.jpg"
    },
    {
        title: "Introduction to DS Course",
        description: "Certification for completing an introducting course on DS organised by Infosys Springboard.",
        image: "./assets/Introduction to DS Certificate.jpg"
    },
    {
        title: "Introduction to AI Course",
        description: "Certification for completing an introducting course on AI organised by Infosys Springboard.",
        image: "./assets/Introduction to AI Certificate.jpg"
    },
    {
        title: "AWS Job Sim",
        description: "Certification for completing the AWS Job Simulation organised by Forage.",
        image: "./assets/Forage AWS Job Sim.jpg"
    },
    {
        title: "Deloitte Cyber Job Sim",
        description: "Certification for completing the Deloitte Cyber Job Simulation organised by Forage.",
        image: "./assets/Forage Deloitte (Cyber) Job Sim.jpg"
    },
    {
        title: "Deloitte Technology Job Sim",
        description: "Certification for completing the Deloitte Technology Job Simulation organised by Forage.",
        image: "./assets/Forage Deloitte (Tech) Job Sim.jpg"
    },
    {
        title: "Deloitte Data Analytics Job Sim",
        description: "Certification for completing the Deloitte Data Analytics Job Simulation organised by Forage.",
        image: "./assets/Forage Deloitte (DA) Job Sim.jpg"
    }    

];

export function renderAchievements() {
    const achievementsContainer = document.querySelector('.achievements-container');
    achievements.forEach((achievement) => {
        achievementsContainer.innerHTML += `
            <div class="achievements-card">
                <h3>${achievement.title}</h3>                    
                <p>${achievement.description}</p>
                <img src="${achievement.image}" alt="${achievement.title}" class="achievements-img">
            </div>
        `
    });
}


