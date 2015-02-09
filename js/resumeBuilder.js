var bio = {
    "name": "Hugo Amorim",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "508.641.7062",
        "email": "info@hugoamorim.com",
        "github": "hamorim85",
        "twitter": "@TheAmazingHugo",
        "blog": "www.hugoamorim.com",
        "location": "Boston, MA"
    },
    "welcomeMessage": "I make cool things for the web.",
    "skills": ["CSS", "HTML", "Javascript", "Wordpress", "Graphic Design"],
    "biopic": "images/hugo.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        // Id for FlexNav to work with name and role
        $("#headerFlexNav").prepend(formattedRole);
        $("#headerFlexNav").prepend(formattedName);
        // Contact Information
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts
            .mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwiter = HTMLtwitter.replace("%data%", bio.contacts
            .twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts
            .github);
        var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts
            .location);
        HTMLcontactGeneric = formattedMobile + formattedEmail +
            formattedTwiter + formattedGithub + formattedblog +
            formattedlocation;
        $("#topContacts").append(HTMLcontactGeneric);
        $("#footerContacts").append(HTMLcontactGeneric);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedPic);
        $("#header").append(formattedWelcome);
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[
                i]));
        }
    }
};
var work = {
    "jobs": [{
        "employer": "Delin Design",
        "title": "art director",
        "location": "Pawtucket, RI",
        "dates": "01/07 - 06/12",
        "description": "Branding and design for B2B. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id placerat mi. Nam fringilla felis vel metus maximus, cursus luctus lectus posuere. Cras in risus diam. Nam id orci et sapien porttitor scelerisque. Proin sapien risus, fermentum nec nisl sed, aliquam suscipit tortor. Aliquam id massa dui. Mauris nulla sem, tempor ac ante eget, posuere lobortis est. Duis ornare ante non porttitor sollicitudin. Ut semper neque et nisi tincidunt, pellentesque laoreet risus ultrices. Vestibulum sed ante erat. Curabitur sed pulvinar odio, a dictum tortor."
    }, {
        "employer": "JG's signs",
        "title": "Production",
        "location": "Marlborough, MA",
        "dates": "01/07 - 06/12",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id placerat mi. Nam fringilla felis vel metus maximus, cursus luctus lectus posuere. Cras in risus diam. Nam id orci et sapien porttitor scelerisque. Proin sapien risus, fermentum nec nisl sed, aliquam suscipit tortor. Aliquam id massa dui. Mauris nulla sem, tempor ac ante eget, posuere lobortis est. Duis ornare ante non porttitor sollicitudin. Ut semper neque et nisi tincidunt, pellentesque laoreet risus ultrices. Vestibulum sed ante erat. Curabitur sed pulvinar odio, a dictum tortor."
    }, {
        "employer": "MAK Reprographics",
        "title": "Production",
        "location": "Hudson, MA",
        "dates": "01/07 - 06/12",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id placerat mi. Nam fringilla felis vel metus maximus, cursus luctus lectus posuere. Cras in risus diam. Nam id orci et sapien porttitor scelerisque. Proin sapien risus, fermentum nec nisl sed, aliquam suscipit tortor. Aliquam id massa dui. Mauris nulla sem, tempor ac ante eget, posuere lobortis est. Duis ornare ante non porttitor sollicitudin. Ut semper neque et nisi tincidunt, pellentesque laoreet risus ultrices. Vestibulum sed ante erat. Curabitur sed pulvinar odio, a dictum tortor."
    }],
    "display": function() {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%",
                work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[
                job].title);
            var formatedLocation = HTMLworkLocation.replace("%data%",
                work.jobs[job].location);
            var formattedEmployerTitleLocation = formattedEmployer +
                formattedTitle + formatedLocation;
            $(".work-entry:last").append(formattedEmployerTitleLocation);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[
                job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace(
                "%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
var education = {
    "schools": [{
        "name": "Assabet Valley Techinical High School",
        "location": "Marlborough, MA",
        "degree": "Certificate of Completion in Digital Media",
        "majors": ["Digital Media"],
        "date": 2004,
        "url": "www.assabetvalley.org"
    }, {
        "name": "Worcester State College",
        "location": "Worcester, MA",
        "degree": "Bachorlor of Arts in Communications focused on Print Media",
        "majors": ["Communications", "fakeology"],
        "date": 2008,
        "url": "www.worcesterstate.edu"
    }],
    "OnlineCourses": [{
        "title": "Front-End Web Developer Nano degree",
        "school": "Udacity",
        "date": "09-18-2014",
        "url": "www.udacity.com"
    }, {
        "title": "HTML & CSS",
        "school": "Treehouse",
        "date": "09-18-2014",
        "url": "www.teamtreehouse.com"
    }],
    "display": function() {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%",
                education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace(
                "%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%",
                education.schools[school].date);
            var formattedSchoolLocation = HTMLschoolLocation.replace(
                "%data%", education.schools[school].location);
            var formattedschool = formattedSchoolName +
                formattedSchoolDegree + formattedSchoolDates +
                formattedSchoolLocation;
            $(".education-entry:last").append(formattedschool);
            var majors = "";
            for (var i = 0; i < education.schools[school].majors.length; i++) {
                majors += education.schools[school].majors[i] + " ";
            }
            $(".education-entry:last").append(HTMLschoolMajor.replace(
                "%data%", majors));
        }
        $("#education:last").append(HTMLonlineClasses);
        for (var online in education.OnlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%",
                education.OnlineCourses[online].title);
            var formattedName = HTMLonlineSchool.replace("%data%",
                education.OnlineCourses[online].school);
            var formattedDate = HTMLonlineDates.replace("%data%",
                education.OnlineCourses[online].date);
            var formattedUrl = HTMLonlineURL.replace("%data%",
                education.OnlineCourses[online].url);
            var formattedEntry = formattedTitle + formattedName +
                formattedDate + formattedUrl;
            $(".education-entry:last").append(formattedEntry);
        }
    }
};
var projects = {
    "projects": [{
        "title": "Personal Webpage",
        "dates": "01/07 - 06-12",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id placerat mi. Nam fringilla felis vel metus maximus, cursus luctus lectus posuere. Cras in risus diam. Nam id orci et sapien porttitor scelerisque.",
        "images": ["images/197x148.gif", "images/197x148.gif",
            "images/197x148.gif"
        ]
    }, {
        "title": "Personal Webpage",
        "dates": "01/07 - 06-12",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id placerat mi. Nam fringilla felis vel metus maximus, cursus luctus lectus posuere. Cras in risus diam. Nam id orci et sapien porttitor scelerisque.",
        "images": ["images/197x148.gif", "images/197x148.gif",
            "images/197x148.gif"
        ]
    }],
    "display": function() {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%",
                projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%",
                projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace(
                "%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace(
                        "%data%", projects.projects[project].images[
                            image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];
    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
console.log(locationizer(work));

function inName(name) {
    var finalName = name.trim().split(' ');
    first = finalName[0].toLowerCase();
    last = finalName[1].toUpperCase();
    finalName = first[0].toUpperCase() + first.slice(1) + " " + last;
    console.log(finalName);
    return finalName;
}
$('#letsConnect').append(internationalizeButton);
$("#mapDiv").append(googleMap);