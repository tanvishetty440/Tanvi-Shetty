document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form");
    const previewSection = document.getElementById("preview-section");
    const previewContainer = document.getElementById("resume-preview");
    const generatePreviewButton = document.getElementById("generate-preview");
    const editDetailsButton = document.getElementById("edit-details");
    const reviewResumeButton = document.getElementById("review-resume");
    const downloadResumeButton = document.getElementById("download-resume");
    const formSection = document.getElementById("form-section");
  
    // Helper to clear and populate the preview
    function populatePreview() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const summary = document.getElementById("summary").value;
        const skills = document.getElementById("skills").value.split(',').map(skill => skill.trim());
        const experience = document.getElementById("experience").value;
        const education = document.getElementById("education").value;
  
        previewContainer.innerHTML = `
            <div class="header">
                <h1>${name}</h1>
                <p>${email} | ${phone}</p>
            </div>
            <section>
                <h2>Professional Summary</h2>
                <p>${summary}</p>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            </section>
            <section>
                <h2>Work Experience</h2>
                <p>${experience}</p>
            </section>
            <section>
                <h2>Education</h2>
                <p>${education}</p>
            </section>
        `;
    }
  
    // Generate preview
    generatePreviewButton.addEventListener("click", () => {
        if (form.checkValidity()) {
            populatePreview();
            formSection.classList.add("hidden");
            previewSection.classList.remove("hidden");
        } else {
            form.reportValidity();
        }
    });
  
    // Edit details
    editDetailsButton.addEventListener("click", () => {
        previewSection.classList.add("hidden");
        formSection.classList.remove("hidden");
    });
  
    // Review resume
    reviewResumeButton.addEventListener("click", () => {
        alert("Review your resume carefully before downloading!");
    });
  
    // Download as PDF
    downloadResumeButton.addEventListener("click", () => {
        const opt = {
            margin: 1,
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(previewContainer).save();
    });
  });
  