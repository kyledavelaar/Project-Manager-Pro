const mocha = require('mocha');
const expect = require('chai').expect;
const request = require('request');
const supertest = require('supertest');
const fs = require('fs');
const path = require('path');
const host = 'http://localhost:8000';
const port = process.env.port || 8000;


//Example - Passes Test
// describe('db unit tests', () => {
// 	describe('GET', () => {
// 		it('returns a status 200', () => {
// 			request.get('http://localhost:8000/createUser', (err, res) => {
// 				expect(res.statusCode).toEqual(200);
// 			});
// 		});
// 	});
// });

describe('db unit tests', () => {
	//tests userController.verify method
	describe('POST /verifyUser', () => {
		it('returns status code 200 if username/pw match user in db', () => {
			const user = { username: 'Bob', password: '1234' }
			request.post('http://localhost:8000/verifyUser')
				.send(user)
				.expect(200, done)
		});
		it('returns 401 if username/pw do not exist in database', () => {
			const user = { username: 'Morgan', password: 'loser' }
			request.post('http://localhost:8000/verifyUser')
				.send(user)
				.expect(401, done)
		});
	});
	describe('POST', () => {
		//tests userController.create method
		it('return 200 if new user has been added to the db', () => {
			const user = { username: 'Cory', password: '4321' }
			request.post('http://localhost:8000/createUser')
				.send(user)
				.expect(200, done)
		});
		it('return 400 if user already exists', () => {
			const user = { username: 'Chris', password: 'ilovetesting' }
			request.post('http://localhost:8000/createUser')
				.send(user)
				.expect(400, done)
		});
	});
	//tests userController.update method
	// describe('GET', () => {
	// 	it('checks if a user has been updated in the db', () => {
	// 		request.get('', (err, res) => {
	// 			//checks if username equals new username
	// 			//and password equals new password
	// 			expect('new username').toEqual(req.body.username);
	// 			expect('new password').toEqual(req.body.password);
	// 		});
	// 	});
	// });
	//tests userController.destroy method
	describe('GET', () => {
		it('checks if a user has been deleted from db', () => {
			request.get('http://localhost:8000/api/user/:username')
		});
	});
});