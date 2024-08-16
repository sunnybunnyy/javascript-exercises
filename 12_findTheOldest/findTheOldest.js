const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, person) => {
        let personAge = 0;
        let oldestAge = 0;
        "yearOfDeath" in person ? personAge = person.yearOfDeath - person.yearOfBirth
            : personAge = new Date().getFullYear() - person.yearOfBirth;
        
        "yearOfDeath" in oldest ? oldestAge = oldest.yearOfDeath - oldest.yearOfBirth
            : oldestAge = new Date().getFullYear() - oldest.yearOfBirth;

        if (personAge > oldestAge) {
            return person
        }

        return oldest;
    }, people[0]);

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
