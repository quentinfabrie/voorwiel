var ENV = 'staging';

var TITLE = "dev.bike - experimental bikesharing with an open source stack";
var NAME = "dev.bike";
var SYSTEM_URL = "https://api.dev.bike";
var API_ROOT = SYSTEM_URL + "/api";
var GBFS_URL = SYSTEM_URL + "/gbfs/gbfs.json";

var DEFAULT_LOCATION = [52.0123, 4.7108];
var DEFAULT_ZOOM = 15;

var I18N_MESSAGE_OVERRIDE = {};

var SUPPORT_TYPE = 'zammad';
var SUPPORT_URL = 'https://support.ulm.dev';

var SENTRY_DSN = '';

module.exports = { ENV, TITLE, NAME, API_ROOT, GBFS_URL, DEFAULT_LOCATION, DEFAULT_ZOOM, I18N_MESSAGE_OVERRIDE, SUPPORT_TYPE, SUPPORT_URL, SENTRY_DSN };
