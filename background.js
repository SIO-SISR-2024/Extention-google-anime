chrome.action.onClicked.addListener(async (tab) => {
    // Récupère l'onglet actif
    let [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // Exécute un script dans la page pour incrémenter le nombre dans l'URL
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: incrementNumber
    });
  });
  
  // Fonction pour incrémenter le nombre dans l'URL et recharger la page
  function incrementNumber() {
    let currentUrl = window.location.href;
    let match = currentUrl.match(/(\d+)/);
    if (match) {
      let number = parseInt(match[0]);
      let incrementedNumber = number + 1;
      let newUrl = currentUrl.replace(number, incrementedNumber);
      window.location.href = newUrl;
    }
  }
  