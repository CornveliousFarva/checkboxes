const toggles = document.querySelectorAll('.toggle')
// document.QuerySelectirAll is used because there are multiple id's with the toggle id
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')
// We use just querySelector because there's just one class of each

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheThing(e.target)))

function doTheThing(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            fast.checked = false
        } alert('You can have it good and cheap but you cannot have it fast too.')

        if(cheap === theClickedOne) {
            good.checked = false
        } alert('You can have it cheap and fast but you cannot have it good too.')

        if(fast === theClickedOne) {
            cheap.checked = false
        } alert('You can have it good and fast, but you cannot have it cheap too')
    }
}