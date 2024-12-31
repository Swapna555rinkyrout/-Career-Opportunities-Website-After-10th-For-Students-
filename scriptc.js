function showCareerDetails(option) {
    const detailsContainer = document.getElementById("careerDetails");
    
    let details = {
        science: {
            title: "Science Stream",
            description: "Popular career options: Engineering, Medicine, Biotechnology, Forensic Science, Data Science."
        },
        commerce: {
            title: "Commerce Stream",
            description: "Popular career options: Chartered Accountant (CA), Business Management, Accounting, Finance, Economics."
        },
        arts: {
            title: "Arts Stream",
            description: "Popular career options: Journalism, Social Work, Literature, Psychology, Fine Arts, Law."
        },
        diploma: {
            title: "Diploma Courses",
            description: "Popular diploma options: Engineering Diploma, Fashion Designing, Interior Designing, Hotel Management."
        },
        it: {
            title: "IT & Computer Courses",
            description: "Popular career options: Software Developer, Web Developer,Android Developer, Data Analyst, Networking Specialist, Ethical Hacker."
        }
    };

    detailsContainer.innerHTML = `
        <h2>${details[option].title}</h2>
        <p>${details[option].description}</p>
    `;
}