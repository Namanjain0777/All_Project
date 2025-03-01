// Select all navigation links
const navLinks = document.querySelectorAll("aside a");
const mainContent = document.getElementById("main-content");

// Add event listeners to each navigation item
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default anchor link behavior

    // Get the id of the clicked item
    const contentId = link
      .querySelector("span")
      .innerText.toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    // Change content based on which link was clicked
    switch (contentId) {
      case "overview":
        mainContent.innerHTML = "<b>Overview</b>";
        break;
      case "transactions":
        mainContent.innerHTML = "<b>Transactions</b>";
        break;
      case "scheduled-transactions":
        mainContent.innerHTML = "<b>Scheduled Transactions</b>";
        break;
      case "accounts":
        mainContent.innerHTML = "<b>Accounts</b>";
        break;
      case "budgets":
        mainContent.innerHTML = "<b>Budgets</b>";
        break;
      case "debts":
        mainContent.innerHTML = "<b>Debts</b>";
        break;
      case "charts":
        mainContent.innerHTML = "<b>Charts</b>";
        break;
      case "sign-in":
        mainContent.innerHTML = "<b>Sign In</b>";
        break;
      case "sign-up":
        mainContent.innerHTML = "<b>Sign Up</b>";
        break;
      case "main-content":
        mainContent.innerHTML = "<b>Welcome</b>";
    }
  });
});

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Get the "Overview" link and articles
const overviewLink = document.getElementById("overview");
const expenseArticle = document.getElementById("expense");
const overviewArticle = document.getElementById("overview-content"); // Make sure you use the correct ID for the overview article

// Add click event listener to the "Overview" link
overviewLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior of navigating to the section

  // Toggle visibility of articles
  expenseArticle.style.display = "none"; // Hide the expense section
  overviewArticle.style.display = "block"; // Show the overview section
});

// Optional: Toggle back to "Expense" when "Expense" link is clicked (for better UX)
const expenseLink = document.getElementById("expense");
expenseLink.addEventListener("click", function (event) {
  event.preventDefault();
  expenseArticle.style.display = "block"; // Show the expense section
  overviewArticle.style.display = "none"; // Hide the overview section
});

// Select all navigation links

// Select all navigation links

const mainContentContainer = document.getElementById("main-content-container");

// Add event listeners to each navigation item
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default anchor link behavior

    // Get the id of the clicked item (remove the '#' from href attribute)
    const contentId = link.getAttribute("href").substring(1);

    // Switch to different content based on the clicked link
    switch (contentId) {
      case "expense":
        mainContentContainer.innerHTML = `
                    <h2 class="text-4xl font-semibold tracking-wide">Welcome to the Expense Tracker</h2>
                    <p class="mt-4 text-lg opacity-90">Manage your expenses effortlessly and track your financial goals with ease. Our Expense Tracking Web App provides you with all the tools you need to take control of your finances.</p>
                `;
        break;

      case "overview":
        mainContentContainer.innerHTML = `
                    <h2 class="text-3xl font-extrabold text-gray-800">Overview of Expenses</h2>
                    <p class="mt-4 text-lg text-gray-600">This section will provide an overview of your current expenses and budget.</p>
                `;
        break;

      // Add cases for other links like transactions, accounts, etc.
      case "transactions":
        mainContentContainer.innerHTML = `
                    <h2 class="text-3xl font-extrabold text-gray-800">Transactions</h2>
                    <p class="mt-4 text-lg text-gray-600">Track and manage your financial transactions.</p>
                `;
        break;

      case "scheduled-transactions":
        mainContentContainer.innerHTML = `
                    <h2 class="text-3xl font-extrabold text-gray-800">Scheduled Transactions</h2>
                    <p class="mt-4 text-lg text-gray-600">Manage recurring transactions and schedules.</p>
                `;
        break;

      case "accounts":
        mainContentContainer.innerHTML = `
                    <h2 class="text-3xl font-extrabold text-gray-800">Accounts</h2>
                    <p class="mt-4 text-lg text-gray-600">Link and manage your accounts in one place.</p>
                `;
        break;

      // Add more sections as needed

      default:
        mainContentContainer.innerHTML = `
                    <h2 class="text-4xl font-semibold tracking-wide">Welcome to the Expense Tracker</h2>
                    <p class="mt-4 text-lg opacity-90">Track your expenses and manage your finances effortlessly with our modern web app. Stay on top of your spending with ease.</p>
                `;
    }
  });
});
