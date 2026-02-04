const modal = document.getElementById('modal');
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