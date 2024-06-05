import supabase from '../lib/supabase.js';

const getAllLinks = async (req, res) => {
    const { data, error } = await supabase
  .from('links')
  .select()
  console.log(data)
};

export { getAllLinks };