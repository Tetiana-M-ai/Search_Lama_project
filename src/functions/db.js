import { getSupabase } from './supabase.js';

export const getRealEstateItems = () => {
  const supabase = getSupabase();
  return supabase.from('realEtate_items').select('*');
};

export const addRealEstateItems = (
  area_from,
  area_to,
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
) => {
  const supabase = getSupabase();

  return supabase.from('filters').insert({
    area_from: area_from,
    area_to: area_to,
    building: building,
    disposition: disposition,
    electricity: electricity,
    land_area_from: land_area_from,
    land_area_to: land_area_to,
    nemovitost: nemovitost,
    other: other,
    price_from: price_from,
    price_to: price_to,
    property: property,
    state: state,
    street: street,
    town: town,
  });
};
