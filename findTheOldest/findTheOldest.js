const findTheOldest = function(arr) {
    return arr.reduce((oldest,current) => {
        const currentAge = getAge(current);
        const oldestAge = getAge(oldest);
        return oldestAge < currentAge ? current : oldest; 
    })
};

function getAge(person){
    if(!person.yearOfDeath){
        person.yearOfDeath = (new Date()).getFullYear()
    }
    return person.yearOfDeath - person.yearOfBirth;
}

module.exports = findTheOldest;
