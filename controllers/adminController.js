import supabase from '../lib/supabase.js';

const dashboard = async (req, res) => {
    if(!req.session.user){
        return res.redirect('/login');
    }
    // Get all links and Sort by created_at
    try{
        const { data, error } = await supabase
            .from('links')
            .select()
            .order('created_at', { ascending: false });
        res.render('admin', { links: data });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
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