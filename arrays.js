"use strict";


// 1. printIndices
function printIndices(items) {
    for (const i in items) {
        console.log(`${items[i]} ${i}`);
}
}
printIndices(['one','two','three'])

// 2. everyOtherItem
function everyOtherItem(items) {
  
  const resultItems = [];

  for (const i in items) {
    if (i % 2 === 0) {
        resultItems.push(items[i])
    }
}
    console.log(resultItems)
}

everyOtherItem([1,2,3,4,5,6])

// 3. smallestNItems
function smallestNItems(items, n) {
  //create sorted items
  const sortedItems = items.sort((a,b) => a - b).slice(0, n);
  sortedItems.reverse();

  console.log(sortedItems)
}
