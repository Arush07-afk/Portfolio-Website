export const achievements = [

    {
        title: "Build-A-thon",
        description: "Certificate of Participation in Build-A-Thon.",
        image: "BuildAThon-img"
    },
    {
        title: "QuizOff 2026",
        description: "Certificate of Participation in QuizOff 2026.",
        image: "QuizOff-img"
    },
    {
        title: "Social Internship Certificate",
        description: "Certificate for completing my social internship.",
        image: "Social Internship Certificate"
    },
    {
        title: "AWS Certified AI Practitioner",
        description: "Certificate for giving and passing the AI Practitioner exam, certified by AWS.",
        image: "AWS Certified AI Practitioner"
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
        title: "Introduction to ER Modelling",
        description: "Certification for completing a course on ER Modelling organised by Infosys Springboard.",
        image: "Infosys Data Modelling"
    },
    {
        title: "AWS Cloud Foundation Training Certificate",
        description: "Certification for completing training on Cloud Foundation organised by AWS Academy.",
        image: "AWS Cloud Foundations Training"
    },
    {   
        title: "Node.js Bootcamp",
        description: "Certification for completing the Node.js Bootcamp organised by LetsUpgrade.",
        image: "Nodejs Bootcamp Certificate"
    },
    {
        title: "AWS Associate Architect Practice Exam Completion Certificate",
        description: "Certification for completing the practice exam on associate architect organised by AWS Training and Certification.",
        image: "AWS Associate Architect Practice Exam"
    },
    {
        title: "AWS AI Practice Exam Completion Certificate",
        description: "Certification for completing the practice exam on AI organised by AWS Training and Certification.",
        image: "AWS AI Practice Exam"
    },
    {
        title: "AWS Cloud Practice Exam Completion Certificate",
        description: "Certification for completing the practice exam on Cloud Services organised by AWS Training and Certification.",
        image: "AWS Cloud Practice Exam"
    },
    {
        title: "Introduction to DS Course",
        description: "Certification for completing an introductory course on DS organised by Infosys Springboard.",
        image: "Introduction to DS Certificate"
    },
    {
        title: "Introduction to AI Course",
        description: "Certification for completing an introductory course on AI organised by Infosys Springboard.",
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
