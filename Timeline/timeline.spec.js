//to run tests in mocha, you have to import the file here
const assert = require('assert')
    //calling mocha properties
const timelineFunctions = require('./timelineFunctions')
    //in brackets - file ROUTE

describe('newPost()', () => {
    it('should add a new post to the timeline', () => {

    })
    it('should not allow empty post', () => {

    })
});

describe('newComment', () => {
    it('should add a new comment on a post', () => {

    })
});

describe('editPost', () => {
    it('should edit post', () => {

    })
    it('should save new version of post', () => {

    })
});

describe('deletePost', () => {
    it('should delete a post after user confirmation', () => {

    })
});

describe('countStars', () => {
    it('should count number of stars clicked per post', () => {

    })
    it('should increase number of stars by 1 for every click of the icon', () => {

    })
});

describe('displayStars', () => {
    it('should display number of stars clicked per post', () => {

    })
});

const register = require(". / register")

describe("registerWithFirebase", () => {
    it("should save new login information", () => {

    })

});