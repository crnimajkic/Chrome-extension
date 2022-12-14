

let logo = document.querySelector('#hplogo')||document.querySelector('.lnXdpd')

logo.src = chrome.runtime.getURL('images/logo.png');  // This is how we say to chrome to take picture from surce on server
logo.srcset = chrome.runtime.getURL('images/logo.png') /// (our computer) and we give it a path.