const express = require('express');
const testServer = require('../Controllers/Project');
// import express from 'express';
const router = express.Router();

router.get('/testing', (req, res) => {
  res.send(testServer());
});

module.exports = router;
// export default router