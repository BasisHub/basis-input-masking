import keycode from 'keycode'

export const simulateKey = (el ,key , type, modifiers) => {
  var evtName = (typeof(type) === "string") ? "key" + type : "keydown";   
  var modifier = (typeof(modifiers) === "object") ? modifier : {};
​
  var event = document.createEvent("HTMLEvents");
  event.initEvent(evtName, true, false);
  event.keyCode = keycode(key);
  event.which = keycode(key);
  event.key = key;
  for (var i in modifiers) {
      event[i] = modifiers[i];
  }
​
  el.dispatchEvent(event);
}
