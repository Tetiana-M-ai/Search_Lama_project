import { getSupabase } from './supabase.js';

export const getRealEstateItems = () => {
  const supabase = getSupabase();
  return supabase.from('realEtate_items').select('*');
};

export const addRealEstateItems = async ({
  area_from,
  area_to,
  type,
  building,
  disposition,
  electricity,
  land_area_from,
  land_area_to,
  nemovitost,
  other,
  price_from,
  price_to,
  property,
  state,
  street,
  town,
}) => {
  const supabase = getSupabase();
  const user = await supabase.auth.getUser();
  console.log(user);
  return supabase.from('filters').insert({
    // area_from: area_from,
    // area_to: area_to,
    nemovitost: nemovitost,
    type: type,
    building: building,
    disposition: disposition,
    email: user?.data?.user?.email,
    electricity: electricity,
    // land_area_from: land_area_from,
    // land_area_to: land_area_to,
    nemovitost: nemovitost,
    other: other,
    // price_from: price_from,
    // price_to: price_to,
    property: property,
    state: state,
    street: street,
    town: town,
  });
};
