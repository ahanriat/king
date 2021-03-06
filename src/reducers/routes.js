import { Map } from 'immutable';

const initialState = new Map({
  scene: new Map(),
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'REACT_NATIVE_ROUTER_FLUX_FOCUS':
      return state.merge({
        scene: action.scene,
      });

    default:
      return state;
  }
}
