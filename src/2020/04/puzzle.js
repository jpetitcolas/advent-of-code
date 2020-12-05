const { isNil } = require('lodash');

const parsePassports = inputs => inputs.split("\n\n")
    .map(rawPassport =>
        Array.from(rawPassport.matchAll(/(?<field>\w+):(?<value>[\w|#]+)/g))
            .reduce((passport, { groups: { field, value }}) => ({
                ...passport,
                [field]: value
            }), {})
    )

const isValid = (passport, fullCheck = false) => {
    if(['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'].some(requiredField => isNil(passport[requiredField]))) {
        return false;
    }

    const numberKeys = Object.keys(passport).length;

    if (fullCheck) {
        const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport;
        const parsedBirthYear = +byr;
        if (parsedBirthYear < 1920 || parsedBirthYear > 2002) {
            return false;
        }

        const parsedIssueYear = +iyr;
        if (parsedIssueYear < 2010 || parsedIssueYear > 2020) {
            return false;
        }

        const parsedExpirationYear = +eyr;
        if (parsedExpirationYear < 2020 || parsedExpirationYear > 2030) {
            return false;
        }

        if (!hgt.endsWith('cm') && !hgt.endsWith('in')) {
            return false;
        }

        const height = parseInt(hgt);
        if (hgt.endsWith('cm')) {
            if (height < 150 || height > 193) {
                return false;
            }
        }

        if (hgt.endsWith('in')) {
            if (height < 59 || height > 76) {
                return false;
            }
        }

        if (!hcl.match(/^#[a-f0-9]{6}$/i)) {
            return false;
        }

        if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)) {
            return false;
        }

        if (!pid.match(/^\d{9}$/)) {
            return false;
        }
    }

    return (
        numberKeys === 7
        ||
        numberKeys === 8 && passport.hasOwnProperty('cid')
    );
};

exports.firstPuzzle = inputs => parsePassports(inputs.join('\n'))
    .filter(passport => isValid(passport))
    .length;

exports.secondPuzzle = inputs => parsePassports(inputs.join('\n'))
    .filter(passport => isValid(passport, true))
    .length;
