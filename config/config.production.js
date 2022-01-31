var ENV = 'production';

var TITLE = "openbike.ulm.dev - bikesharing for employees of the City of Ulm";
var NAME = "OpenBike";
var SYSTEM_URL = "https://api.openbike.ulm.dev";
var API_ROOT = SYSTEM_URL + "/api";
var GBFS_URL = SYSTEM_URL + "/gbfs/gbfs.json";

var DEFAULT_LOCATION = [52.0123, 4.7108];
var DEFAULT_ZOOM = 15;

var I18N_MESSAGE_OVERRIDE = {
  "en": {
    "message": {
      "about": {
        "html": "An experimental <a href='https://github.com/transportkollektiv/openbike'>open source</a> bikesharing, currently testing with employees of the City of Ulm.<br /><b>Want to take part?</b> Drop us a line &rarr; <a href='mailto:openbike@ulm.dev'>openbike@ulm.dev</a>"
      }
    }
  },
  "de": {
    "message": {
      "app": {
        "unvalidated-message": "U kunt nog geen fietsen huren omdat uw account nog niet is geactiveerd. <a href='mailto:openbike@smartrent.tech'>stuur ons</a> uw gebruikersnaam die in de rechterbovenhoek wordt weergegeven om te worden geactiveerd."
      },
      "about": {
        "html": "Een experimentele <a href='https://github.com/transportkollektiv/openbike'>open source</a> deelfietstest met medewerkers van de zorg<br /><b>Deelnemen?</b > Neem contact op → <a href='mailto:openbike@smartrent.tech'>openbike@smartrent.tech</a>"
      }
    }
  }
};

var SUPPORT_TYPE = 'zammad';
var SUPPORT_URL = 'https://support.smartrent.tech';

var SENTRY_DSN = '';

module.exports = { ENV, TITLE, NAME, API_ROOT, GBFS_URL, DEFAULT_LOCATION, DEFAULT_ZOOM, I18N_MESSAGE_OVERRIDE, SUPPORT_TYPE, SUPPORT_URL, SENTRY_DSN };
