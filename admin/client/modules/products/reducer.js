import * as t from './actionTypes'

const initialState = {
  items: [],
  selected: [],
  isFetching: false,
  isFetchedMore: false,
  isFetched: false,
  errorFetch: null,
  errorUpdate: null,
  didInvalidate: false,
  filter_active: false,
  filter_discontinued: false,
  filter_on_sale: false,
  filter_search: '',
  filter_stock_status: 'all'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.PRODUCTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case t.PRODUCTS_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        isFetched: true,
        items: action.items,
        didInvalidate: false
      })
    case t.PRODUCTS_FAILURE:
      return Object.assign({}, state, {
        errorFetch: action.error
      })
    // case t.PRODUCTS_INVALIDATE:
    //   return Object.assign({}, state, {
    //     didInvalidate: true
    //   })
    case t.PRODUCTS_SELECT:
      return Object.assign({}, state, {
        selected: [...state.selected, action.productId]
      })
    case t.PRODUCTS_DESELECT:
      return Object.assign({}, state, {
        selected: state.selected.filter(id => id !== action.productId)
      })
    case t.PRODUCTS_DESELECT_ALL:
      return Object.assign({}, state, {
        selected: []
      })
    case t.PRODUCTS_SELECT_ALL:
      let selected = state.items.map(item => item.id);
      return Object.assign({}, state, {
        selected: selected
      })
    case t.PRODUCTS_FILTER_SET_SEARCH:
      return Object.assign({}, state, {
        filter_search: action.search
      })
    case t.PRODUCTS_FILTER_SET_STOCK:
      return Object.assign({}, state, {
        filter_stock_status: action.stock_status
      })
    case t.PRODUCTS_FILTER_SET_ACTIVE:
      return Object.assign({}, state, {
        filter_active: action.active
      })
    case t.PRODUCTS_FILTER_SET_DISCONTINUED:
      return Object.assign({}, state, {
        filter_discontinued: action.discontinued
      })
    case t.PRODUCTS_FILTER_SET_ONSALE:
      return Object.assign({}, state, {
        filter_on_sale: action.on_sale
      })
    case t.PRODUCTS_MORE_REQUEST:
      return Object.assign({}, state, {
        isFetchingMore: true
      })
    case t.PRODUCTS_MORE_RECEIVE:
      return Object.assign({}, state, {
        isFetchingMore: false,
        items: [...state.items, ...action.items]
      })





    // case t.PRODUCT_UPDATE_REQUEST:
    //   return Object.assign({}, state, {
    //     isSaving: true,
    //   })
    // case t.PRODUCT_UPDATE_SUCCESS:
    //   return Object.assign({}, state, {
    //     isSaving: false
    //   })
    // case t.PRODUCT_UPDATE_FAILURE:
    //   return Object.assign({}, state, {
    //     isSaving: false,
    //     errorUpdate: action.error
    //   })


    case t.PRODUCT_SET_CATEGORY_SUCCESS:
    case t.PRODUCT_DELETE_SUCCESS:
    default:
      return state
  }
}