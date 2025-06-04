document.getElementById("topicFilter").addEventListener("change", function () {
  const topicId = this.value;

  fetch(`/api/courses?topic=${topicId}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("courseContainer");
      container.innerHTML = ""; // Clear current cards

      if (data.length === 0) {
        container.innerHTML = "<p>No courses found.</p>";
        return;
      }

      data.forEach(course => {
        const card = `
          <div class="card">
            <h2 class="card-title">${course.title}</h2>
            <p class="card-description">${course.description}</p>
          </div>
        `;
        container.innerHTML += card;
      });
    })
    .catch(err => {
      console.error("AJAX fetch error:", err);
    });
});
