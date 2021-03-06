/**
 * This is a file containing constants for all of the routes we want to be able to go to
 */
export default {
    HOME: '/',
    SETTINGS: '/settings',
    SETTINGS_PROFILE: '/settings/profile',
    SETTINGS_PREFERENCES: '/settings/preferences',
    SETTINGS_PASSWORD: '/settings/password',
    SETTINGS_PAYMENTS: '/settings/payments',
    NEW_GROUP: '/new/group',
    NEW_CHAT: '/new/chat',
    REPORT: '/r',
    IOU_REQUEST: '/iou/request',
    IOU_BILL: '/iou/split',
    getReportRoute: reportID => `/r/${reportID}`,
    SEARCH: '/search',
    SET_PASSWORD: '/setpassword/:validateCode',
    SIGNIN: '/signin',
    NOT_FOUND: '/404',
    PROFILE: '/profile/:login',
    getProfileRoute: login => `/profile/${login}`,
};
