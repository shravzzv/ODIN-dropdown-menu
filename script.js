const addDropDownLogicUsingClass = (triggerId, className, event = 'click') => {
  const handleDropDown = (e) => {
    e.target.classList.toggle(className)
  }
  document.getElementById(triggerId).addEventListener(event, handleDropDown)
}

addDropDownLogicUsingClass('trigger', 'active')
