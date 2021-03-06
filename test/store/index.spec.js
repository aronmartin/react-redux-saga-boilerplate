import { store, persistor } from 'app-store';

describe('store', () => {
  it('should have a store', () => {
    expect(store.getState()).toEqual({
      _persist: { rehydrated: true, version: -1 },
      app: {
        alerts: [],
      },
      github: {
        repos: {
          data: {},
          message: '',
          query: '',
          state: 'idle',
        },
      },
      router: { location: null },
      user: {
        isAuthenticated: false,
        isRunning: false,
      },
    });
  });

  it('should have a persistor', () => {
    expect(persistor.getState()).toEqual({
      bootstrapped: true,
      registry: [],
    });
  });
});
