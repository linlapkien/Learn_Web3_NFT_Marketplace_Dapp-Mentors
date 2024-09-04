import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  modal: 'scale-0',
  showModal: 'scale-0',
  updateModal: 'scale-0',
  loading: { show: true, msg: '' },
});

const setLoadingMsg = (msg) => {
  const loading = getGlobalState('loading');
  setGlobalState('loading', { ...loading, msg });
};

export { setGlobalState, useGlobalState, getGlobalState, setLoadingMsg };
