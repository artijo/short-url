import supabase from './lib/supabase.js';

const checkAuth = async (req, res, next) => {
    const user = await supabase.auth.getUserIdentities()
    console.log(user)
    if (!user) {
        return res.redirect('/login');
    }
    next();
    };

export { checkAuth }