// selector.js;
import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.adverts;
export const selectFavorites = state => state.adverts.favorites;

export const selectLoading = state => state.adverts.isLoading;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectAdverts, selectFilter, selectLoading],
  (adverts, filter, isLoading) => {
    const normalizedValue = filter.toLowerCase().trim();
    return adverts.filter(advert =>
      advert.nake.toLowerCase().includes(normalizedValue)
    );
  }
);
