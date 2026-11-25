const users = [
  {
    name: "Vishal Sharma",
    role: "Frontend Developer",
    location: "India"
  },
  {
    name: "Ananya Verma",
    role: "Full Stack Engineer",
    location: "Bengaluru"
  }
];

let currentIndex = 0;

function toggleUser() {
  currentIndex = (currentIndex + 1) % users.length;
  const user = users[currentIndex];

  document.getElementById("user-name").textContent = user.name;
  document.getElementById("user-role").textContent = user.role;
  document.getElementById("user-location").textContent = user.location;
}