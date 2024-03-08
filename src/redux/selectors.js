// selector.js;

export const selectAdverts = state => state.adverts.adverts;
export const selectFavorites = state => state.adverts.favorites;
export const selectAutos = state => state.adverts.autos;
export const selectAutosFavorites = state => state.adverts.autosFavorites;

export const selectLoading = state => state.adverts.isLoading;

