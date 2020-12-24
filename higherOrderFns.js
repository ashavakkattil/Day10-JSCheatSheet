const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/* forEach */

companies.forEach((company, index, companies) => {
    console.log(company.name)
    //We can get index from index variable and the whole array from companies variable
})

/* Filter */
//doesn't chnage the original array

//filter retail companies
const retailCompanies = companies.filter(c => c.category === 'Retail')

//filter ages above 21

const agesOver = ages.filter(a => a > 21)

//companies that lasted for atleast 10 years

const decadeCompany = companies.filter(company => ((company.end - company.start) >= 10))

/* Map */

//creates a new array with the values specified by the condition
//does not change the original array

//square the ages
const ageSqr = ages.map(age => age * age)

//return company names in the format - company name [start - end]
var companyNames = companies.map(company => `${company.name} - [${company.start} - ${company.end}]`)


/* Sort */
//changes the original array

//sort ages in asc order
const sortedAges = ages.sort((a, b) => a - b)

//sort companies in desc order of start dates
const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ? -1 : 1)

/* Reduce */
//reduce takes a callback and an initial value as parameters
//the callback takes 2 parameters - the final result and the array element
//returns a single value stored in an accumulator
//does not change the original array

//calculate the sum of ages- long way
/* const ageSum = ages.reduce(calcSum, 0)

function calcSum(total, age) {
    return total + age
} */

//shorter way
/* const ageSum = ages.reduce((total, age) => {
    return total + age
},0) */

//shortest method
const ageSum = ages.reduce((total, age) => (total + age), 0)

//get total years for all companies
const range = companies.reduce((total, company) => (total + (company.end - company.start)), 0)
