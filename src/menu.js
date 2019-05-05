import * as path from './path';

// Product
export const INDUSTRIES = [
    {
        label: 'Hotel & Resort',
        to: path.POST,
    },
    {
        label: 'Motel',
        to: path.ROOT,
    },
];

// Main
export const MAIN = [
    {
        label: 'Industries',
        children: INDUSTRIES,
    },
    {
        label: 'News',
        to: path.POST,
    },
];
