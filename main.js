// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const replaceOneButton = document.querySelector(".replace-one-button")
const caseSensitiveButton = document.querySelector('.caseSensitive')
const bodyElement = document.querySelector('body')
const divElement = document.createElement('div')



// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE
//main search and replace function
replaceAllButton.addEventListener('click', function () {
    let userFindInput = findInput.value
    let userReplaceInput = replaceInput.value
    let numberOfWordsReplaced = 0


    for (let index = 0; index < rowElements.length; index += 1) {
        let cellElementsArray = getCellElements(rowElements[index])

        for (let innerIndex = 0; innerIndex < cellElementsArray.length; innerIndex += 1) {
            let currentCellElement = cellElementsArray[innerIndex]
            if (currentCellElement.innerHTML.includes(userFindInput)) {
                currentCellElement.innerHTML = currentCellElement.innerHTML.replace(userFindInput, userReplaceInput)

                numberOfWordsReplaced += 1
                console.log(numberOfWordsReplaced)
            }
        }
    }
    //creates a div to display number of words replaced
    divElement.classList.add('itemsReplacedDiv')
    bodyElement.appendChild(divElement)
    divElement.innerHTML = `Replaced ${numberOfWordsReplaced} words`
    findInput.value = ''
    replaceInput.value = ''
})



// Replace first match
replaceOneButton.addEventListener('click', function () {
    let userFindInput = findInput.value
    let userReplaceInput = replaceInput.value
    let numberOfWordsReplaced = 0
    for (let index = 0; index < rowElements.length; index += 1) {
        let cellElementsArray = getCellElements(rowElements[index])

        for (let innerIndex = 0; innerIndex < cellElementsArray.length; innerIndex += 1) {
            let currentCellElement = cellElementsArray[innerIndex]
            if (currentCellElement.innerHTML.includes(userFindInput)) {
                currentCellElement.innerHTML = currentCellElement.innerHTML.replace(userFindInput, userReplaceInput)

                numberOfWordsReplaced += 1
                console.log(numberOfWordsReplaced)
                break
            }

        }
        if (numberOfWordsReplaced === 1) {
            break   //took me way too long to realize this wouldn't work without breaking the loop above first
        }
    }
    divElement.classList.add('itemsReplacedDiv')
    bodyElement.appendChild(divElement)
    divElement.innerHTML = `Replaced ${numberOfWordsReplaced} words`
    findInput.value = ''
    replaceInput.value = ''

})
// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
