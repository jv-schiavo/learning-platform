document.getElementById("liveFilter").addEventListener("change", function () {
    const month = this.value;

    fetch(`/api/liveEvents?month=${month}`)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("liveEventContainer");
        container.innerHTML = "";

        if (data.length === 0) {
            container.innerHTML = "<p>No events found for this month.</p>";
            return;
        }

        data.forEach(event => {
            const card = `
                <div class="card">
                    <h2 class="card-title">${event.title}</h2>
                    <p class="card-meta"><strong>${event.instructor_name}</strong></p>
                    <p class="card-meta">${event.date}</p>
                    <p class="card-description">${event.description}</p>
                </div>
            `;
            container.innerHTML += card; 
        });

    })
    .catch(err => {
        console.error("AJAX fetch error:", err);
    });
});
