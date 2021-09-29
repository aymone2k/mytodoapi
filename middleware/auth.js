const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
// à mettre en place et vérifier lors via l'app
module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
      const userId = decodedToken.userId;
      if (req.body.userId && req.body.userId !== userId) {
        throw 'Invalid user ID';
      } else {
        next();
      }
    } catch (err){
      res.status(401).json({
        message: err.message
      });
    }
  };