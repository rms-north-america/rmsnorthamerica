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
        label: 'Product',
        to: path.POST,
    },
    {
        label: 'Industries',
        children: INDUSTRIES,
    },
    {
        label: 'News',
        to: path.POST,
    },
    {
        label: 'About',
        to: path.POST,
    },
    {
        label: 'Contact',
        to: path.POST,
    },
];

// Footer - One
export const FOOTER_ONE = [
    {
        label: 'Home',
        to: path.ROOT,
    },
    {
        label: 'Support',
        to: path.ROOT,
    },
];

// Footer - Two
export const FOOTER_TWO = [
    {
        label: 'About Us',
        to: path.ROOT,
    },
    {
        label: 'News & Events',
        to: path.ROOT,
    },
    {
        label: 'Contact Us',
        to: path.ROOT,
    },
    {
        label: 'Careers',
        to: path.ROOT,
    },
];

// Footer - Three
export const FOOTER_THREE = [
    {
        label: 'Live Chat',
        to: path.ROOT,
    },
    {
        label: 'Referral Program',
        to: path.ROOT,
    },
    {
        label: 'User License',
        to: path.ROOT,
    },
    {
        label: 'Privacy Policy',
        to: path.ROOT,
    },
];
