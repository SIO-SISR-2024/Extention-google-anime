chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "incrementNumber") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
          code: `(${incrementNumber})();`
        });
      });
    }
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