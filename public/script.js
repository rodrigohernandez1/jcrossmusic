const modal = document.getElementById('modal');
if (modal) {
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalLink = document.getElementById('modal-link');
  const closeBtn = document.querySelector('.close');

  document.querySelectorAll('.project img').forEach(img => {
    img.addEventListener('click', () => {
      const project = img.closest('.project');
      modalImg.src = project.dataset.image;
      modalTitle.textContent = project.dataset.title;
      modalDesc.textContent = project.dataset.description;
      modalLink.href = project.dataset.spotify;
      modal.style.display = 'block';
    });
  });

  closeBtn.onclick = () => modal.style.display = 'none';
  window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
}

// Contact //
// Contact Form specific logic
const contactForm = document.getElementById('form');

if (contactForm) {
  // Everything inside this block only runs on contact.html
  const responseMessage = document.getElementById('response-message');
  const submitBtn = document.getElementById('submit-btn');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    console.log("Form submit intercepted!"); 
    if (!contactForm.checkValidity()) return;

    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        contactForm.style.display = 'none';
        responseMessage.style.display = 'block';
      } else {
        throw new Error();
      }
    } catch (err) {
      alert("Error sending message.");
      submitBtn.innerText = "Send Message";
      submitBtn.disabled = false;
    }
  });
}