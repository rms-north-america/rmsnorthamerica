import * as path from './path';

// Product
export const PRODUCT = [
    {
        label: 'Overview',
        to: path.PRODUCT + path.PRODUCT_OVERVIEW,
    },
    {
        label: 'Available Features',
        to: path.PRODUCT + path.PRODUCT_FEATURES,
    },
    {
        label: 'Resources',
        to: path.PRODUCT + path.PRODUCT_RESOURCES,
    },
    {
        label: 'Interfaces',
        to: path.PRODUCT + path.PRODUCT_INTERFACES,
    },
    {
        label: 'Support',
        to: path.PRODUCT + path.PRODUCT_SUPPORT,
    },
];

// Industry
export const INDUSTRY = [
    {
        label: 'Hotel',
        to: path.INDUSTRY + path.INDUSTRY_HOTEL,
    },
    {
        label: 'RV Park',
        to: path.INDUSTRY + path.INDUSTRY_RV_PARK,
    },
    {
        label: 'Campground',
        to: path.INDUSTRY + path.INDUSTRY_CAMPGROUND,
    },
    {
        label: 'Marina',
        to: path.INDUSTRY + path.INDUSTRY_MARINA,
    },
];

// About
export const ABOUT = [
    {
        label: 'Company Overview',
        to: path.ABOUT + path.ABOUT_COMPANY,
    },
    {
        label: 'Meet the Team',
        to: path.ABOUT + path.ABOUT_TEAM,
    },
    {
        label: 'Partner with Us',
        to: path.ABOUT + path.ABOUT_PARTNER,
    },
];

// Contact
export const CONTACT = [
    {
        label: 'North America',
        to: path.CONTACT + path.CONTACT_NORTH_AMERICA,
    },
    {
        label: 'Australia / Asia',
        to: path.CONTACT + path.CONTACT_AUSTRALIA_ASIA,
    },
    {
        label: 'New Zealand',
        to: path.CONTACT + path.CONTACT_NEW_ZEALAND,
    },
    {
        label: 'India',
        to: path.CONTACT + path.CONTACT_INDIA,
    },
    {
        label: 'Middle East',
        to: path.CONTACT + path.CONTACT_MIDDLE_EAST,
    },
    {
        label: 'UK & Ireland',
        to: path.CONTACT + path.CONTACT_UK_IRELAND,
    },
];

// Main
export const MAIN = [
    {
        label: 'Product',
        children: PRODUCT,
    },
    {
        label: 'Industries',
        children: INDUSTRY,
    },
    {
        label: 'News',
        to: path.POST,
    },
    {
        label: 'About',
        children: ABOUT,
    },
    {
        label: 'Contact',
        children: CONTACT,
    },
];

// Account - Log In
export const ACCOUNT_LOG_IN = [
    {
        label: 'Log in to RMS9',
        to: path.LOG_IN_RMS_NINE,
    },
    {
        label: 'Log in to RMS9+',
        to: path.LOG_IN_RMS_NINE_PLUS,
    },
    {
        label: 'Customer Support Center',
        to: path.CUSTOMER_SUPPORT_CENTER,
    },
    {
        label: 'Remote Assistance',
        to: path.REMOTE_ASSISTANCE,
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
        to: path.PRIVACY_POLICY,
    },
];
