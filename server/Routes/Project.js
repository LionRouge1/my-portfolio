const express = require('express');
// import express from 'express';
const router = express.Router();

router.get('/testing', (req, res) => {
  res.send('This is tros toppp!!');
});

module.exports = router;
// export default router