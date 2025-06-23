const findTheOldest = function(people) {
    let oldestAge = 0;
    let name = '';
    for (let i = 0; i < people.length; i++) {
        let age;
        if ('yearOfDeath' in people[i]) {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        else {
            let currentDate = new Date();
            age = currentDate.getFullYear() - people[i].yearOfBirth;
        }
        if (age > oldestAge) {
            oldestAge = age;
            name = people[i].name;
        }
    }
    return {
        name,
        age : oldestAge
    };
};

// Do not edit below this line
module.exports = findTheOldest;
