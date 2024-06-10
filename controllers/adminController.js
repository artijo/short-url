import supabase from '../lib/supabase.js';

const dashboard = async (req, res) => {
  

    res.render('admin');
};

const login = async (req, res) => {
    const {email, password} = req.body;
    if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
        return res.status(401).json({error: 'Unauthorized'});
    }
    // Create a session
    req.session.user = {
        email: process.env.ADMIN_EMAIL,
    };
    res.redirect('/admin');
};

export { dashboard, login };