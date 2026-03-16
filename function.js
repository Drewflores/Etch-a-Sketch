const btn = document.getElementById("click");
const topic = document.getElementById("topic");

btn.addEventListener("click", () => {
    topic.textContent = "It's working"
})