export const achievements = [

    {
        title: "Social Internship Certificate",
        description: "Certificate for completing my social internship.",
        image: "Social Internship Certificate"
    },
    {
        title: "AWS Certified AI Practitioner",
        description: "Certificate for giving and passing the AI Practitioner exam, certified by AWS.",
        image: "AWS Certified AI Practitioner-img"
    },
    {
        title: "ArtPark PhotoDash",
        description: "Certification for participating in ArtPark PhotoDash organised by IISc Bangalore.",
        image: "ArtPark PhotoDash-img"
    },
    {
        title: "Innotech'25",
        description: "Certification for participating in Innotech'25.",
        image: "innotech"
    },
    {   
        title: "Node.js Bootcamp",
        description: "Certification for completing the Node.js Bootcamp organised by LetsUpgrade.",
        image: "Nodejs Bootcamp Certificate"
    },
    {
        title: "Introduction to DS Course",
        description: "Certification for completing an introducting course on DS organised by Infosys Springboard.",
        image: "Introduction to DS Certificate"
    },
    {
        title: "Introduction to AI Course",
        description: "Certification for completing an introducting course on AI organised by Infosys Springboard.",
        image: "Introduction to AI Certificate"
    },
    {
        title: "AWS Job Sim",
        description: "Certification for completing the AWS Job Simulation organised by Forage.",
        image: "Forage AWS Job Sim"
    },
    {
        title: "Deloitte Cyber Job Sim",
        description: "Certification for completing the Deloitte Cyber Job Simulation organised by Forage.",
        image: "Forage Deloitte (Cyber) Job Sim"
    },
    {
        title: "Deloitte Technology Job Sim",
        description: "Certification for completing the Deloitte Technology Job Simulation organised by Forage.",
        image: "Forage Deloitte (Tech) Job Sim"
    },
    {
        title: "Deloitte Data Analytics Job Sim",
        description: "Certification for completing the Deloitte Data Analytics Job Simulation organised by Forage.",
        image: "Forage Deloitte (DA) Job Sim"
    }    

];

export function renderAchievements() {
    const achievementsContainer = document.querySelector('.achievements-container');
    achievementsContainer.innerHTML = '';
    achievements.forEach((achievement) => {
        achievementsContainer.innerHTML += `
            <div class="achievements-card">
                <h3>${achievement.title}</h3>                    
                <p>${achievement.description}</p>
                <img src="../assets/achievements/${achievement.image}.jpg" alt="${achievement.title}" class="achievements-img">
            </div>
        `
    });
}
