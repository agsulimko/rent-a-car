// selector.js;
export const selectFavorites = state => state.autos.favorites;
export const selectAutos = state => state.autos.autos;
export const selectAutosFavorites = state => state.autos.autosFavorites;

export const selectLoading = state => state.autos.isLoading;
