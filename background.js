chrome.action.onClicked.addListener(async (tab) => {
    // Récupère l'onglet actif
    let [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // Récupère l'URL de l'onglet actif
    let currentUrl = activeTab.url;
  
    // Recherche un nombre dans l'URL (par exemple, "episode=5")
    let match = currentUrl.match(/episode=(\d+)/);
    if (match) {
      // Incrémente le nombre d'épisode
      let episodeNumber = parseInt(match[1]);
      let nextEpisode = episodeNumber + 1;
  
      // Remplace le nombre d'épisode dans l'URL avec le suivant
      let newUrl = currentUrl.replace(match[0], "episode=" + nextEpisode);
  
      // Ouvre un nouvel onglet avec l'URL modifiée
      chrome.tabs.create({ url: newUrl });
    }
  });
  