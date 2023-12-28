const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let sumOfPositiveNumbers  = 0;
let numberOfPositiveElements = 0;
let productOfPositiveElements = 1;
let numberOfNegativeElements = 0;
let sumOfPositiveCouplesElements = 0;
let numberOfPositiveCouplesElements=0;
let sumOfPositiveNotCouplesElements = 0;
let numberOfPositiveNotCouplesElements=0;
for (let i = 0; i <numbers.length; i++){
    if (numbers[i] > 0) {
        sumOfPositiveNumbers +=numbers[i];
        productOfPositiveElements *= numbers[i];
        numberOfPositiveElements++;
        if (numbers[i]%2===0){
            numberOfPositiveCouplesElements++;
            sumOfPositiveCouplesElements += numbers[i];
        }
        else if (!(numbers[i]%2===0)){
            numberOfPositiveNotCouplesElements++;
            sumOfPositiveNotCouplesElements += numbers[i];
        }
    }
    else if (numbers[i] < 0) {
        numberOfNegativeElements++;
    }
}
let maxElement = numbers[0];
let indexOfElement = 0;
for (const currentElement in numbers) {
    if (numbers[currentElement] > maxElement) {
        maxElement = numbers[currentElement];
        indexOfElement = currentElement;
    }
}
alert( `Сума позитивних елементів становить: ${sumOfPositiveNumbers}.\nКількість позитивних елементів становить: ${numberOfPositiveElements}. \nМаксимальний елемент масиву відповідає ${maxElement}, його порядковий номер ${indexOfElement}.\nКількість негативних елементів дорівнює ${numberOfNegativeElements} \nКількість непарних позитивних елементів дорівнює ${numberOfPositiveNotCouplesElements} \nКількість парних позитивних елементів дорівнює ${numberOfPositiveCouplesElements} \nСума парних позитивних елементів дорівнює ${sumOfPositiveCouplesElements} \nСума непарних позитивних елементів дорівнює ${sumOfPositiveNotCouplesElements} \nДобуток усіх позитивних елементів: ${productOfPositiveElements}`)
