import supabase from '../lib/supabase.js';

const getAllLinks = async (req, res) => {
    const { data, error } = await supabase
  .from('links')
  .select()
  console.log(data)
};

const createLink = async (req, res) => {
    const { data, error } = await supabase
  .from('links')
  .insert(req.body)
  console.log(data)
};

const updateLink = async (req, res) => {
    const { data, error } = await supabase
  .from('links')
  .update(req.body)
  console.log(data)
};

const deleteLink = async (req, res) => {
    const { data, error } = await supabase
  .from('links')
  .delete()
  console.log(data)
};

const getLinkBySlug = async (req, res) => {
  const { data, error } = await supabase
    .from('links')
    .select()
    .eq('slug', req.params.slug);
  console.log(data)
  if (data.length === 0) {
    return res.status(404).json({ error: 'Link not found' });
  }
  // Redirect to the original URL
  res.redirect(data[0].url);
};

export { getAllLinks, createLink, updateLink, deleteLink, getLinkBySlug };