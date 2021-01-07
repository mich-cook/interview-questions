const tabs = document.querySelector(`ul.tabs`);
tabs.addEventListener("click", (e) => {
  const intOffset = parseInt(e.target.parentNode.getAttribute("data-key"));

  const nextTab = document.querySelector(`ul.tabs li[data-key="${intOffset}"]`);
  const currentTab = document.querySelector(`ul.tabs li.selected`);

  const nextContent = document.querySelector(`ul.contents li[data-key="${intOffset}"]`);
  const currentContent = document.querySelector(`ul.contents li.selected`);

  currentTab.classList.remove(`selected`);
  nextTab.classList.add(`selected`);

  currentContent.classList.remove(`selected`);
  nextContent.classList.add(`selected`);
});
