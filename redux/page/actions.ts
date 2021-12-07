import {Action} from "../store";

export const ActionTypes = {
  INCREMENT_INDEX_PAGE: "[PAGES] increment index page",
  DECREMENT_INDEX_PAGE: "[PAGES] decrement index page"
}

export const incrementIndexPage = (): Action<never> => ({
  type: ActionTypes.INCREMENT_INDEX_PAGE,
})

export const decrementIndexPage = (): Action<never> => ({
  type: ActionTypes.INCREMENT_INDEX_PAGE,
})