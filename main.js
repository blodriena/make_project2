window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  
  if (window.scrollY > 50) {
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
});





const solutionsData = {
  it: {
    title: "IT automation",
    text: "Cut complexity and move faster by automating everything from monitoring to incident response. Connect tools, integrate AI, and reduce manual work.",
    button: "Automate IT",
    image: "src/images/IT.webp"
  },
  operations: {
    title: "Operations automation",
    text: "Keep your operations running smoothly across siloed systems by connecting your teams and the key project management and data synchronization tools that your business relies on.",
    button: "Automate Operations",
    image: "src/images/Operations_.webp"
  },
  marketing: {
    title: "Marketing automation",
    text: "From lead management to custom communications and CRM to lead management, automation will help your marketing team deliver more value.",
    button: "Automate Marketing",
    image: "src/images/Marketing_.webp"
  },
  sales: {
    title: "Sales automation",
    text: "Clear the way to meeting your revenue targets. Automate lead management, outreach data synchronization, reporting and many other essential sales activities",
    button: "Automate Sales",
    image: "src/images/sales-automation.webp"
  },
  finance: {
    title: "Finance automation",
    text: "Solve finance complexities by integrating multiple apps and systems into one platform and automating time-consuming processes such as quote-to-cash and procure-to-pay.",
    button: "Automate Finance",
    image: "src/images/Finance___1_.webp"
  },
  cx: {
    title: "Customer experience automation",
    text: "Deliver a smoother customer experience than you ever imagined by automating onboarding, records management, SLAs, support management and more.",
    button: "Automate CX",
    image: "src/images/customer_support.webp"
  },
  people: {
    title: "People",
    text: "Drive productivity in your HR department by automating onboarding and offboarding, training management, record management, surveying and more.",
    button: "Automate HR",
    image: "src/images/People.webp"
  }
};

const tabs = document.querySelectorAll(".solutions__tab");
const image = document.getElementById("solutionImage");
const title = document.getElementById("solutionTitle");
const text = document.getElementById("solutionText");
const button = document.getElementById("solutionButton");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Active tab
    tabs.forEach(t => t.classList.remove("is-active"));
    tab.classList.add("is-active");

    const key = tab.dataset.solution;
    const data = solutionsData[key];

    // Swap content
    image.src = data.image;
    title.textContent = data.title;
    text.textContent = data.text;
    button.textContent = data.button;
  });
});

