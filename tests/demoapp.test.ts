import { expect, test } from 'vitest'

//RUNNING TESTS FOR DEMO APP IN TYPESCRIPT

interface User {
    name: string
    email: string
    age: number
    zodiacSign: string
}

function createUser(name: string, email: string, age: number, zodiacSign: string): User {
    return { name, email, age, zodiacSign }
}

//DATA-DRIVEN TESTING EXAMPLE

test.for([
    { name: 'Jon Snow', email: 'jon.snow@winterfell.com', age: 25, zodiacSign: 'Gemini'},
    { name: 'Daenerys Targaryen', email: 'daenerys.targaryen@dragonstone.com', age: 28, zodiacSign: 'Aires'},
    { name: 'Tyrion Lannister', email: 'tyrion.lannister@casterlyrock.com', age: 35, zodiacSign: 'Scorpio'},
    { name: 'Arya Stark', email: 'arya.stark@winterfell.com', age: 18, zodiacSign: 'Sagittarius'},
    { name: 'Cersei Lannister', email: 'cersei.lannister@casterlyrock.com', age: 32, zodiacSign: 'Capricorn'},
    { name: 'Jaime Lannister', email: 'jaime.lannister@casterlyrock.com', age: 30, zodiacSign: 'Taurus'},
    { name: 'Sansa Stark', email: 'sansa.stark@winterfell.com', age: 22, zodiacSign: 'Virgo'},
    { name: 'Bran Stark', email: 'bran.stark@winterfell.com', age: 16, zodiacSign: 'Aquarius'},
    { name: 'Joffrey Baratheon', email: 'joffrey.barantheon@kingsland.com', age: 25, zodiacSign: 'Leo'},
    { name: 'Petyr Baelish', email: 'littleFinger@vale.com', age: 45, zodiacSign: 'Libra'},
    { name: 'Tywin Lannister', email: 'tywin.lannister@casterlyrock.com', age: 70, zodiacSign: 'Cancer'},
    { name: 'Sandor Clegane', email: 'sandor.clegane@kingsland.com', age: 49, zodiacSign: 'Pisces'}
    ])
  ('createUser($name, $email, $age, $zodiacSign) -> $expected', ({ name, email, age, zodiacSign}) => {
    const user = createUser(name, email, age, zodiacSign)
    
    expect(user).toEqual({ name, email, age, zodiacSign })
    expect(user.name).toBe(name)
    expect(user.name).to.have.lengthOf.greaterThan(3)
    expect(user.name).not.toContain('!@#$%^&*()')
    expect(user.name).not.toBeNull()
    expect(user.name).not.toBe(undefined)
    //
    expect(user.email).toBe(email)
    expect(user.email).toMatch(/@/)
    expect(user.email).not.toContain('!#$%^&*()')
    expect(user.email).to.have.lengthOf.greaterThan(3)
    expect(user.email).not.toBeNull()
    expect(user.email).not.toBe(undefined)
    //
    expect(user.age).toBe(age)
    expect(user.age.toString()).to.have.lengthOf.greaterThan(1)
    expect(user.age).not.toBeNull()
    expect(user.age).not.toBe(undefined)
    expect(user.age).toBeGreaterThan(12)
    expect(user.age).toBeLessThan(100)
    expect(user.age).not.toBeNaN()
    //
    expect(user.zodiacSign).toBe(zodiacSign)
    expect(user.zodiacSign).to.have.lengthOf.greaterThan(2)
    expect(user.email).not.toContain('!#$%^&*()')
    expect(user.email).not.toBeNull()
    expect(user.email).not.toBe(undefined)
  })
