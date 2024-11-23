document.addEventListener('DOMContentLoaded', function () {
    // Define types for elements
    const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement | null;
    const profilePicPreview = document.getElementById('profile-pic-preview') as HTMLImageElement | null;
    const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement | null;
    const resumePreview = document.getElementById('resume-preview') as HTMLDivElement | null;
    const resumeContent = document.getElementById('resume-content') as HTMLDivElement | null;

    // Function to handle profile picture preview
    if (profilePicInput && profilePicPreview) {
        profilePicInput.addEventListener('change', function () {
            const file = profilePicInput.files ? profilePicInput.files[0] : null;
            if (file) {
                const reader = new FileReader();
                reader.onload = function () {
                    if (profilePicPreview) {
                        profilePicPreview.src = reader.result as string;
                        profilePicPreview.style.display = 'block';
                    }
                };
                reader.readAsDataURL(file);
            } else if (profilePicPreview) {
                profilePicPreview.style.display = 'none';
            }
        });
    }

    // Function to generate resume
    if (generateResumeButton && resumePreview && resumeContent) {
        generateResumeButton.addEventListener('click', function () {
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const phone = (document.getElementById('phone') as HTMLInputElement).value;
            const education = (document.getElementById('education') as HTMLTextAreaElement).value;
            const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
            const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
            const profilePicSrc = profilePicPreview ? profilePicPreview.src : '';

            if (name && email && phone && education && skills && workExperience) {
                resumeContent.innerHTML = `
                    ${profilePicSrc ? `<img src="${profilePicSrc}" alt="Profile Picture" style="width: 180px; height: 180px; border-radius: 20%; margin-bottom: 10px;">` : ''}
                    <h2><span contenteditable = "true">${name}</span></h2>
                    <p><strong>Email:</strong> <span contenteditable = "true"> ${email}</span></p>
                    <p><strong>Phone:</strong><span contenteditable = "true"> ${phone} </span></p>
                    <h3>Work Experience</h3>
                    <p contenteditable = "true">${workExperience}</p>
                    <h3>Education</h3>
                    <p contenteditable = "true">${education}</p>
                    <h3>Skills</h3>
                    <p contenteditable = "true">${skills}</p>                    
                `;                
                resumePreview.style.display = 'block';
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
