import { describe, it, expect, beforeAll } from 'vitest'
import axios, { AxiosResponse } from 'axios'
import data from '../utils/data.js'

const baseUrl = 'https://jsonplaceholder.typicode.com';
let res: AxiosResponse<any, any> & { duration: number };

const expectNoInvalidCharacters = (value: string) => {
  for (const character of data.invalidCharacters) {
    expect(value).not.toContain(character);
  }
};

const expectNoNumbers = (value: string) => {
  for (const character of data.numbers) {
    expect(value).not.toContain(character);
  }
};

describe('Testing a example api', () => {

 beforeAll(async () => {
    const start = Date.now();
    res = await axios.get(`${baseUrl}/users`);
    res.duration = Date.now() - start;
  });
 it('should respond with status code 200', () => {
    expect(res.status).toEqual(200);
  });
  //Test performance
  it('should respond within 2000ms', () => {
    expect(res.duration).toBeLessThanOrEqual(2000);
  });
  it('should return an array of users', () => {
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data.length).toBeGreaterThan(0);
  });
  it('should have user objects with required properties for user\'s id', () => {
    res.data.forEach((user: any) => {
      expect(user).toHaveProperty('id');
      expect(typeof user.id).toBe('number');
      expect(user.id).not.toBeNaN();
      expect(user.id).not.toBeNull();
    });
  });
  it('should have user objects with required properties for user\'s name', () => {
    res.data.forEach((user: any) => {
      expect(user).toHaveProperty('name');
      expect(typeof user.name).toBe('string');
      expect(user.name).not.toBeNull();
      expectNoInvalidCharacters(user.name);
      expectNoNumbers(user.name);
      expect(user.name.length).toBeLessThanOrEqual(50);
    });
  });
  it('should have user objects with required properties for user\'s username', () => {
    res.data.forEach((user: any) => {
      expect(user).toHaveProperty('username');
      expect(typeof user.username).toBe('string');
      expect(user.username).not.toBeNull();
      expectNoInvalidCharacters(user.username);
      expectNoNumbers(user.username);
      expect(user.username.length).toBeLessThanOrEqual(data.maximumLength);
    });
  });
  it('should have user objects with required properties for user\'s email', () => {
    res.data.forEach((user: any) => {
      expect(user).toHaveProperty('email');
      expect(typeof user.email).toBe('string');
      expect(user.email).not.toBeNull();
      expect(user.email).toMatch(data.basicEmailFormat);
      expect(user.email.length).toBeLessThanOrEqual(data.maximumLength);
    });
  });
  it('should have user objects with required properties for user\'s address', () => {
    res.data.forEach((user: any) => {
      expect(user).toHaveProperty('address');
      expect(user.address).toBeInstanceOf(Object);
      //ADDRESS PROPERTIES
      expect(user.address).toHaveProperty('street');
      expect(typeof user.address.street).toBe('string');
      expect(user.address.street).not.toBeNull();
      //
      expect(user.address).toHaveProperty('suite');
      expect(typeof user.address.suite).toBe('string');
      expect(user.address.suite).not.toBeNull();
      //
      expect(user.address).toHaveProperty('city');
      expect(typeof user.address.city).toBe('string');
      expect(user.address.city).not.toBeNull();
      //
      expect(user.address).toHaveProperty('zipcode');
      expect(typeof user.address.zipcode).toBe('string');
      expect(user.address.zipcode).not.toBeNull();
      //
      expect(user.address).toHaveProperty('geo');
      expect(user.address.geo).toBeInstanceOf(Object);
      //
      expect(user.address.geo).toHaveProperty('lat');
      expect(typeof user.address.geo.lat).toBe('string');
      expect(user.address.geo.lat).not.toBeNull();
      //
      expect(user.address.geo).toHaveProperty('lng');
      expect(typeof user.address.geo.lng).toBe('string');
      expect(user.address.geo.lng).not.toBeNull();
    });
  });
  it('should have user objects with required properties for user\'s phone', () => {
    res.data.forEach((user: any) => {
      expect(user).toHaveProperty('phone');
      expect(typeof user.phone).toBe('string');
      expect(user.phone).not.toBeNull();
      expect(user.phone.length).toBeLessThanOrEqual(25);
    });
  });
  it('should have user objects with required properties for user\'s website', () => {
    res.data.forEach((user: any) => {
      expect(user).toHaveProperty('website');
      expect(typeof user.website).toBe('string');
      expect(user.website).not.toBeNull();
      expectNoInvalidCharacters(user.website);
      expectNoNumbers(user.website);
      expect(user.website.length).toBeLessThanOrEqual(data.maximumLength);
      expect(user.website).toMatch(data.basicWebsiteFormat);
    });
  });
  it('should have user objects with required properties for user\'s company', () => {
    res.data.forEach((user: any) => {
      expect(user).toHaveProperty('company');
      expect(user.company).toBeInstanceOf(Object);
      // COMPANY PROPERTIES
      expect(user.company).toHaveProperty('name');
      expect(typeof user.company.name).toBe('string');
      expect(user.company.name).not.toBeNull();
      expectNoInvalidCharacters(user.company.name);
      expectNoNumbers(user.company.name);
      expect(user.company.name.length).toBeGreaterThan(data.minimumLength);
      expect(user.company.name.length).toBeLessThanOrEqual(data.maximumLength);
      //
      expect(user.company).toHaveProperty('catchPhrase');
      expect(typeof user.company.catchPhrase).toBe('string');
      expect(user.company.catchPhrase).not.toBeNull();
      expectNoInvalidCharacters(user.company.catchPhrase);
      expectNoNumbers(user.company.catchPhrase);
      expect(user.company.catchPhrase.length).toBeGreaterThan(data.minimumLength);
      expect(user.company.catchPhrase.length).toBeLessThanOrEqual(data.maximumLength);
      //
      expect(user.company).toHaveProperty('bs');
      expect(typeof user.company.bs).toBe('string');
      expect(user.company.bs).not.toBeNull();
      expectNoInvalidCharacters(user.company.bs);
      expectNoNumbers(user.company.bs);
      expect(user.company.bs.length).toBeGreaterThan(data.minimumLength);
      expect(user.company.bs.length).toBeLessThanOrEqual(data.maximumLength);
    });
  });
});
