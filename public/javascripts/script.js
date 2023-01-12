document.addEventListener("DOMContentLoaded", function() {
  const filterComp = this.querySelector('[data-filter]');

  filterComp.addEventListener('change', function(e) {
    const score = e.target.value;
    console.log("hello")

    fetch(`attractions/search?score=${score}`)
      .then(response => response.json())
      .then(data => {
        const contactsComp = this.querySelector('.attractions');
        // data has a list of attractions with name and average_review_score
        // render each in div with class attraction and inside two divs with class attraction-name and attraction-score respectively

        // clear the list
        contactsComp.innerHTML = '';

        data.forEach(attraction => {
          const attractionComp = document.createElement('div');
          attractionComp.classList.add('attraction');

          const nameComp = document.createElement('div');
          nameComp.classList.add('attraction-name');
          nameComp.innerText = attraction.name;

          const scoreComp = document.createElement('div');
          scoreComp.classList.add('attraction-score');
          scoreComp.innerText = attraction.average_review_score;

          attractionComp.appendChild(nameComp);
          attractionComp.appendChild(scoreComp);

          contactsComp.appendChild(attractionComp);
        });
      }
    );
  }
});