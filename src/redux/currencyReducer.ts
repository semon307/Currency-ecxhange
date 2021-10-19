import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfNOK: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 8.36,
            sellRate: 2.23,
        },
        {
            currencyName: 'EUR',
            buyRate: 9.74,
            sellRate: 9.59,
        },
        {
            currencyName: 'RUB',
            buyRate: 0.1205,
            sellRate: 0.1182,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfNOK: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {

    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
            return {
                ...state,
                ...action.payload,
            }
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {
                ...state,
                ...action.payload,
                amountOfNOK: "",
                amountOfCurrency: ""
            }
        default:
            return state;
    }
};
