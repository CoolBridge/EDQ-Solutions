document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
      const descriptionText = card.getAttribute('data-description');
      const projectLink = "https://yourprojectlink.com"; // Replace with actual project link

      // Update the description and link
      document.getElementById('descriptionText').textContent = descriptionText;
      document.getElementById('projectLink').href = projectLink;

      // Show the description container
      const descriptionContainer = document.getElementById('projectDescription');
      descriptionContainer.style.display = 'block';
  });
});
function toggleDescription(card) {
  const description = card.querySelector('.project-description');

  // Toggle visibility of the description
  if (description.style.display === "none" || description.style.display === "") {
      description.style.display = "block"; // Show description
  } else {
      description.style.display = "none"; // Hide description
  }
}
