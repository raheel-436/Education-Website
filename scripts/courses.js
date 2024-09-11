displayCoursesOnCoursesPage();
function displayCoursesOnCoursesPage() {
  let coursesContainerElement = document.querySelector(".courses__container");
  let innerHtml = ``;

  data.forEach((dataItem) => {
    innerHtml += `
        <article class="course">
          <div class="course__image">
            <img src=".${dataItem.image}" alt="Course " />
          </div>
          <div class="course__info">
            <h4>${dataItem.title}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum
              architecto consequuntur fugit sint consectetur voluptatum!
            </p>
            <a href=".${dataItem.link}" class="btn btn-primary"
              >Learn More</a
            >
          </div>
        </article>
    `;
    coursesContainerElement.innerHTML = innerHtml;
  });
}
