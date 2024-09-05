import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  modal: 'scale-0',
  showModal: 'scale-0',
  updateModal: 'scale-0',
  loading: { show: false, msg: '' },
  alert: { show: false, msg: 'Minting failed', color: 'red' },
  connectedAccount: '',
  nft: null,
  nfts: [],
  transactions: [],
  contract: null,
});

const setAlert = (msg, color = 'red') => {
  setGlobalState('loading', { show: false, msg: '' });
  setGlobalState('alert', { show: true, msg, color });
  setTimeout(() => {
    setGlobalState('alert', { show: false, msg, color });
  }, 6000);
};

const setLoadingMsg = (msg) => {
  const loading = getGlobalState('loading');
  setGlobalState('loading', { ...loading, msg });
};

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars);
    var end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + '.';
    }
    return start + end;
  }
  return text;
};

export {
  setGlobalState,
  useGlobalState,
  getGlobalState,
  setLoadingMsg,
  setAlert,
  truncate,
};
