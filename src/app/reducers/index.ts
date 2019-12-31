import * as fromSpeech from './speech';
import { createSelector } from 'reselect'

// export const getQueryState = (state: State) => state.query;

export interface State {speech: fromSpeech.State;}
// export const getQuery = createSelector(getQueryState, fromQuery.getQuery);
export const getSpeechState = (state: State) => state.speech;
export const getspeechStatus = createSelector(getSpeechState, fromSpeech.getspeechStatus);

