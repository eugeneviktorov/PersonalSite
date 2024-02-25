const isIndexPage = window.location.pathname.includes("faq");

const jsonFile = isIndexPage
  ? "src/dataJson/faq.json"
  : "src/dataJson/rules.json";

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    const meaningContainer = document.getElementById("meaningContainer");

    data.forEach((item, index) => {
      const meaningItem = document.createElement("div");
      meaningItem.classList.add("meaning");
      meaningItem.textContent = `${index + 1}. ${item.meaning}`;

      const answer = document.createElement("div");
      answer.classList.add("answer");
      answer.innerHTML = item.answer;

      const icon = document.createElement("svg");
      icon.classList.add("icon");
      icon.innerHTML = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>';
      icon.style.display = "none";

      meaningItem.appendChild(icon);

      meaningItem.addEventListener("click", function () {
        const isActive = meaningItem.classList.contains("active");

        meaningItem.classList.toggle("active", !isActive);
        answer.classList.toggle("active", !isActive);
        icon.style.display = isActive ? "none" : "block";

        if (!isActive) {
          answer.style.maxHeight = answer.scrollHeight + "px";
          answer.style.opacity = "1";
          answer.style.visibility = "visible";
        } else {
          answer.style.maxHeight = "0";
          answer.style.opacity = "0";
          answer.style.visibility = "hidden";
        }
      });

      meaningContainer.appendChild(meaningItem);
      meaningContainer.appendChild(answer);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
