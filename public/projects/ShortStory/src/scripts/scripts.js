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

      const icon = document.createElement("img");
      icon.classList.add("icon");
      icon.src = "src/icon/angle-up.svg";
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
