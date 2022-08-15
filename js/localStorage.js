export const setItem = (key, value, eventName) => {
  const event = new Event(eventName);
  event.key = key;
  event.value = value;
  window.dispatchEvent(event);
  localStorage.setItem(key, value);
};
