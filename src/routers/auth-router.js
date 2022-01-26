const router = require('express').Router();
const passpost =require('passport')

router.get('/login',(req,res)=>{
    res.render('login',{user:req.user});
})

router.get('/signup',(req,res)=>{
    res.render('signup',{user:req.user});
})

router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
})

router.get('/google', passpost.authenticate(
    'google' ,{
        scope : ['profile' , 'email']
    }
))

router.get('/google/redirect', passpost.authenticate('google') ,(req,res)=>{
    res.redirect('/users/profile')
})

module.exports = router;