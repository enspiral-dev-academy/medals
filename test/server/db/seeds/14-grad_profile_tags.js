exports.seed = (knex, Promise) => {
  return knex('grad_profile_tags').insert([
    {id: 1, grad_profile_id: 1, profile_tag_id: 1},
    {id: 2, grad_profile_id: 1, profile_tag_id: 2},
    {id: 3, grad_profile_id: 1, profile_tag_id: 3}
  ])
}
