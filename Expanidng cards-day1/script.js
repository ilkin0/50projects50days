const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  const panelStatus = panel.classList;
  panel.addEventListener("click", () => {
    changePanelActiveStatus(panel, panelStatus[1]);
  });
});

function removeAllActiveStatus() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function changePanelActiveStatus(panel, panelState) {
  if (panelState === "active") {
    panel.classList.remove("active");
  } else {
    removeAllActiveStatus();
    panel.classList.add("active");
  }
}
