chrome.action.onClicked.addListener(async (tab) => {
    // Récupère l'onglet actif
    let [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // Récupère l'URL de l'onglet actif
    let currentUrl = activeTab.url;
  
    // Recherche un nombre dans l'URL (par exemple, "03_vostfr")
    let match = currentUrl.match(/(\d+)_vostfr/);
    if (match) {
      // Incrémente le nombre d'épisode
      let episodeNumber = parseInt(match[1]);
      let nextEpisode = episodeNumber + 1;
  
      // Formate le numéro de l'épisode pour qu'il corresponde à "03" dans l'URL
      let formattedEpisode = nextEpisode.toString().padStart(2, "0");
  
      // Remplace le nombre d'épisode dans l'URL avec le suivant
      let newUrl = currentUrl.replace(match[0], formattedEpisode + "_vostfr");
  
      // Ouvre un nouvel onglet avec l'URL modifiée
      chrome.tabs.create({ url: newUrl });
    }
  });
  