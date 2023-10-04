document.getElementById("dropdown-content").addEventListener("blur", (event) => {
  console.log(event);
  const dropdownButtonContent = document.getElementById("dropdown-content");
  dropdownButtonContent.className = "custom-dropdown-content";
});

document.getElementById("dropdown-button-wrapper").addEventListener("click", (event) => {
  //console.log(event);
  const dropdownButtonContent = document.getElementById("dropdown-content");
  if (dropdownButtonContent.className === "custom-dropdown-content active-custom-dropdown-content") {
    dropdownButtonContent.className = "custom-dropdown-content";
  } else {
    dropdownButtonContent.className = "custom-dropdown-content active-custom-dropdown-content";
  }
});
