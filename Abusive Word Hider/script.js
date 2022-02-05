replaceText(document.body)

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/(fuck|fuck you|shit|Piss off|Dick head|Asshole|Son of a bitch|Bastard|Bitch|Damn|Wanker|Taking the piss|Twat|Bloody Oath|Root|Get Stuffed|Bugger me|Fair suck of the sav)/gi))
      element.parentElement.remove()
  }
}  