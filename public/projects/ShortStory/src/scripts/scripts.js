const isIndexPage = window.location.pathname.includes("faq");

const jsonFile = isIndexPage
  ? "src/dataJson/faq.json"
  : "src/dataJson/rules.json";

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    const faqContainer = document.getElementById("faqAndRulesContainer");

    data.forEach((item, index) => {
      const faqItem = document.createElement("div");
      faqItem.classList.add("faqAndRulesQuestion");
      faqItem.textContent = `${index + 1}. ${item.faqAndRulesQuestion}`;

      const answer = document.createElement("div");
      answer.classList.add("answer");
      answer.innerHTML = item.answer;

      faqItem.addEventListener("click", function () {
        const isActive = faqItem.classList.contains("active");

        faqItem.classList.toggle("active", !isActive);
        answer.classList.toggle("active", !isActive);

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

      faqContainer.appendChild(faqItem);
      faqContainer.appendChild(answer);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
