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
    { name: 'Sansa Stark', email: 'sansa.stark@winterfell.com', age: 22, zodiacSign: 'Virgo'}
    ])
  ('createUser($name, $email, $age, $zodiacSign) -> $expected', ({ name, email, age, zodiacSign}) => {
    const user = createUser(name, email, age, zodiacSign)
    
    expect(user).toEqual({ name, email, age, zodiacSign })
    expect(user.name).toBe(name)
    expect(user.name).length.greaterThan(1)
    expect(user.name).not.toContain('!@#$%^&*()')
    expect(user.name).not.toBeNull()
    expect(user.name).not.toBe(undefined)
    //
    expect(user.email).toBe(email)
    // expect(user.email).length.greaterThan(1)
    expect(user.email).not.toContain('!#$%^&*()')
    expect(user.email).not.toBeNull()
    expect(user.email).not.toBe(undefined)
    //
    expect(user.age).toBe(age)
    // expect(user.age).length.greaterThan(0)
    // expect(user.age).length.lessThan(3)
    expect(user.age).not.toBeNull()
    expect(user.age).not.toBe(undefined)
    expect(user.age).toBeGreaterThan(0)
    expect(user.age).toBeLessThan(150)
    expect(user.age).not.toBeNaN()
    //
    expect(user.zodiacSign).toBe(zodiacSign)
    // expect(user.zodiacSign).length.greaterThan(1)
    expect(user.email).not.toContain('!#$%^&*()')
    expect(user.email).not.toBeNull()
    expect(user.email).not.toBe(undefined)
  })
        



// test('createUser function creates a user object correctly', () => {
//     const user = createUser('John Doe', 'john.doe@example.com', 30, 'Aries')
//     expect(user.name).toBe('John Doe')
//     expect(user.email).toBe('john.doe@example.com')
//     expect(user.age).toBe(30)
//     expect(user.zodiacSign).toBe('Aries')
