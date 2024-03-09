const express = require('express');
// import express from 'express';
const router = express.Router();
router.get('/users', (req, res) => {
  res.send('This for the user template');
});

module.exports = router;
// export default router;