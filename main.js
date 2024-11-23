document.addEventListener('DOMContentLoaded', function () {
    // Define types for elements
    var profilePicInput = document.getElementById('profile-pic');
    var profilePicPreview = document.getElementById('profile-pic-preview');
    var generateResumeButton = document.getElementById('generate-resume');
    var resumePreview = document.getElementById('resume-preview');
    var resumeContent = document.getElementById('resume-content');
    // Function to handle profile picture preview
    if (profilePicInput && profilePicPreview) {
        profilePicInput.addEventListener('change', function () {
            var file = profilePicInput.files ? profilePicInput.files[0] : null;
            if (file) {
                var reader_1 = new FileReader();
                reader_1.onload = function () {
                    if (profilePicPreview) {
                        profilePicPreview.src = reader_1.result;
                        profilePicPreview.style.display = 'block';
                    }
                };
                reader_1.readAsDataURL(file);
            }
            else if (profilePicPreview) {
                profilePicPreview.style.display = 'none';
            }
        });
    }
    // Function to generate resume
    if (generateResumeButton && resumePreview && resumeContent) {
        generateResumeButton.addEventListener('click', function () {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var education = document.getElementById('education').value;
            var skills = document.getElementById('skills').value;
            var workExperience = document.getElementById('work-experience').value;
            var profilePicSrc = profilePicPreview ? profilePicPreview.src : '';
            if (name && email && phone && education && skills && workExperience) {
                resumeContent.innerHTML = "\n                    ".concat(profilePicSrc ? "<img src=\"".concat(profilePicSrc, "\" alt=\"Profile Picture\" style=\"width: 180px; height: 180px; border-radius: 20%; margin-bottom: 10px;\">") : '', "\n                    <h2><span contenteditable = \"true\">").concat(name, "</span></h2>\n                    <p><strong>Email:</strong> <span contenteditable = \"true\"> ").concat(email, "</span></p>\n                    <p><strong>Phone:</strong><span contenteditable = \"true\"> ").concat(phone, " </span></p>\n                    <h3>Work Experience</h3>\n                    <p contenteditable = \"true\">").concat(workExperience, "</p>\n                    <h3>Education</h3>\n                    <p contenteditable = \"true\">").concat(education, "</p>\n                    <h3>Skills</h3>\n                    <p contenteditable = \"true\">").concat(skills, "</p>                    \n                ");
                resumePreview.style.display = 'block';
            }
            else {
                alert('Please fill out all fields.');
            }
        });
    }
});
