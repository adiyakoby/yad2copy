'use strict';

module.exports = {

    /**
     * Renders the home page view.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    getHomePage(req, res) {
        res.render('homePage');
    },

    /**
     * Renders the success page view.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    getSuccessPage(req, res) {
        res.render('success');
    },

    /**
     * Renders the new ad page view, optionally populating form fields with last ad data.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    async getNewAdPage(req, res) {
        res.render('newAd', {errors: {}, formData: {}});  // Render the new ad page with empty form data and errors object
    },

    /**
     * Renders the login page view.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    getLoginPage(req, res) {
        res.render('login', {errors: {}, formData: {}});
    },

    /**
     * Renders the admin page view.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    getAdminPage(req, res) {
      res.render('adminPage');
    },

    /**
     * Renders the signup page view.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    getSignUpPage(req, res) {
        res.render('signUp', {errors: {}, formData: {}});
    },

    /**
     * Renders the user page view.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     */
    getUserPage(req, res) {
        res.render('userPage');
    },


};