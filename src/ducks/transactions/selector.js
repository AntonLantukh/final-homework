import moment from 'moment';

export const getRecords = state => {
  return state.transactions.records.map(item => ({
    id: item.id,
    usd: item.usd_delta ? Number(item.usd_delta).toFixed(3) : 0,
    btc: item.btc_delta,
    eth: item.eth_delta,
    date: moment(item.created_at, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format(
      'DD.MM.YYYY HH:mm'
    )
  }));
};
export const getIsRecordLoading = state => state.transactions.isLoading;
