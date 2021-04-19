import { createStore } from 'redux';
import {EnthusiasmAction} from './actions/index'
import { enthusiasm } from './reducers/index';
import { StoreState } from './../types/index';

export default  createStore<StoreState,EnthusiasmAction,unknown, unknown>(enthusiasm);