function getGroomingTip() {
  fetch("https://https://www.vitaman.com/blogs/news/grooming-tips-for-men?srsltid=AfmBOoo_TMNqccl0T5avlU-xniFjhdUXqNrrAehEpafIuR3ULn8pm4sG")
    .then(response => response.json())
    .then(data => {
      document.getElementById("tip-result").textContent = `"${data.content}" – ${data.author}`;
    })
    .catch(error => {
      document.getElementById("tip-result").textContent = "Sorry, we couldn't fetch a tip right now.";
      console.error("Error fetching tip:", error);
    });
}
