const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('landing/home.hbs', {
		home: true
	});
});

router.get('/login', (req, res) => {
	res.render('landing/login.hbs', {
		login: true
	});
});

router.get('/dashboard', (req, res) => {
	res.render('admin/dashboard.hbs', {
		dashboard: true
	});
});

router.get('/video-analytics', (req, res) => {
	res.render('admin/video-analytics.hbs', {
		video_analytics: true
	});
});

router.get('/face', (req, res) => {
	res.render('admin/face.hbs', {
		face: true
	});
});

module.exports = router;