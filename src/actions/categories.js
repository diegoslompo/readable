export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

// categories
export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}
