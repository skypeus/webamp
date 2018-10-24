(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Webamp"] = factory();
	else
		root["Webamp"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 144);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(145);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* unused harmony reexport createProvider */
/* unused harmony reexport connectAdvanced */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = close;
/* harmony export (immutable) */ __webpack_exports__["_2"] = toggleVisualizerStyle;
/* harmony export (immutable) */ __webpack_exports__["o"] = minimize;
/* harmony export (immutable) */ __webpack_exports__["M"] = setFocus;
/* harmony export (immutable) */ __webpack_exports__["_4"] = unsetFocus;
/* harmony export (immutable) */ __webpack_exports__["n"] = loadSerializedState;
/* harmony export (immutable) */ __webpack_exports__["k"] = loadDefaultSkin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__windows__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["c"]; });
/* unused harmony reexport hideWindow */
/* unused harmony reexport showWindow */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["b"]; });
/* unused harmony reexport centerWindowsInView */
/* unused harmony reexport resetWindowSizes */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["a"]; });
/* unused harmony reexport ensureWindowsAreOnScreen */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["f"]; });
/* unused harmony reexport toggleLlamaMode */
/* unused harmony reexport setFocusedWindow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media__ = __webpack_require__(191);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["n"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equalizer__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["f"]; });
/* unused harmony reexport toggleEqAuto */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__files__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["d"]; });
/* unused harmony reexport setSkinFromArrayBuffer */
/* unused harmony reexport setSkinFromFileReference */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["h"]; });
/* unused harmony reexport fetchMediaDuration */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["e"]; });
/* unused harmony reexport loadMediaFile */
/* unused harmony reexport fetchMediaTags */
/* unused harmony reexport setEqFromFileReference */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playlist__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["j"]; });
/* unused harmony reexport scrollNTracks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["b"]; });







function close() {
  return dispatch => {
    // TODO: This could probably be improved by adding a "PREVENT_CLOSE" action
    // or something, but this works okay for now.
    let defaultPrevented = false;

    const cancel = () => {
      defaultPrevented = true;
    };

    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["g" /* CLOSE_REQUESTED */],
      cancel
    });

    if (!defaultPrevented) {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_9" /* STOP */]
      });
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["h" /* CLOSE_WINAMP */]
      });
    }
  };
}
function toggleVisualizerStyle() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_16" /* TOGGLE_VISUALIZER_STYLE */]
  };
}
function minimize() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["w" /* MINIMIZE_WINAMP */]
  };
}
function setFocus(input) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["T" /* SET_FOCUS */],
    input
  };
}
function unsetFocus() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_19" /* UNSET_FOCUS */]
  };
}
function loadSerializedState( // In the future this type should be the union of all versioned types.
serializedState) {
  return dispatch => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["t" /* LOAD_SERIALIZED_STATE */],
      serializedState
    });
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__windows__["d" /* ensureWindowsAreOnScreen */])());
  };
}
function loadDefaultSkin() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["s" /* LOAD_DEFAULT_SKIN */]
  };
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ADD_TRACK_FROM_URL = "ADD_TRACK_FROM_URL";
/* harmony export (immutable) */ __webpack_exports__["b"] = ADD_TRACK_FROM_URL;

const CLOSE_WINAMP = "CLOSE_WINAMP";
/* harmony export (immutable) */ __webpack_exports__["h"] = CLOSE_WINAMP;

const MINIMIZE_WINAMP = "MINIMIZE_WINAMP";
/* harmony export (immutable) */ __webpack_exports__["w"] = MINIMIZE_WINAMP;

const IS_PLAYING = "IS_PLAYING";
/* harmony export (immutable) */ __webpack_exports__["o"] = IS_PLAYING;

const IS_STOPPED = "IS_STOPPED";
/* harmony export (immutable) */ __webpack_exports__["p"] = IS_STOPPED;

const PAUSE = "PAUSE";
/* harmony export (immutable) */ __webpack_exports__["z"] = PAUSE;

const PLAY = "PLAY";
/* harmony export (immutable) */ __webpack_exports__["A"] = PLAY;

const SEEK_TO_PERCENT_COMPLETE = "SEEK_TO_PERCENT_COMPLETE";
/* harmony export (immutable) */ __webpack_exports__["I"] = SEEK_TO_PERCENT_COMPLETE;

const SET_BALANCE = "SET_BALANCE";
/* harmony export (immutable) */ __webpack_exports__["M"] = SET_BALANCE;

const SET_BAND_VALUE = "SET_BAND_VALUE";
/* harmony export (immutable) */ __webpack_exports__["O"] = SET_BAND_VALUE;

const SET_FOCUS = "SET_FOCUS";
/* harmony export (immutable) */ __webpack_exports__["T"] = SET_FOCUS;

const SET_BAND_FOCUS = "SET_BAND_FOCUS";
/* harmony export (immutable) */ __webpack_exports__["N"] = SET_BAND_FOCUS;

const SET_FOCUSED_WINDOW = "SET_FOCUSED_WINDOW";
/* harmony export (immutable) */ __webpack_exports__["U"] = SET_FOCUSED_WINDOW;

const SET_MEDIA = "SET_MEDIA";
/* harmony export (immutable) */ __webpack_exports__["V"] = SET_MEDIA;

const SET_SCRUB_POSITION = "SET_SCRUB_POSITION";
/* harmony export (immutable) */ __webpack_exports__["Z"] = SET_SCRUB_POSITION;

const SET_SKIN_DATA = "SET_SKIN_DATA";
/* harmony export (immutable) */ __webpack_exports__["_0"] = SET_SKIN_DATA;

const SET_VOLUME = "SET_VOLUME";
/* harmony export (immutable) */ __webpack_exports__["_3"] = SET_VOLUME;

const START_WORKING = "START_WORKING";
/* harmony export (immutable) */ __webpack_exports__["_7"] = START_WORKING;

const STEP_MARQUEE = "STEP_MARQUEE";
/* harmony export (immutable) */ __webpack_exports__["_8"] = STEP_MARQUEE;

const STOP = "STOP";
/* harmony export (immutable) */ __webpack_exports__["_9"] = STOP;

const STOP_WORKING = "STOP_WORKING";
/* harmony export (immutable) */ __webpack_exports__["_10"] = STOP_WORKING;

const TOGGLE_DOUBLESIZE_MODE = "TOGGLE_DOUBLESIZE_MODE";
/* harmony export (immutable) */ __webpack_exports__["_11"] = TOGGLE_DOUBLESIZE_MODE;

const SET_EQ_AUTO = "SET_EQ_AUTO";
/* harmony export (immutable) */ __webpack_exports__["Q"] = SET_EQ_AUTO;

const SET_EQ_ON = "SET_EQ_ON";
/* harmony export (immutable) */ __webpack_exports__["S"] = SET_EQ_ON;

const SET_EQ_OFF = "SET_EQ_OFF";
/* harmony export (immutable) */ __webpack_exports__["R"] = SET_EQ_OFF;

const TOGGLE_LLAMA_MODE = "TOGGLE_LLAMA_MODE";
/* harmony export (immutable) */ __webpack_exports__["_12"] = TOGGLE_LLAMA_MODE;

const TOGGLE_REPEAT = "TOGGLE_REPEAT";
/* harmony export (immutable) */ __webpack_exports__["_13"] = TOGGLE_REPEAT;

const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
/* harmony export (immutable) */ __webpack_exports__["_14"] = TOGGLE_SHUFFLE;

const TOGGLE_TIME_MODE = "TOGGLE_TIME_MODE";
/* harmony export (immutable) */ __webpack_exports__["_15"] = TOGGLE_TIME_MODE;

const TOGGLE_VISUALIZER_STYLE = "TOGGLE_VISUALIZER_STYLE";
/* harmony export (immutable) */ __webpack_exports__["_16"] = TOGGLE_VISUALIZER_STYLE;

const UNSET_FOCUS = "UNSET_FOCUS";
/* harmony export (immutable) */ __webpack_exports__["_19"] = UNSET_FOCUS;

const UPDATE_TIME_ELAPSED = "UPDATE_TIME_ELAPSED";
/* harmony export (immutable) */ __webpack_exports__["_21"] = UPDATE_TIME_ELAPSED;

const SET_USER_MESSAGE = "SET_USER_MESSAGE";
/* harmony export (immutable) */ __webpack_exports__["_2"] = SET_USER_MESSAGE;

const UNSET_USER_MESSAGE = "UNSET_USER_MESSAGE";
/* harmony export (immutable) */ __webpack_exports__["_20"] = UNSET_USER_MESSAGE;

const SET_PLAYLIST_SCROLL_POSITION = "SET_PLAYLIST_SCROLL_POSITION";
/* harmony export (immutable) */ __webpack_exports__["Y"] = SET_PLAYLIST_SCROLL_POSITION;

const CLICKED_TRACK = "CLICKED_TRACK";
/* harmony export (immutable) */ __webpack_exports__["f"] = CLICKED_TRACK;

const CTRL_CLICKED_TRACK = "CTRL_CLICKED_TRACK";
/* harmony export (immutable) */ __webpack_exports__["j"] = CTRL_CLICKED_TRACK;

const SHIFT_CLICKED_TRACK = "SHIFT_CLICKED_TRACK";
/* harmony export (immutable) */ __webpack_exports__["_6"] = SHIFT_CLICKED_TRACK;

const SELECT_ALL = "SELECT_ALL";
/* harmony export (immutable) */ __webpack_exports__["J"] = SELECT_ALL;

const SELECT_ZERO = "SELECT_ZERO";
/* harmony export (immutable) */ __webpack_exports__["K"] = SELECT_ZERO;

const INVERT_SELECTION = "INVERT_SELECTION";
/* harmony export (immutable) */ __webpack_exports__["n"] = INVERT_SELECTION;

const REMOVE_ALL_TRACKS = "REMOVE_ALL_TRACKS";
/* harmony export (immutable) */ __webpack_exports__["E"] = REMOVE_ALL_TRACKS;

const CROP_TRACKS = "CROP_TRACKS";
/* unused harmony export CROP_TRACKS */

const FILE_INFO = "FILE_INFO";
/* unused harmony export FILE_INFO */

const REMOVE_TRACKS = "REMOVE_TRACKS";
/* harmony export (immutable) */ __webpack_exports__["F"] = REMOVE_TRACKS;

const SET_AVAILABLE_SKINS = "SET_AVAILABLE_SKINS";
/* harmony export (immutable) */ __webpack_exports__["L"] = SET_AVAILABLE_SKINS;

const REVERSE_LIST = "REVERSE_LIST";
/* harmony export (immutable) */ __webpack_exports__["H"] = REVERSE_LIST;

const RANDOMIZE_LIST = "RANDOMIZE_LIST";
/* harmony export (immutable) */ __webpack_exports__["C"] = RANDOMIZE_LIST;

const SET_TRACK_ORDER = "SET_TRACK_ORDER";
/* harmony export (immutable) */ __webpack_exports__["_1"] = SET_TRACK_ORDER;

const PLAY_TRACK = "PLAY_TRACK";
/* harmony export (immutable) */ __webpack_exports__["B"] = PLAY_TRACK;

const BUFFER_TRACK = "BUFFER_TRACK";
/* harmony export (immutable) */ __webpack_exports__["d"] = BUFFER_TRACK;

const DRAG_SELECTED = "DRAG_SELECTED";
/* harmony export (immutable) */ __webpack_exports__["l"] = DRAG_SELECTED;

const SET_MEDIA_TAGS = "SET_MEDIA_TAGS";
/* harmony export (immutable) */ __webpack_exports__["X"] = SET_MEDIA_TAGS;

const SET_MEDIA_DURATION = "SET_MEDIA_DURATION";
/* harmony export (immutable) */ __webpack_exports__["W"] = SET_MEDIA_DURATION;

const TOGGLE_WINDOW = "TOGGLE_WINDOW";
/* harmony export (immutable) */ __webpack_exports__["_17"] = TOGGLE_WINDOW;

const ADD_GEN_WINDOW = "ADD_GEN_WINDOW";
/* harmony export (immutable) */ __webpack_exports__["a"] = ADD_GEN_WINDOW;

const CLOSE_WINDOW = "CLOSE_WINDOW";
/* harmony export (immutable) */ __webpack_exports__["i"] = CLOSE_WINDOW;

const MEDIA_TAG_REQUEST_INITIALIZED = "MEDIA_TAG_REQUEST_INITIALIZED";
/* harmony export (immutable) */ __webpack_exports__["v"] = MEDIA_TAG_REQUEST_INITIALIZED;

const MEDIA_TAG_REQUEST_FAILED = "MEDIA_TAG_REQUEST_FAILED";
/* harmony export (immutable) */ __webpack_exports__["u"] = MEDIA_TAG_REQUEST_FAILED;

const NETWORK_CONNECTED = "NETWORK_CONNECTED";
/* harmony export (immutable) */ __webpack_exports__["x"] = NETWORK_CONNECTED;

const NETWORK_DISCONNECTED = "NETWORK_DISCONNECTED";
/* harmony export (immutable) */ __webpack_exports__["y"] = NETWORK_DISCONNECTED;

const UPDATE_WINDOW_POSITIONS = "UPDATE_WINDOW_POSITIONS";
/* harmony export (immutable) */ __webpack_exports__["_22"] = UPDATE_WINDOW_POSITIONS;

const CHANNEL_COUNT_CHANGED = "CHANNEL_COUNT_CHANGED";
/* harmony export (immutable) */ __webpack_exports__["e"] = CHANNEL_COUNT_CHANGED;

const WINDOW_SIZE_CHANGED = "WINDOW_SIZE_CHANGED";
/* harmony export (immutable) */ __webpack_exports__["_23"] = WINDOW_SIZE_CHANGED;

const TOGGLE_WINDOW_SHADE_MODE = "TOGGLE_WINDOW_SHADE_MODE";
/* harmony export (immutable) */ __webpack_exports__["_18"] = TOGGLE_WINDOW_SHADE_MODE;

const LOADED = "LOADED";
/* harmony export (immutable) */ __webpack_exports__["q"] = LOADED;

const REGISTER_VISUALIZER = "REGISTER_VISUALIZER";
/* harmony export (immutable) */ __webpack_exports__["D"] = REGISTER_VISUALIZER;

const SET_Z_INDEX = "SET_Z_INDEX";
/* harmony export (immutable) */ __webpack_exports__["_5"] = SET_Z_INDEX;

const DISABLE_MARQUEE = "DISABLE_MARQUEE";
/* harmony export (immutable) */ __webpack_exports__["k"] = DISABLE_MARQUEE;

const SET_DUMMY_VIZ_DATA = "SET_DUMMY_VIZ_DATA";
/* harmony export (immutable) */ __webpack_exports__["P"] = SET_DUMMY_VIZ_DATA;

const SET_WINDOW_VISIBILITY = "SET_WINDOW_VISIBILITY";
/* harmony export (immutable) */ __webpack_exports__["_4"] = SET_WINDOW_VISIBILITY;

const LOADING = "LOADING";
/* harmony export (immutable) */ __webpack_exports__["r"] = LOADING;

const CLOSE_REQUESTED = "CLOSE_REQUESTED";
/* harmony export (immutable) */ __webpack_exports__["g"] = CLOSE_REQUESTED;

const LOAD_SERIALIZED_STATE = "LOAD_SERIALIZED_STATE";
/* harmony export (immutable) */ __webpack_exports__["t"] = LOAD_SERIALIZED_STATE;

const RESET_WINDOW_SIZES = "RESET_WINDOW_SIZES";
/* harmony export (immutable) */ __webpack_exports__["G"] = RESET_WINDOW_SIZES;

const BROWSER_WINDOW_SIZE_CHANGED = "BROWSER_WINDOW_SIZE_CHANGED";
/* harmony export (immutable) */ __webpack_exports__["c"] = BROWSER_WINDOW_SIZE_CHANGED;

const LOAD_DEFAULT_SKIN = "LOAD_DEFAULT_SKIN";
/* harmony export (immutable) */ __webpack_exports__["s"] = LOAD_DEFAULT_SKIN;

const ENABLE_MEDIA_LIBRARY = "ENABLE_MEDIA_LIBRARY";
/* harmony export (immutable) */ __webpack_exports__["m"] = ENABLE_MEDIA_LIBRARY;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseSkin_json__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseSkin_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__baseSkin_json__);

const BANDS = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];
/* harmony export (immutable) */ __webpack_exports__["a"] = BANDS;

const WINDOWS = {
  MAIN: "main",
  PLAYLIST: "playlist",
  EQUALIZER: "equalizer",
  MEDIA_LIBRARY: "mediaLibrary"
};
/* harmony export (immutable) */ __webpack_exports__["m"] = WINDOWS;

const LOAD_STYLE = {
  BUFFER: "BUFFER",
  PLAY: "PLAY",
  NONE: "NONE"
};
/* harmony export (immutable) */ __webpack_exports__["e"] = LOAD_STYLE;
 // TODO: Make this an enum?

const MEDIA_TAG_REQUEST_STATUS = {
  INITIALIZED: "INITIALIZED",
  FAILED: "FAILED",
  COMPLETE: "COMPLETE",
  NOT_REQUESTED: "NOT_REQUESTED"
};
/* harmony export (immutable) */ __webpack_exports__["g"] = MEDIA_TAG_REQUEST_STATUS;

const UTF8_ELLIPSIS = "\u2026";
/* harmony export (immutable) */ __webpack_exports__["j"] = UTF8_ELLIPSIS;

const CHARACTER_WIDTH = 5;
/* harmony export (immutable) */ __webpack_exports__["b"] = CHARACTER_WIDTH;

const WINDOW_RESIZE_SEGMENT_WIDTH = 25;
/* harmony export (immutable) */ __webpack_exports__["o"] = WINDOW_RESIZE_SEGMENT_WIDTH;

const WINDOW_RESIZE_SEGMENT_HEIGHT = 29;
/* harmony export (immutable) */ __webpack_exports__["n"] = WINDOW_RESIZE_SEGMENT_HEIGHT;

const WINDOW_HEIGHT = 116;
/* unused harmony export WINDOW_HEIGHT */

const WINDOW_WIDTH = 275;
/* harmony export (immutable) */ __webpack_exports__["p"] = WINDOW_WIDTH;

const TRACK_HEIGHT = 13;
/* harmony export (immutable) */ __webpack_exports__["i"] = TRACK_HEIGHT;

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
/* harmony export (immutable) */ __webpack_exports__["d"] = LETTERS;

const DEFAULT_SKIN = __WEBPACK_IMPORTED_MODULE_0__baseSkin_json__;
/* harmony export (immutable) */ __webpack_exports__["c"] = DEFAULT_SKIN;

const VISUALIZERS = {
  OSCILLOSCOPE: "OSCILLOSCOPE",
  BAR: "BAR",
  NONE: "NONE"
};
/* harmony export (immutable) */ __webpack_exports__["k"] = VISUALIZERS;

const VISUALIZER_ORDER = [VISUALIZERS.BAR, VISUALIZERS.OSCILLOSCOPE, // TODO: Verify the order
VISUALIZERS.NONE];
/* harmony export (immutable) */ __webpack_exports__["l"] = VISUALIZER_ORDER;

const TIME_MODE = {
  ELAPSED: "ELAPSED",
  REMAINING: "REMAINING"
};
/* harmony export (immutable) */ __webpack_exports__["h"] = TIME_MODE;
 // TODO: Convert to enum once we are fully Typescript

const MEDIA_STATUS = {
  PLAYING: "PLAYING",
  STOPPED: "STOPPED",
  PAUSED: "PAUSED"
};
/* harmony export (immutable) */ __webpack_exports__["f"] = MEDIA_STATUS;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["P"] = getWindowSize;
/* harmony export (immutable) */ __webpack_exports__["L"] = getWindowOpen;
/* harmony export (immutable) */ __webpack_exports__["O"] = getWindowShade;
/* harmony export (immutable) */ __webpack_exports__["K"] = getWindowHidden;
/* unused harmony export getFocusedWindow */
/* unused harmony export getWindowPosition */
/* harmony export (immutable) */ __webpack_exports__["q"] = getPositionsAreRelative;
/* unused harmony export getDoubled */
/* unused harmony export getLlamaMode */
/* harmony export (immutable) */ __webpack_exports__["v"] = getSerlializedState;
/* harmony export (immutable) */ __webpack_exports__["h"] = getEqualizerEnabled;
/* unused harmony export getEqualizerAuto */
/* harmony export (immutable) */ __webpack_exports__["b"] = getBrowserWindowSize;
/* unused harmony export getDebugData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playlistHtml__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_tracks__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_display__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers_equalizer__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers_media__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers_windows__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__trackUtils__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__marqueeUtils__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__resizeUtils__ = __webpack_require__(97);














const getSliders = state => state.equalizer.sliders;
/* unused harmony export getSliders */

const getEqfData = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getSliders, sliders => {
  const preset = {
    name: "Entry1",
    preamp: __WEBPACK_IMPORTED_MODULE_3__utils__["e" /* denormalize */](sliders.preamp)
  };
  __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* BANDS */].forEach(band => {
    preset[`hz${band}`] = __WEBPACK_IMPORTED_MODULE_3__utils__["e" /* denormalize */](sliders[band]);
  });
  const eqfData = {
    presets: [preset],
    type: "Winamp EQ library file v1.1"
  };
  return eqfData;
});
/* harmony export (immutable) */ __webpack_exports__["g"] = getEqfData;

const getTracks = state => state.tracks;
/* harmony export (immutable) */ __webpack_exports__["E"] = getTracks;

const getTracksMatchingFilter = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTracks, tracks => {
  const tracksArray = Object.values(tracks);
  const filter = __WEBPACK_IMPORTED_MODULE_3__utils__["l" /* makeCachingFilterFunction */](tracksArray, (track, query) => __WEBPACK_IMPORTED_MODULE_11__trackUtils__["a" /* trackFilterContents */](track).includes(query));
  return filterString => {
    return filter(filterString.toLowerCase());
  };
});
/* harmony export (immutable) */ __webpack_exports__["F"] = getTracksMatchingFilter;

const getTrackUrl = state => {
  return id => {
    const track = state.tracks[id];
    return track == null ? null : track.url;
  };
};
/* harmony export (immutable) */ __webpack_exports__["D"] = getTrackUrl;

const getTrackOrder = state => state.playlist.trackOrder;
/* harmony export (immutable) */ __webpack_exports__["C"] = getTrackOrder;

const getTrackCount = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTrackOrder, trackOrder => trackOrder.length);
/* harmony export (immutable) */ __webpack_exports__["z"] = getTrackCount;

const getOrderedTracks = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTracks, getTrackOrder, (tracks, trackOrder) => trackOrder.filter(id => tracks[id]));
/* harmony export (immutable) */ __webpack_exports__["m"] = getOrderedTracks;

const getOrderedTrackObjects = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTracks, getOrderedTracks, (tracks, trackOrder) => trackOrder.map(id => tracks[id]));
const getSelectedTrackIds = state => {
  return state.playlist.selectedTracks;
};
/* harmony export (immutable) */ __webpack_exports__["t"] = getSelectedTrackIds;

const getSelectedTrackObjects = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getOrderedTrackObjects, getSelectedTrackIds, (tracks, selectedIds) => tracks.filter(track => selectedIds.has(track.id)));
/* harmony export (immutable) */ __webpack_exports__["u"] = getSelectedTrackObjects;
 // If a duration is `null`, it counts as zero, which seems fine enough.

const runningTimeFromTracks = tracks => tracks.reduce((time, track) => time + Number(track.duration), 0);

const getTotalRunningTime = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getOrderedTrackObjects, runningTimeFromTracks);
const getSelectedRunningTime = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getSelectedTrackObjects, runningTimeFromTracks); // Note: We should append "+" to these values if some of the tracks are of unknown time.

const getRunningTimeMessage = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTotalRunningTime, getSelectedRunningTime, (totalRunningTime, selectedRunningTime) => `${__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getTimeStr */](selectedRunningTime)}/${__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getTimeStr */](totalRunningTime)}`);
/* harmony export (immutable) */ __webpack_exports__["r"] = getRunningTimeMessage;
 // TODO: use slectors to get memoization

const getCurrentTrackIndex = state => {
  const playlist = state.playlist;

  if (playlist.currentTrack == null) {
    return -1;
  }

  return playlist.trackOrder.indexOf(playlist.currentTrack);
};
/* unused harmony export getCurrentTrackIndex */

const getCurrentTrackNumber = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getCurrentTrackIndex, currentTrackIndex => currentTrackIndex + 1);
/* unused harmony export getCurrentTrackNumber */

const getCurrentTrackId = state => state.playlist.currentTrack;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCurrentTrackId;

const nextTrack = (state, n = 1) => {
  const trackOrder = state.playlist.trackOrder,
        repeat = state.media.repeat;
  const trackCount = getTrackCount(state);

  if (trackCount === 0) {
    return null;
  }

  const currentIndex = getCurrentTrackIndex(state);
  let nextIndex = currentIndex + n;

  if (repeat) {
    nextIndex = nextIndex % trackCount;

    if (nextIndex < 0) {
      // Handle wrapping around backwards
      nextIndex += trackCount;
    }

    return trackOrder[nextIndex];
  }

  if (currentIndex === trackCount - 1 && n > 0) {
    return null;
  } else if (currentIndex === 0 && n < 0) {
    return null;
  }

  nextIndex = __WEBPACK_IMPORTED_MODULE_3__utils__["d" /* clamp */](nextIndex, 0, trackCount - 1);
  return trackOrder[nextIndex];
};
/* harmony export (immutable) */ __webpack_exports__["S"] = nextTrack;

const BASE_WINDOW_HEIGHT = 58;
const getNumberOfVisibleTracks = state => {
  const playlistSize = getWindowSize(state)("playlist");
  return Math.floor((BASE_WINDOW_HEIGHT + __WEBPACK_IMPORTED_MODULE_4__constants__["n" /* WINDOW_RESIZE_SEGMENT_HEIGHT */] * playlistSize[1]) / __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* TRACK_HEIGHT */]);
};
/* unused harmony export getNumberOfVisibleTracks */

const getOverflowTrackCount = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTrackCount, getNumberOfVisibleTracks, (trackCount, numberOfVisibleTracks) => Math.max(0, trackCount - numberOfVisibleTracks));
/* harmony export (immutable) */ __webpack_exports__["n"] = getOverflowTrackCount;


const _getPlaylistScrollPosition = state => state.display.playlistScrollPosition;

const getPlaylistScrollPosition = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getOverflowTrackCount, _getPlaylistScrollPosition, (overflowTrackCount, playlistScrollPosition) => {
  if (overflowTrackCount === 0) {
    return 0;
  }

  return Math.round(Math.round(overflowTrackCount * playlistScrollPosition / 100) / overflowTrackCount * 100);
});
/* harmony export (immutable) */ __webpack_exports__["o"] = getPlaylistScrollPosition;

const getScrollOffset = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(_getPlaylistScrollPosition, getTrackCount, getNumberOfVisibleTracks, (playlistScrollPosition, trackCount, numberOfVisibleTracks) => {
  const overflow = Math.max(0, trackCount - numberOfVisibleTracks);
  return __WEBPACK_IMPORTED_MODULE_3__utils__["u" /* percentToIndex */](playlistScrollPosition / 100, overflow + 1);
});
/* harmony export (immutable) */ __webpack_exports__["s"] = getScrollOffset;

const getVisibleTrackIds = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getScrollOffset, getTrackOrder, getNumberOfVisibleTracks, (offset, trackOrder, numberOfVisibleTracks) => trackOrder.slice(offset, offset + numberOfVisibleTracks));
/* harmony export (immutable) */ __webpack_exports__["G"] = getVisibleTrackIds;

const getTrackIsVisibleFunction = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getVisibleTrackIds, visibleTrackIds => {
  return id => visibleTrackIds.includes(id);
});
/* harmony export (immutable) */ __webpack_exports__["B"] = getTrackIsVisibleFunction;

const getVisibleTracks = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getVisibleTrackIds, getTracks, (visibleTrackIds, tracks) => visibleTrackIds.map(id => tracks[id]));
/* unused harmony export getVisibleTracks */

const getPlaylist = state => state.playlist;
/* unused harmony export getPlaylist */

const getDuration = state => {
  const playlist = state.playlist,
        tracks = state.tracks;

  if (playlist.currentTrack == null) {
    return null;
  }

  const currentTrack = tracks[playlist.currentTrack];
  return currentTrack && currentTrack.duration;
};
/* unused harmony export getDuration */

const getTrackDisplayName = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTracks, tracks => {
  return trackId => __WEBPACK_IMPORTED_MODULE_6__reducers_tracks__["b" /* getTrackDisplayName */](tracks, trackId);
});
/* harmony export (immutable) */ __webpack_exports__["A"] = getTrackDisplayName;

const getCurrentTrackDisplayName = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getCurrentTrackId, getTrackDisplayName, (id, getName) => {
  return getName(id);
});
/* unused harmony export getCurrentTrackDisplayName */

const getMediaIsPlaying = state => state.media.status === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* MEDIA_STATUS */].PLAYING;
/* unused harmony export getMediaIsPlaying */

const getCurrentTrack = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getCurrentTrackId, getTracks, (trackId, tracks) => {
  return trackId == null ? null : tracks[trackId];
});
/* unused harmony export getCurrentTrack */

const getCurrentlyPlayingTrackIdIfLoaded = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getMediaIsPlaying, getCurrentTrack, (mediaIsPlaying, currentTrack) => {
  if (!mediaIsPlaying || !currentTrack || currentTrack.mediaTagsRequestStatus === __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* MEDIA_TAG_REQUEST_STATUS */].INITIALIZED) {
    return null;
  }

  return currentTrack.id;
});
/* harmony export (immutable) */ __webpack_exports__["f"] = getCurrentlyPlayingTrackIdIfLoaded;

const getCurrentTrackInfo = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getCurrentTrack, track => {
  if (track == null) {
    return null;
  }

  return {
    url: track.url,
    metaData: {
      title: track.title || null,
      artist: track.artist || null,
      album: track.album || null,
      albumArtUrl: track.albumArtUrl || null
    }
  };
});
/* harmony export (immutable) */ __webpack_exports__["e"] = getCurrentTrackInfo;

const getMinimalMediaText = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getCurrentTrackNumber, getCurrentTrackDisplayName, (trackNumber, name) => name == null ? null : `${trackNumber}. ${name}`);
/* harmony export (immutable) */ __webpack_exports__["k"] = getMinimalMediaText;

const getMediaText = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getMinimalMediaText, getDuration, (minimalMediaText, duration) => minimalMediaText == null ? null : // TODO: Maybe the `  ***  ` should actually be added by the marquee
`${minimalMediaText} (${__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getTimeStr */](duration)})  ***  `);
/* unused harmony export getMediaText */

const getNumberOfTracks = state => getTrackOrder(state).length;
/* harmony export (immutable) */ __webpack_exports__["l"] = getNumberOfTracks;

const getPlaylistDuration = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTracks, tracks => Object.values(tracks).reduce((total, track) => total + (track.duration || 0), 0));
const getPlaylistURL = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getNumberOfTracks, getPlaylistDuration, getTrackOrder, getTracks, getTrackDisplayName, (numberOfTracks, playlistDuration, trackOrder, tracks, getDisplayName) => Object(__WEBPACK_IMPORTED_MODULE_5__playlistHtml__["a" /* createPlaylistURL */])({
  numberOfTracks,
  averageTrackLength: __WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getTimeStr */](playlistDuration / numberOfTracks),
  // TODO: Handle hours
  playlistLengthMinutes: Math.floor(playlistDuration / 60),
  playlistLengthSeconds: Math.floor(playlistDuration % 60),
  tracks: trackOrder.map((id, i) => `${i + 1}. ${getDisplayName(id)} (${__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getTimeStr */](tracks[id].duration)})`)
}));
/* harmony export (immutable) */ __webpack_exports__["p"] = getPlaylistURL;

const WINDOW_HEIGHT = 116;
const SHADE_WINDOW_HEIGHT = 14;

function getWPixelSize(w, doubled) {
  const _w$size = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default()(w.size, 2),
        width = _w$size[0],
        height = _w$size[1];

  const doubledMultiplier = doubled && w.canDouble ? 2 : 1;
  const pix = {
    height: WINDOW_HEIGHT + height * __WEBPACK_IMPORTED_MODULE_4__constants__["n" /* WINDOW_RESIZE_SEGMENT_HEIGHT */],
    width: __WEBPACK_IMPORTED_MODULE_4__constants__["p" /* WINDOW_WIDTH */] + width * __WEBPACK_IMPORTED_MODULE_4__constants__["o" /* WINDOW_RESIZE_SEGMENT_WIDTH */]
  };
  return {
    height: (w.shade ? SHADE_WINDOW_HEIGHT : pix.height) * doubledMultiplier,
    width: pix.width * doubledMultiplier
  };
}

function getWindowSize(state) {
  return windowId => state.windows.genWindows[windowId].size;
}
function getWindowOpen(state) {
  return windowId => state.windows.genWindows[windowId].open;
}
function getWindowShade(state) {
  return windowId => state.windows.genWindows[windowId].shade;
}
function getWindowHidden(state) {
  return windowId => state.windows.genWindows[windowId].hidden;
}
function getFocusedWindow(state) {
  return state.windows.focused;
}
function getWindowPosition(state) {
  return windowId => state.windows.genWindows[windowId].position;
}
function getPositionsAreRelative(state) {
  return state.windows.positionsAreRelative;
}
const getGenWindows = state => {
  return state.windows.genWindows;
};
/* harmony export (immutable) */ __webpack_exports__["i"] = getGenWindows;

const getWindowPositions = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getGenWindows, windows => __WEBPACK_IMPORTED_MODULE_3__utils__["r" /* objectMap */](windows, w => w.position));
/* harmony export (immutable) */ __webpack_exports__["N"] = getWindowPositions;

function getDoubled(state) {
  return state.display.doubled;
}
function getLlamaMode(state) {
  return state.display.llama;
}
const getWindowSizes = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getGenWindows, getDoubled, (windows, doubled) => {
  return __WEBPACK_IMPORTED_MODULE_3__utils__["r" /* objectMap */](windows, w => getWPixelSize(w, doubled));
});
/* harmony export (immutable) */ __webpack_exports__["Q"] = getWindowSizes;

const getWindowPixelSize = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getWindowSizes, sizes => {
  return windowId => sizes[windowId];
});
/* harmony export (immutable) */ __webpack_exports__["M"] = getWindowPixelSize;
 // TODO: Now that both size and position are stored on genWindows this seems a bit silly.

const getWindowsInfo = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getWindowSizes, getWindowPositions, (sizes, positions) => Object.keys(sizes).map(key => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
  key
}, sizes[key], positions[key])));
/* harmony export (immutable) */ __webpack_exports__["R"] = getWindowsInfo;

const getWindowGraph = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getWindowsInfo, __WEBPACK_IMPORTED_MODULE_13__resizeUtils__["a" /* generateGraph */]);
/* harmony export (immutable) */ __webpack_exports__["J"] = getWindowGraph;

const getSkinPlaylistStyle = state => {
  return state.display.skinPlaylistStyle || {
    normal: "#00FF00",
    current: "#FFFFFF",
    normalbg: "#000000",
    selectedbg: "#0000C6",
    font: "Arial"
  };
};
/* harmony export (immutable) */ __webpack_exports__["x"] = getSkinPlaylistStyle;

const getSkinGenExColors = state => {
  return state.display.skinGenExColors;
};
/* harmony export (immutable) */ __webpack_exports__["w"] = getSkinGenExColors;

const getVisualizerStyle = state => __WEBPACK_IMPORTED_MODULE_7__reducers_display__["c" /* getVisualizerStyle */](state.display);
/* harmony export (immutable) */ __webpack_exports__["H"] = getVisualizerStyle;

const getVolume = state => state.media.volume;
/* harmony export (immutable) */ __webpack_exports__["I"] = getVolume;

const getBalance = state => state.media.balance;
/* harmony export (immutable) */ __webpack_exports__["a"] = getBalance;

const getShuffle = state => state.media.shuffle;
/* unused harmony export getShuffle */

const getRepeat = state => state.media.repeat;
/* unused harmony export getRepeat */

const getChannels = state => state.media.channels;
/* harmony export (immutable) */ __webpack_exports__["c"] = getChannels;

function getSerlializedState(state) {
  return {
    version: 1,
    media: __WEBPACK_IMPORTED_MODULE_9__reducers_media__["b" /* getSerializedState */](state.media),
    equalizer: __WEBPACK_IMPORTED_MODULE_8__reducers_equalizer__["b" /* getSerializedState */](state.equalizer),
    display: __WEBPACK_IMPORTED_MODULE_7__reducers_display__["b" /* getSerializedState */](state.display),
    windows: __WEBPACK_IMPORTED_MODULE_10__reducers_windows__["b" /* getSerializedState */](state.windows)
  };
}
function getEqualizerEnabled(state) {
  return state.equalizer.on;
}
function getEqualizerAuto(state) {
  return state.equalizer.auto;
}
function getBrowserWindowSize(state) {
  return state.windows.browserWindowSize;
}
const getOpenWindows = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getGenWindows, genWindows => __WEBPACK_IMPORTED_MODULE_3__utils__["p" /* objectFilter */](genWindows, w => w.open));
/* unused harmony export getOpenWindows */

const getStackedLayoutPositions = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getOpenWindows, getDoubled, (openWindows, doubled) => {
  let offset = 0;
  return __WEBPACK_IMPORTED_MODULE_3__utils__["r" /* objectMap */](openWindows, w => {
    const position = {
      x: 0,
      y: offset
    };
    offset += getWPixelSize(w, doubled).height;
    return position;
  });
});
/* harmony export (immutable) */ __webpack_exports__["y"] = getStackedLayoutPositions;
 // TODO: Make this a reselect selector

const getMarqueeText = state => {
  const defaultText = "Winamp 2.91";

  if (state.userInput.userMessage != null) {
    return state.userInput.userMessage;
  }

  switch (state.userInput.focus) {
    case "balance":
      return __WEBPACK_IMPORTED_MODULE_12__marqueeUtils__["a" /* getBalanceText */](state.media.balance);

    case "volume":
      return __WEBPACK_IMPORTED_MODULE_12__marqueeUtils__["e" /* getVolumeText */](state.media.volume);

    case "position":
      if (state.media.length == null) {
        // This probably can't ever happen.
        return defaultText;
      }

      return __WEBPACK_IMPORTED_MODULE_12__marqueeUtils__["d" /* getPositionText */](state.media.length, state.userInput.scrubPosition);

    case "double":
      return __WEBPACK_IMPORTED_MODULE_12__marqueeUtils__["b" /* getDoubleSizeModeText */](state.display.doubled);

    case "eq":
      const band = state.userInput.bandFocused;

      if (band == null) {
        // This probably can't ever happen.
        return defaultText;
      }

      return __WEBPACK_IMPORTED_MODULE_12__marqueeUtils__["c" /* getEqText */](band, state.equalizer.sliders[band]);

    default:
      break;
  }

  if (state.playlist.currentTrack != null) {
    const mediaText = getMediaText(state);

    if (mediaText == null) {
      // This probably can't ever happen.
      return defaultText;
    }

    return mediaText;
  }

  return defaultText;
};
/* harmony export (immutable) */ __webpack_exports__["j"] = getMarqueeText;

function getDebugData(state) {
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
    display: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.display, {
      skinGenLetterWidths: "[[REDACTED]]",
      skinImages: "[[REDACTED]]",
      skinCursors: "[[REDACTED]]",
      skinRegion: "[[REDACTED]]"
    })
  });
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = downloadURI;
/* harmony export (immutable) */ __webpack_exports__["m"] = merge;
/* harmony export (immutable) */ __webpack_exports__["w"] = segment;
/* harmony export (immutable) */ __webpack_exports__["x"] = shuffle;
/* harmony export (immutable) */ __webpack_exports__["y"] = sort;
/* harmony export (immutable) */ __webpack_exports__["n"] = moveSelected;
/* unused harmony export spliceIn */
/* unused harmony export debounce */
/* unused harmony export throttle */
/* harmony export (immutable) */ __webpack_exports__["z"] = uniqueId;
/* harmony export (immutable) */ __webpack_exports__["q"] = objectForEach;
/* harmony export (immutable) */ __webpack_exports__["r"] = objectMap;
/* harmony export (immutable) */ __webpack_exports__["p"] = objectFilter;
/* harmony export (immutable) */ __webpack_exports__["g"] = findLastIndex;
/* harmony export (immutable) */ __webpack_exports__["k"] = getWindowSize;
/* harmony export (immutable) */ __webpack_exports__["A"] = weakMapMemoize;
/* harmony export (immutable) */ __webpack_exports__["l"] = makeCachingFilterFunction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);

const getTimeObj = time => {
  if (time == null) {
    // If we clean up `<MiniTime />` we don't need to do this any more.
    return {
      minutesFirstDigit: " ",
      minutesSecondDigit: " ",
      secondsFirstDigit: " ",
      secondsSecondDigit: " "
    };
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const digits = time == null ? [" ", " ", " ", " "] : [String(Math.floor(minutes / 10)), String(Math.floor(minutes % 10)), String(Math.floor(seconds / 10)), String(Math.floor(seconds % 10))];
  const minutesFirstDigit = digits[0],
        minutesSecondDigit = digits[1],
        secondsFirstDigit = digits[2],
        secondsSecondDigit = digits[3];
  return {
    minutesFirstDigit,
    minutesSecondDigit,
    secondsFirstDigit,
    secondsSecondDigit
  };
};
/* harmony export (immutable) */ __webpack_exports__["i"] = getTimeObj;

const getTimeStr = (time, truncate = true) => {
  if (time == null) {
    return "";
  }

  const _getTimeObj = getTimeObj(time),
        minutesFirstDigit = _getTimeObj.minutesFirstDigit,
        minutesSecondDigit = _getTimeObj.minutesSecondDigit,
        secondsFirstDigit = _getTimeObj.secondsFirstDigit,
        secondsSecondDigit = _getTimeObj.secondsSecondDigit;

  return [truncate && minutesFirstDigit === "0" ? "" : minutesFirstDigit, minutesSecondDigit, ":", secondsFirstDigit, secondsSecondDigit].join("");
};
/* harmony export (immutable) */ __webpack_exports__["j"] = getTimeStr;

const getFileExtension = fileName => {
  const matches = /\.([a-z]{3,4})$/i.exec(fileName);
  return matches ? matches[1].toLowerCase() : null;
};
/* harmony export (immutable) */ __webpack_exports__["h"] = getFileExtension;

const parseViscolors = text => {
  const entries = text.split("\n");
  const regex = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/;
  const colors = []; // changed to a hard number to deal with empty lines at the end...
  // plus it's only meant to be an exact quantity of numbers anyway.
  // - @PAEz

  for (let i = 0; i < 24; i++) {
    const matches = regex.exec(entries[i]);
    colors[i] = matches ? `rgb(${matches.slice(1, 4).join(",")})` : __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* DEFAULT_SKIN */].colors[i];
  }

  return colors;
};
/* harmony export (immutable) */ __webpack_exports__["t"] = parseViscolors;

const SECTION_REGEX = /^\s*\[(.+?)\]\s*$/;
const PROPERTY_REGEX = /^\s*([^;].*)\s*=\s*(.*)\s*$/;
const parseIni = text => {
  let section, match;
  return text.split(/[\r\n]+/g).reduce((data, line) => {
    if ((match = line.match(PROPERTY_REGEX)) && section != null) {
      const value = match[2].replace(/(^")|("$)|(^')|('$)/gi, "");
      data[section][match[1].trim().toLowerCase()] = value;
    } else if (match = line.match(SECTION_REGEX)) {
      section = match[1].trim().toLowerCase();
      data[section] = {};
    }

    return data;
  }, {});
};
/* harmony export (immutable) */ __webpack_exports__["s"] = parseIni;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
/* harmony export (immutable) */ __webpack_exports__["d"] = clamp;

const base64FromArrayBuffer = arrayBuffer => {
  const dataView = new Uint8Array(arrayBuffer);
  return window.btoa(String.fromCharCode(...dataView));
};
/* harmony export (immutable) */ __webpack_exports__["b"] = base64FromArrayBuffer;
 // https://stackoverflow.com/a/15832662/1263117

function downloadURI(uri, name) {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  window.document.body.appendChild(link);
  link.click();
  window.document.body.removeChild(link);
}
const toPercent = (min, max, value) => (value - min) / (max - min);
/* unused harmony export toPercent */

const percentToRange = (percent, min, max) => min + Math.round(percent * (max - min));
/* harmony export (immutable) */ __webpack_exports__["v"] = percentToRange;

const percentToIndex = (percent, length) => percentToRange(percent, 0, length - 1);
/* harmony export (immutable) */ __webpack_exports__["u"] = percentToIndex;


const rebound = (oldMin, oldMax, newMin, newMax) => oldValue => percentToRange(toPercent(oldMin, oldMax, oldValue), newMin, newMax); // Convert a .eqf value to a 1-100


const normalize = rebound(1, 64, 1, 100);
/* harmony export (immutable) */ __webpack_exports__["o"] = normalize;
 // Convert a 0-100 to an .eqf value

const denormalize = rebound(1, 100, 1, 64);
/* harmony export (immutable) */ __webpack_exports__["e"] = denormalize;
 // Merge a `source` object to a `target` recursively
// TODO: The typing here is a bit of a disaster.

function merge(target, source) {
  const s = source;
  const t = target; // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties

  for (const key of Object.keys(s)) {
    if (s[key] instanceof Object) Object.assign(s[key], merge(t[key], s[key]));
  } // Join `target` and modified `source`


  Object.assign(target || {}, source);
  return target;
} // Maps a value in a range (defined my min/max) to a value in an array (options).

function segment(min, max, value, newValues) {
  const ratio = toPercent(min, max, value);
  /*
  | 0 | 1 | 2 |
  0   1   2   3
  */

  return newValues[percentToIndex(ratio, newValues.length)];
}
const arraysAreEqual = (a, b) => a.length === b.length && a.every((value, i) => value === b[i]);
/* harmony export (immutable) */ __webpack_exports__["a"] = arraysAreEqual;
 // https://bost.ocks.org/mike/shuffle/
// Shuffle an array in O(n)

function shuffle(array) {
  const sorted = [...array];
  let m = sorted.length; // While there remain elements to shuffle…

  while (m) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * m--); // And swap it with the current element.

    const val = sorted[m];
    sorted[m] = sorted[i];
    sorted[i] = val;
  }

  return sorted;
}
function sort(array, iteratee) {
  return [...array].sort((a, b) => {
    const aKey = iteratee(a);
    const bKey = iteratee(b);

    if (aKey < bKey) {
      return -1;
    } else if (aKey > bKey) {
      return 1;
    }

    return 0;
  });
}
function moveSelected(arr, isSelected, offset) {
  const newArr = new Array(arr.length);
  let next = 0;

  for (let i = 0; i < newArr.length; i++) {
    const from = i - offset; // Is a value supposed to move here?

    if (from >= 0 && from < arr.length && isSelected(from)) {
      newArr[i] = arr[from];
    } else {
      while (next < arr.length && isSelected(next)) {
        next++;
      }

      newArr[i] = arr[next];
      next++;
    }
  }

  return newArr;
}
function spliceIn(original, start, newValues) {
  const newArr = [...original];
  newArr.splice(start, 0, ...newValues);
  return newArr;
}
function debounce(func, delay) {
  let timeout;
  let callbackArgs = [];
  return function (context, ...args) {
    callbackArgs = args;

    if (timeout != null) {
      clearTimeout(timeout);
    }

    timeout = window.setTimeout(() => {
      func.apply(context, callbackArgs);
    }, delay);
  };
} // Trailing edge only throttle

function throttle(func, delay) {
  let timeout = null;
  let callbackArgs = [];
  return function (context, ...args) {
    callbackArgs = args;

    if (!timeout) {
      timeout = window.setTimeout(() => {
        func.apply(context, callbackArgs);
        timeout = null;
      }, delay);
    }
  };
}
let counter = 0;
function uniqueId() {
  return counter++;
}
function objectForEach(obj, cb) {
  Object.keys(obj).forEach(key => cb(obj[key], key));
}
function objectMap(obj, cb) {
  const modified = {};
  Object.keys(obj).forEach(key => modified[key] = cb(obj[key], key));
  return modified;
}
function objectFilter(obj, predicate) {
  // TODO: Could return the original reference if no values change
  return Object.keys(obj).reduce((newObj, key) => {
    if (predicate(obj[key], key)) {
      newObj[key] = obj[key];
    }

    return newObj;
  }, {});
}
const calculateBoundingBox = windows => windows.map(w => ({
  left: w.x,
  top: w.y,
  bottom: w.y + w.height,
  right: w.x + w.width
})).reduce((b, w) => ({
  left: Math.min(b.left, w.left),
  top: Math.min(b.top, w.top),
  bottom: Math.max(b.bottom, w.bottom),
  right: Math.max(b.right, w.right)
}));
/* harmony export (immutable) */ __webpack_exports__["c"] = calculateBoundingBox;

function findLastIndex(arr, cb) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i])) {
      return i;
    }
  }

  return -1;
}
function getWindowSize() {
  // Aparently this is crazy across browsers.
  return {
    width: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth),
    height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
  };
}
function weakMapMemoize(func) {
  const cache = new WeakMap();
  return value => {
    if (!cache.has(value)) {
      cache.set(value, func(value));
    }

    return cache.get(value);
  };
}
// Is this a premature optimizaiton? Probably. But it's my side-project so I can
// do what I like. :P
function makeCachingFilterFunction(values, includes) {
  const cache = {
    results: values,
    subCaches: {}
  };
  return query => {
    let queryCache = cache;
    let lastResults = values;

    for (const char of query) {
      let letterCaches = queryCache.subCaches[char];

      if (!letterCaches) {
        letterCaches = queryCache.subCaches[char] = {
          subCaches: {}
        };
      } else if (letterCaches.results) {
        lastResults = letterCaches.results;
      }

      queryCache = letterCaches;
    }

    if (!queryCache.results) {
      queryCache.results = lastResults.filter(v => includes(v, query));
    }

    return queryCache.results;
  };
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(8);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_context_menu_css__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_context_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__css_context_menu_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__types__ = __webpack_require__(46);










class Portal extends __WEBPACK_IMPORTED_MODULE_3_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "_node", void 0);
  }

  componentWillMount() {
    this._node = document.createElement("div");
    this._node.id = "webamp-context-menu";
    this._node.style.position = "absolute";
    this._node.style.top = "0";
    this._node.style.left = "0";
    this._node.style.zIndex = String(this.props.zIndex + 1);
    document.body.appendChild(this._node);
  }

  componentWillUnmount() {
    if (this._node) {
      document.body.removeChild(this._node);
    }
  }

  render() {
    const style = {
      top: this.props.top,
      left: this.props.left,
      position: "absolute"
    };
    return Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["createPortal"])(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
      style: style
    }, this.props.children), this._node);
  }

}

const Hr = () => __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
  className: "hr"
}, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("hr", null));
/* harmony export (immutable) */ __webpack_exports__["a"] = Hr;

const Parent = ({
  children,
  label
}) => __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
  className: "parent"
}, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", null, children), label);
/* harmony export (immutable) */ __webpack_exports__["d"] = Parent;

const LinkNode = props => __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", props, props.label));
/* harmony export (immutable) */ __webpack_exports__["b"] = LinkNode;

const Node = props => {
  const label = props.label,
        checked = props.checked,
        _props$className = props.className,
        className = _props$className === void 0 ? "" : _props$className,
        passThroughProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(props, ["label", "checked", "className"]);

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
    className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(className, {
      checked
    })
  }, passThroughProps), label);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Node;


class ContextMenu extends __WEBPACK_IMPORTED_MODULE_3_react___default.a.Component {
  render() {
    const _this$props = this.props,
          children = _this$props.children,
          offsetTop = _this$props.offsetTop,
          offsetLeft = _this$props.offsetLeft,
          top = _this$props.top,
          bottom = _this$props.bottom,
          selected = _this$props.selected,
          zIndex = _this$props.zIndex;
    return selected && __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Portal, {
      top: offsetTop,
      left: offsetLeft,
      zIndex: zIndex
    }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
      className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()("context-menu", {
        top,
        bottom
      })
    }, children));
  }

}

const mapStateToProps = state => ({
  zIndex: state.display.zIndex
});

/* harmony default export */ __webpack_exports__["e"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(mapStateToProps)(ContextMenu));

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(204);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(150)();
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(146);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(186);

var iterableToArrayLimit = __webpack_require__(187);

var nonIterableRest = __webpack_require__(188);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(201);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(247);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(28);
var createDesc = __webpack_require__(49);
module.exports = __webpack_require__(30) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(37);
var IE8_DOM_DEFINE = __webpack_require__(114);
var toPrimitive = __webpack_require__(61);
var dP = Object.defineProperty;

exports.f = __webpack_require__(30) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(38)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(117);
var defined = __webpack_require__(62);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(65)('wks');
var uid = __webpack_require__(51);
var Symbol = __webpack_require__(17).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Character__ = __webpack_require__(106);



class CharacterString extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children;
  }

  render() {
    const text = `${this.props.children}` || "";
    const chars = text.split("");
    return chars.map((character, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Character__["a" /* default */], {
      key: index + character
    }, character));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (CharacterString);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PlaylistMenuEntry__ = __webpack_require__(234);




class PlaylistMenu extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(props) {
    super(props);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleClick", e => {
      const target = e.target;

      if (!(target instanceof Element)) {
        // TypeScript doesn't realize this will always be true
        return;
      }

      const selected = this.state.selected;

      if (selected) {
        this.setState({
          selected: false
        });
        return;
      }

      const handleClickOut = ee => {
        const clickOutTarget = ee.target;

        if (!(clickOutTarget instanceof Element)) {
          // TypeScript doesn't realize this will always be true
          return;
        } // If the click is _not_ inside the menu.


        if (!target.contains(clickOutTarget)) {
          // If we've clicked on a Context Menu spawed inside this menu, it will
          // register as an external click. However, hiding the menu will remove
          // the Context Menu from the DOM. Therefore, we wait until the next
          // event loop to actually hide ourselves.
          setTimeout(() => {
            // Close the menu
            this.setState({
              selected: false
            });
          }, 0);
          window.document.removeEventListener("click", handleClickOut, {
            capture: true
          });
        }
      };

      window.document.addEventListener("click", handleClickOut, {
        capture: true
      });
      this.setState({
        selected: true
      });
    });

    this.state = {
      selected: false
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: this.props.id,
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()("playlist-menu", {
        selected: this.state.selected
      }),
      onClick: this._handleClick
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "bar"
    }), this.state.selected && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.map(this.props.children, (child, i) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PlaylistMenuEntry__["a" /* default */], {
      key: i
    }, child))));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlaylistMenu;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(26);
var ctx = __webpack_require__(113);
var hide = __webpack_require__(27);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(160);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (false) {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getSerializedState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);




const defaultWindowsState = {
  focused: __WEBPACK_IMPORTED_MODULE_1__constants__["m" /* WINDOWS */].MAIN,
  positionsAreRelative: true,
  genWindows: {
    // TODO: Remove static capabilites and derive them from ids/generic
    [__WEBPACK_IMPORTED_MODULE_1__constants__["m" /* WINDOWS */].MAIN]: {
      title: "Main Window",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: false,
      canShade: true,
      canDouble: true,
      generic: false,
      hotkey: "Alt+W",
      position: {
        x: 0,
        y: 0
      }
    },
    [__WEBPACK_IMPORTED_MODULE_1__constants__["m" /* WINDOWS */].EQUALIZER]: {
      title: "Equalizer",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: false,
      canShade: true,
      canDouble: true,
      generic: false,
      hotkey: "Alt+G",
      position: {
        x: 0,
        y: 0
      }
    },
    [__WEBPACK_IMPORTED_MODULE_1__constants__["m" /* WINDOWS */].PLAYLIST]: {
      title: "Playlist Editor",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: true,
      canShade: true,
      canDouble: false,
      generic: false,
      hotkey: "Alt+E",
      position: {
        x: 0,
        y: 0
      }
    }
  },
  browserWindowSize: {
    width: 0,
    height: 0
  }
};

const windows = (state = defaultWindowsState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["m" /* ENABLE_MEDIA_LIBRARY */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [__WEBPACK_IMPORTED_MODULE_1__constants__["m" /* WINDOWS */].MEDIA_LIBRARY]: {
            title: "Winamp Library",
            size: [0, 0],
            open: true,
            hidden: false,
            shade: false,
            canResize: true,
            canShade: false,
            canDouble: false,
            generic: false,
            hotkey: "Alt+E",
            position: {
              x: 0,
              y: 0
            }
          }
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["U" /* SET_FOCUSED_WINDOW */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        focused: action.window
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_18" /* TOGGLE_WINDOW_SHADE_MODE */]:
      const canShade = state.genWindows[action.windowId].canShade;

      if (!canShade) {
        throw new Error(`Tried to shade/unshade a window that cannot be shaded: ${action.windowId}`);
      }

      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows[action.windowId], {
            shade: !state.genWindows[action.windowId].shade
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_17" /* TOGGLE_WINDOW */]:
      const windowState = state.genWindows[action.windowId];
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, windowState, {
            open: !windowState.open,
            // Reset hidden state when opening window
            hidden: windowState.open ? windowState.hidden : false
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["i" /* CLOSE_WINDOW */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows[action.windowId], {
            open: false
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_4" /* SET_WINDOW_VISIBILITY */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows[action.windowId], {
            hidden: action.hidden
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["a" /* ADD_GEN_WINDOW */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: {
            title: action.title,
            open: action.open,
            hidden: false,
            size: [0, 0],
            canShade: false,
            canResize: true,
            canDouble: false,
            generic: true,
            position: {
              x: 0,
              y: 0
            }
          }
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_23" /* WINDOW_SIZE_CHANGED */]:
      const canResize = state.genWindows[action.windowId].canResize;

      if (!canResize) {
        throw new Error(`Tried to resize a window that cannot be resized: ${action.windowId}`);
      }

      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows[action.windowId], {
            size: action.size
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_22" /* UPDATE_WINDOW_POSITIONS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        positionsAreRelative: action.absolute === true ? false : state.positionsAreRelative,
        genWindows: __WEBPACK_IMPORTED_MODULE_3__utils__["r" /* objectMap */](state.genWindows, (w, windowId) => {
          const newPosition = action.positions[windowId];

          if (newPosition == null) {
            return w;
          }

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, w, {
            position: newPosition
          });
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["G" /* RESET_WINDOW_SIZES */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_3__utils__["r" /* objectMap */](state.genWindows, w => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, w, {
          // Not sure why TypeScript can't figure this out for itself.
          size: [0, 0]
        }))
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["t" /* LOAD_SERIALIZED_STATE */]:
      {
        const _action$serializedSta = action.serializedState.windows,
              genWindows = _action$serializedSta.genWindows,
              focused = _action$serializedSta.focused,
              positionsAreRelative = _action$serializedSta.positionsAreRelative;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
          positionsAreRelative,
          genWindows: __WEBPACK_IMPORTED_MODULE_3__utils__["r" /* objectMap */](state.genWindows, (w, windowId) => {
            const serializedW = genWindows[windowId];

            if (serializedW == null) {
              return w;
            }

            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, w, serializedW);
          }),
          focused
        });
      }

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["c" /* BROWSER_WINDOW_SIZE_CHANGED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        browserWindowSize: {
          height: action.height,
          width: action.width
        }
      });

    default:
      return state;
  }
};

function getSerializedState(state) {
  return {
    positionsAreRelative: state.positionsAreRelative,
    genWindows: __WEBPACK_IMPORTED_MODULE_3__utils__["r" /* objectMap */](state.genWindows, w => {
      return {
        size: w.size,
        open: w.open,
        hidden: w.hidden,
        shade: w.shade || false,
        position: w.position
      };
    }),
    focused: state.focused
  };
}
/* harmony default export */ __webpack_exports__["a"] = (windows);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = genMediaTags;
/* harmony export (immutable) */ __webpack_exports__["c"] = genMediaDuration;
/* harmony export (immutable) */ __webpack_exports__["b"] = genArrayBufferFromFileReference;
/* harmony export (immutable) */ __webpack_exports__["e"] = promptForFileReferences;
/* harmony export (immutable) */ __webpack_exports__["a"] = filenameFromUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);

function genMediaTags(file, musicMetadata) {
  __WEBPACK_IMPORTED_MODULE_0_invariant___default()(file != null, "Attempted to get the tags of media file without passing a file");
  const options = {
    duration: true,
    skipPostHeaders: true // avoid unnecessary data to be read

  };

  if (typeof file === "string") {
    return musicMetadata.fetchFromUrl(file, options);
  } // Assume Blob


  return musicMetadata.parseBlob(file, options);
}
function genMediaDuration(url) {
  __WEBPACK_IMPORTED_MODULE_0_invariant___default()(typeof url === "string", "Attempted to get the duration of media file without passing a url");
  return new Promise((resolve, reject) => {
    // TODO: Does this actually stop downloading the file once it's
    // got the duration?
    const audio = document.createElement("audio");
    audio.crossOrigin = "anonymous";

    const durationChange = () => {
      resolve(audio.duration);
      audio.removeEventListener("durationchange", durationChange);
      audio.src = ""; // TODO: Not sure if this really gets cleaned up.
    };

    audio.addEventListener("durationchange", durationChange);
    audio.addEventListener("error", e => {
      reject(e);
    });
    audio.src = url;
  });
}
async function genArrayBufferFromFileReference(fileReference) {
  __WEBPACK_IMPORTED_MODULE_0_invariant___default()(fileReference != null, "Attempt to get an ArrayBuffer without assigning a fileReference");
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(fileReference);
  });
}
async function promptForFileReferences({
  accept,
  directory = false
} = {
  accept: null,
  directory: false
}) {
  return new Promise(resolve => {
    // Does this represent a memory leak somehow?
    // Can this fail? Do we ever reject?
    const fileInput = document.createElement("input");
    if (accept) fileInput.setAttribute("accept", accept);
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.webkitdirectory = directory; // @ts-ignore Non-standard

    fileInput.directory = directory; // @ts-ignore Non-standard

    fileInput.mozdirectory = directory; // Not entirely sure why this is needed, since the input
    // was just created, but somehow this helps prevent change
    // events from getting swallowed.
    // https://stackoverflow.com/a/12102992/1263117
    // @ts-ignore Technically you can't set this to null, it has to be a string.
    // But I don't feel like retesting it, so I'll leave it as null

    fileInput.value = null;
    fileInput.addEventListener("change", e => {
      const files = e.target.files;
      resolve(files);
    });
    fileInput.click();
  });
}

function urlIsBlobUrl(url) {
  return /^blob:/.test(url);
} // This is not perfect, but... meh: https://stackoverflow.com/a/36756650/1263117


function filenameFromUrl(url) {
  if (urlIsBlobUrl(url)) {
    return null;
  }

  const lastSegment = url.split("/").pop();

  if (lastSegment == null) {
    return null;
  }

  return lastSegment.split("#")[0].split("?")[0];
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);

class Emitter {
  constructor() {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_listeners", void 0);

    this._listeners = {};
  }

  on(event, callback) {
    const eventListeners = this._listeners[event] || [];
    eventListeners.push(callback);
    this._listeners[event] = eventListeners;

    const unsubscribe = () => {
      this._listeners[event] = eventListeners.filter(cb => cb !== callback);
    };

    return unsubscribe;
  }

  trigger(event, ...args) {
    const callbacks = this._listeners[event];

    if (callbacks) {
      callbacks.forEach(cb => cb(...args));
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Emitter;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_windows__ = __webpack_require__(43);
/* unused harmony reexport WebampWindow */
/* unused harmony reexport WindowInfo */
/* unused harmony reexport WindowPosition */
/* unused harmony reexport WindowPositions */



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);



// Winamp has a strange behavior for the buttons at the top of the main window.
// It shows through to the main background sprite until the first time that it's
// clicked, and then it shows the dedicated undepressed sprite thereafter.
// This component is an abstraction that tracks if a div has ever been clicked.
// Look in `skinSelectors` for CSS selectors that look like `#some-id.clicked`
// for examples of this functionality in use.
class ClickedDiv extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, this.props, {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(this.props.className, this.state),
      onMouseDown: e => {
        if (!this.state.clicked) {
          this.setState({
            clicked: true
          });
        }

        if (this.props.onMouseDown) {
          this.props.onMouseDown(e);
        }
      }
    }));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClickedDiv;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu__ = __webpack_require__(12);




class ContextMenuTarget extends __WEBPACK_IMPORTED_MODULE_2_react___default.a.Component {
  constructor(props) {
    super(props);

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty___default()(this, "handleNode", void 0);

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty___default()(this, "_handleHandleClick", () => {
      this.setState({
        selected: !this.state.selected
      });
    });

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty___default()(this, "_handleGlobalClick", e => {
      if ( // Typescript does not believe that these click events are always fired on DOM nodes.
      e.target instanceof Element && this.state.selected && // Not sure how, but it's possible for this to get called when handleNode is null/undefined.
      // https://sentry.io/share/issue/2066cd79f21e4f279791319f4d2ea35d/
      this.handleNode && !this.handleNode.contains(e.target)) {
        this.setState({
          selected: false
        });
      }
    });

    this.state = {
      selected: false
    };
  }

  componentDidMount() {
    document.addEventListener("click", this._handleGlobalClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this._handleGlobalClick);
  }

  _offset() {
    if (!this.handleNode) {
      return {
        top: 0,
        left: 0
      };
    }

    const rect = this.handleNode.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  render() {
    const _this$props = this.props,
          handle = _this$props.handle,
          children = _this$props.children,
          top = _this$props.top,
          bottom = _this$props.bottom,
          passThroughProps = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["handle", "children", "top", "bottom"]);

    const offset = this._offset();

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", passThroughProps, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      className: "handle",
      style: {
        width: "100%",
        height: "100%"
      },
      ref: node => this.handleNode = node,
      onClick: this._handleHandleClick
    }, handle), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["e" /* default */], {
      selected: this.state.selected,
      offsetTop: offset.top,
      offsetLeft: offset.left,
      top: top,
      bottom: bottom
    }, children));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ContextMenuTarget;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(116);
var enumBugKeys = __webpack_require__(66);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContextMenu__ = __webpack_require__(12);






class ContextMenuWraper extends __WEBPACK_IMPORTED_MODULE_3_react___default.a.Component {
  constructor(props) {
    super(props);

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "_handleGlobalRightClick", () => {
      this._closeMenu();
    });

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "_handleGlobalClick", e => {
      if (e.button === 2) {
        return;
      }

      this._closeMenu();
    });

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "_handleRightClick", e => {
      const pageX = e.pageX,
            pageY = e.pageY;
      this.setState({
        selected: true,
        // TODO: We could do an initial render to see if the menu fits here
        // and do a second render if it does not.
        offsetTop: pageY,
        offsetLeft: pageX
      }); // Even if you right click multiple times before closeing,
      // we should only end up with one global listener.

      document.addEventListener("click", this._handleGlobalClick);
      document.body.addEventListener("contextmenu", this._handleGlobalRightClick);
      e.preventDefault();
      e.stopPropagation();
    });

    this.state = {
      selected: false,
      offsetTop: null,
      offsetLeft: null
    };
  }

  componentWillUnmount() {
    this._closeMenu();
  }

  _closeMenu() {
    this.setState({
      selected: false,
      offsetTop: null,
      offsetLeft: null
    });
    document.removeEventListener("click", this._handleGlobalClick);
    document.body.removeEventListener("contextmenu", this._handleGlobalRightClick);
  }

  render() {
    const _this$props = this.props,
          children = _this$props.children,
          renderContents = _this$props.renderContents,
          passThroughProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["children", "renderContents"]);

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
      onContextMenu: this._handleRightClick,
      style: {
        width: "100%",
        height: "100%"
      }
    }, passThroughProps), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["e" /* default */], {
      selected: this.state.selected,
      offsetTop: this.state.offsetTop,
      offsetLeft: this.state.offsetLeft
    }, renderContents()), children);
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ContextMenuWraper;

ContextMenuWraper.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any.isRequired,
  renderContents: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(29);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(65)('keys');
var uid = __webpack_require__(51);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 67 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(120);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(37);
var dPs = __webpack_require__(260);
var enumBugKeys = __webpack_require__(66);
var IE_PROTO = __webpack_require__(64)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(115)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(261).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(28).f;
var has = __webpack_require__(20);
var TAG = __webpack_require__(32)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(32);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(26);
var LIBRARY = __webpack_require__(70);
var wksExt = __webpack_require__(74);
var defineProperty = __webpack_require__(28).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(277);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(281);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(120);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(84);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(87);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(59);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(165);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getSerializedState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(4);



const defaultState = {
  timeMode: __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* TIME_MODE */].ELAPSED,
  timeElapsed: 0,
  length: null,
  // Consider renaming to "duration"
  kbps: null,
  khz: null,
  // The winamp ini file declares the default volume as "200".
  // The UI seems to show a default volume near 78, which would
  // math with the default value being 200 out of 255.
  volume: Math.round(200 / 255 * 100),
  balance: 0,
  channels: null,
  shuffle: false,
  repeat: false,
  // TODO: Enforce possible values
  status: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].STOPPED
};

const media = (state = defaultState, action) => {
  switch (action.type) {
    // TODO: Make these constants
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["A" /* PLAY */]:
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["o" /* IS_PLAYING */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        status: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].PLAYING
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["z" /* PAUSE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        status: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].PAUSED
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_9" /* STOP */]:
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["p" /* IS_STOPPED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        status: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].STOPPED
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["e" /* CHANNEL_COUNT_CHANGED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        channels: action.channels
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_15" /* TOGGLE_TIME_MODE */]:
      const newMode = state.timeMode === __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* TIME_MODE */].REMAINING ? __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* TIME_MODE */].ELAPSED : __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* TIME_MODE */].REMAINING;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        timeMode: newMode
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_21" /* UPDATE_TIME_ELAPSED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        timeElapsed: action.elapsed
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["b" /* ADD_TRACK_FROM_URL */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        timeElapsed: 0,
        length: null,
        kbps: null,
        khz: null,
        channels: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["V" /* SET_MEDIA */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        length: action.length,
        kbps: action.kbps,
        khz: action.khz,
        channels: action.channels
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_3" /* SET_VOLUME */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        volume: action.volume
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["M" /* SET_BALANCE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        balance: action.balance
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_13" /* TOGGLE_REPEAT */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        repeat: !state.repeat
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_14" /* TOGGLE_SHUFFLE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        shuffle: !state.shuffle
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["t" /* LOAD_SERIALIZED_STATE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, action.serializedState.media);

    default:
      return state;
  }
};

function getSerializedState(state) {
  const volume = state.volume,
        balance = state.balance,
        shuffle = state.shuffle,
        repeat = state.repeat;
  return {
    volume,
    balance,
    shuffle,
    repeat
  };
}
/* harmony default export */ __webpack_exports__["a"] = (media);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(4);




const defaultSkinGenExColors = {
  itemBackground: "rgb(0,0,0)",
  itemForeground: "rgb(0,255,0)",
  windowBackground: "rgb(56,55,87)",
  buttonText: "rgb(57,57,66)",
  windowText: "rgb(255,255,255)",
  divider: "rgb(117,116,139)",
  playlistSelection: "rgb(0,0,198)",
  listHeaderBackground: "rgb(72,72,120)",
  listHeaderText: "rgb(255,255,255)",
  listHeaderFrameTopAndLeft: "rgb(108,108,180)",
  listHeaderFrameBottomAndRight: "rgb(36,36,60)",
  listHeaderFramePressed: "rgb(18,18,30)",
  listHeaderDeadArea: "rgb(36,36,60)",
  scrollbarOne: "rgb(36,36,60)",
  scrollbarTwo: "rgb(36,36,60)",
  pressedScrollbarOne: "rgb(121,130,150)",
  pressedScrollbarTwo: "rgb(78,88,110)",
  scrollbarDeadArea: "rgb(36,36,60)",
  listTextHighlighted: "rgb(0,198,255)",
  listTextHighlightedBackground: "rgb(0,198,255)",
  listTextSelected: "rgb(0,198,255)",
  listTextSelectedBackground: "rgb(0,198,255)"
};
const defaultDisplayState = {
  doubled: false,
  marqueeStep: 0,
  disableMarquee: false,
  loading: true,
  llama: false,
  closed: false,
  working: false,
  skinImages: __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* DEFAULT_SKIN */].images,
  skinColors: __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* DEFAULT_SKIN */].colors,
  skinCursors: null,
  skinPlaylistStyle: null,
  skinRegion: {},
  visualizerStyle: 0,
  // Index into VISUALIZER_ORDER
  dummyVizData: null,
  playlistScrollPosition: 0,
  skinGenLetterWidths: null,
  // TODO: Get the default value for this?
  skinGenExColors: defaultSkinGenExColors,
  additionalVisualizers: [],
  zIndex: 0
};

const display = (state = defaultDisplayState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["s" /* LOAD_DEFAULT_SKIN */]:
      const skinImages = defaultDisplayState.skinImages,
            skinColors = defaultDisplayState.skinColors,
            skinCursors = defaultDisplayState.skinCursors,
            skinPlaylistStyle = defaultDisplayState.skinPlaylistStyle,
            skinRegion = defaultDisplayState.skinRegion,
            skinGenLetterWidths = defaultDisplayState.skinGenLetterWidths,
            skinGenExColors = defaultDisplayState.skinGenExColors;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        skinImages,
        skinColors,
        skinCursors,
        skinPlaylistStyle,
        skinRegion,
        skinGenLetterWidths,
        skinGenExColors
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_11" /* TOGGLE_DOUBLESIZE_MODE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        doubled: !state.doubled
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_12" /* TOGGLE_LLAMA_MODE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        llama: !state.llama
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_8" /* STEP_MARQUEE */]:
      return state.disableMarquee ? state : __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        marqueeStep: state.marqueeStep + 1
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["k" /* DISABLE_MARQUEE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        disableMarquee: true
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_10" /* STOP_WORKING */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        working: false
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_7" /* START_WORKING */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        working: true
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["h" /* CLOSE_WINAMP */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        closed: true
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["r" /* LOADING */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        loading: true
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["q" /* LOADED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        loading: false
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_0" /* SET_SKIN_DATA */]:
      const data = action.data;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        loading: false,
        skinImages: data.skinImages,
        skinColors: data.skinColors,
        skinPlaylistStyle: data.skinPlaylistStyle,
        skinCursors: data.skinCursors,
        skinRegion: data.skinRegion,
        skinGenLetterWidths: data.skinGenLetterWidths,
        skinGenExColors: data.skinGenExColors || defaultSkinGenExColors
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_16" /* TOGGLE_VISUALIZER_STYLE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        visualizerStyle: (state.visualizerStyle + 1) % getVisualizationOrder(state).length
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["D" /* REGISTER_VISUALIZER */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        additionalVisualizers: [action.id, ...state.additionalVisualizers]
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["Y" /* SET_PLAYLIST_SCROLL_POSITION */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        playlistScrollPosition: action.position
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_5" /* SET_Z_INDEX */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        zIndex: action.zIndex
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["P" /* SET_DUMMY_VIZ_DATA */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        dummyVizData: action.data
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["t" /* LOAD_SERIALIZED_STATE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, action.serializedState.display);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (display);
const getSerializedState = state => {
  // My kingdom for a type-safe `_.pick`.
  const visualizerStyle = state.visualizerStyle,
        doubled = state.doubled,
        llama = state.llama,
        marqueeStep = state.marqueeStep,
        skinImages = state.skinImages,
        skinCursors = state.skinCursors,
        skinRegion = state.skinRegion,
        skinGenLetterWidths = state.skinGenLetterWidths,
        skinColors = state.skinColors,
        skinPlaylistStyle = state.skinPlaylistStyle;
  return {
    visualizerStyle,
    doubled,
    llama,
    marqueeStep,
    skinImages,
    skinCursors,
    skinRegion,
    skinGenLetterWidths,
    skinColors,
    skinPlaylistStyle
  };
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getSerializedState;

const getVisualizationOrder = state => {
  return [...state.additionalVisualizers, ...__WEBPACK_IMPORTED_MODULE_3__constants__["l" /* VISUALIZER_ORDER */]];
};
/* unused harmony export getVisualizationOrder */

const getVisualizerStyle = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(getVisualizationOrder, state => state.visualizerStyle, (visualizationOrder, visualizationStyle) => {
  return visualizationOrder[visualizationStyle];
});
/* harmony export (immutable) */ __webpack_exports__["c"] = getVisualizerStyle;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getSerializedState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);


const defaultState = {
  on: true,
  auto: false,
  sliders: {
    preamp: 50,
    60: 50,
    170: 50,
    310: 50,
    600: 50,
    1000: 50,
    3000: 50,
    6000: 50,
    12000: 50,
    14000: 50,
    16000: 50
  }
};

const equalizer = (state = defaultState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["O" /* SET_BAND_VALUE */]:
      const newSliders = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.sliders, {
        [action.band]: action.value
      });

      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        sliders: newSliders
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["S" /* SET_EQ_ON */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        on: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["R" /* SET_EQ_OFF */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        on: false
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["Q" /* SET_EQ_AUTO */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        auto: action.value
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["t" /* LOAD_SERIALIZED_STATE */]:
      return action.serializedState.equalizer || state;

    default:
      return state;
  }
};

function getSerializedState(state) {
  return state;
}
/* harmony default export */ __webpack_exports__["a"] = (equalizer);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trackUtils__ = __webpack_require__(94);




const defaultPlaylistState = {};

const tracks = (state = defaultPlaylistState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["b" /* ADD_TRACK_FROM_URL */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        [action.id]: {
          id: action.id,
          defaultName: action.defaultName || null,
          duration: action.duration == null ? null : action.duration,
          url: action.url,
          mediaTagsRequestStatus: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* MEDIA_TAG_REQUEST_STATUS */].INITIALIZED
        }
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["V" /* SET_MEDIA */]:
      {
        const newTrack = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state[action.id], {
          duration: action.length
        });

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
          [action.id]: newTrack
        });
      }

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["X" /* SET_MEDIA_TAGS */]:
      {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
          [action.id]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state[action.id], {
            mediaTagsRequestStatus: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* MEDIA_TAG_REQUEST_STATUS */].COMPLETE,
            title: action.title,
            artist: action.artist,
            album: action.album,
            albumArtUrl: action.albumArtUrl
          })
        });
      }

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["v" /* MEDIA_TAG_REQUEST_INITIALIZED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        [action.id]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state[action.id], {
          mediaTagsRequestStatus: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* MEDIA_TAG_REQUEST_STATUS */].INITIALIZED
        })
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["u" /* MEDIA_TAG_REQUEST_FAILED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        [action.id]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state[action.id], {
          mediaTagsRequestStatus: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* MEDIA_TAG_REQUEST_STATUS */].FAILED
        })
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["W" /* SET_MEDIA_DURATION */]:
      {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
          [action.id]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state[action.id], {
            duration: action.duration
          })
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (tracks);
const getTrackDisplayName = (state, id = null) => {
  if (id == null) {
    return null;
  }

  const track = state[id];

  if (track == null) {
    return null;
  }

  return __WEBPACK_IMPORTED_MODULE_3__trackUtils__["b" /* trackName */](track);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getTrackDisplayName;


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileUtils__ = __webpack_require__(44);


const trackName = __WEBPACK_IMPORTED_MODULE_0__utils__["A" /* weakMapMemoize */](track => {
  const artist = track.artist,
        title = track.title,
        defaultName = track.defaultName,
        url = track.url;

  if (artist && title) {
    return `${artist} - ${title}`;
  } else if (title) {
    return title;
  } else if (defaultName) {
    return defaultName;
  } else if (url) {
    const filename = __WEBPACK_IMPORTED_MODULE_1__fileUtils__["a" /* filenameFromUrl */](url);

    if (filename) {
      return filename;
    }
  }

  return "???";
});
/* harmony export (immutable) */ __webpack_exports__["b"] = trackName;

const trackFilename = __WEBPACK_IMPORTED_MODULE_0__utils__["A" /* weakMapMemoize */](track => {
  if (track.url) {
    const urlFilename = __WEBPACK_IMPORTED_MODULE_1__fileUtils__["a" /* filenameFromUrl */](track.url);

    if (urlFilename != null) {
      return urlFilename;
    }
  }

  if (track.defaultName) {
    return track.defaultName;
  }

  return "???";
});
/* unused harmony export trackFilename */

const trackFilterContents = __WEBPACK_IMPORTED_MODULE_0__utils__["A" /* weakMapMemoize */](track => {
  return [track.artist, track.title, track.defaultName].filter(Boolean).join("|").toLowerCase();
});
/* harmony export (immutable) */ __webpack_exports__["a"] = trackFilterContents;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = toggleDoubleSizeMode;
/* unused harmony export toggleLlamaMode */
/* harmony export (immutable) */ __webpack_exports__["h"] = toggleEqualizerShadeMode;
/* harmony export (immutable) */ __webpack_exports__["i"] = toggleMainWindowShadeMode;
/* harmony export (immutable) */ __webpack_exports__["j"] = togglePlaylistShadeMode;
/* harmony export (immutable) */ __webpack_exports__["c"] = closeWindow;
/* unused harmony export hideWindow */
/* unused harmony export showWindow */
/* unused harmony export setFocusedWindow */
/* harmony export (immutable) */ __webpack_exports__["e"] = setWindowSize;
/* harmony export (immutable) */ __webpack_exports__["k"] = toggleWindow;
/* harmony export (immutable) */ __webpack_exports__["l"] = updateWindowPositions;
/* harmony export (immutable) */ __webpack_exports__["b"] = centerWindowsInContainer;
/* unused harmony export centerWindowsInView */
/* unused harmony export centerWindows */
/* harmony export (immutable) */ __webpack_exports__["a"] = browserWindowSizeChanged;
/* unused harmony export resetWindowSizes */
/* harmony export (immutable) */ __webpack_exports__["f"] = stackWindows;
/* harmony export (immutable) */ __webpack_exports__["d"] = ensureWindowsAreOnScreen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resizeUtils__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__snapUtils__ = __webpack_require__(98);







// Dispatch an action and, if needed rearrange the windows to preserve
// the existing edge relationship.
//
// Works by checking the edges before the action is dispatched. Then,
// after disatching, calculating what position change would be required
// to restore those relationships.
function withWindowGraphIntegrity(action) {
  return (dispatch, getState) => {
    const state = getState();
    const graph = __WEBPACK_IMPORTED_MODULE_1__selectors__["J" /* getWindowGraph */](state);
    const originalSizes = __WEBPACK_IMPORTED_MODULE_1__selectors__["Q" /* getWindowSizes */](state);
    dispatch(action);
    const newSizes = __WEBPACK_IMPORTED_MODULE_1__selectors__["Q" /* getWindowSizes */](getState());
    const sizeDiff = {};

    for (const window of Object.keys(newSizes)) {
      const original = originalSizes[window];
      const current = newSizes[window];
      sizeDiff[window] = {
        height: current.height - original.height,
        width: current.width - original.width
      };
    }

    const positionDiff = Object(__WEBPACK_IMPORTED_MODULE_4__resizeUtils__["b" /* getPositionDiff */])(graph, sizeDiff);
    const windowPositions = __WEBPACK_IMPORTED_MODULE_1__selectors__["N" /* getWindowPositions */](state);
    const newPositions = __WEBPACK_IMPORTED_MODULE_2__utils__["r" /* objectMap */](windowPositions, (position, key) => Object(__WEBPACK_IMPORTED_MODULE_5__snapUtils__["a" /* applyDiff */])(position, positionDiff[key]));
    dispatch(updateWindowPositions(newPositions));
  };
}

function toggleDoubleSizeMode() {
  return withWindowGraphIntegrity({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_11" /* TOGGLE_DOUBLESIZE_MODE */]
  });
}
function toggleLlamaMode() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_12" /* TOGGLE_LLAMA_MODE */]
  };
}
function toggleEqualizerShadeMode() {
  return withWindowGraphIntegrity({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_18" /* TOGGLE_WINDOW_SHADE_MODE */],
    windowId: "equalizer"
  });
}
function toggleMainWindowShadeMode() {
  return withWindowGraphIntegrity({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_18" /* TOGGLE_WINDOW_SHADE_MODE */],
    windowId: "main"
  });
}
function togglePlaylistShadeMode() {
  return withWindowGraphIntegrity({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_18" /* TOGGLE_WINDOW_SHADE_MODE */],
    windowId: "playlist"
  });
}
function closeWindow(windowId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["i" /* CLOSE_WINDOW */],
    windowId
  };
}
function hideWindow(windowId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_4" /* SET_WINDOW_VISIBILITY */],
    windowId,
    hidden: true
  };
}
function showWindow(windowId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_4" /* SET_WINDOW_VISIBILITY */],
    windowId,
    hidden: false
  };
}
function setFocusedWindow(window) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["U" /* SET_FOCUSED_WINDOW */],
    window
  };
}
function setWindowSize(windowId, size) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_23" /* WINDOW_SIZE_CHANGED */],
    windowId,
    size
  };
}
function toggleWindow(windowId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_17" /* TOGGLE_WINDOW */],
    windowId
  };
}
function updateWindowPositions(positions, absolute) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_22" /* UPDATE_WINDOW_POSITIONS */],
    positions,
    absolute
  };
}
function centerWindowsInContainer(container) {
  return (dispatch, getState) => {
    if (!__WEBPACK_IMPORTED_MODULE_1__selectors__["q" /* getPositionsAreRelative */](getState())) {
      return;
    }

    const _container$getBoundin = container.getBoundingClientRect(),
          left = _container$getBoundin.left,
          top = _container$getBoundin.top;

    const width = container.scrollWidth,
          height = container.scrollHeight;
    dispatch(centerWindows({
      left,
      top,
      width,
      height
    }));
  };
}
function centerWindowsInView() {
  return centerWindows({
    left: window.scrollX,
    top: window.scrollY,
    width: window.innerWidth,
    height: window.innerHeight
  });
}
function centerWindows(box) {
  return (dispatch, getState) => {
    const state = getState();
    const windowsInfo = __WEBPACK_IMPORTED_MODULE_1__selectors__["R" /* getWindowsInfo */](state);
    const getOpen = __WEBPACK_IMPORTED_MODULE_1__selectors__["L" /* getWindowOpen */](state);
    const top = box.top,
          left = box.left,
          width = box.width,
          height = box.height;
    const offsetLeft = left + window.scrollX;
    const offsetTop = top + window.scrollY; // A layout has been suplied. We will compute the bounding box and
    // center the given layout.

    const bounding = __WEBPACK_IMPORTED_MODULE_2__utils__["c" /* calculateBoundingBox */](windowsInfo.filter(w => getOpen(w.key)));
    const boxHeight = bounding.bottom - bounding.top;
    const boxWidth = bounding.right - bounding.left;
    const move = {
      x: Math.ceil(offsetLeft - bounding.left + (width - boxWidth) / 2),
      y: Math.ceil(offsetTop - bounding.top + (height - boxHeight) / 2)
    };
    const newPositions = windowsInfo.reduce((pos, w) => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, pos, {
      [w.key]: {
        x: move.x + w.x,
        y: move.y + w.y
      }
    }), {});
    dispatch(updateWindowPositions(newPositions, true));
  };
}
function browserWindowSizeChanged(size) {
  return dispatch => {
    dispatch(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["c" /* BROWSER_WINDOW_SIZE_CHANGED */]
    }, size));
    dispatch(ensureWindowsAreOnScreen());
  };
}
function resetWindowSizes() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["G" /* RESET_WINDOW_SIZES */]
  };
}
function stackWindows() {
  return (dispatch, getState) => {
    dispatch(updateWindowPositions(__WEBPACK_IMPORTED_MODULE_1__selectors__["y" /* getStackedLayoutPositions */](getState())));
  };
}
function ensureWindowsAreOnScreen() {
  return (dispatch, getState) => {
    const state = getState();
    const windowsInfo = __WEBPACK_IMPORTED_MODULE_1__selectors__["R" /* getWindowsInfo */](state);
    const getOpen = __WEBPACK_IMPORTED_MODULE_1__selectors__["L" /* getWindowOpen */](state);

    const _Utils$getWindowSize = __WEBPACK_IMPORTED_MODULE_2__utils__["k" /* getWindowSize */](),
          height = _Utils$getWindowSize.height,
          width = _Utils$getWindowSize.width;

    const bounding = __WEBPACK_IMPORTED_MODULE_2__utils__["c" /* calculateBoundingBox */](windowsInfo.filter(w => getOpen(w.key)));
    const positions = __WEBPACK_IMPORTED_MODULE_1__selectors__["N" /* getWindowPositions */](state); // Are we good?

    if (bounding.left >= 0 && bounding.top >= 0 && bounding.right <= width && bounding.bottom <= height) {
      // My work here is done.
      return;
    }

    const boundingHeight = bounding.bottom - bounding.top;
    const boundingWidth = bounding.right - bounding.left; // Could we simply shift all the windows by a constant offset?

    if (boundingWidth <= width && boundingHeight <= height) {
      let moveY = 0;
      let moveX = 0;

      if (bounding.top <= 0) {
        moveY = bounding.top;
      } else if (bounding.bottom > height) {
        moveY = bounding.bottom - height;
      }

      if (bounding.left <= 0) {
        moveX = bounding.left;
      } else if (bounding.right > width) {
        moveX = bounding.right - width;
      }

      const newPositions = __WEBPACK_IMPORTED_MODULE_2__utils__["r" /* objectMap */](positions, position => ({
        x: position.x - moveX,
        y: position.y - moveY
      }));
      dispatch(updateWindowPositions(newPositions));
      return;
    } // TODO: Try moving the individual groups to try to fit them in
    // I give up. Just reset everything.


    dispatch(resetWindowSizes());
    dispatch(stackWindows());
    dispatch(centerWindowsInView());
  };
}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getPositionDiff;
/* harmony export (immutable) */ __webpack_exports__["a"] = generateGraph;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);

function getPositionDiff(graph, sizeDiff) {
  const newGraph = {};
  const positionDiff = {};

  for (const key of Object.keys(graph)) {
    newGraph[key] = {
      above: [],
      left: []
    };
    positionDiff[key] = {
      x: 0,
      y: 0
    };
  } // Construct an inverted graph


  for (const _ref of Object.entries(graph)) {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref, 2);

    const key = _ref2[0];
    const neighbors = _ref2[1];
    const below = neighbors.below,
          right = neighbors.right;

    if (right != null) {
      newGraph[right].left.push(key);
    }

    if (below != null) {
      newGraph[below].above.push(key);
    }
  }

  function walkRight(key) {
    const node = newGraph[key];
    const nodeSizeDiff = sizeDiff[key];
    node.left.forEach(left => {
      positionDiff[left].x += nodeSizeDiff.width + positionDiff[key].x;
      walkRight(left);
    });
  }

  function walkDown(key) {
    const node = newGraph[key];
    const nodeSizeDiff = sizeDiff[key];
    node.above.forEach(above => {
      positionDiff[above].y += nodeSizeDiff.height + positionDiff[key].y;
      walkDown(above);
    });
  } // Find disconnected nodes, and walk


  for (const _ref3 of Object.entries(graph)) {
    var _ref4 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref3, 2);

    const key = _ref4[0];
    const neighbors = _ref4[1];

    if (neighbors.below == null) {
      walkDown(key);
    }

    if (neighbors.right == null) {
      walkRight(key);
    }
  }

  return positionDiff;
}
function generateGraph(windows) {
  const bottoms = {};
  const rights = {};

  for (const w of windows) {
    const bottom = w.y + w.height;

    if (bottoms[bottom]) {
      bottoms[bottom].push(w);
    } else {
      bottoms[bottom] = [w];
    }

    const right = w.x + w.width;

    if (rights[right]) {
      rights[right].push(w);
    } else {
      rights[right] = [w];
    }
  }

  const graph = {};

  for (const w of windows) {
    const edges = {};
    const top = w.y;
    const left = w.x;
    const tops = bottoms[top];
    const lefts = rights[left];

    if (tops) {
      for (const below of tops) {
        const isToTheLeft = below.x + below.width < w.x;
        const isToTheRight = below.x > w.x + w.width;
        const overlapsInX = !(isToTheLeft || isToTheRight);

        if (overlapsInX) {
          edges.below = below.key;
          break;
        }
      }
    }

    if (lefts) {
      for (const right of lefts) {
        const isAbove = right.y + right.height < w.y;
        const isBelow = right.y > w.y + w.height;
        const overlapsInY = !(isAbove || isBelow);

        if (overlapsInY) {
          edges.right = right.key;
          break;
        }
      }
    }

    graph[w.key] = edges;
  }

  return graph;
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);

const SNAP_DISTANCE = 15;
/* unused harmony export SNAP_DISTANCE */

const top = box => box.y;
/* unused harmony export top */

const bottom = box => box.y + box.height;
/* unused harmony export bottom */

const left = box => box.x;
/* unused harmony export left */

const right = box => box.x + box.width;
/* unused harmony export right */

const near = (a, b) => Math.abs(a - b) < SNAP_DISTANCE;
/* unused harmony export near */
 // http://stackoverflow.com/a/3269471/1263117

const overlapX = (a, b) => left(a) <= right(b) + SNAP_DISTANCE && left(b) <= right(a) + SNAP_DISTANCE;
/* unused harmony export overlapX */

const overlapY = (a, b) => top(a) <= bottom(b) + SNAP_DISTANCE && top(b) <= bottom(a) + SNAP_DISTANCE;
/* unused harmony export overlapY */
 // Give a new position for `boxA` that snaps it to `boxB` if neede.

const snap = (boxA, boxB) => {
  let x, y; // TODO: Refactor/simplify this code

  if (overlapY(boxA, boxB)) {
    if (near(left(boxA), right(boxB))) {
      x = right(boxB);
    } else if (near(right(boxA), left(boxB))) {
      x = left(boxB) - boxA.width;
    } else if (near(left(boxA), left(boxB))) {
      x = left(boxB);
    } else if (near(right(boxA), right(boxB))) {
      x = right(boxB) - boxA.width;
    }
  }

  if (overlapX(boxA, boxB)) {
    if (near(top(boxA), bottom(boxB))) {
      y = bottom(boxB);
    } else if (near(bottom(boxA), top(boxB))) {
      y = top(boxB) - boxA.height;
    } else if (near(top(boxA), top(boxB))) {
      y = top(boxB);
    } else if (near(bottom(boxA), bottom(boxB))) {
      y = bottom(boxB) - boxA.height;
    }
  }

  return {
    x,
    y
  };
};
/* harmony export (immutable) */ __webpack_exports__["d"] = snap;

const snapDiff = (a, b) => {
  const newPos = snap(a, b);
  return {
    x: newPos.x === undefined ? 0 : newPos.x - a.x,
    y: newPos.y === undefined ? 0 : newPos.y - a.y
  };
};
/* unused harmony export snapDiff */
 // TODO: Use the first x and y combo

const snapDiffManyToMany = (as, bs) => {
  let x = 0;
  let y = 0;

  for (const a of as) {
    for (const b of bs) {
      const diff = snapDiff(a, b);
      x = x || diff.x;
      y = y || diff.y;

      if (x !== undefined && x > 0 && y !== undefined && y > 0) {
        break;
      }
    }
  }

  return {
    x,
    y
  };
};
/* harmony export (immutable) */ __webpack_exports__["e"] = snapDiffManyToMany;

const snapToMany = (boxA, otherBoxes) => {
  let x;
  let y;
  otherBoxes.forEach(boxB => {
    const newPos = snap(boxA, boxB);
    x = newPos.x || x;
    y = newPos.y || y;
  });
  return {
    x,
    y
  };
};
/* unused harmony export snapToMany */

const snapWithin = (boxA, boundingBox) => {
  let x, y;

  if (boxA.x - SNAP_DISTANCE < 0) {
    x = 0;
  } else if (boxA.x + boxA.width + SNAP_DISTANCE > boundingBox.width) {
    x = boundingBox.width - boxA.width;
  }

  if (boxA.y - SNAP_DISTANCE < 0) {
    y = 0;
  } else if (boxA.y + boxA.height + SNAP_DISTANCE > boundingBox.height) {
    y = boundingBox.height - boxA.height;
  }

  return {
    x,
    y
  };
};
/* unused harmony export snapWithin */

const snapWithinDiff = (a, b) => {
  const newPos = snapWithin(a, b);
  return {
    x: newPos.x === undefined ? 0 : newPos.x - a.x,
    y: newPos.y === undefined ? 0 : newPos.y - a.y
  };
};
/* harmony export (immutable) */ __webpack_exports__["f"] = snapWithinDiff;

const applySnap = (original, ...snaps) => snaps.reduce((previous, snapped) => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, previous, {
  x: typeof snapped.x !== "undefined" ? snapped.x : previous.x,
  y: typeof snapped.y !== "undefined" ? snapped.y : previous.y
}), original);
/* unused harmony export applySnap */

const boundingBox = nodes => {
  const boxes = nodes.slice();
  const firstNode = boxes.pop();

  if (firstNode == null) {
    throw new Error("boundingBox must be called with at least one node");
  }

  const bounding = {
    top: top(firstNode),
    right: right(firstNode),
    bottom: bottom(firstNode),
    left: left(firstNode)
  };
  boxes.forEach(node => {
    bounding.top = Math.min(bounding.top, top(node));
    bounding.right = Math.max(bounding.right, right(node));
    bounding.bottom = Math.max(bounding.bottom, bottom(node));
    bounding.left = Math.min(bounding.left, left(node));
  });
  return {
    x: bounding.left,
    y: bounding.top,
    width: bounding.right - bounding.left,
    height: bounding.bottom - bounding.top
  };
};
/* harmony export (immutable) */ __webpack_exports__["c"] = boundingBox;

const traceConnection = areConnected => (candidates, node) => {
  const connected = new Set();

  const checkNode = n => {
    for (const candidate of candidates) {
      if (!connected.has(candidate) && areConnected(candidate, n)) {
        connected.add(candidate);
        checkNode(candidate);
      }
    }
  };

  checkNode(node);
  return connected;
};
/* harmony export (immutable) */ __webpack_exports__["g"] = traceConnection;

const applyDiff = (a, b) => ({
  x: a.x + b.x,
  y: a.y + b.y
});
/* harmony export (immutable) */ __webpack_exports__["a"] = applyDiff;
 // TODO: This should not

const applyMultipleDiffs = (initial, ...diffs) => {
  const metaDiff = diffs.reduce((m, diff) => ({
    // Use the smallest non-zero diff for each axis.
    // TODO: Min should be the absolute value
    x: m.x === 0 || diff.x === 0 ? m.x + diff.x : Math.min(m.x, diff.x),
    y: m.y === 0 || diff.y === 0 ? m.y + diff.y : Math.min(m.y, diff.y)
  }));
  return applyDiff(initial, metaDiff);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = applyMultipleDiffs;


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setEqBand;
/* harmony export (immutable) */ __webpack_exports__["b"] = setEqToMax;
/* harmony export (immutable) */ __webpack_exports__["c"] = setEqToMid;
/* harmony export (immutable) */ __webpack_exports__["d"] = setEqToMin;
/* harmony export (immutable) */ __webpack_exports__["e"] = setPreamp;
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleEq;
/* unused harmony export toggleEqAuto */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);


const BAND_SNAP_DISTANCE = 10;
const BAND_MID_POINT_VALUE = 50;
function setEqBand(band, value) {
  if (value < BAND_MID_POINT_VALUE + BAND_SNAP_DISTANCE && value > BAND_MID_POINT_VALUE - BAND_SNAP_DISTANCE) {
    return {
      type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["O" /* SET_BAND_VALUE */],
      band,
      value: BAND_MID_POINT_VALUE
    };
  }

  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["O" /* SET_BAND_VALUE */],
    band,
    value
  };
}

function _setEqTo(value) {
  return dispatch => {
    Object.values(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* BANDS */]).forEach(band => {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["O" /* SET_BAND_VALUE */],
        value,
        band: band
      });
    });
  };
}

function setEqToMax() {
  return _setEqTo(100);
}
function setEqToMid() {
  return _setEqTo(50);
}
function setEqToMin() {
  return _setEqTo(0);
}
function setPreamp(value) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["O" /* SET_BAND_VALUE */],
    band: "preamp",
    value
  };
}
function toggleEq() {
  return (dispatch, getState) => {
    if (getState().equalizer.on) {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["R" /* SET_EQ_OFF */]
      });
    } else {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["S" /* SET_EQ_ON */]
      });
    }
  };
}
function toggleEqAuto() {
  return (dispatch, getState) => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["Q" /* SET_EQ_AUTO */],
      value: !getState().equalizer.auto
    });
  };
}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

var PRESET_VALUES = [
  "hz60",
  "hz170",
  "hz310",
  "hz600",
  "hz1000",
  "hz3000",
  "hz6000",
  "hz12000",
  "hz14000",
  "hz16000",
  "preamp"
];

var HEADER = "Winamp EQ library file v1.1";

module.exports = {
  PRESET_VALUES: PRESET_VALUES,
  HEADER: HEADER
};


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);

/* TODO: There are too many " " and "_" characters */

const FONT_LOOKUP = {
  a: [0, 0],
  b: [0, 1],
  c: [0, 2],
  d: [0, 3],
  e: [0, 4],
  f: [0, 5],
  g: [0, 6],
  h: [0, 7],
  i: [0, 8],
  j: [0, 9],
  k: [0, 10],
  l: [0, 11],
  m: [0, 12],
  n: [0, 13],
  o: [0, 14],
  p: [0, 15],
  q: [0, 16],
  r: [0, 17],
  s: [0, 18],
  t: [0, 19],
  u: [0, 20],
  v: [0, 21],
  w: [0, 22],
  x: [0, 23],
  y: [0, 24],
  z: [0, 25],
  '"': [0, 26],
  "@": [0, 27],
  " ": [0, 30],
  "0": [1, 0],
  "1": [1, 1],
  "2": [1, 2],
  "3": [1, 3],
  "4": [1, 4],
  "5": [1, 5],
  "6": [1, 6],
  "7": [1, 7],
  "8": [1, 8],
  "9": [1, 9],
  [__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* UTF8_ELLIPSIS */]]: [1, 10],
  _: [1, 11],
  ":": [1, 12],
  "(": [1, 13],
  ")": [1, 14],
  "-": [1, 15],
  "'": [1, 16],
  "!": [1, 17],
  "+": [1, 19],
  "\\": [1, 20],
  "/": [1, 21],
  "[": [1, 22],
  "]": [1, 23],
  "^": [1, 24],
  "&": [1, 25],
  "%": [1, 26],
  ".": [1, 27],
  "=": [1, 28],
  $: [1, 29],
  "#": [1, 30],
  Å: [2, 0],
  Ö: [2, 1],
  Ä: [2, 2],
  "?": [2, 3],
  "*": [2, 4],
  "<": [1, 22],
  ">": [1, 23],
  "{": [1, 22],
  "}": [1, 23]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = FONT_LOOKUP;

const imageConstFromChar = char => `CHARACTER_${char.charCodeAt(0)}`;
/* harmony export (immutable) */ __webpack_exports__["c"] = imageConstFromChar;

const CHAR_X = 5;
const CHAR_Y = 6;
const characterSprites = [];

for (const key in FONT_LOOKUP) {
  if (FONT_LOOKUP.hasOwnProperty(key)) {
    const position = FONT_LOOKUP[key];
    characterSprites.push({
      name: imageConstFromChar(key),
      y: position[0] * CHAR_Y,
      x: position[1] * CHAR_X,
      width: CHAR_X,
      height: CHAR_Y
    });
  }
}

/* harmony default export */ __webpack_exports__["b"] = ({
  BALANCE: [{
    name: "MAIN_BALANCE_BACKGROUND",
    x: 9,
    y: 0,
    width: 38,
    height: 420
  }, {
    name: "MAIN_BALANCE_THUMB",
    x: 15,
    y: 422,
    width: 14,
    height: 11
  }, {
    name: "MAIN_BALANCE_THUMB_ACTIVE",
    x: 0,
    y: 422,
    width: 14,
    height: 11
  }],
  CBUTTONS: [{
    name: "MAIN_PREVIOUS_BUTTON",
    x: 0,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PREVIOUS_BUTTON_ACTIVE",
    x: 0,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PLAY_BUTTON",
    x: 23,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PLAY_BUTTON_ACTIVE",
    x: 23,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PAUSE_BUTTON",
    x: 46,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PAUSE_BUTTON_ACTIVE",
    x: 46,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_STOP_BUTTON",
    x: 69,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_STOP_BUTTON_ACTIVE",
    x: 69,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_NEXT_BUTTON",
    x: 92,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_NEXT_BUTTON_ACTIVE",
    x: 92,
    y: 18,
    width: 22,
    height: 18
  }, {
    name: "MAIN_EJECT_BUTTON",
    x: 114,
    y: 0,
    width: 22,
    height: 16
  }, {
    name: "MAIN_EJECT_BUTTON_ACTIVE",
    x: 114,
    y: 16,
    width: 22,
    height: 16
  }],
  MAIN: [{
    name: "MAIN_WINDOW_BACKGROUND",
    x: 0,
    y: 0,
    width: 275,
    height: 116
  }],
  MONOSTER: [{
    name: "MAIN_STEREO",
    x: 0,
    y: 12,
    width: 29,
    height: 12
  }, {
    name: "MAIN_STEREO_SELECTED",
    x: 0,
    y: 0,
    width: 29,
    height: 12
  }, {
    name: "MAIN_MONO",
    x: 29,
    y: 12,
    width: 27,
    height: 12
  }, {
    name: "MAIN_MONO_SELECTED",
    x: 29,
    y: 0,
    width: 27,
    height: 12
  }],
  NUMBERS: [{
    name: "NO_MINUS_SIGN",
    x: 9,
    y: 6,
    width: 5,
    height: 1
  }, {
    name: "MINUS_SIGN",
    x: 20,
    y: 6,
    width: 5,
    height: 1
  }, {
    name: "DIGIT_0",
    x: 0,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_1",
    x: 9,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_2",
    x: 18,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_3",
    x: 27,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_4",
    x: 36,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_5",
    x: 45,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_6",
    x: 54,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_7",
    x: 63,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_8",
    x: 72,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_9",
    x: 81,
    y: 0,
    width: 9,
    height: 13
  }],
  NUMS_EX: [{
    name: "NO_MINUS_SIGN_EX",
    x: 90,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "MINUS_SIGN_EX",
    x: 99,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_0_EX",
    x: 0,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_1_EX",
    x: 9,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_2_EX",
    x: 18,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_3_EX",
    x: 27,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_4_EX",
    x: 36,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_5_EX",
    x: 45,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_6_EX",
    x: 54,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_7_EX",
    x: 63,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_8_EX",
    x: 72,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_9_EX",
    x: 81,
    y: 0,
    width: 9,
    height: 13
  }],
  PLAYPAUS: [{
    name: "MAIN_PLAYING_INDICATOR",
    x: 0,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_PAUSED_INDICATOR",
    x: 9,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_STOPPED_INDICATOR",
    x: 18,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_NOT_WORKING_INDICATOR",
    x: 36,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_WORKING_INDICATOR",
    x: 39,
    y: 0,
    width: 9,
    height: 9
  }],
  PLEDIT: [{
    name: "PLAYLIST_TOP_TILE",
    x: 127,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_LEFT_CORNER",
    x: 0,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TITLE_BAR",
    x: 26,
    y: 21,
    width: 100,
    height: 20
  }, {
    name: "PLAYLIST_TOP_RIGHT_CORNER",
    x: 153,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_TILE_SELECTED",
    x: 127,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_LEFT_SELECTED",
    x: 0,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TITLE_BAR_SELECTED",
    x: 26,
    y: 0,
    width: 100,
    height: 20
  }, {
    name: "PLAYLIST_TOP_RIGHT_CORNER_SELECTED",
    x: 153,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_LEFT_TILE",
    x: 0,
    y: 42,
    width: 12,
    height: 29
  }, {
    name: "PLAYLIST_RIGHT_TILE",
    x: 31,
    y: 42,
    width: 20,
    height: 29
  }, {
    name: "PLAYLIST_BOTTOM_TILE",
    x: 179,
    y: 0,
    width: 25,
    height: 38
  }, {
    name: "PLAYLIST_BOTTOM_LEFT_CORNER",
    x: 0,
    y: 72,
    width: 125,
    height: 38
  }, {
    name: "PLAYLIST_BOTTOM_RIGHT_CORNER",
    x: 126,
    y: 72,
    width: 150,
    height: 38
  }, {
    name: "PLAYLIST_VISUALIZER_BACKGROUND",
    x: 205,
    y: 0,
    width: 75,
    height: 38
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND",
    x: 72,
    y: 57,
    width: 25,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_LEFT",
    x: 72,
    y: 42,
    width: 25,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_RIGHT",
    x: 99,
    y: 57,
    width: 50,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED",
    x: 99,
    y: 42,
    width: 50,
    height: 14
  }, {
    name: "PLAYLIST_SCROLL_HANDLE_SELECTED",
    x: 61,
    y: 53,
    width: 8,
    height: 18
  }, {
    name: "PLAYLIST_SCROLL_HANDLE",
    x: 52,
    y: 53,
    width: 8,
    height: 18
  }, {
    name: "PLAYLIST_ADD_URL",
    x: 0,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_URL_SELECTED",
    x: 23,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_DIR",
    x: 0,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_DIR_SELECTED",
    x: 23,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_FILE",
    x: 0,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_FILE_SELECTED",
    x: 23,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_ALL",
    x: 54,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_ALL_SELECTED",
    x: 77,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_CROP",
    x: 54,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_CROP_SELECTED",
    x: 77,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_SELECTED",
    x: 54,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_SELECTED_SELECTED",
    x: 77,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_MISC",
    x: 54,
    y: 168,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_MISC_SELECTED",
    x: 77,
    y: 168,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_INVERT_SELECTION",
    x: 104,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_INVERT_SELECTION_SELECTED",
    x: 127,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ZERO",
    x: 104,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ZERO_SELECTED",
    x: 127,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ALL",
    x: 104,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ALL_SELECTED",
    x: 127,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SORT_LIST",
    x: 154,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SORT_LIST_SELECTED",
    x: 177,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_FILE_INFO",
    x: 154,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_FILE_INFO_SELECTED",
    x: 177,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_MISC_OPTIONS",
    x: 154,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_MISC_OPTIONS_SELECTED",
    x: 177,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_NEW_LIST",
    x: 204,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_NEW_LIST_SELECTED",
    x: 227,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SAVE_LIST",
    x: 204,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SAVE_LIST_SELECTED",
    x: 227,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_LOAD_LIST",
    x: 204,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_LOAD_LIST_SELECTED",
    x: 227,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_MENU_BAR",
    x: 48,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_REMOVE_MENU_BAR",
    x: 100,
    y: 111,
    width: 3,
    height: 72
  }, {
    name: "PLAYLIST_SELECT_MENU_BAR",
    x: 150,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_MISC_MENU_BAR",
    x: 200,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_LIST_BAR",
    x: 250,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_CLOSE_SELECTED",
    x: 52,
    y: 42,
    width: 9,
    height: 9
  }, {
    name: "PLAYLIST_COLLAPSE_SELECTED",
    x: 62,
    y: 42,
    width: 9,
    height: 9
  }, {
    name: "PLAYLIST_EXPAND_SELECTED",
    x: 150,
    y: 42,
    width: 9,
    height: 9
  }],
  EQ_EX: [{
    name: "EQ_SHADE_BACKGROUND_SELECTED",
    x: 0,
    y: 0,
    width: 275,
    height: 14
  }, {
    name: "EQ_SHADE_BACKGROUND",
    x: 0,
    y: 15,
    width: 275,
    height: 14
  }, {
    name: "EQ_SHADE_VOLUME_SLIDER_LEFT",
    x: 1,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_VOLUME_SLIDER_CENTER",
    x: 4,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_VOLUME_SLIDER_RIGHT",
    x: 7,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_LEFT",
    x: 11,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_CENTER",
    x: 14,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_RIGHT",
    x: 17,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_MAXIMIZE_BUTTON_ACTIVE",
    x: 1,
    y: 38,
    width: 9,
    height: 9
  }, {
    name: "EQ_MINIMIZE_BUTTON_ACTIVE",
    x: 1,
    y: 47,
    width: 9,
    height: 9
  }, {
    name: "EQ_CLOSE_BUTTON",
    x: 11,
    y: 38,
    width: 9,
    height: 9
  }, {
    name: "EQ_CLOSE_BUTTON_ACTIVE",
    x: 11,
    y: 47,
    width: 9,
    height: 9
  }],
  EQMAIN: [{
    name: "EQ_WINDOW_BACKGROUND",
    x: 0,
    y: 0,
    width: 275,
    height: 116
  }, {
    name: "EQ_TITLE_BAR",
    x: 0,
    y: 149,
    width: 275,
    height: 14
  }, {
    name: "EQ_TITLE_BAR_SELECTED",
    x: 0,
    y: 134,
    width: 275,
    height: 14
  }, {
    name: "EQ_SLIDER_BACKGROUND",
    x: 13,
    y: 164,
    width: 209,
    height: 129
  }, {
    name: "EQ_SLIDER_THUMB",
    x: 0,
    y: 164,
    width: 11,
    height: 11
  }, {
    name: "EQ_SLIDER_THUMB_SELECTED",
    x: 0,
    y: 176,
    width: 11,
    height: 11
  }, {
    name: "EQ_ON_BUTTON",
    x: 10,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_ON_BUTTON_DEPRESSED",
    x: 128,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_ON_BUTTON_SELECTED",
    x: 69,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_ON_BUTTON_SELECTED_DEPRESSED",
    x: 187,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON",
    x: 36,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON_DEPRESSED",
    x: 154,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON_SELECTED",
    x: 95,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON_SELECTED_DEPRESSED",
    x: 213,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_GRAPH_BACKGROUND",
    x: 0,
    y: 294,
    width: 113,
    height: 19
  }, {
    name: "EQ_GRAPH_LINE_COLORS",
    x: 115,
    y: 294,
    width: 1,
    height: 19
  }, {
    name: "EQ_PRESETS_BUTTON",
    x: 224,
    y: 164,
    width: 44,
    height: 12
  }, {
    name: "EQ_PRESETS_BUTTON_SELECTED",
    x: 224,
    y: 176,
    width: 44,
    height: 12
  }, {
    name: "EQ_PREAMP_LINE",
    x: 0,
    y: 314,
    width: 113,
    height: 1
  }],
  POSBAR: [{
    name: "MAIN_POSITION_SLIDER_BACKGROUND",
    x: 0,
    y: 0,
    width: 248,
    height: 10
  }, {
    name: "MAIN_POSITION_SLIDER_THUMB",
    x: 248,
    y: 0,
    width: 29,
    height: 10
  }, {
    name: "MAIN_POSITION_SLIDER_THUMB_SELECTED",
    x: 278,
    y: 0,
    width: 29,
    height: 10
  }],
  SHUFREP: [{
    name: "MAIN_SHUFFLE_BUTTON",
    x: 28,
    y: 0,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_DEPRESSED",
    x: 28,
    y: 15,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_SELECTED",
    x: 28,
    y: 30,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED",
    x: 28,
    y: 45,
    width: 47,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON",
    x: 0,
    y: 0,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_DEPRESSED",
    x: 0,
    y: 15,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_SELECTED",
    x: 0,
    y: 30,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED",
    x: 0,
    y: 45,
    width: 28,
    height: 15
  }, {
    name: "MAIN_EQ_BUTTON",
    x: 0,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_EQ_BUTTON_SELECTED",
    x: 0,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_EQ_BUTTON_DEPRESSED",
    x: 46,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_EQ_BUTTON_DEPRESSED_SELECTED",
    x: 46,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON",
    x: 23,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_SELECTED",
    x: 23,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_DEPRESSED",
    x: 69,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED",
    x: 69,
    y: 73,
    width: 23,
    height: 12
  }],
  TEXT: characterSprites,
  TITLEBAR: [{
    name: "MAIN_TITLE_BAR",
    x: 27,
    y: 15,
    width: 275,
    height: 14
  }, {
    name: "MAIN_TITLE_BAR_SELECTED",
    x: 27,
    y: 0,
    width: 275,
    height: 14
  }, {
    name: "MAIN_EASTER_EGG_TITLE_BAR",
    x: 27,
    y: 72,
    width: 275,
    height: 14
  }, {
    name: "MAIN_EASTER_EGG_TITLE_BAR_SELECTED",
    x: 27,
    y: 57,
    width: 275,
    height: 14
  }, {
    name: "MAIN_OPTIONS_BUTTON",
    x: 0,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_OPTIONS_BUTTON_DEPRESSED",
    x: 0,
    y: 9,
    width: 9,
    height: 9
  }, {
    name: "MAIN_MINIMIZE_BUTTON",
    x: 9,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_MINIMIZE_BUTTON_DEPRESSED",
    x: 9,
    y: 9,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_BUTTON",
    x: 0,
    y: 18,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_BUTTON_DEPRESSED",
    x: 9,
    y: 18,
    width: 9,
    height: 9
  }, {
    name: "MAIN_CLOSE_BUTTON",
    x: 18,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_CLOSE_BUTTON_DEPRESSED",
    x: 18,
    y: 9,
    width: 9,
    height: 9
  }, {
    name: "MAIN_CLUTTER_BAR_BACKGROUND",
    x: 304,
    y: 0,
    width: 8,
    height: 43
  }, {
    name: "MAIN_CLUTTER_BAR_BACKGROUND_DISABLED",
    x: 312,
    y: 0,
    width: 8,
    height: 43
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_O_SELECTED",
    x: 304,
    y: 47,
    width: 8,
    height: 8
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_A_SELECTED",
    x: 312,
    y: 55,
    width: 8,
    height: 7
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_I_SELECTED",
    x: 320,
    y: 62,
    width: 8,
    height: 7
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_D_SELECTED",
    x: 328,
    y: 69,
    width: 8,
    height: 8
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_V_SELECTED",
    x: 336,
    y: 77,
    width: 8,
    height: 7
  }, {
    name: "MAIN_SHADE_BACKGROUND",
    x: 27,
    y: 42,
    width: 275,
    height: 14
  }, {
    name: "MAIN_SHADE_BACKGROUND_SELECTED",
    x: 27,
    y: 29,
    width: 275,
    height: 14
  }, {
    name: "MAIN_SHADE_BUTTON_SELECTED",
    x: 0,
    y: 27,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_BUTTON_SELECTED_DEPRESSED",
    x: 9,
    y: 27,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_POSITION_BACKGROUND",
    x: 0,
    y: 36,
    width: 17,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB",
    x: 20,
    y: 36,
    width: 3,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB_LEFT",
    x: 17,
    y: 36,
    width: 3,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB_RIGHT",
    x: 23,
    y: 36,
    width: 3,
    height: 7
  }],
  VOLUME: [{
    name: "MAIN_VOLUME_BACKGROUND",
    x: 0,
    y: 0,
    width: 68,
    height: 420
  }, {
    name: "MAIN_VOLUME_THUMB",
    x: 15,
    y: 422,
    width: 14,
    height: 11
  }, {
    name: "MAIN_VOLUME_THUMB_SELECTED",
    x: 0,
    y: 422,
    width: 14,
    height: 11
  }],
  GEN: [{
    name: "GEN_TOP_LEFT_SELECTED",
    x: 0,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_END_SELECTED",
    x: 26,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_CENTER_FILL_SELECTED",
    x: 52,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT_END_SELECTED",
    x: 78,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_RIGHT_FILL_SELECTED",
    x: 104,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT_SELECTED",
    x: 130,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT",
    x: 0,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_END",
    x: 26,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_CENTER_FILL",
    x: 52,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT_END",
    x: 78,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_RIGHT_FILL",
    x: 104,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT",
    x: 130,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_BOTTOM_LEFT",
    x: 0,
    y: 42,
    width: 125,
    height: 14
  }, {
    name: "GEN_BOTTOM_RIGHT",
    x: 0,
    y: 57,
    width: 125,
    height: 14
  }, {
    name: "GEN_BOTTOM_FILL",
    x: 127,
    y: 72,
    width: 25,
    height: 14
  }, {
    name: "GEN_MIDDLE_LEFT",
    x: 127,
    y: 42,
    width: 11,
    height: 29
  }, {
    name: "GEN_MIDDLE_LEFT_BOTTOM",
    x: 158,
    y: 42,
    width: 11,
    height: 24
  }, {
    name: "GEN_MIDDLE_RIGHT",
    x: 139,
    y: 42,
    width: 8,
    height: 29
  }, {
    name: "GEN_MIDDLE_RIGHT_BOTTOM",
    x: 170,
    y: 42,
    width: 8,
    height: 24
  }, {
    name: "GEN_CLOSE_SELECTED",
    x: 148,
    y: 42,
    width: 9,
    height: 9
  }],
  GENEX: [{
    name: "GENEX_BUTTON_BACKGROUND_UNPRESSED",
    x: 0,
    y: 0,
    height: 15,
    width: 47
  }, {
    name: "GENEX_BUTTON_BACKGROUND_PRESSED",
    x: 0,
    y: 1,
    height: 15,
    width: 47
  }, {
    name: "GENEX_SCROLL_UP_UNPRESSED",
    x: 0,
    y: 31,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_DOWN_UNPRESSED",
    x: 14,
    y: 31,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_UP_PRESSED",
    x: 28,
    y: 31,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_DOWN_PRESSED",
    x: 42,
    y: 31,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_LEFT_UNPRESSED",
    x: 0,
    y: 45,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_RIGHT_UNPRESSED",
    x: 14,
    y: 45,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_LEFT_PRESSED",
    x: 28,
    y: 45,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_RIGHT_PRESSED",
    x: 42,
    y: 45,
    height: 14,
    width: 14
  }, {
    name: "GENEX_VERTICAL_SCROLL_HANDLE_UNPRESSED",
    x: 56,
    y: 31,
    height: 28,
    width: 14
  }, {
    name: "GENEX_VERTICAL_SCROLL_HANDLE_PRESSED",
    x: 70,
    y: 31,
    height: 28,
    width: 14
  }, {
    name: "GENEX_HORIZONTAL_SCROLL_HANDLE_UNPRESSED",
    x: 84,
    y: 31,
    height: 14,
    width: 28
  }, {
    name: "GENEX_HORIZONTAL_SCROLL_HANDLE_PRESSED",
    x: 84,
    y: 45,
    height: 14,
    width: 28
  }]
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cropPlaylist;
/* harmony export (immutable) */ __webpack_exports__["e"] = removeSelectedTracks;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeAllTracks;
/* harmony export (immutable) */ __webpack_exports__["f"] = reverseList;
/* harmony export (immutable) */ __webpack_exports__["c"] = randomizeList;
/* harmony export (immutable) */ __webpack_exports__["k"] = sortListByTitle;
/* harmony export (immutable) */ __webpack_exports__["j"] = setPlaylistScrollPosition;
/* unused harmony export scrollNTracks */
/* harmony export (immutable) */ __webpack_exports__["h"] = scrollPlaylistByDelta;
/* harmony export (immutable) */ __webpack_exports__["i"] = scrollUpFourTracks;
/* harmony export (immutable) */ __webpack_exports__["g"] = scrollDownFourTracks;
/* harmony export (immutable) */ __webpack_exports__["b"] = dragSelected;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);




function cropPlaylist() {
  return (dispatch, getState) => {
    const state = getState();

    if (__WEBPACK_IMPORTED_MODULE_1__selectors__["u" /* getSelectedTrackObjects */](state).length === 0) {
      return;
    }

    const selectedTrackIds = __WEBPACK_IMPORTED_MODULE_1__selectors__["t" /* getSelectedTrackIds */](state);
    const trackOrder = state.playlist.trackOrder;
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["F" /* REMOVE_TRACKS */],
      // @ts-ignore The keys are numbers, but TypeScript does not trust us.
      // https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
      ids: trackOrder.filter(id => !selectedTrackIds.has(id))
    });
  };
}
function removeSelectedTracks() {
  return (dispatch, getState) => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["F" /* REMOVE_TRACKS */],
      // @ts-ignore The keys are numbers, but TypeScript does not trust us.
      // https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
      ids: Array.from(__WEBPACK_IMPORTED_MODULE_1__selectors__["t" /* getSelectedTrackIds */](getState()))
    });
  };
}
function removeAllTracks() {
  return dispatch => {
    // It's a bit funky that we need to do both of these.
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_9" /* STOP */]
    });
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["E" /* REMOVE_ALL_TRACKS */]
    });
  };
}
function reverseList() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["H" /* REVERSE_LIST */]
  };
}
function randomizeList() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["C" /* RANDOMIZE_LIST */]
  };
}
function sortListByTitle() {
  return (dispatch, getState) => {
    const state = getState();
    const tracks = __WEBPACK_IMPORTED_MODULE_1__selectors__["E" /* getTracks */](state);
    const trackOrder = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["y" /* sort */])(__WEBPACK_IMPORTED_MODULE_1__selectors__["C" /* getTrackOrder */](state), i => `${tracks[i].title}`.toLowerCase());
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_1" /* SET_TRACK_ORDER */],
      trackOrder
    });
  };
}
function setPlaylistScrollPosition(position) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["Y" /* SET_PLAYLIST_SCROLL_POSITION */],
    position
  };
}
function scrollNTracks(n) {
  return (dispatch, getState) => {
    const state = getState();
    const overflow = __WEBPACK_IMPORTED_MODULE_1__selectors__["n" /* getOverflowTrackCount */](state);
    const currentOffset = __WEBPACK_IMPORTED_MODULE_1__selectors__["s" /* getScrollOffset */](state);
    const position = overflow ? Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* clamp */])((currentOffset + n) / overflow, 0, 1) : 0;
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["Y" /* SET_PLAYLIST_SCROLL_POSITION */],
      position: position * 100
    });
  };
}
function scrollPlaylistByDelta(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const state = getState();

    if (__WEBPACK_IMPORTED_MODULE_1__selectors__["n" /* getOverflowTrackCount */](state)) {
      e.stopPropagation();
    }

    const totalPixelHeight = state.playlist.trackOrder.length * __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* TRACK_HEIGHT */];
    const percentDelta = e.deltaY / totalPixelHeight * 100;
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["Y" /* SET_PLAYLIST_SCROLL_POSITION */],
      position: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* clamp */])(state.display.playlistScrollPosition + percentDelta, 0, 100)
    });
  };
}
function scrollUpFourTracks() {
  return scrollNTracks(-4);
}
function scrollDownFourTracks() {
  return scrollNTracks(4);
}
function dragSelected(offset) {
  return (dispatch, getState) => {
    const state = getState();
    const tracks = __WEBPACK_IMPORTED_MODULE_1__selectors__["E" /* getTracks */](state);
    const trackOrder = __WEBPACK_IMPORTED_MODULE_1__selectors__["C" /* getTrackOrder */](state);
    const selectedIds = __WEBPACK_IMPORTED_MODULE_1__selectors__["t" /* getSelectedTrackIds */](state);
    const firstSelected = trackOrder.findIndex(trackId => tracks[trackId] && selectedIds.has(trackId));

    if (firstSelected === -1) {
      return;
    }

    const lastSelected = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["g" /* findLastIndex */])(trackOrder, trackId => tracks[trackId] && selectedIds.has(trackId));

    if (lastSelected === -1) {
      throw new Error("We found a first selected, but not a last selected.");
    } // Ensure we don't try to drag off either end.


    const min = -firstSelected;
    const max = trackOrder.length - 1 - lastSelected;
    const normalizedOffset = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* clamp */])(offset, min, max);

    if (normalizedOffset !== 0) {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["l" /* DRAG_SELECTED */],
        offset: normalizedOffset
      });
    }
  };
}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContextMenu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PlaybackContextMenu__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SkinsContextMenu__ = __webpack_require__(206);









const MainContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["b" /* LinkNode */], {
  href: "https://github.com/captbaritone/webamp",
  target: "_blank",
  label: "Webamp..."
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["d" /* Parent */], {
  label: "Play"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
  onClick: props.openMediaFileDialog,
  label: "File...",
  hotkey: "L"
}), props.filePickers && props.filePickers.map((picker, i) => (props.networkConnected || !picker.requiresNetwork) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
  key: i,
  onClick: async () => {
    let files;

    try {
      files = await picker.filePicker();
    } catch (e) {
      console.error("Error loading from file picker", e);
    }

    props.loadMediaFiles(files, __WEBPACK_IMPORTED_MODULE_4__constants__["e" /* LOAD_STYLE */].PLAY);
  },
  label: picker.contextMenuName
}))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["a" /* Hr */], null), Object.keys(props.genWindows).map(i => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
  key: i,
  label: props.genWindows[i].title,
  checked: props.genWindows[i].open,
  onClick: () => props.toggleGenWindow(i),
  hotkey: props.genWindows[i].hotkey
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SkinsContextMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["d" /* Parent */], {
  label: "Playback"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__PlaybackContextMenu__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
  onClick: props.close,
  label: "Exit"
}));

const mapStateToProps = state => ({
  networkConnected: state.network.connected,
  genWindows: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["i" /* getGenWindows */])(state)
});

const mapDispatchToProps = {
  close: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["e" /* close */],
  openMediaFileDialog: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["s" /* openMediaFileDialog */],
  loadMediaFiles: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["m" /* loadMediaFiles */],
  toggleGenWindow: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["_3" /* toggleWindow */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(MainContextMenu));

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);




class DropTarget extends __WEBPACK_IMPORTED_MODULE_3_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "handleDrop", e => {
      this.supress(e); // TODO: We could probably move this coordinate logic into the playlist.
      // I think that's the only place it gets used.

      const currentTarget = e.currentTarget;

      if (!(currentTarget instanceof Element)) {
        return;
      }

      const _currentTarget$getBou = currentTarget.getBoundingClientRect(),
            x = _currentTarget$getBou.left,
            y = _currentTarget$getBou.top;

      this.props.handleDrop(e, {
        x,
        y
      });
    });
  }

  supress(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
    e.dataTransfer.effectAllowed = "link";
  }

  render() {
    const _this$props = this.props,
          handleDrop = _this$props.handleDrop,
          passThroughProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["handleDrop"]);

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, passThroughProps, {
      onDragStart: this.supress,
      onDragEnter: this.supress,
      onDragOver: this.supress,
      onDrop: this.handleDrop
    }));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DropTarget;


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Character__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_mini_time_css__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_mini_time_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__css_mini_time_css__);







 // Sigh. When the display is blinking (say when it's paused) we need to
// alternate between the actual character and the space character. Not
// Possible to do that in pure CSS with the background being dynamically generated.
// All "space" characters is also how Winamp renders no content.

const Background = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, [1, 7, 12, 20, 25].map((left, i) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
  style: {
    left
  },
  key: i,
  className: "background-character",
  children: " "
})));

const MiniTime = props => {
  let seconds = null; // TODO: Clean this up: If stopped, just render the background, rather than
  // rendering spaces twice.

  if (props.status !== __WEBPACK_IMPORTED_MODULE_5__constants__["f" /* MEDIA_STATUS */].STOPPED && props.length != null) {
    seconds = props.timeMode === __WEBPACK_IMPORTED_MODULE_5__constants__["h" /* TIME_MODE */].ELAPSED ? props.timeElapsed : props.length - props.timeElapsed;
  }

  const timeObj = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* getTimeObj */])(seconds);
  const showMinus = props.timeMode === __WEBPACK_IMPORTED_MODULE_5__constants__["h" /* TIME_MODE */].REMAINING && props.status !== __WEBPACK_IMPORTED_MODULE_5__constants__["f" /* MEDIA_STATUS */].STOPPED;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    onClick: props.toggle,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()("mini-time", "countdown", {
      blinking: props.status === __WEBPACK_IMPORTED_MODULE_5__constants__["f" /* MEDIA_STATUS */].PAUSED
    })
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Background, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
    style: {
      left: 1
    }
  }, showMinus ? "-" : " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
    style: {
      left: 7
    }
  }, timeObj.minutesFirstDigit), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
    style: {
      left: 12
    }
  }, timeObj.minutesSecondDigit), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
    style: {
      left: 20
    }
  }, timeObj.secondsFirstDigit), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
    style: {
      left: 25
    }
  }, timeObj.secondsSecondDigit));
};

const mapStateToProps = state => ({
  status: state.media.status,
  timeMode: state.media.timeMode,
  timeElapsed: state.media.timeElapsed,
  length: state.media.length
});

const mapDispatchToProps = dispatch => ({
  // TODO: move to actionCreators
  toggle: () => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["_15" /* TOGGLE_TIME_MODE */]
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(MiniTime));

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);



const characterClassName = char => `character-${char.toString().toLowerCase().charCodeAt(0)}`;
/* unused harmony export characterClassName */


const Character = (_ref) => {
  let char = _ref.children,
      className = _ref.className,
      passThrough = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children", "className"]);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, passThrough, {
    className: `${className || ""} character ${characterClassName(char)}`
  }), char);
};

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);





const PIXEL_DENSITY = 2;
const NUM_BARS = 20;
const BAR_PEAK_DROP_RATE = 0.01;
const GRADIENT_COLOR_COUNT = 16;
const PEAK_COLOR_INDEX = 23; // Return the average value in a slice of dataArray

function sliceAverage(dataArray, sliceWidth, sliceNumber) {
  const start = sliceWidth * sliceNumber;
  const end = start + sliceWidth;
  let sum = 0;

  for (let i = start; i < end; i++) {
    sum += dataArray[i];
  }

  return sum / sliceWidth;
}

class Visualizer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  componentDidMount() {
    this.barPeaks = new Array(NUM_BARS).fill(0);
    this.barPeakFrames = new Array(NUM_BARS).fill(0);
    this.canvasCtx = this.canvas.getContext("2d");
    this.canvasCtx.imageSmoothingEnabled = false;
    this.setStyle(); // Kick off the animation loop

    const loop = () => {
      if (this.props.status === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* MEDIA_STATUS */].PLAYING) {
        if (this.props.dummyVizData) {
          Object.keys(this.props.dummyVizData).forEach(i => {
            this._printBar(i, this.props.dummyVizData[i]);
          });
        } else {
          this.paintFrame();
        }
      }

      this._animationRequest = window.requestAnimationFrame(loop);
    };

    loop();
  }

  componentWillUnmount() {
    if (this._animationRequest) {
      window.cancelAnimationFrame(this._animationRequest);
    }
  }

  componentDidUpdate() {
    this.setStyle(); // Redraw the current frame, since the skin may have changed.

    this.paintFrame();
  }

  _renderWidth() {
    return this.props.width;
  }

  _renderHeight() {
    return this.props.height;
  }

  _height() {
    return this.props.height * PIXEL_DENSITY;
  }

  _width() {
    return this.props.width * PIXEL_DENSITY;
  }

  _barWidth() {
    const barWidth = Math.floor(this._width() / NUM_BARS);

    if (barWidth % 2 === 0) {
      return barWidth;
    }

    return barWidth - 1;
  }

  _generateOctaveBuckets() {
    const octaveBuckets = new Array(NUM_BARS).fill(0);
    const minHz = 200;
    const maxHz = 22050;
    const octaveStep = Math.pow(maxHz / minHz, 1 / NUM_BARS);
    octaveBuckets[0] = 0;
    octaveBuckets[1] = minHz;

    for (let i = 2; i < NUM_BARS - 1; i++) {
      octaveBuckets[i] = octaveBuckets[i - 1] * octaveStep;
    }

    octaveBuckets[NUM_BARS - 1] = maxHz;

    for (let i = 0; i < NUM_BARS; i++) {
      const octaveIdx = Math.floor(octaveBuckets[i] / maxHz * this.bufferLength);
      octaveBuckets[i] = octaveIdx;
    }

    return octaveBuckets;
  }

  setStyle() {
    if (!this.props.colors) {
      return;
    } // TODO: Split this into to methods. One for skin update, one for style
    // update.


    this.preRenderBg();
    this.preRenderBar();
    this.props.analyser.fftSize = 2048;

    if (this.props.style === __WEBPACK_IMPORTED_MODULE_4__constants__["k" /* VISUALIZERS */].OSCILLOSCOPE) {
      this.bufferLength = this.props.analyser.fftSize;
      this.dataArray = new Uint8Array(this.bufferLength);
    } else if (this.props.style === __WEBPACK_IMPORTED_MODULE_4__constants__["k" /* VISUALIZERS */].BAR) {
      this.bufferLength = this.props.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);

      if (!this.octaveBuckets) {
        this.octaveBuckets = this._generateOctaveBuckets();
      }
    }
  }

  clear() {
    this.canvasCtx.drawImage(this.bgCanvas, 0, 0);
  } // Pre-render the background grid


  preRenderBg() {
    // Off-screen canvas for pre-rendering the background
    this.bgCanvas = document.createElement("canvas");
    this.bgCanvas.width = this._width();
    this.bgCanvas.height = this._height();
    const bgCanvasCtx = this.bgCanvas.getContext("2d");
    bgCanvasCtx.fillStyle = this.props.colors[0];
    bgCanvasCtx.fillRect(0, 0, this._width(), this._height());

    if (!this.props.windowShade) {
      bgCanvasCtx.fillStyle = this.props.colors[1];

      for (let x = 0; x < this._width(); x += 4) {
        for (let y = PIXEL_DENSITY; y < this._height(); y += 4) {
          bgCanvasCtx.fillRect(x, y, PIXEL_DENSITY, PIXEL_DENSITY);
        }
      }
    }
  } // Pre-render the bar gradient


  preRenderBar() {
    /**
     * The order of the colours is commented in the file: the fist two colours
     * define the background and dots (check it to see what are the dots), the
     * next 16 colours are the analyzer's colours from top to bottom, the next
     * 5 colours are the oscilloscope's ones, from center to top/bottom, the
     * last colour is for the analyzer's peak markers.
     */
    // Off-screen canvas for pre-rendering a single bar gradient
    const barWidth = this._barWidth();

    this.barCanvas = document.createElement("canvas");
    this.barCanvas.width = barWidth;
    this.barCanvas.height = this._height();
    const offset = 2; // The first two colors are for the background;

    const gradientColors = this.props.colors.slice(offset, offset + GRADIENT_COLOR_COUNT);
    const barCanvasCtx = this.barCanvas.getContext("2d");

    const height = this._renderHeight();

    const multiplier = GRADIENT_COLOR_COUNT / height; // In shade mode, the five colors are, from top to bottom:
    // 214, 102, 0 -- 3
    // 222, 165, 24 -- 6
    // 148, 222, 33 -- 9
    // 57, 181, 16 -- 12
    // 24, 132, 8 -- 15
    // TODO: This could probably be improved by iterating backwards

    for (let i = 0; i < height; i++) {
      const colorIndex = GRADIENT_COLOR_COUNT - 1 - Math.floor(i * multiplier);
      barCanvasCtx.fillStyle = gradientColors[colorIndex];
      const y = this._height() - i * PIXEL_DENSITY;
      barCanvasCtx.fillRect(0, y, barWidth, PIXEL_DENSITY);
    }
  }

  paintFrame() {
    this.clear();

    if (this.props.style === __WEBPACK_IMPORTED_MODULE_4__constants__["k" /* VISUALIZERS */].OSCILLOSCOPE) {
      this._paintOscilloscopeFrame();
    } else if (this.props.style === __WEBPACK_IMPORTED_MODULE_4__constants__["k" /* VISUALIZERS */].BAR) {
      this._paintBarFrame();
    }
  }

  _paintOscilloscopeFrame() {
    this.props.analyser.getByteTimeDomainData(this.dataArray);
    this.canvasCtx.lineWidth = PIXEL_DENSITY; // Just use one of the viscolors for now

    this.canvasCtx.strokeStyle = this.props.colors[18]; // Since dataArray has more values than we have pixels to display, we
    // have to average several dataArray values per pixel. We call these
    // groups slices.
    //
    // We use the  2x scale here since we only want to plot values for
    // "real" pixels.

    const sliceWidth = Math.floor(this.bufferLength / this._width()) * PIXEL_DENSITY;

    const h = this._height();

    this.canvasCtx.beginPath(); // Iterate over the width of the canvas in "real" pixels.

    for (let j = 0; j <= this._renderWidth(); j++) {
      const amplitude = sliceAverage(this.dataArray, sliceWidth, j);
      const percentAmplitude = amplitude / 255; // dataArray gives us bytes

      const y = (1 - percentAmplitude) * h; // flip y

      const x = j * PIXEL_DENSITY; // Canvas coordinates are in the middle of the pixel by default.
      // When we want to draw pixel perfect lines, we will need to
      // account for that here

      if (x === 0) {
        this.canvasCtx.moveTo(x, y);
      } else {
        this.canvasCtx.lineTo(x, y);
      }
    }

    this.canvasCtx.stroke();
  }

  _printBar(x, height, peakHeight) {
    height = Math.ceil(height) * PIXEL_DENSITY;
    peakHeight = Math.ceil(peakHeight) * PIXEL_DENSITY;

    if (height > 0 || peakHeight > 0) {
      const y = this._height() - height;
      const ctx = this.canvasCtx; // Draw the gradient

      const b = this._barWidth();

      if (height > 0) {
        ctx.drawImage(this.barCanvas, 0, y, b, height, x, y, b, height);
      } // Draw the gray peak line


      if (!this.props.windowShade) {
        const peakY = this._height() - peakHeight;
        ctx.fillStyle = this.props.colors[PEAK_COLOR_INDEX];
        ctx.fillRect(x, peakY, b, PIXEL_DENSITY);
      }
    }
  }

  _paintBarFrame() {
    this.props.analyser.getByteFrequencyData(this.dataArray);
    const heightMultiplier = this._renderHeight() / 256;

    const barWidth = this._barWidth();

    const xOffset = barWidth + PIXEL_DENSITY; // Bar width, plus a pixel of spacing to the right.

    for (let j = 0; j < NUM_BARS - 1; j++) {
      const start = this.octaveBuckets[j];
      const end = this.octaveBuckets[j + 1];
      let amplitude = 0;

      for (let k = start; k < end; k++) {
        amplitude += this.dataArray[k];
      }

      amplitude /= end - start; // The drop rate should probably be normalized to the rendering FPS, for now assume 60 FPS

      let barPeak = this.barPeaks[j] - BAR_PEAK_DROP_RATE * Math.pow(this.barPeakFrames[j], 2);

      if (barPeak < amplitude) {
        barPeak = amplitude;
        this.barPeakFrames[j] = 0;
      } else {
        this.barPeakFrames[j] += 1;
      }

      this.barPeaks[j] = barPeak;

      this._printBar(j * xOffset, amplitude * heightMultiplier, barPeak * heightMultiplier);
    }
  }

  render() {
    const _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
      id: "visualizer",
      ref: node => this.canvas = node,
      style: {
        width,
        height
      },
      width: width * PIXEL_DENSITY,
      height: height * PIXEL_DENSITY,
      onClick: this.props.toggleVisualizerStyle
    });
  }

}

const mapStateToProps = state => ({
  colors: state.display.skinColors,
  style: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["H" /* getVisualizerStyle */])(state),
  width: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["O" /* getWindowShade */])(state)("main") ? 38 : 76,
  height: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["O" /* getWindowShade */])(state)("main") ? 5 : 16,
  status: state.media.status,
  windowShade: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["O" /* getWindowShade */])(state)("main"),
  dummyVizData: state.display.dummyVizData
});

const mapDispatchToProps = {
  toggleVisualizerStyle: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["_2" /* toggleVisualizerStyle */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Visualizer));

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);






const Balance = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
  id: props.id,
  className: props.className,
  type: "range",
  min: "-100",
  max: "100",
  step: "1",
  value: props.balance,
  style: props.style,
  onChange: props.setBalance,
  onMouseDown: props.showMarquee,
  onMouseUp: props.hideMarquee,
  title: "Balance"
});

const mapStateToProps = state => ({
  balance: __WEBPACK_IMPORTED_MODULE_3__selectors__["a" /* getBalance */](state)
});

const mapDispatchToProps = dispatch => ({
  setBalance: e => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["H" /* setBalance */])(Number(e.target.value))),
  showMarquee: () => dispatch(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["M" /* setFocus */]("balance")),
  hideMarquee: () => dispatch(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["_4" /* unsetFocus */]())
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Balance));

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);





const Volume = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
  id: props.id,
  type: "range",
  min: "0",
  max: "100",
  step: "1",
  value: props.volume,
  style: props.style,
  className: props.className,
  onChange: props.setVolume,
  onMouseDown: props.showMarquee,
  onMouseUp: props.hideMarquee,
  title: "Volume Bar"
});

const mapStateToProps = state => ({
  volume: __WEBPACK_IMPORTED_MODULE_3__selectors__["I" /* getVolume */](state)
});

const mapDispatchToProps = dispatch => ({
  showMarquee: () => dispatch(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["M" /* setFocus */]("volume")),
  hideMarquee: () => dispatch(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["_4" /* unsetFocus */]()),
  setVolume: e => dispatch(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["Q" /* setVolume */](Number(e.target.value)))
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Volume));

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResizeTarget__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);





const mapStateToProps = state => ({
  currentSize: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["P" /* getWindowSize */])(state)("playlist"),
  id: "playlist-resize-target"
});

const mapDispatchToProps = dispatch => {
  return {
    setWindowSize: size => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["R" /* setWindowSize */])("playlist", size))
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__ResizeTarget__["a" /* default */]));

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(4);






class ResizeTarget extends __WEBPACK_IMPORTED_MODULE_4_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty___default()(this, "handleMouseDown", e => {
      // Prevent dragging from highlighting text.
      e.preventDefault();

      const _this$props$currentSi = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray___default()(this.props.currentSize, 2),
            width = _this$props$currentSi[0],
            height = _this$props$currentSi[1];

      const mouseStart = {
        x: e.clientX,
        y: e.clientY
      };

      const handleMove = ee => {
        const x = ee.clientX - mouseStart.x;
        const y = ee.clientY - mouseStart.y;
        const newWidth = Math.max(0, width + Math.round(x / __WEBPACK_IMPORTED_MODULE_5__constants__["o" /* WINDOW_RESIZE_SEGMENT_WIDTH */]));
        const newHeight = this.props.widthOnly ? width : Math.max(0, height + Math.round(y / __WEBPACK_IMPORTED_MODULE_5__constants__["n" /* WINDOW_RESIZE_SEGMENT_HEIGHT */]));
        const newSize = [newWidth, newHeight];
        this.props.setWindowSize(newSize);
      };

      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleMove);
      });
    });
  }

  render() {
    const _this$props = this.props,
          currentSize = _this$props.currentSize,
          setWindowSize = _this$props.setWindowSize,
          widthOnly = _this$props.widthOnly,
          passThroughProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["currentSize", "setWindowSize", "widthOnly"]);

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
      onMouseDown: this.handleMouseDown
    }, passThroughProps));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ResizeTarget;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(68);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(69);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(76);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(77);

var _warning2 = _interopRequireDefault(_warning);

var _Track = __webpack_require__(284);

var _Track2 = _interopRequireDefault(_Track);

var _createSlider = __webpack_require__(285);

var _createSlider2 = _interopRequireDefault(_createSlider);

var _utils = __webpack_require__(126);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable react/prop-types */
var Slider = function (_React$Component) {
  (0, _inherits3['default'])(Slider, _React$Component);

  function Slider(props) {
    (0, _classCallCheck3['default'])(this, Slider);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (false) {
      (0, _warning2['default'])(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecate, please use trackStyle instead.');
      (0, _warning2['default'])(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecate, please use railStyle instead.');
    }
    return _this;
  }

  Slider.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        autoFocus = _props.autoFocus,
        disabled = _props.disabled;

    if (autoFocus && !disabled) {
      this.focus();
    }
  };

  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

    var prevValue = this.state.value;
    var value = nextProps.value !== undefined ? nextProps.value : prevValue;
    var nextValue = this.trimAlignValue(value, nextProps);
    if (nextValue === prevValue) return;

    this.setState({ value: nextValue });
    if (utils.isValueOutOfRange(value, nextProps)) {
      this.props.onChange(nextValue);
    }
  };

  Slider.prototype.onChange = function onChange(state) {
    var props = this.props;
    var isNotControlled = !('value' in props);
    if (isNotControlled) {
      this.setState(state);
    }

    var changedValue = state.value;
    props.onChange(changedValue);
  };

  Slider.prototype.onStart = function onStart(position) {
    this.setState({ dragging: true });
    var props = this.props;
    var prevValue = this.getValue();
    props.onBeforeChange(prevValue);

    var value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    if (value === prevValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onMove = function onMove(e, position) {
    utils.pauseEvent(e);
    var oldValue = this.state.value;

    var value = this.calcValueByPos(position);
    if (value === oldValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onKeyboard = function onKeyboard(e) {
    var valueMutator = utils.getKeyboardValueMutator(e);

    if (valueMutator) {
      utils.pauseEvent(e);
      var state = this.state;
      var oldValue = state.value;
      var mutatedValue = valueMutator(oldValue, this.props);
      var value = this.trimAlignValue(mutatedValue);
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  };

  Slider.prototype.getValue = function getValue() {
    return this.state.value;
  };

  Slider.prototype.getLowerBound = function getLowerBound() {
    return this.props.min;
  };

  Slider.prototype.getUpperBound = function getUpperBound() {
    return this.state.value;
  };

  Slider.prototype.trimAlignValue = function trimAlignValue(v) {
    var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var mergedProps = (0, _extends3['default'])({}, this.props, nextProps);
    var val = utils.ensureValueInRange(v, mergedProps);
    return utils.ensureValuePrecision(val, mergedProps);
  };

  Slider.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        vertical = _props2.vertical,
        included = _props2.included,
        disabled = _props2.disabled,
        minimumTrackStyle = _props2.minimumTrackStyle,
        trackStyle = _props2.trackStyle,
        handleStyle = _props2.handleStyle,
        tabIndex = _props2.tabIndex,
        min = _props2.min,
        max = _props2.max,
        handleGenerator = _props2.handle;
    var _state = this.state,
        value = _state.value,
        dragging = _state.dragging;

    var offset = this.calcOffset(value);
    var handle = handleGenerator({
      className: prefixCls + '-handle',
      vertical: vertical,
      offset: offset,
      value: value,
      dragging: dragging,
      disabled: disabled,
      min: min,
      max: max,
      index: 0,
      tabIndex: tabIndex,
      style: handleStyle[0] || handleStyle,
      ref: function ref(h) {
        return _this2.saveHandle(0, h);
      }
    });

    var _trackStyle = trackStyle[0] || trackStyle;
    var track = _react2['default'].createElement(_Track2['default'], {
      className: prefixCls + '-track',
      vertical: vertical,
      included: included,
      offset: 0,
      length: offset,
      style: (0, _extends3['default'])({}, minimumTrackStyle, _trackStyle)
    });

    return { tracks: track, handles: handle };
  };

  return Slider;
}(_react2['default'].Component);

Slider.propTypes = {
  defaultValue: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  disabled: _propTypes2['default'].bool,
  autoFocus: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].number
};
exports['default'] = (0, _createSlider2['default'])(Slider);
module.exports = exports['default'];

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(250);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(30) && !__webpack_require__(38)(function () {
  return Object.defineProperty(__webpack_require__(115)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29);
var document = __webpack_require__(17).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(20);
var toIObject = __webpack_require__(31);
var arrayIndexOf = __webpack_require__(252)(false);
var IE_PROTO = __webpack_require__(64)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(118);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(62);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(255);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(267);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(70);
var $export = __webpack_require__(36);
var redefine = __webpack_require__(122);
var hide = __webpack_require__(27);
var has = __webpack_require__(20);
var Iterators = __webpack_require__(71);
var $iterCreate = __webpack_require__(259);
var setToStringTag = __webpack_require__(73);
var getPrototypeOf = __webpack_require__(262);
var ITERATOR = __webpack_require__(32)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(116);
var hiddenKeys = __webpack_require__(66).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(52);
var createDesc = __webpack_require__(49);
var toIObject = __webpack_require__(31);
var toPrimitive = __webpack_require__(61);
var has = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(114);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(30) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isEventFromHandle = isEventFromHandle;
exports.isValueOutOfRange = isValueOutOfRange;
exports.isNotTouchEvent = isNotTouchEvent;
exports.getClosestPoint = getClosestPoint;
exports.getPrecision = getPrecision;
exports.getMousePosition = getMousePosition;
exports.getTouchPosition = getTouchPosition;
exports.getHandleCenterPosition = getHandleCenterPosition;
exports.ensureValueInRange = ensureValueInRange;
exports.ensureValuePrecision = ensureValuePrecision;
exports.pauseEvent = pauseEvent;
exports.getKeyboardValueMutator = getKeyboardValueMutator;

var _reactDom = __webpack_require__(19);

var _KeyCode = __webpack_require__(293);

var _KeyCode2 = _interopRequireDefault(_KeyCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isEventFromHandle(e, handles) {
  return Object.keys(handles).some(function (key) {
    return e.target === (0, _reactDom.findDOMNode)(handles[key]);
  });
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var closestStep = Math.round((val - min) / step) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, diffs))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = getClosestPoint(val, props);
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function getKeyboardValueMutator(e) {
  switch (e.keyCode) {
    case _KeyCode2['default'].UP:
    case _KeyCode2['default'].RIGHT:
      return function (value, props) {
        return value + props.step;
      };

    case _KeyCode2['default'].DOWN:
    case _KeyCode2['default'].LEFT:
      return function (value, props) {
        return value - props.step;
      };

    case _KeyCode2['default'].END:
      return function (value, props) {
        return props.max;
      };
    case _KeyCode2['default'].HOME:
      return function (value, props) {
        return props.min;
      };
    case _KeyCode2['default'].PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };
    case _KeyCode2['default'].PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }
}

/***/ }),
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_App__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hotkeys__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__media__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__emitter__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_base_skin_min_css__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_base_skin_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__css_base_skin_min_css__);














 // Return a promise that resolves when the store matches a predicate.

const storeHas = (store, predicate) => new Promise(resolve => {
  if (predicate(store.getState())) {
    resolve();
    return;
  }

  const unsubscribe = store.subscribe(() => {
    if (predicate(store.getState())) {
      resolve();
      unsubscribe();
    }
  });
});

class Winamp {
  static browserIsSupported() {
    const supportsAudioApi = !!(window.AudioContext || window.webkitAudioContext);
    const supportsCanvas = !!window.document.createElement("canvas").getContext;
    const supportsPromises = typeof Promise !== "undefined";
    return supportsAudioApi && supportsCanvas && supportsPromises;
  }

  constructor(options) {
    this._subscriptions = [];
    this._actionEmitter = new __WEBPACK_IMPORTED_MODULE_13__emitter__["a" /* default */]();
    this.options = options;
    const _this$options = this.options,
          initialTracks = _this$options.initialTracks,
          initialSkin = _this$options.initialSkin,
          avaliableSkins = _this$options.avaliableSkins,
          availableSkins = _this$options.availableSkins,
          _this$options$enableH = _this$options.enableHotkeys,
          enableHotkeys = _this$options$enableH === void 0 ? false : _this$options$enableH,
          zIndex = _this$options.zIndex,
          requireJSZip = _this$options.requireJSZip,
          requireMusicMetadata = _this$options.requireMusicMetadata,
          __extraWindows = _this$options.__extraWindows; // TODO: Validate required options

    this.media = new __WEBPACK_IMPORTED_MODULE_7__media__["a" /* default */]();
    this.store = Object(__WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */])(this.media, this._actionEmitter, this.options.__customMiddlewares, this.options.__initialState, {
      requireJSZip,
      requireMusicMetadata
    });
    this.store.dispatch({
      type: navigator.onLine ? __WEBPACK_IMPORTED_MODULE_12__actionTypes__["x" /* NETWORK_CONNECTED */] : __WEBPACK_IMPORTED_MODULE_12__actionTypes__["y" /* NETWORK_DISCONNECTED */]
    });

    if (zIndex != null) {
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["_5" /* SET_Z_INDEX */],
        zIndex
      });
    }

    this.genWindows = [];

    if (__extraWindows) {
      this.genWindows = __extraWindows.map(genWindow => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
        id: genWindow.id || `${genWindow.title}-${__WEBPACK_IMPORTED_MODULE_11__utils__["z" /* uniqueId */]()}`
      }, genWindow));

      __extraWindows.forEach(genWindow => {
        if (genWindow.isVisualizer) {
          this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["D" /* REGISTER_VISUALIZER */],
            id: genWindow.id
          });
        }
      });
    }

    this.genWindows.forEach(genWindow => {
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["a" /* ADD_GEN_WINDOW */],
        windowId: genWindow.id,
        title: genWindow.title,
        open: genWindow.open
      });
    });

    if (options.__enableMediaLibrary) {
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["m" /* ENABLE_MEDIA_LIBRARY */]
      });
    }

    window.addEventListener("online", () => this.store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["x" /* NETWORK_CONNECTED */]
    }));
    window.addEventListener("offline", () => this.store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["y" /* NETWORK_DISCONNECTED */]
    }));

    if (initialSkin) {
      this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["P" /* setSkinFromUrl */](initialSkin.url));
    } else {
      // We are using the default skin.
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["q" /* LOADED */]
      });
    }

    if (initialTracks) {
      this.appendTracks(initialTracks);
    }

    if (avaliableSkins != null) {
      console.warn("The misspelled option `avaliableSkins` is deprecated. Please use `availableSkins` instead.");
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["L" /* SET_AVAILABLE_SKINS */],
        skins: avaliableSkins
      });
    } else if (availableSkins != null) {
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["L" /* SET_AVAILABLE_SKINS */],
        skins: availableSkins
      });
    }

    const layout = options.__initialWindowLayout;

    if (layout == null) {
      this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["T" /* stackWindows */]());
    } else {
      __WEBPACK_IMPORTED_MODULE_11__utils__["q" /* objectForEach */](layout, (w, windowId) => {
        if (w.size != null) {
          this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["R" /* setWindowSize */](windowId, w.size));
        }
      });
      this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["_5" /* updateWindowPositions */](__WEBPACK_IMPORTED_MODULE_11__utils__["r" /* objectMap */](layout, w => w.position), false));
    }

    if (enableHotkeys) {
      this._subscriptions.push(Object(__WEBPACK_IMPORTED_MODULE_6__hotkeys__["a" /* bindHotkeys */])(this.store.dispatch));
    }
  }

  play() {
    this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["v" /* play */]());
  }

  pause() {
    this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["u" /* pause */]());
  }

  seekBackward(seconds) {
    this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["F" /* seekBackward */](seconds));
  }

  seekForward(seconds) {
    this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["G" /* seekForward */](seconds));
  }

  nextTrack() {
    this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["p" /* next */]());
  }

  previousTrack() {
    this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["w" /* previous */]());
  } // Append this array of tracks to the end of the current playlist.


  appendTracks(tracks) {
    const nextIndex = __WEBPACK_IMPORTED_MODULE_8__selectors__["z" /* getTrackCount */](this.store.getState());
    this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["m" /* loadMediaFiles */](tracks, __WEBPACK_IMPORTED_MODULE_10__constants__["e" /* LOAD_STYLE */].NONE, nextIndex));
  } // Replace any existing tracks with this array of tracks, and begin playing.


  setTracksToPlay(tracks) {
    this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["m" /* loadMediaFiles */](tracks, __WEBPACK_IMPORTED_MODULE_10__constants__["e" /* LOAD_STYLE */].PLAY));
  }

  onWillClose(cb) {
    return this._actionEmitter.on(__WEBPACK_IMPORTED_MODULE_12__actionTypes__["g" /* CLOSE_REQUESTED */], action => {
      cb(action.cancel);
    });
  }

  onClose(cb) {
    return this._actionEmitter.on(__WEBPACK_IMPORTED_MODULE_12__actionTypes__["h" /* CLOSE_WINAMP */], cb);
  }

  onTrackDidChange(cb) {
    let previousTrackId = null;
    this.store.subscribe(() => {
      const state = this.store.getState();
      const trackId = __WEBPACK_IMPORTED_MODULE_8__selectors__["f" /* getCurrentlyPlayingTrackIdIfLoaded */](state);

      if (trackId === previousTrackId) {
        return;
      }

      previousTrackId = trackId;
      cb(trackId == null ? null : __WEBPACK_IMPORTED_MODULE_8__selectors__["e" /* getCurrentTrackInfo */](state));
    });
  }

  onMinimize(cb) {
    return this._actionEmitter.on(__WEBPACK_IMPORTED_MODULE_12__actionTypes__["w" /* MINIMIZE_WINAMP */], cb);
  }

  async skinIsLoaded() {
    // Wait for the skin to load.
    return storeHas(this.store, state => !state.display.loading);
  }

  __loadSerializedState(serializedState) {
    this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["n" /* loadSerializedState */](serializedState));
  }

  __getSerializedState() {
    return __WEBPACK_IMPORTED_MODULE_8__selectors__["v" /* getSerlializedState */](this.store.getState());
  }

  __onStateChange(cb) {
    return this.store.subscribe(cb);
  }

  async renderWhenReady(node) {
    this.store.dispatch(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["d" /* centerWindowsInContainer */](node));
    await this.skinIsLoaded();
    const genWindowComponents = {};
    this.genWindows.forEach(w => {
      genWindowComponents[w.id] = w.Component;
    });
    Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* Provider */], {
      store: this.store
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_App__["a" /* default */], {
      media: this.media,
      container: node,
      filePickers: this.options.filePickers,
      genWindowComponents: genWindowComponents
    })), node);
  }

  destroy() {
    // TODO: Clean up event emitter subscriptions
    // TODO: Clean up hotkey bindings, if needed
    // TODO: Clean up the Media instance
    // TODO: Clean up online/offline subscriptions on window
    // TODO: Clean up store subscription in onTrackDidChange
    // TODO: Every storeHas call represents a potential race condition
    throw new Error("Not implemented");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Winamp);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(58),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,A=n?Symbol.for("react.memo"):
60115,B=n?Symbol.for("react.lazy"):60116,C="function"===typeof Symbol&&Symbol.iterator;function aa(a,b,e,c,d,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[e,c,d,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F={};
function G(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}G.prototype.isReactComponent={};G.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};G.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function H(){}H.prototype=G.prototype;function I(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}var J=I.prototype=new H;
J.constructor=I;k(J,G.prototype);J.isPureReactComponent=!0;var K={current:null,currentDispatcher:null},L=Object.prototype.hasOwnProperty,M={key:!0,ref:!0,__self:!0,__source:!0};
function N(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:d,_owner:K.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,e,c){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return e(c,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+U(d,h);g+=T(d,f,e,c)}else if(null===a||"object"!==typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,h++),g+=T(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function V(a,b,e){return null==a?0:T(a,"",b,e)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,function(a){return a}):null!=a&&(O(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(P,"$&/")+"/");b=R(b,g,c,d);V(a,da,b);S(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=R(null,null,b,e);V(a,ca,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){O(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:G,PureComponent:I,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:B,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:A,type:a,compare:void 0===b?null:b}},Fragment:r,StrictMode:t,unstable_ConcurrentMode:x,Suspense:z,unstable_Profiler:u,createElement:N,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),
g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=K.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=N.bind(null,a);b.type=a;return b},
isValidElement:O,version:"16.6.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:K,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(58),da=__webpack_require__(147);function ea(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function r(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ea(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:r("227");function fa(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ha=!1,ia=null,ja=!1,ka=null,la={onError:function(a){ha=!0;ia=a}};function ma(a,b,c,d,e,f,g,h,k){ha=!1;ia=null;fa.apply(la,arguments)}function na(a,b,c,d,e,f,g,h,k){ma.apply(this,arguments);if(ha){if(ha){var l=ia;ha=!1;ia=null}else r("198"),l=void 0;ja||(ja=!0,ka=l)}}var oa=null,pa={};
function qa(){if(oa)for(var a in pa){var b=pa[a],c=oa.indexOf(a);-1<c?void 0:r("96",a);if(!ra[c]){b.extractEvents?void 0:r("97",a);ra[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;sa.hasOwnProperty(h)?r("99",h):void 0;sa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ta(k[e],g,h);e=!0}else f.registrationName?(ta(f.registrationName,g,h),e=!0):e=!1;e?void 0:r("98",d,a)}}}}
function ta(a,b,c){ua[a]?r("100",a):void 0;ua[a]=b;va[a]=b.eventTypes[c].dependencies}var ra=[],sa={},ua={},va={},wa=null,xa=null,ya=null;function za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=ya(d);na(b,c,void 0,a);a.currentTarget=null}function Aa(a,b){null==b?r("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function Ba(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Ca=null;function Da(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)za(a,b,c[e],d[e]);else c&&za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ea(a){return Da(a,!0)}function Fa(a){return Da(a,!1)}
var Ga={injectEventPluginOrder:function(a){oa?r("101"):void 0;oa=Array.prototype.slice.call(a);qa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];pa.hasOwnProperty(c)&&pa[c]===d||(pa[c]?r("102",c):void 0,pa[c]=d,b=!0)}b&&qa()}};
function Ha(a,b){var c=a.stateNode;if(!c)return null;var d=wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?r("231",b,typeof c):void 0;
return c}function Ia(a,b){null!==a&&(Ca=Aa(Ca,a));a=Ca;Ca=null;if(a&&(b?Ba(a,Ea):Ba(a,Fa),Ca?r("95"):void 0,ja))throw b=ka,ja=!1,ka=null,b;}var Ka=Math.random().toString(36).slice(2),La="__reactInternalInstance$"+Ka,Ma="__reactEventHandlers$"+Ka;function Na(a){if(a[La])return a[La];for(;!a[La];)if(a.parentNode)a=a.parentNode;else return null;a=a[La];return 5===a.tag||6===a.tag?a:null}function Oa(a){a=a[La];return!a||5!==a.tag&&6!==a.tag?null:a}
function Pa(a){if(5===a.tag||6===a.tag)return a.stateNode;r("33")}function Qa(a){return a[Ma]||null}function Ra(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Sa(a,b,c){if(b=Ha(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a)}
function Ta(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Ra(b);for(b=c.length;0<b--;)Sa(c[b],"captured",a);for(b=0;b<c.length;b++)Sa(c[b],"bubbled",a)}}function Ua(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ha(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a))}function Va(a){a&&a.dispatchConfig.registrationName&&Ua(a._targetInst,null,a)}
function Wa(a){Ba(a,Ta)}var Xa=!("undefined"===typeof window||!window.document||!window.document.createElement);function Ya(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Za={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},$a={},ab={};
Xa&&(ab=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function bb(a){if($a[a])return $a[a];if(!Za[a])return a;var b=Za[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in ab)return $a[a]=b[c];return a}
var cb=bb("animationend"),ib=bb("animationiteration"),jb=bb("animationstart"),kb=bb("transitionend"),lb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mb=null,nb=null,ob=null;
function pb(){if(ob)return ob;var a,b=nb,c=b.length,d,e="value"in mb?mb.value:mb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ob=e.slice(a,1<d?1-d:void 0)}function qb(){return!0}function rb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?qb:rb;this.isPropagationStopped=rb;return this}
n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=qb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=qb)},persist:function(){this.isPersistent=qb},isPersistent:rb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=rb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;sb(c);return c};sb(y);function tb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function ub(a){a instanceof this?void 0:r("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function sb(a){a.eventPool=[];a.getPooled=tb;a.release=ub}var vb=y.extend({data:null}),wb=y.extend({data:null}),xb=[9,13,27,32],yb=Xa&&"CompositionEvent"in window,zb=null;Xa&&"documentMode"in document&&(zb=document.documentMode);
var Ab=Xa&&"TextEvent"in window&&!zb,Bb=Xa&&(!yb||zb&&8<zb&&11>=zb),Cb=String.fromCharCode(32),Db={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Eb=!1;
function Fb(a,b){switch(a){case "keyup":return-1!==xb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Gb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Hb=!1;function Kb(a,b){switch(a){case "compositionend":return Gb(b);case "keypress":if(32!==b.which)return null;Eb=!0;return Cb;case "textInput":return a=b.data,a===Cb&&Eb?null:a;default:return null}}
function Lb(a,b){if(Hb)return"compositionend"===a||!yb&&Fb(a,b)?(a=pb(),ob=nb=mb=null,Hb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Bb&&"ko"!==b.locale?null:b.data;default:return null}}
var Mb={eventTypes:Db,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(yb)b:{switch(a){case "compositionstart":e=Db.compositionStart;break b;case "compositionend":e=Db.compositionEnd;break b;case "compositionupdate":e=Db.compositionUpdate;break b}e=void 0}else Hb?Fb(a,c)&&(e=Db.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=Db.compositionStart);e?(Bb&&"ko"!==c.locale&&(Hb||e!==Db.compositionStart?e===Db.compositionEnd&&Hb&&(f=pb()):(mb=d,nb="value"in mb?mb.value:mb.textContent,Hb=
!0)),e=vb.getPooled(e,b,c,d),f?e.data=f:(f=Gb(c),null!==f&&(e.data=f)),Wa(e),f=e):f=null;(a=Ab?Kb(a,c):Lb(a,c))?(b=wb.getPooled(Db.beforeInput,b,c,d),b.data=a,Wa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Nb=null,Ob=null,Pb=null;function Vb(a){if(a=xa(a)){"function"!==typeof Nb?r("280"):void 0;var b=wa(a.stateNode);Nb(a.stateNode,a.type,b)}}function Wb(a){Ob?Pb?Pb.push(a):Pb=[a]:Ob=a}function Xb(){if(Ob){var a=Ob,b=Pb;Pb=Ob=null;Vb(a);if(b)for(a=0;a<b.length;a++)Vb(b[a])}}
function Yb(a,b){return a(b)}function Zb(a,b,c){return a(b,c)}function $b(){}var ac=!1;function bc(a,b){if(ac)return a(b);ac=!0;try{return Yb(a,b)}finally{if(ac=!1,null!==Ob||null!==Pb)$b(),Xb()}}var cc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!cc[a.type]:"textarea"===b?!0:!1}
function ec(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function fc(a){if(!Xa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function gc(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function hc(a){var b=gc(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function ic(a){a._valueTracker||(a._valueTracker=hc(a))}function jc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=gc(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var kc=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lc=/^(.*)[\\\/]/,D="function"===typeof Symbol&&Symbol.for,mc=D?Symbol.for("react.element"):60103,nc=D?Symbol.for("react.portal"):60106,oc=D?Symbol.for("react.fragment"):60107,pc=D?Symbol.for("react.strict_mode"):60108,qc=D?Symbol.for("react.profiler"):60114,rc=D?Symbol.for("react.provider"):60109,sc=D?Symbol.for("react.context"):60110,tc=D?Symbol.for("react.concurrent_mode"):60111,uc=D?Symbol.for("react.forward_ref"):60112,vc=D?Symbol.for("react.suspense"):
60113,wc=D?Symbol.for("react.memo"):60115,xc=D?Symbol.for("react.lazy"):60116,yc="function"===typeof Symbol&&Symbol.iterator;function zc(a){if(null===a||"object"!==typeof a)return null;a=yc&&a[yc]||a["@@iterator"];return"function"===typeof a?a:null}
function Ac(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case tc:return"ConcurrentMode";case oc:return"Fragment";case nc:return"Portal";case qc:return"Profiler";case pc:return"StrictMode";case vc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case sc:return"Context.Consumer";case rc:return"Context.Provider";case uc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case wc:return Ac(a.type);case xc:if(a=1===a._status?a._result:null)return Ac(a)}return null}function Bc(a){var b="";do{a:switch(a.tag){case 2:case 16:case 0:case 1:case 5:case 8:var c=a._debugOwner,d=a._debugSource,e=Ac(a.type);var f=null;c&&(f=Ac(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(lc,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var Cc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc=Object.prototype.hasOwnProperty,Ec={},Fc={};
function Gc(a){if(Dc.call(Fc,a))return!0;if(Dc.call(Ec,a))return!1;if(Cc.test(a))return Fc[a]=!0;Ec[a]=!0;return!1}function Hc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ic(a,b,c,d){if(null===b||"undefined"===typeof b||Hc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function F(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var G={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){G[a]=new F(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];G[b]=new F(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){G[a]=new F(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){G[a]=new F(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){G[a]=new F(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){G[a]=new F(a,3,!0,a,null)});
["capture","download"].forEach(function(a){G[a]=new F(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){G[a]=new F(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){G[a]=new F(a,5,!1,a.toLowerCase(),null)});var Mc=/[\-:]([a-z])/g;function Nc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Mc,
Nc);G[b]=new F(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Mc,Nc);G[b]=new F(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Mc,Nc);G[b]=new F(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});G.tabIndex=new F("tabIndex",1,!1,"tabindex",null);
function Oc(a,b,c,d){var e=G.hasOwnProperty(b)?G[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ic(b,c,e,d)&&(c=null),d||null===e?Gc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Pc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Qc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Rc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Pc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Sc(a,b){b=b.checked;null!=b&&Oc(a,"checked",b,!1)}
function Tc(a,b){Sc(a,b);var c=Pc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Uc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Uc(a,b.type,Pc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function bd(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Uc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var cd={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function dd(a,b,c){a=y.getPooled(cd.change,a,b,c);a.type="change";Wb(c);Wa(a);return a}var ed=null,fd=null;function gd(a){Ia(a,!1)}
function hd(a){var b=Pa(a);if(jc(b))return a}function id(a,b){if("change"===a)return b}var jd=!1;Xa&&(jd=fc("input")&&(!document.documentMode||9<document.documentMode));function kd(){ed&&(ed.detachEvent("onpropertychange",ld),fd=ed=null)}function ld(a){"value"===a.propertyName&&hd(fd)&&(a=dd(fd,a,ec(a)),bc(gd,a))}function md(a,b,c){"focus"===a?(kd(),ed=b,fd=c,ed.attachEvent("onpropertychange",ld)):"blur"===a&&kd()}function nd(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return hd(fd)}
function od(a,b){if("click"===a)return hd(b)}function pd(a,b){if("input"===a||"change"===a)return hd(b)}
var qd={eventTypes:cd,_isInputEventSupported:jd,extractEvents:function(a,b,c,d){var e=b?Pa(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=id:dc(e)?jd?f=pd:(f=nd,g=md):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=od);if(f&&(f=f(a,b)))return dd(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Uc(e,"number",e.value)}},rd=y.extend({view:null,detail:null}),sd={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function td(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=sd[a])?!!b[a]:!1}function ud(){return td}
var vd=0,wd=0,xd=!1,yd=!1,zd=rd.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:ud,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=vd;vd=a.screenX;return xd?"mousemove"===a.type?a.screenX-b:0:(xd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=wd;wd=a.screenY;return yd?"mousemove"===a.type?a.screenY-b:0:(yd=!0,0)}}),Ad=zd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Bd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Cd={eventTypes:Bd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Na(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=zd,h=Bd.mouseLeave,k=Bd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=Ad,h=Bd.pointerLeave,k=Bd.pointerEnter,l="pointer";var m=null==f?e:Pa(f);e=null==b?e:Pa(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Ra(g))l++;g=0;for(k=e;k;k=Ra(k))g++;for(;0<l-g;)b=Ra(b),l--;for(;0<g-l;)e=Ra(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Ra(b);e=Ra(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Ra(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Ra(d)}for(d=0;d<b.length;d++)Ua(b[d],"bubbled",a);for(d=f.length;0<d--;)Ua(f[d],"captured",c);return[a,c]}},Dd=Object.prototype.hasOwnProperty;function Ed(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function Fd(a,b){if(Ed(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Dd.call(b,c[d])||!Ed(a[c[d]],b[c[d]]))return!1;return!0}function Gd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function Hd(a){2!==Gd(a)?r("188"):void 0}
function Id(a){var b=a.alternate;if(!b)return b=Gd(a),3===b?r("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return Hd(e),a;if(g===d)return Hd(e),b;g=g.sibling}r("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:r("189")}}c.alternate!==d?r("190"):void 0}3!==c.tag?r("188"):void 0;return c.stateNode.current===c?a:b}function Jd(a){a=Id(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var Kd=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Ld=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Md=rd.extend({relatedTarget:null});function Nd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var Od={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd=rd.extend({key:function(a){if(a.key){var b=Od[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Nd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Pd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:ud,charCode:function(a){return"keypress"===
a.type?Nd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?Nd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=zd.extend({dataTransfer:null}),Sd=rd.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:ud}),Td=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Ud=zd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Vd=[["abort","abort"],[cb,"animationEnd"],[ib,"animationIteration"],[jb,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[kb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Wd={},Xd={};function Yd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Wd[a]=b;Xd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Yd(a,!0)});Vd.forEach(function(a){Yd(a,!1)});
var Zd={eventTypes:Wd,isInteractiveTopLevelEventType:function(a){a=Xd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Xd[a];if(!e)return null;switch(a){case "keypress":if(0===Nd(c))return null;case "keydown":case "keyup":a=Qd;break;case "blur":case "focus":a=Md;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=zd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
Rd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=Sd;break;case cb:case ib:case jb:a=Kd;break;case kb:a=Td;break;case "scroll":a=rd;break;case "wheel":a=Ud;break;case "copy":case "cut":case "paste":a=Ld;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Ad;break;default:a=y}b=a.getPooled(e,b,c,d);Wa(b);return b}},$d=Zd.isInteractiveTopLevelEventType,
ae=[];function be(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Na(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=ec(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<ra.length;h++){var k=ra[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=Aa(g,k))}Ia(g,!1)}}var ce=!0;
function H(a,b){if(!b)return null;var c=($d(a)?de:ee).bind(null,a);b.addEventListener(a,c,!1)}function ge(a,b){if(!b)return null;var c=($d(a)?de:ee).bind(null,a);b.addEventListener(a,c,!0)}function de(a,b){Zb(ee,a,b)}
function ee(a,b){if(ce){var c=ec(b);c=Na(c);null===c||"number"!==typeof c.tag||2===Gd(c)||(c=null);if(ae.length){var d=ae.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{bc(be,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>ae.length&&ae.push(a)}}}var he={},ie=0,je="_reactListenersID"+(""+Math.random()).slice(2);
function ke(a){Object.prototype.hasOwnProperty.call(a,je)||(a[je]=ie++,he[a[je]]={});return he[a[je]]}function le(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function me(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function ne(a,b){var c=me(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=me(c)}}function oe(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?oe(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function pe(){for(var a=window,b=le();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=le(a.document)}return b}function qe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var re=Xa&&"documentMode"in document&&11>=document.documentMode,se={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},te=null,ue=null,He=null,Ie=!1;
function Je(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Ie||null==te||te!==le(c))return null;c=te;"selectionStart"in c&&qe(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return He&&Fd(He,c)?null:(He=c,a=y.getPooled(se.select,ue,a,b),a.type="select",a.target=te,Wa(a),a)}
var Ke={eventTypes:se,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=ke(e);f=va.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Pa(b):window;switch(a){case "focus":if(dc(e)||"true"===e.contentEditable)te=e,ue=b,He=null;break;case "blur":He=ue=te=null;break;case "mousedown":Ie=!0;break;case "contextmenu":case "mouseup":case "dragend":return Ie=!1,Je(c,d);case "selectionchange":if(re)break;
case "keydown":case "keyup":return Je(c,d)}return null}};Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa=Qa;xa=Oa;ya=Pa;Ga.injectEventPluginsByName({SimpleEventPlugin:Zd,EnterLeaveEventPlugin:Cd,ChangeEventPlugin:qd,SelectEventPlugin:Ke,BeforeInputEventPlugin:Mb});function Le(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function Me(a,b){a=n({children:void 0},b);if(b=Le(b.children))a.children=b;return a}function Ne(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Pc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Oe(a,b){null!=b.dangerouslySetInnerHTML?r("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Pe(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?r("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:r("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:Pc(c)}}
function Qe(a,b){var c=Pc(b.value),d=Pc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Re(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Se={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Te(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Te(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Ve=void 0,We=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Se.svg||"innerHTML"in a)a.innerHTML=b;else{Ve=Ve||document.createElement("div");Ve.innerHTML="<svg>"+b+"</svg>";for(b=Ve.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Xe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var Ye={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(Ye).forEach(function(a){Ze.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Ye[b]=Ye[a]})});
function $e(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Ye.hasOwnProperty(e)&&Ye[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var af=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function bf(a,b){b&&(af[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?r("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?r("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:r("61")),null!=b.style&&"object"!==typeof b.style?r("62",""):void 0)}
function cf(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function df(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=ke(a);b=va[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":ge("scroll",a);break;case "focus":case "blur":ge("focus",a);ge("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":fc(e)&&ge(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===lb.indexOf(e)&&H(e,a)}c[e]=!0}}}function ef(){}var ff=null,gf=null;
function hf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function jf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var kf=setTimeout,lf=clearTimeout;function mf(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}
function nf(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var of=[],pf=-1;function I(a){0>pf||(a.current=of[pf],of[pf]=null,pf--)}function J(a,b){pf++;of[pf]=a.current;a.current=b}var qf={},K={current:qf},L={current:!1},rf=qf;
function sf(a,b){var c=a.type.contextTypes;if(!c)return qf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function M(a){a=a.childContextTypes;return null!==a&&void 0!==a}function tf(a){I(L,a);I(K,a)}function uf(a){I(L,a);I(K,a)}
function vf(a,b,c){K.current!==qf?r("168"):void 0;J(K,b,a);J(L,c,a)}function wf(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:r("108",Ac(b)||"Unknown",e);return n({},c,d)}function xf(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||qf;rf=K.current;J(K,b,a);J(L,L.current,a);return!0}
function yf(a,b,c){var d=a.stateNode;d?void 0:r("169");c?(b=wf(a,b,rf),d.__reactInternalMemoizedMergedChildContext=b,I(L,a),I(K,a),J(K,b,a)):I(L,a);J(L,c,a)}var zf=null,Af=null;function Bf(a){return function(b){try{return a(b)}catch(c){}}}
function Cf(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);zf=Bf(function(a){return b.onCommitFiberRoot(c,a)});Af=Bf(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Df(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function N(a,b,c,d){return new Df(a,b,c,d)}
function Ef(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Ff(a){if("function"===typeof a)return Ef(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===uc)return 11;if(a===wc)return 14}return 2}
function Gf(a,b){var c=a.alternate;null===c?(c=N(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.firstContextDependency=a.firstContextDependency;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Hf(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ef(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case oc:return If(c.children,e,f,b);case tc:return Jf(c,e|3,f,b);case pc:return Jf(c,e|2,f,b);case qc:return a=N(12,c,b,e|4),a.elementType=qc,a.type=qc,a.expirationTime=f,a;case vc:return a=N(13,c,b,e),a.elementType=vc,a.type=vc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case rc:g=10;break a;case sc:g=9;break a;case uc:g=11;break a;case wc:g=
14;break a;case xc:g=16;d=null;break a}r("130",null==a?a:typeof a,"")}b=N(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function If(a,b,c,d){a=N(7,a,d,b);a.expirationTime=c;return a}function Jf(a,b,c,d){a=N(8,a,d,b);b=0===(b&1)?pc:tc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function Kf(a,b,c){a=N(6,a,null,b);a.expirationTime=c;return a}
function Lf(a,b,c){b=N(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Mf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c>b?a.earliestPendingTime=b:a.latestPendingTime<b&&(a.latestPendingTime=b);Nf(b,a)}
function Of(a,b){a.didError=!1;var c=a.latestPingedTime;0!==c&&c<=b&&(a.latestPingedTime=0);c=a.earliestPendingTime;var d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c>b?a.earliestSuspendedTime=b:d<b&&(a.latestSuspendedTime=b);Nf(b,a)}
function Pf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;if(0===b||0!==c&&c<b)b=c;if(0===b||0!==a&&a<b)b=a;return b}function Nf(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d>a)&&(e=d);a=e;0!==a&&0!==c&&c<a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var Qf=!1;
function Rf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Sf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Tf(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Uf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Vf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Rf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Rf(a.memoizedState),e=c.updateQueue=Rf(c.memoizedState)):d=a.updateQueue=Sf(e):null===e&&(e=c.updateQueue=Sf(d));null===e||d===e?Uf(d,b):null===d.lastUpdate||null===e.lastUpdate?(Uf(d,b),Uf(e,b)):(Uf(d,b),e.lastUpdate=b)}
function Wf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Rf(a.memoizedState):Xf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Xf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Sf(b));return b}
function Yf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:Qf=!0}return d}
function Zf(a,b,c,d,e){Qf=!1;b=Xf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;if(m>e){if(null===g&&(g=k,f=l),0===h||h>m)h=m}else l=Yf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var p=k.expirationTime;if(p>e){if(null===m&&(m=k,null===g&&(f=l)),0===h||h>p)h=p}else l=Yf(a,b,k,l,c,d),
null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function $f(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ag(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ag(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ag(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?r("191",c):void 0;c.call(d)}a=a.nextEffect}}
function bg(a,b){return{value:a,source:b,stack:Bc(b)}}var cg={current:null},dg=null,eg=null,fg=null;function gg(a,b){var c=a.type._context;J(cg,c._currentValue,a);c._currentValue=b}function hg(a){var b=cg.current;I(cg,a);a.type._context._currentValue=b}function ig(a){dg=a;fg=eg=null;a.firstContextDependency=null}
function jg(a,b){if(fg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)fg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===eg?(null===dg?r("293"):void 0,dg.firstContextDependency=eg=b):eg=eg.next=b}return a._currentValue}var kg={},O={current:kg},lg={current:kg},mg={current:kg};function ng(a){a===kg?r("174"):void 0;return a}
function og(a,b){J(mg,b,a);J(lg,a,a);J(O,kg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ue(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Ue(b,c)}I(O,a);J(O,b,a)}function pg(a){I(O,a);I(lg,a);I(mg,a)}function qg(a){ng(mg.current);var b=ng(O.current);var c=Ue(b,a.type);b!==c&&(J(lg,a,a),J(O,c,a))}function rg(a){lg.current===a&&(I(O,a),I(lg,a))}var sg=kc.ReactCurrentOwner,tg=(new aa.Component).refs;
function ug(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var yg={isMounted:function(a){return(a=a._reactInternalFiber)?2===Gd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=vg();d=wg(d,a);var e=Tf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Vf(a,e);xg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=vg();d=wg(d,a);var e=Tf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Vf(a,e);xg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=vg();c=wg(c,a);var d=Tf(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);Vf(a,d);xg(a,c)}};function zg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Fd(c,d)||!Fd(e,f):!0}
function Ag(a,b,c){var d=!1,e=qf;var f=b.contextType;"object"===typeof f&&null!==f?f=sg.currentDispatcher.readContext(f):(e=M(b)?rf:K.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?sf(a,e):qf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=yg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Bg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&yg.enqueueReplaceState(b,b.state,null)}
function Cg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=tg;var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg.currentDispatcher.readContext(f):(f=M(b)?rf:K.current,e.context=sf(a,f));f=a.updateQueue;null!==f&&(Zf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(ug(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&
"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&yg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Zf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Dg=Array.isArray;
function Eg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?r("289"):void 0,d=c.stateNode);d?void 0:r("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===tg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?r("284"):void 0;c._owner?void 0:r("290",a)}return a}
function Fg(a,b){"textarea"!==a.type&&r("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Gg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Gf(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Kf(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Eg(a,b,c),d.return=a,d;d=Hf(c.type,c.key,c.props,null,a.mode,d);d.ref=Eg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Lf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=If(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Kf(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case mc:return c=Hf(b.type,b.key,b.props,null,a.mode,c),c.ref=Eg(a,null,b),c.return=a,c;case nc:return b=Lf(b,a.mode,c),b.return=a,b}if(Dg(b)||
zc(b))return b=If(b,a.mode,c,null),b.return=a,b;Fg(a,b)}return null}function v(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case mc:return c.key===e?c.type===oc?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case nc:return c.key===e?l(a,b,c,d):null}if(Dg(c)||zc(c))return null!==e?null:m(a,b,c,d,null);Fg(a,c)}return null}function B(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case mc:return a=a.get(null===d.key?c:d.key)||null,d.type===oc?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case nc:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Dg(d)||zc(d))return a=a.get(c)||null,m(b,a,d,e,null);Fg(b,d)}return null}function w(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,A=null;null!==q&&u<h.length;u++){q.index>u?(A=q,q=null):A=q.sibling;var t=v(e,q,h[u],k);if(null===t){null===q&&(q=A);break}a&&
q&&null===t.alternate&&b(e,q);g=f(t,g,u);null===m?l=t:m.sibling=t;m=t;q=A}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(A=B(q,e,u,h[u],k))a&&null!==A.alternate&&q.delete(null===A.key?u:A.key),g=f(A,g,u),null===m?l=A:m.sibling=A,m=A;a&&q.forEach(function(a){return b(e,a)});return l}function C(e,g,h,k){var l=zc(h);"function"!==typeof l?r("150"):void 0;h=l.call(h);null==h?r("151"):void 0;
for(var m=l=null,q=g,u=g=0,A=null,t=h.next();null!==q&&!t.done;u++,t=h.next()){q.index>u?(A=q,q=null):A=q.sibling;var w=v(e,q,t.value,k);if(null===w){q||(q=A);break}a&&q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=A}if(t.done)return c(e,q),l;if(null===q){for(;!t.done;u++,t=h.next())t=p(e,t.value,k),null!==t&&(g=f(t,g,u),null===m?l=t:m.sibling=t,m=t);return l}for(q=d(e,q);!t.done;u++,t=h.next())t=B(q,e,u,t.value,k),null!==t&&(a&&null!==t.alternate&&q.delete(null===t.key?u:
t.key),g=f(t,g,u),null===m?l=t:m.sibling=t,m=t);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===oc&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case mc:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===oc:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===oc?f.props.children:f.props,h);d.ref=Eg(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===oc?(d=If(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Hf(f.type,f.key,f.props,null,a.mode,h),h.ref=Eg(a,d,f),h.return=a,a=h)}return g(a);case nc:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Lf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=Kf(f,a.mode,h),d.return=a,a=d),g(a);if(Dg(f))return w(a,d,f,h);if(zc(f))return C(a,d,f,h);l&&Fg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,r("152",h.displayName||h.name||"Component")}return c(a,d)}}var Hg=Gg(!0),Ig=Gg(!1),Jg=null,Kg=null,Lg=!1;
function Mg(a,b){var c=N(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Ng(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}
function Og(a){if(Lg){var b=Kg;if(b){var c=b;if(!Ng(a,b)){b=mf(c);if(!b||!Ng(a,b)){a.effectTag|=2;Lg=!1;Jg=a;return}Mg(Jg,c)}Jg=a;Kg=nf(b)}else a.effectTag|=2,Lg=!1,Jg=a}}function Pg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;Jg=a}function Qg(a){if(a!==Jg)return!1;if(!Lg)return Pg(a),Lg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!jf(b,a.memoizedProps))for(b=Kg;b;)Mg(a,b),b=mf(b);Pg(a);Kg=Jg?mf(a.stateNode):null;return!0}function Rg(){Kg=Jg=null;Lg=!1}
function Sg(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:throw a._status=0,b=a._ctor,b=b(),b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)}),a._result=b,b;}}var Tg=kc.ReactCurrentOwner;function P(a,b,c,d){b.child=null===a?Ig(b,null,c,d):Hg(b,a.child,c,d)}
function Ug(a,b,c,d,e){c=c.render;var f=b.ref;if(!L.current&&b.memoizedProps===d&&f===(null!==a?a.ref:null))return Vg(a,b,e);d=c(d,f);P(a,b,d,e);return b.child}
function Wg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ef(g)&&void 0===g.defaultProps&&null===c.compare)return b.tag=15,b.type=g,Xg(a,b,g,d,e,f);a=Hf(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===e||e>f)if(e=g.memoizedProps,c=c.compare,c=null!==c?c:Fd,c(e,d)&&a.ref===b.ref)return Vg(a,b,f);a=Gf(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Xg(a,b,c,d,e,f){return null!==a&&(0===e||e>f)&&Fd(a.memoizedProps,d)&&a.ref===b.ref?Vg(a,b,f):Yg(a,b,c,d,f)}function Zg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Yg(a,b,c,d,e){var f=M(c)?rf:K.current;f=sf(b,f);ig(b,e);c=c(d,f);b.effectTag|=1;P(a,b,c,e);return b.child}
function $g(a,b,c,d,e){if(M(c)){var f=!0;xf(b)}else f=!1;ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Ag(b,c,d,e),Cg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg.currentDispatcher.readContext(l):(l=M(c)?rf:K.current,l=sf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Bg(b,g,d,l);Qf=!1;var v=b.memoizedState;k=g.state=v;var B=b.updateQueue;null!==B&&(Zf(b,B,d,g,e),k=b.memoizedState);h!==d||v!==k||L.current||Qf?("function"===typeof m&&(ug(b,c,m,d),k=b.memoizedState),(h=Qf||zg(b,c,h,d,v,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=h,k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg.currentDispatcher.readContext(l):(l=M(c)?rf:K.current,l=sf(b,l)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Bg(b,g,d,l),Qf=!1,k=b.memoizedState,v=g.state=k,B=b.updateQueue,null!==B&&(Zf(b,B,d,g,e),v=b.memoizedState),h!==d||k!==v||L.current||Qf?("function"===typeof m&&(ug(b,c,m,d),v=b.memoizedState),(m=Qf||zg(b,c,h,d,k,v,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,v,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,v,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
v),g.props=d,g.state=v,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return ah(a,b,c,d,f,e)}
function ah(a,b,c,d,e,f){Zg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&yf(b,c,!1),Vg(a,b,f);d=b.stateNode;Tg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Hg(b,a.child,null,f),b.child=Hg(b,null,h,f)):P(a,b,h,f);b.memoizedState=d.state;e&&yf(b,c,!0);return b.child}function bh(a){var b=a.stateNode;b.pendingContext?vf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&vf(a,b.context,!1);og(a,b.containerInfo)}
function ch(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function dh(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;null!==f&&(f.alreadyCaptured?null!==a&&f===a.memoizedState?f={alreadyCaptured:!0,didTimeout:!0,timedOutAt:f.timedOutAt}:(f.alreadyCaptured=!0,f.didTimeout=!0):f=null);var g=null!==f&&f.didTimeout;if(null===a)g?(g=e.fallback,e=If(null,d,0,null),d=If(g,d,c,null),e.sibling=d,c=e,c.return=d.return=b):c=d=Ig(b,null,e.children,c);else{var h=a.memoizedState;null!==h&&h.didTimeout?(d=a.child,a=d.sibling,g?(c=e.fallback,d=Gf(d,d.pendingProps,
0),d.effectTag|=2,e=d.sibling=Gf(a,c,a.expirationTime),e.effectTag|=2,c=d,d.childExpirationTime=0,d=e,c.return=d.return=b):(g=a.child,d=Hg(b,d.child,e.children,c),Hg(b,g,null,c),c=d)):(a=a.child,g?(g=e.fallback,e=If(null,d,0,null),e.effectTag|=2,e.child=a,a.return=e,d=e.sibling=If(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Hg(b,a,e.children,c))}b.memoizedState=f;b.child=c;return d}
function Vg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);var d=b.childExpirationTime;if(0===d||d>c)return null;null!==a&&b.child!==a.child?r("153"):void 0;if(null!==b.child){a=b.child;c=Gf(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Gf(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function eh(a,b,c){var d=b.expirationTime;if(null!==a&&a.memoizedProps===b.pendingProps&&!L.current&&(0===d||d>c)){switch(b.tag){case 3:bh(b);Rg();break;case 5:qg(b);break;case 1:M(b.type)&&xf(b);break;case 4:og(b,b.stateNode.containerInfo);break;case 10:gg(b,b.memoizedProps.value);break;case 13:if(d=b.memoizedState,null!==d&&d.didTimeout){d=b.child.childExpirationTime;if(0!==d&&d<=c)return dh(a,b,c);b=Vg(a,b,c);return null!==b?b.sibling:null}}return Vg(a,b,c)}b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=sf(b,K.current);ig(b,c);e=d(a,e);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;if(M(d)){var f=!0;xf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&ug(b,d,g,a);e.updater=yg;b.stateNode=e;e._reactInternalFiber=b;Cg(b,d,a,c);b=ah(null,b,d,!0,f,c)}else b.tag=0,
P(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=Sg(e);b.type=a;e=b.tag=Ff(a);f=ch(a,f);g=void 0;switch(e){case 0:g=Yg(null,b,a,f,c);break;case 1:g=$g(null,b,a,f,c);break;case 11:g=Ug(null,b,a,f,c);break;case 14:g=Wg(null,b,a,ch(a.type,f),d,c);break;default:r("283",a)}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ch(d,e),Yg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:ch(d,e),$g(a,b,d,e,c);case 3:bh(b);d=b.updateQueue;null===d?r("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;Zf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Rg(),b=Vg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)Kg=nf(b.stateNode.containerInfo),Jg=b,e=Lg=!0;e?(b.effectTag|=2,b.child=Ig(b,null,d,c)):(P(a,b,d,c),Rg());b=b.child}return b;case 5:return qg(b),null===a&&Og(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,jf(d,
e)?g=null:null!==f&&jf(d,f)&&(b.effectTag|=16),Zg(a,b),1073741823!==c&&b.mode&1&&e.hidden?(b.expirationTime=1073741823,b=null):(P(a,b,g,c),b=b.child),b;case 6:return null===a&&Og(b),null;case 13:return dh(a,b,c);case 4:return og(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Hg(b,null,d,c):P(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ch(d,e),Ug(a,b,d,e,c);case 7:return P(a,b,b.pendingProps,c),b.child;case 8:return P(a,b,b.pendingProps.children,
c),b.child;case 12:return P(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;gg(b,f);if(null!==g){var h=g.value;f=h===f&&(0!==h||1/h===1/f)||h!==h&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!L.current){b=Vg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&
f)){if(1===g.tag){var k=Tf(c);k.tag=2;Vf(g,k)}if(0===g.expirationTime||g.expirationTime>c)g.expirationTime=c;k=g.alternate;null!==k&&(0===k.expirationTime||k.expirationTime>c)&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(0===l.childExpirationTime||l.childExpirationTime>c)l.childExpirationTime=c,null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c)&&(k.childExpirationTime=c);else if(null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c))k.childExpirationTime=
c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==k;){if(k===b){k=null;break}g=k.sibling;if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}P(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,ig(b,c),e=jg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,P(a,b,d,c),b.child;case 14:return e=b.type,f=ch(e.type,b.pendingProps),Wg(a,b,e,f,d,c);case 15:return Xg(a,
b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ch(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,M(d)?(a=!0,xf(b)):a=!1,ig(b,c),Ag(b,d,e,c),Cg(b,d,e,c),ah(null,b,d,!0,a,c);default:r("156")}}function zh(a){a.effectTag|=4}var Ah=void 0,Bh=void 0,Ch=void 0,Dh=void 0;
Ah=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bh=function(){};
Ch=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ng(O.current);a=null;switch(c){case "input":f=Qc(g,f);d=Qc(g,d);a=[];break;case "option":f=Me(g,f);d=Me(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Oe(g,f);d=Oe(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ef)}bf(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ua.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ua.hasOwnProperty(c)?(null!=l&&df(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&zh(b)}};Dh=function(a,b,c,d){c!==d&&zh(b)};
function Eh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Bc(c));null!==c&&Ac(c.type);b=b.value;null!==a&&1===a.tag&&Ac(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Fh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Gh(a,c)}else b.current=null}
function Hh(a){"function"===typeof Af&&Af(a);switch(a.tag){case 1:Fh(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Gh(a,c)}break;case 5:Fh(a);break;case 4:Ih(a)}}function Jh(a){return 5===a.tag||3===a.tag||4===a.tag}
function Kh(a){a:{for(var b=a.return;null!==b;){if(Jh(b)){var c=b;break a}b=b.return}r("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:r("161")}c.effectTag&16&&(Xe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Jh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=ef)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Ih(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?r("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(Hh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?(d=b.stateNode.containerInfo,e=!0):Hh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Lh(a,b){switch(b.tag){case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ma]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Sc(c,d);cf(a,e);b=cf(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?$e(c,h):"dangerouslySetInnerHTML"===g?We(c,h):"children"===g?Xe(c,h):Oc(c,g,h,b)}switch(a){case "input":Tc(c,d);break;case "textarea":Qe(c,d);break;case "select":a=c._wrapperState.wasMultiple,
c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?Ne(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?Ne(c,!!d.multiple,d.defaultValue,!0):Ne(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:null===b.stateNode?r("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:break;case 17:break;default:r("163")}}function Mh(a,b,c){c=Tf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Nh(d);Eh(a,b)};return c}
function Oh(a,b,c){c=Tf(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ph?Ph=new Set([this]):Ph.add(this));var c=b.value,e=b.stack;Eh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Qh(a){switch(a.tag){case 1:M(a.type)&&tf(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return pg(a),uf(a),b=a.effectTag,0!==(b&64)?r("285"):void 0,a.effectTag=b&-1025|64,a;case 5:return rg(a),null;case 13:b=a.effectTag;if(b&1024){a.effectTag=b&-1025|64;b=a.alternate;b=null!==b?b.memoizedState:null;var c=a.memoizedState;null===c?c={alreadyCaptured:!0,didTimeout:!1,timedOutAt:0}:b===c?c={alreadyCaptured:!0,didTimeout:c.didTimeout,timedOutAt:c.timedOutAt}:c.alreadyCaptured=
!0;a.memoizedState=c;return a}return null;case 4:return pg(a),null;case 10:return hg(a),null;default:return null}}var Rh={readContext:jg},Sh=kc.ReactCurrentOwner,Th=0,Uh=0,Vh=!1,Q=null,R=null,S=0,Wh=-1,Xh=!1,T=null,Yh=!1,Ph=null;function Zh(){if(null!==Q)for(var a=Q.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&tf(b);break;case 3:pg(b);uf(b);break;case 5:rg(b);break;case 4:pg(b);break;case 10:hg(b)}a=a.return}R=null;S=0;Wh=-1;Xh=!1;Q=null}
function $h(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){var e=b;b=a;var f=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:M(b.type)&&tf(b);break;case 3:pg(b);uf(b);f=b.stateNode;f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null);if(null===e||null===e.child)Qg(b),b.effectTag&=-3;Bh(b);break;case 5:rg(b);var g=ng(mg.current),h=b.type;if(null!==e&&null!=b.stateNode)Ch(e,b,h,f,g),e.ref!==b.ref&&(b.effectTag|=128);
else if(f){var k=ng(O.current);if(Qg(b)){f=b;e=f.stateNode;var l=f.type,m=f.memoizedProps,p=g;e[La]=f;e[Ma]=m;h=void 0;g=l;switch(g){case "iframe":case "object":H("load",e);break;case "video":case "audio":for(l=0;l<lb.length;l++)H(lb[l],e);break;case "source":H("error",e);break;case "img":case "image":case "link":H("error",e);H("load",e);break;case "form":H("reset",e);H("submit",e);break;case "details":H("toggle",e);break;case "input":Rc(e,m);H("invalid",e);df(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};H("invalid",e);df(p,"onChange");break;case "textarea":Pe(e,m),H("invalid",e),df(p,"onChange")}bf(g,m);l=null;for(h in m)m.hasOwnProperty(h)&&(k=m[h],"children"===h?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):ua.hasOwnProperty(h)&&null!=k&&df(p,h));switch(g){case "input":ic(e);bd(e,m,!0);break;case "textarea":ic(e);Re(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=ef)}h=l;f.updateQueue=h;f=null!==h?!0:!1;f&&zh(b)}else{m=b;e=h;p=f;l=9===g.nodeType?g:g.ownerDocument;k===Se.html&&(k=Te(e));k===Se.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof p.is?l=l.createElement(e,{is:p.is}):(l=l.createElement(e),"select"===e&&p.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[La]=m;e[Ma]=f;Ah(e,b,!1,!1);p=e;l=h;m=f;var v=g,B=cf(l,m);switch(l){case "iframe":case "object":H("load",
p);g=m;break;case "video":case "audio":for(g=0;g<lb.length;g++)H(lb[g],p);g=m;break;case "source":H("error",p);g=m;break;case "img":case "image":case "link":H("error",p);H("load",p);g=m;break;case "form":H("reset",p);H("submit",p);g=m;break;case "details":H("toggle",p);g=m;break;case "input":Rc(p,m);g=Qc(p,m);H("invalid",p);df(v,"onChange");break;case "option":g=Me(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};g=n({},m,{value:void 0});H("invalid",p);df(v,"onChange");break;case "textarea":Pe(p,
m);g=Oe(p,m);H("invalid",p);df(v,"onChange");break;default:g=m}bf(l,g);k=void 0;var w=l,C=p,u=g;for(k in u)if(u.hasOwnProperty(k)){var q=u[k];"style"===k?$e(C,q):"dangerouslySetInnerHTML"===k?(q=q?q.__html:void 0,null!=q&&We(C,q)):"children"===k?"string"===typeof q?("textarea"!==w||""!==q)&&Xe(C,q):"number"===typeof q&&Xe(C,""+q):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ua.hasOwnProperty(k)?null!=q&&df(v,k):null!=q&&Oc(C,k,q,B))}switch(l){case "input":ic(p);
bd(p,m,!1);break;case "textarea":ic(p);Re(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+Pc(m.value));break;case "select":g=p;g.multiple=!!m.multiple;p=m.value;null!=p?Ne(g,!!m.multiple,p,!1):null!=m.defaultValue&&Ne(g,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof g.onClick&&(p.onclick=ef)}(f=hf(h,f))&&zh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?r("166"):void 0;break;case 6:e&&null!=b.stateNode?Dh(e,b,e.memoizedProps,f):("string"!==
typeof f&&(null===b.stateNode?r("166"):void 0),e=ng(mg.current),ng(O.current),Qg(b)?(f=b,h=f.stateNode,e=f.memoizedProps,h[La]=f,(f=h.nodeValue!==e)&&zh(b)):(h=b,f=(9===e.nodeType?e:e.ownerDocument).createTextNode(f),f[La]=b,h.stateNode=f));break;case 11:break;case 13:f=b.memoizedState;h=null!==e?e.memoizedState:null;(null!==f&&f.didTimeout)!==(null!==h&&h.didTimeout)&&(b.effectTag|=4);break;case 7:break;case 8:break;case 12:break;case 4:pg(b);Bh(b);break;case 10:hg(b);break;case 9:break;case 14:break;
case 17:M(b.type)&&tf(b);break;default:r("156")}Q=null;b=a;if(1073741823===S||1073741823!==b.childExpirationTime){f=0;for(h=b.child;null!==h;){e=h.expirationTime;g=h.childExpirationTime;if(0===f||0!==e&&e<f)f=e;if(0===f||0!==g&&g<f)f=g;h=h.sibling}b.childExpirationTime=f}null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?
c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Qh(a,S);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function ai(a){var b=eh(a.alternate,a,S);a.memoizedProps=a.pendingProps;null===b&&(b=$h(a));Sh.current=null;return b}
function bi(a,b,c){Vh?r("243"):void 0;Vh=!0;Sh.currentDispatcher=Rh;var d=a.nextExpirationTimeToWorkOn;if(d!==S||a!==R||null===Q)Zh(),R=a,S=d,Q=Gf(R.current,null,S),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==Q&&!ci();)Q=ai(Q);else for(;null!==Q;)Q=ai(Q)}catch(C){if(null===Q)e=!0,Nh(C);else{null===Q?r("271"):void 0;var f=Q,g=f.return;if(null===g)e=!0,Nh(C);else{a:{var h=a,k=g,l=f,m=C;g=S;l.effectTag|=512;l.firstEffect=l.lastEffect=null;if(null!==m&&"object"===typeof m&&"function"===
typeof m.then){var p=m;m=k;var v=-1,B=-1;do{if(13===m.tag){var w=m.alternate;if(null!==w&&(w=w.memoizedState,null!==w&&w.didTimeout)){B=10*(w.timedOutAt-2);break}w=m.pendingProps.maxDuration;if("number"===typeof w)if(0>=w)v=0;else if(-1===v||w<v)v=w}m=m.return}while(null!==m);m=k;do{if(w=13===m.tag)void 0===m.memoizedProps.fallback?w=!1:(w=m.memoizedState,w=null===w||!w.didTimeout);if(w){k=di.bind(null,h,m,l,0===(m.mode&1)?1:g);p.then(k,k);if(0===(m.mode&1)){m.effectTag|=32;P(l.alternate,l,null,g);
l.effectTag&=-513;1===l.tag&&(l.effectTag&=-421,null===l.alternate&&(l.tag=17));break a}-1===v?h=1073741823:(-1===B&&(B=10*(Pf(h,g)-2)-5E3),h=B+v);0<=h&&Wh<h&&(Wh=h);m.effectTag|=1024;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error("An update was suspended, but no placeholder UI was provided.")}Xh=!0;m=bg(m,l);h=k;do{switch(h.tag){case 3:l=m;h.effectTag|=1024;h.expirationTime=g;g=Mh(h,l,g);Wf(h,g);break a;case 1:if(l=m,k=h.type,p=h.stateNode,0===(h.effectTag&64)&&("function"===typeof k.getDerivedStateFromError||
null!==p&&"function"===typeof p.componentDidCatch&&(null===Ph||!Ph.has(p)))){h.effectTag|=1024;h.expirationTime=g;g=Oh(h,l,g);Wf(h,g);break a}}h=h.return}while(null!==h)}Q=$h(f);continue}}}break}while(1);Vh=!1;fg=eg=dg=Sh.currentDispatcher=null;if(e)R=null,a.finishedWork=null;else if(null!==Q)a.finishedWork=null;else{b=a.current.alternate;null===b?r("281"):void 0;R=null;if(Xh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e>d||0!==f&&f>d||0!==g&&g>d){Of(a,d);ei(a,b,
d,a.expirationTime,-1);return}if(!a.didError&&!c){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;c=a.expirationTime=1;ei(a,b,d,c,-1);return}}c||-1===Wh?(a.pendingCommitExpirationTime=d,a.finishedWork=b):(Of(a,d),c=10*(Pf(a,d)-2),c<Wh&&(Wh=c),c=10*(vg()-2),c=Wh-c,ei(a,b,d,a.expirationTime,0>c?0:c))}}
function Gh(a,b){var c;a:{Vh&&!Yh?r("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ph||!Ph.has(d))){a=bg(b,a);a=Oh(c,a,1);Vf(c,a);xg(c,1);c=void 0;break a}break;case 3:a=bg(b,a);a=Mh(c,a,1);Vf(c,a);xg(c,1);c=void 0;break a}c=c.return}3===a.tag&&(c=bg(b,a),c=Mh(a,c,1),Vf(a,c),xg(a,1));c=void 0}return c}
function wg(a,b){0!==Uh?a=Uh:Vh?a=Yh?1:S:b.mode&1?(a=fi?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1),null!==R&&a===S&&(a+=1)):a=1;fi&&a>gi&&(gi=a);return a}
function di(a,b,c,d){var e=a.earliestSuspendedTime;var f=a.latestSuspendedTime;if(0!==e&&d>=e&&d<=f){f=e=d;a.didError=!1;var g=a.latestPingedTime;if(0===g||g<f)a.latestPingedTime=f;Nf(f,a)}else e=vg(),e=wg(e,b),Mf(a,e);0!==(b.mode&1)&&a===R&&S===d&&(R=null);hi(b,e);0===(b.mode&1)&&(hi(c,e),1===c.tag&&null!==c.stateNode&&(b=Tf(e),b.tag=2,Vf(c,b)));c=a.expirationTime;0!==c&&ii(a,c)}
function hi(a,b){if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;var c=a.alternate;null!==c&&(0===c.expirationTime||c.expirationTime>b)&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;if(0===d.childExpirationTime||d.childExpirationTime>b)d.childExpirationTime=b;null!==c&&(0===c.childExpirationTime||c.childExpirationTime>b)&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return null===
e?null:e}function xg(a,b){a=hi(a,b);null!==a&&(!Vh&&0!==S&&b<S&&Zh(),Mf(a,b),Vh&&!Yh&&R===a||ii(a,a.expirationTime),ji>ki&&(ji=0,r("185")))}function li(a,b,c,d,e){var f=Uh;Uh=1;try{return a(b,c,d,e)}finally{Uh=f}}var U=null,V=null,mi=0,ni=void 0,W=!1,X=null,Y=0,gi=0,oi=!1,pi=!1,qi=null,ri=null,Z=!1,si=!1,fi=!1,ti=null,ui=da.unstable_now(),vi=(ui/10|0)+2,wi=vi,ki=50,ji=0,xi=null,yi=1;function zi(){vi=((da.unstable_now()-ui)/10|0)+2}
function Ai(a,b){if(0!==mi){if(b>mi)return;null!==ni&&da.unstable_cancelCallback(ni)}mi=b;a=da.unstable_now()-ui;ni=da.unstable_scheduleCallback(Bi,{timeout:10*(b-2)-a})}function ei(a,b,c,d,e){a.expirationTime=d;0!==e||ci()?0<e&&(a.timeoutHandle=kf(Ci.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ci(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;zi();wi=vi;Di(a,c)}function vg(){if(W)return wi;Ei();if(0===Y||1073741823===Y)zi(),wi=vi;return wi}
function ii(a,b){if(null===a.nextScheduledRoot)a.expirationTime=b,null===V?(U=V=a,a.nextScheduledRoot=a):(V=V.nextScheduledRoot=a,V.nextScheduledRoot=U);else{var c=a.expirationTime;if(0===c||b<c)a.expirationTime=b}W||(Z?si&&(X=a,Y=1,Fi(a,1,!0)):1===b?Gi(1,null):Ai(a,b))}
function Ei(){var a=0,b=null;if(null!==V)for(var c=V,d=U;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===V?r("244"):void 0;if(d===d.nextScheduledRoot){U=V=d.nextScheduledRoot=null;break}else if(d===U)U=e=d.nextScheduledRoot,V.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===V){V=c;V.nextScheduledRoot=U;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===V)break;if(1===a)break;
c=d;d=d.nextScheduledRoot}}X=b;Y=a}function Bi(a){if(a.didTimeout&&null!==U){zi();var b=U;do{var c=b.expirationTime;0!==c&&vi>=c&&(b.nextExpirationTimeToWorkOn=vi);b=b.nextScheduledRoot}while(b!==U)}Gi(0,a)}
function Gi(a,b){ri=b;Ei();if(null!==ri)for(zi(),wi=vi;null!==X&&0!==Y&&(0===a||a>=Y)&&(!oi||vi>=Y);)Fi(X,Y,vi>=Y),Ei(),zi(),wi=vi;else for(;null!==X&&0!==Y&&(0===a||a>=Y);)Fi(X,Y,!0),Ei();null!==ri&&(mi=0,ni=null);0!==Y&&Ai(X,Y);ri=null;oi=!1;ji=0;xi=null;if(null!==ti)for(a=ti,ti=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Di(a,b){W?r("253"):void 0;X=a;Y=b;Fi(a,b,!0);Gi(1,null)}
function Fi(a,b,c){W?r("245"):void 0;W=!0;if(null===ri||c){var d=a.finishedWork;null!==d?Hi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,lf(d)),bi(a,!1,c),d=a.finishedWork,null!==d&&Hi(a,d,b))}else d=a.finishedWork,null!==d?Hi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,lf(d)),bi(a,!0,c),d=a.finishedWork,null!==d&&(ci()?a.finishedWork=d:Hi(a,d,b)));W=!1}
function Hi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===ti?ti=[d]:ti.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===xi?ji++:(xi=a,ji=0);Yh=Vh=!0;a.current===b?r("177"):void 0;var e=a.pendingCommitExpirationTime;0===e?r("261"):void 0;a.pendingCommitExpirationTime=0;var f=b.expirationTime,g=b.childExpirationTime,h=0===f||0!==g&&g<f?g:f;a.didError=!1;if(0===h)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=
0,a.latestPingedTime=0;else{var k=a.latestPendingTime;0!==k&&(k<h?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime<h&&(a.earliestPendingTime=a.latestPendingTime));var l=a.earliestSuspendedTime;0===l?Mf(a,h):h>a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Mf(a,h)):h<l&&Mf(a,h)}Nf(0,a);Sh.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var m=b.firstEffect}else m=b;else m=b.firstEffect;ff=ce;var p=pe();if(qe(p)){if("selectionStart"in
p)var v={start:p.selectionStart,end:p.selectionEnd};else a:{var B=p.ownerDocument,w=B&&B.defaultView||window,C=w.getSelection&&w.getSelection();if(C&&0!==C.rangeCount){var u=C.anchorNode,q=C.anchorOffset,A=C.focusNode,fe=C.focusOffset;try{u.nodeType,A.nodeType}catch(db){v=null;break a}var Ib=0,Jc=-1,Kc=-1,Ni=0,Oi=0,t=p,Jb=null;b:for(;;){for(var Lc;;){t!==u||0!==q&&3!==t.nodeType||(Jc=Ib+q);t!==A||0!==fe&&3!==t.nodeType||(Kc=Ib+fe);3===t.nodeType&&(Ib+=t.nodeValue.length);if(null===(Lc=t.firstChild))break;
Jb=t;t=Lc}for(;;){if(t===p)break b;Jb===u&&++Ni===q&&(Jc=Ib);Jb===A&&++Oi===fe&&(Kc=Ib);if(null!==(Lc=t.nextSibling))break;t=Jb;Jb=t.parentNode}t=Lc}v=-1===Jc||-1===Kc?null:{start:Jc,end:Kc}}else v=null}var fh=v||{start:0,end:0}}else fh=null;gf={focusedElem:p,selectionRange:fh};ce=!1;for(T=m;null!==T;){var gh=!1,hh=void 0;try{for(;null!==T;){if(T.effectTag&256){var ve=T.alternate;a:{var Qb=T;switch(Qb.tag){case 1:if(Qb.effectTag&256&&null!==ve){var Zi=ve.memoizedProps,$i=ve.memoizedState,Vc=Qb.stateNode;
Vc.props=Qb.memoizedProps;Vc.state=Qb.memoizedState;var aj=Vc.getSnapshotBeforeUpdate(Zi,$i);Vc.__reactInternalSnapshotBeforeUpdate=aj}break a;case 3:case 5:case 6:case 4:case 17:break a;default:r("163")}}}T=T.nextEffect}}catch(db){gh=!0,hh=db}gh&&(null===T?r("178"):void 0,Gh(T,hh),null!==T&&(T=T.nextEffect))}for(T=m;null!==T;){var ih=!1,jh=void 0;try{for(;null!==T;){var we=T.effectTag;we&16&&Xe(T.stateNode,"");if(we&128){var kh=T.alternate;if(null!==kh){var Wc=kh.ref;null!==Wc&&("function"===typeof Wc?
Wc(null):Wc.current=null)}}switch(we&14){case 2:Kh(T);T.effectTag&=-3;break;case 6:Kh(T);T.effectTag&=-3;Lh(T.alternate,T);break;case 4:Lh(T.alternate,T);break;case 8:var lh=T;Ih(lh);var Rb=lh;Rb.return=null;Rb.child=null;Rb.alternate&&(Rb.alternate.child=null,Rb.alternate.return=null)}T=T.nextEffect}}catch(db){ih=!0,jh=db}ih&&(null===T?r("178"):void 0,Gh(T,jh),null!==T&&(T=T.nextEffect))}var mh=gf,bj=pe(),E=mh.focusedElem,eb=mh.selectionRange;if(bj!==E&&E&&E.ownerDocument&&oe(E.ownerDocument.documentElement,
E)){if(null!==eb&&qe(E)){var nh=eb.start,xe=eb.end;void 0===xe&&(xe=nh);if("selectionStart"in E)E.selectionStart=nh,E.selectionEnd=Math.min(xe,E.value.length);else{var ye=E.ownerDocument||document,ba=(ye&&ye.defaultView||window).getSelection(),oh=E.textContent.length,fb=Math.min(eb.start,oh),Sb=void 0===eb.end?fb:Math.min(eb.end,oh);if(!ba.extend&&fb>Sb){var cj=Sb;Sb=fb;fb=cj}var Tb=ne(E,fb),Ja=ne(E,Sb);if(Tb&&Ja&&(1!==ba.rangeCount||ba.anchorNode!==Tb.node||ba.anchorOffset!==Tb.offset||ba.focusNode!==
Ja.node||ba.focusOffset!==Ja.offset)){var Xc=ye.createRange();Xc.setStart(Tb.node,Tb.offset);ba.removeAllRanges();fb>Sb?(ba.addRange(Xc),ba.extend(Ja.node,Ja.offset)):(Xc.setEnd(Ja.node,Ja.offset),ba.addRange(Xc))}}}for(var ze=[],gb=E;gb=gb.parentNode;)1===gb.nodeType&&ze.push({element:gb,left:gb.scrollLeft,top:gb.scrollTop});"function"===typeof E.focus&&E.focus();for(var Ae=0;Ae<ze.length;Ae++){var Yc=ze[Ae];Yc.element.scrollLeft=Yc.left;Yc.element.scrollTop=Yc.top}}gf=null;ce=!!ff;ff=null;a.current=
b;for(T=m;null!==T;){var ph=!1,qh=void 0;try{for(var dj=e;null!==T;){var rh=T.effectTag;if(rh&36){var Zc=void 0,hb=T.alternate,x=T,sh=dj;switch(x.tag){case 1:var ca=x.stateNode;if(x.effectTag&4)if(null===hb)ca.props=x.memoizedProps,ca.state=x.memoizedState,ca.componentDidMount();else{var ej=hb.memoizedProps,fj=hb.memoizedState;ca.props=x.memoizedProps;ca.state=x.memoizedState;ca.componentDidUpdate(ej,fj,ca.__reactInternalSnapshotBeforeUpdate)}var th=x.updateQueue;null!==th&&(ca.props=x.memoizedProps,
ca.state=x.memoizedState,$f(x,th,ca,sh));break;case 3:var uh=x.updateQueue;if(null!==uh){var Be=null;if(null!==x.child)switch(x.child.tag){case 5:Be=x.child.stateNode;break;case 1:Be=x.child.stateNode}$f(x,uh,Be,sh)}break;case 5:var gj=x.stateNode;null===hb&&x.effectTag&4&&hf(x.type,x.memoizedProps)&&gj.focus();break;case 6:break;case 4:break;case 12:break;case 13:if(x.effectTag&32){x.memoizedState={alreadyCaptured:!0,didTimeout:!1,timedOutAt:0};xg(x,1);break}var vh=null!==hb?hb.memoizedState:null,
Ub=x.memoizedState,hj=null!==vh?vh.didTimeout:!1,Ce=x;if(null===Ub)Zc=!1;else if(Zc=Ub.didTimeout)Ce=x.child,Ub.alreadyCaptured=!1,0===Ub.timedOutAt&&(Ub.timedOutAt=vg());if(Zc!==hj&&null!==Ce)a:for(var De=Ce,wh=Zc,z=De;;){if(5===z.tag){var ij=z.stateNode;if(wh)ij.style.display="none";else{var jj=z.stateNode,$c=z.memoizedProps.style,kj=void 0!==$c&&null!==$c&&$c.hasOwnProperty("display")?$c.display:null;jj.style.display=kj}}else if(6===z.tag)z.stateNode.nodeValue=wh?"":z.memoizedProps;else if(null!==
z.child){z.child.return=z;z=z.child;continue}if(z===De)break a;for(;null===z.sibling;){if(null===z.return||z.return===De)break a;z=z.return}z.sibling.return=z.return;z=z.sibling}break;case 17:break;default:r("163")}}if(rh&128){var ad=T.ref;if(null!==ad){var xh=T.stateNode;switch(T.tag){case 5:var Ee=xh;break;default:Ee=xh}"function"===typeof ad?ad(Ee):ad.current=Ee}}var lj=T.nextEffect;T.nextEffect=null;T=lj}}catch(db){ph=!0,qh=db}ph&&(null===T?r("178"):void 0,Gh(T,qh),null!==T&&(T=T.nextEffect))}Vh=
Yh=!1;"function"===typeof zf&&zf(b.stateNode);var Fe=b.expirationTime,Ge=b.childExpirationTime,yh=0===Fe||0!==Ge&&Ge<Fe?Ge:Fe;0===yh&&(Ph=null);a.expirationTime=yh;a.finishedWork=null}function ci(){return oi?!0:null===ri||ri.timeRemaining()>yi?!1:oi=!0}function Nh(a){null===X?r("246"):void 0;X.expirationTime=0;pi||(pi=!0,qi=a)}function Ii(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||W||Gi(1,null)}}function Ji(a,b){if(Z&&!si){si=!0;try{return a(b)}finally{si=!1}}return a(b)}
function Ki(a,b,c){if(fi)return a(b,c);Z||W||0===gi||(Gi(gi,null),gi=0);var d=fi,e=Z;Z=fi=!0;try{return a(b,c)}finally{fi=d,(Z=e)||W||Gi(1,null)}}
function Li(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===Gd(c)&&1===c.tag?void 0:r("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(M(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);r("171");g=void 0}if(1===c.tag){var h=c.type;if(M(h)){c=wf(c,h,g);break a}}c=g}else c=qf;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Tf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
Vf(f,e);xg(f,d);return d}function Mi(a,b,c,d){var e=b.current,f=vg();e=wg(f,e);return Li(a,b,c,e,d)}function Pi(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Qi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:nc,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Nb=function(a,b,c){switch(b){case "input":Tc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qa(d);e?void 0:r("90");jc(d);Tc(d,e)}}}break;case "textarea":Qe(a,c);break;case "select":b=c.value,null!=b&&Ne(a,!!c.multiple,b,!1)}};
function Ri(a){var b=2+25*(((vg()-2+500)/25|0)+1);b<=Th&&(b=Th+1);this._expirationTime=Th=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ri.prototype.render=function(a){this._defer?void 0:r("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Si;Li(a,b,null,c,d._onCommit);return d};
Ri.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ri.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:r("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?r("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Di(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Ri.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Si(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Si.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Si.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?r("191",c):void 0;c()}}};
function Ti(a,b,c){b=N(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Ti.prototype.render=function(a,b){var c=this._internalRoot,d=new Si;b=void 0===b?null:b;null!==b&&d.then(b);Mi(a,c,null,d._onCommit);return d};Ti.prototype.unmount=function(a){var b=this._internalRoot,c=new Si;a=void 0===a?null:a;null!==a&&c.then(a);Mi(null,b,null,c._onCommit);return c};Ti.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Si;c=void 0===c?null:c;null!==c&&e.then(c);Mi(b,d,a,e._onCommit);return e};
Ti.prototype.createBatch=function(){var a=new Ri(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Ui(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Yb=Ii;Zb=Ki;$b=function(){W||0===gi||(Gi(gi,null),gi=0)};
function Vi(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Ti(a,!1,b)}
function Wi(a,b,c,d,e){Ui(c)?void 0:r("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Pi(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Vi(c,d);if("function"===typeof e){var h=e;e=function(){var a=Pi(f._internalRoot);h.call(a)}}Ji(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Pi(f._internalRoot)}
function Xi(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Ui(b)?void 0:r("200");return Qi(a,b,null,c)}
var Yi={createPortal:Xi,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?r("188"):r("268",Object.keys(a)));a=Jd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Wi(null,a,b,!0,c)},render:function(a,b,c){return Wi(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?r("38"):void 0;return Wi(a,b,c,!1,d)},unmountComponentAtNode:function(a){Ui(a)?
void 0:r("40");return a._reactRootContainer?(Ji(function(){Wi(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Xi.apply(void 0,arguments)},unstable_batchedUpdates:Ii,unstable_interactiveUpdates:Ki,flushSync:function(a,b){W?r("187"):void 0;var c=Z;Z=!0;try{return li(a,b)}finally{Z=c,Gi(1,null)}},unstable_flushControlled:function(a){var b=Z;Z=!0;try{li(a)}finally{(Z=b)||W||Gi(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Oa,
Pa,Qa,Ga.injectEventPluginsByName,sa,Wa,function(a){Ba(a,Va)},Wb,Xb,ee,Ia]},unstable_createRoot:function(a,b){Ui(a)?void 0:r("278");return new Ti(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Cf(n({},a,{findHostInstanceByFiber:function(a){a=Jd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Na,bundleType:0,version:"16.6.0",rendererPackageName:"react-dom"});
var mj={default:Yi},nj=mj&&Yi||mj;module.exports=nj.default||nj;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(148);
} else {
  module.exports = require('./cjs/scheduler.development.js');
}


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var c=null,f=3,h=-1,k=-1,l=!1,m=!1,n="object"===typeof performance&&"function"===typeof performance.now,q={timeRemaining:n?function(){if(null!==c&&c.expirationTime<k)return 0;var a=p()-performance.now();return 0<a?a:0}:function(){if(null!==c&&c.expirationTime<k)return 0;var a=p()-Date.now();return 0<a?a:0},didTimeout:!1};function r(){if(!l){var a=c.expirationTime;m?t():m=!0;u(v,a)}}
function w(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;d=a.callback;b=a.expirationTime;a=a.priorityLevel;var e=f,R=k;f=a;k=b;try{var g=d(q)}finally{f=e,k=R}if("function"===typeof g)if(g={callback:g,priorityLevel:a,expirationTime:b,next:null,previous:null},null===c)c=g.next=g.previous=g;else{d=null;a=c;do{if(a.expirationTime>=b){d=a;break}a=a.next}while(a!==c);null===d?d=c:d===c&&(c=g,r());b=d.previous;b.next=d.previous=g;g.next=d;g.previous=
b}}function x(){if(-1===h&&null!==c&&1===c.priorityLevel){l=!0;q.didTimeout=!0;try{do w();while(null!==c&&1===c.priorityLevel)}finally{l=!1,null!==c?r():m=!1}}}function v(a){l=!0;q.didTimeout=a;try{if(a)for(;null!==c;){var b=exports.unstable_now();if(c.expirationTime<=b){do w();while(null!==c&&c.expirationTime<=b)}else break}else if(null!==c){do w();while(null!==c&&0<p()-exports.unstable_now())}}finally{l=!1,null!==c?r():m=!1,x()}}
var y=Date,z="function"===typeof setTimeout?setTimeout:void 0,A="function"===typeof clearTimeout?clearTimeout:void 0,B="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,C="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,D,E;function F(a){D=B(function(b){A(E);a(b)});E=z(function(){C(D);a(exports.unstable_now())},100)}if(n){var G=performance;exports.unstable_now=function(){return G.now()}}else exports.unstable_now=function(){return y.now()};var u,t,p;
if("undefined"!==typeof window&&window._schedMock){var H=window._schedMock;u=H[0];t=H[1];p=H[2]}else if("undefined"===typeof window||"function"!==typeof window.addEventListener){var I=null,J=-1,K=function(a,b){if(null!==I){var d=I;I=null;try{J=b,d(a)}finally{J=-1}}};u=function(a,b){-1!==J?setTimeout(u,0,a,b):(I=a,setTimeout(K,b,!0,b),setTimeout(K,1073741823,!1,1073741823))};t=function(){I=null};p=function(){return Infinity};exports.unstable_now=function(){return-1===J?0:J}}else{"undefined"!==typeof console&&
("function"!==typeof B&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof C&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var L=null,M=!1,N=-1,O=!1,P=!1,Q=0,S=33,T=33;p=function(){return Q};var U="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",
function(a){if(a.source===window&&a.data===U){M=!1;a=L;var b=N;L=null;N=-1;var d=exports.unstable_now(),e=!1;if(0>=Q-d)if(-1!==b&&b<=d)e=!0;else{O||(O=!0,F(V));L=a;N=b;return}if(null!==a){P=!0;try{a(e)}finally{P=!1}}}},!1);var V=function(a){if(null!==L){F(V);var b=a-Q+T;b<T&&S<T?(8>b&&(b=8),T=b<S?S:b):S=b;Q=a+T;M||(M=!0,window.postMessage(U,"*"))}else O=!1};u=function(a,b){L=a;N=b;P||0>b?window.postMessage(U,"*"):O||(O=!0,F(V))};t=function(){L=null;M=!1;N=-1}}exports.unstable_ImmediatePriority=1;
exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:break;default:a=3}var d=f,e=h;f=a;h=exports.unstable_now();try{return b()}finally{f=d,h=e,x()}};
exports.unstable_scheduleCallback=function(a,b){var d=-1!==h?h:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=d+b.timeout;else switch(f){case 1:b=d+-1;break;case 2:b=d+250;break;case 4:b=d+1073741823;break;default:b=d+5E3}a={callback:a,priorityLevel:f,expirationTime:b,next:null,previous:null};if(null===c)c=a.next=a.previous=a,r();else{d=null;var e=c;do{if(e.expirationTime>b){d=e;break}e=e.next}while(e!==c);null===d?d=c:d===c&&(c=a,r());b=d.previous;b.next=d.previous=
a;a.next=d;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=f;return function(){var d=f,e=h;f=b;h=exports.unstable_now();try{return a.apply(this,arguments)}finally{f=d,h=e,x()}}};exports.unstable_getCurrentPriorityLevel=function(){return f};


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(59);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["a"] = (createProvider());

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(151);
var invariant = __webpack_require__(152);
var ReactPropTypesSecret = __webpack_require__(153);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.hoistNonReactStatics = factory());
}(this, (function () {
    'use strict';
    
    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };
    
    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };
    
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
    
    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
            
            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }
            
            var keys = getOwnPropertyNames(sourceComponent);
            
            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }
            
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try { // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }
            
            return targetComponent;
        }
        
        return targetComponent;
    };
})));


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(174);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(86);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(162);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(21), __webpack_require__(161)(module)))

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(171);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(168);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(166);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(21)))

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(88);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(170);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(86);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(87);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(175);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(59);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mediaMiddleware__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionTypes__ = __webpack_require__(3);







const compose = Object(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__["composeWithDevTools"])({
  actionsBlacklist: [__WEBPACK_IMPORTED_MODULE_6__actionTypes__["_21" /* UPDATE_TIME_ELAPSED */], __WEBPACK_IMPORTED_MODULE_6__actionTypes__["_8" /* STEP_MARQUEE */]]
});
/* harmony default export */ __webpack_exports__["a"] = (function (media, actionEmitter, customMiddlewares = [], stateOverrides, extras) {
  let initialState;

  if (stateOverrides) {
    initialState = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["m" /* merge */])(Object(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */])(undefined, {
      type: "@@init"
    }), stateOverrides);
  } // eslint-disable-next-line no-unused-vars


  const emitterMiddleware = store => next => action => {
    actionEmitter.trigger(action.type, action);
    return next(action);
  };

  const enhancer = compose(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...[__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(extras), Object(__WEBPACK_IMPORTED_MODULE_4__mediaMiddleware__["a" /* default */])(media), emitterMiddleware, ...customMiddlewares].filter(Boolean))); // The Redux types are a bit confused, and don't realize that passing an
  // undefined initialState is allowed.

  const store = initialState ? Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], initialState, enhancer) : Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], enhancer);
  return store;
});

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(42).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playlist__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__windows__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__display__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userInput__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__equalizer__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tracks__ = __webpack_require__(93);










const reducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  userInput: __WEBPACK_IMPORTED_MODULE_5__userInput__["a" /* default */],
  windows: __WEBPACK_IMPORTED_MODULE_2__windows__["a" /* default */],
  display: __WEBPACK_IMPORTED_MODULE_4__display__["a" /* default */],
  settings: __WEBPACK_IMPORTED_MODULE_8__settings__["a" /* default */],
  equalizer: __WEBPACK_IMPORTED_MODULE_6__equalizer__["a" /* default */],
  playlist: __WEBPACK_IMPORTED_MODULE_1__playlist__["a" /* default */],
  media: __WEBPACK_IMPORTED_MODULE_3__media__["a" /* default */],
  network: __WEBPACK_IMPORTED_MODULE_7__network__["a" /* default */],
  tracks: __WEBPACK_IMPORTED_MODULE_9__tracks__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);



const defaultPlaylistState = {
  trackOrder: [],
  currentTrack: null,
  lastSelectedIndex: null,
  selectedTracks: new Set()
};

function toggleSetMembership(set, value) {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
}

const playlist = (state = defaultPlaylistState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["f" /* CLICKED_TRACK */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        selectedTracks: new Set([state.trackOrder[action.index]]),
        lastSelectedIndex: action.index
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["j" /* CTRL_CLICKED_TRACK */]:
      const id = state.trackOrder[action.index];
      const newSelectedTracks = new Set(state.selectedTracks);
      toggleSetMembership(newSelectedTracks, id);
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        selectedTracks: newSelectedTracks,
        // Using this as the lastClickedIndex is kinda funny, since you
        // may have just _un_selected the track. However, this is what
        // Winamp 2 does, so we'll copy it.
        lastSelectedIndex: action.index
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_6" /* SHIFT_CLICKED_TRACK */]:
      if (state.lastSelectedIndex == null) {
        return state;
      }

      const clickedIndex = action.index;
      const start = Math.min(clickedIndex, state.lastSelectedIndex);
      const end = Math.max(clickedIndex, state.lastSelectedIndex);
      const selectedTracks = new Set(state.trackOrder.slice(start, end + 1));
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        selectedTracks
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["J" /* SELECT_ALL */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        selectedTracks: new Set(state.trackOrder)
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["K" /* SELECT_ZERO */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        selectedTracks: new Set()
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["n" /* INVERT_SELECTION */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        selectedTracks: new Set(state.trackOrder.filter(id => !state.selectedTracks.has(id)))
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["E" /* REMOVE_ALL_TRACKS */]:
      // TODO: Consider disposing of ObjectUrls
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: [],
        currentTrack: null,
        selectedTracks: new Set(),
        lastSelectedIndex: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["F" /* REMOVE_TRACKS */]:
      // TODO: Consider disposing of ObjectUrls
      const actionIds = new Set(action.ids.map(Number));
      const currentTrack = state.currentTrack;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: state.trackOrder.filter(trackId => !actionIds.has(trackId)),
        currentTrack: actionIds.has(Number(currentTrack)) ? null : currentTrack,
        selectedTracks: new Set(Array.from(state.selectedTracks).filter(id => actionIds.has(id))),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["H" /* REVERSE_LIST */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: [...state.trackOrder].reverse(),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["C" /* RANDOMIZE_LIST */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["x" /* shuffle */])(state.trackOrder)
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_1" /* SET_TRACK_ORDER */]:
      const trackOrder = action.trackOrder;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["b" /* ADD_TRACK_FROM_URL */]:
      const atIndex = action.atIndex == null ? state.trackOrder.length : action.atIndex;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: [...state.trackOrder.slice(0, atIndex), Number(action.id), ...state.trackOrder.slice(atIndex)],
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["B" /* PLAY_TRACK */]:
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["d" /* BUFFER_TRACK */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        currentTrack: action.id
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["l" /* DRAG_SELECTED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["n" /* moveSelected */])(state.trackOrder, i => state.selectedTracks.has(state.trackOrder[i]), action.offset),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (playlist);

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = {"images":{"EQ_PREAMP_LINE":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAABCAYAAADpXEERAAAAE0lEQVQoU2Pcdfruf4ZRMKRDAAD1lwNjTqcaUQAAAABJRU5ErkJggg==","EQ_GRAPH_LINE_COLORS":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAATCAYAAABRC2cZAAAAR0lEQVQYV2O4rCT9n+F9kOJ/hvfViv8ZHkzSQCE2afxneH/HEJm49Nr0PwOYWPLIAkp0PjL4z1B41uQ/Q9QGnf8MWrPEIAQANWYwvnlToNIAAAAASUVORK5CYII="},"colors":["rgb(0,0,0)","rgb(24,33,41)","rgb(239,49,16)","rgb(206,41,16)","rgb(214,90,0)","rgb(214,102,0)","rgb(214,115,0)","rgb(198,123,8)","rgb(222,165,24)","rgb(214,181,33)","rgb(189,222,41)","rgb(148,222,33)","rgb(41,206,16)","rgb(50,190,16)","rgb(57,181,16)","rgb(49,156,8)","rgb(41,148,0)","rgb(24,132,8)","rgb(255,255,255)","rgb(214,214,222)","rgb(181,189,189)","rgb(160,170,175)","rgb(148,156,165)","rgb(150,150,150)"],"playlistStyle":{"normal":"#00FF00","current":"#FFFFFF","normalbg":"#000000","selectedbg":"#0000FF","font":"Arial"}}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);


const defaultUserInput = {
  focus: null,
  bandFocused: null,
  scrubPosition: 0,
  userMessage: null
};
const userInput = (state = defaultUserInput, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["T" /* SET_FOCUS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        focus: action.input,
        bandFocused: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["N" /* SET_BAND_FOCUS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        focus: action.input,
        bandFocused: action.bandFocused
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_19" /* UNSET_FOCUS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        focus: null,
        bandFocused: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["Z" /* SET_SCRUB_POSITION */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        scrubPosition: action.position
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_2" /* SET_USER_MESSAGE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        userMessage: action.message
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_20" /* UNSET_USER_MESSAGE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        userMessage: null
      });

    default:
      return state;
  }
};
/* unused harmony export userInput */

/* harmony default export */ __webpack_exports__["a"] = (userInput);

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);



const network = (state = {
  connected: true
}, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["x" /* NETWORK_CONNECTED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        connected: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["y" /* NETWORK_DISCONNECTED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        connected: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (network);

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);


const defaultSettingsState = {
  availableSkins: []
};

const settings = (state = defaultSettingsState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["L" /* SET_AVAILABLE_SKINS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        availableSkins: action.skins
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (settings);

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);




/* harmony default export */ __webpack_exports__["a"] = (media => store => {
  const _store$getState = store.getState(),
        _store$getState$media = _store$getState.media,
        volume = _store$getState$media.volume,
        balance = _store$getState$media.balance; // Ensure the default state is the canonical value.


  media.setVolume(volume);
  media.setBalance(balance); // TODO: Ensure other values like bands and preamp are in sync

  media.on("timeupdate", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_21" /* UPDATE_TIME_ELAPSED */],
      elapsed: media.timeElapsed()
    });
  });
  media.on("ended", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["p" /* IS_STOPPED */]
    });
    store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actionCreators__["p" /* next */])());
  });
  media.on("playing", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["o" /* IS_PLAYING */]
    });
  });
  media.on("waiting", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_7" /* START_WORKING */]
    });
  });
  media.on("stopWaiting", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_10" /* STOP_WORKING */]
    });
  });
  media.on("fileLoaded", () => {
    const id = __WEBPACK_IMPORTED_MODULE_2__selectors__["d" /* getCurrentTrackId */](store.getState());

    if (id == null) {
      // Attempted to set the metadata for a track that was already removed.
      // Really, the media should have been stopped when the track was removed.
      return;
    }

    store.dispatch({
      id,
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["V" /* SET_MEDIA */],
      kbps: "128",
      khz: Math.round(media.sampleRate() / 1000).toString(),
      channels: media.channels(),
      length: media.duration()
    });
  });
  media.on("channelupdate", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["e" /* CHANNEL_COUNT_CHANGED */],
      channels: media.channels()
    });
  });
  return next => action => {
    const returnValue = next(action);
    const state = store.getState();

    switch (action.type) {
      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["A" /* PLAY */]:
        media.play();
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["z" /* PAUSE */]:
        media.pause();
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_9" /* STOP */]:
        media.stop();
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_3" /* SET_VOLUME */]:
        media.setVolume(__WEBPACK_IMPORTED_MODULE_2__selectors__["I" /* getVolume */](state));
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["M" /* SET_BALANCE */]:
        media.setBalance(__WEBPACK_IMPORTED_MODULE_2__selectors__["a" /* getBalance */](state));
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["I" /* SEEK_TO_PERCENT_COMPLETE */]:
        media.seekToPercentComplete(action.percent);
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["B" /* PLAY_TRACK */]:
        {
          const url = __WEBPACK_IMPORTED_MODULE_2__selectors__["D" /* getTrackUrl */](store.getState())(action.id);

          if (url != null) {
            media.loadFromUrl(url, true);
          }

          break;
        }

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["d" /* BUFFER_TRACK */]:
        {
          const url = __WEBPACK_IMPORTED_MODULE_2__selectors__["D" /* getTrackUrl */](store.getState())(action.id);

          if (url != null) {
            media.loadFromUrl(url, false);
          }

          break;
        }

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["O" /* SET_BAND_VALUE */]:
        if (action.band === "preamp") {
          media.setPreamp(action.value);
        } else {
          media.setEqBand(action.band, action.value);
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["R" /* SET_EQ_OFF */]:
        media.disableEq();
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["S" /* SET_EQ_ON */]:
        media.enableEq();
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["t" /* LOAD_SERIALIZED_STATE */]:
        {
          // Set ALL THE THINGS!
          if (__WEBPACK_IMPORTED_MODULE_2__selectors__["h" /* getEqualizerEnabled */](state)) {
            media.enableEq();
          } else {
            media.disableEq();
          }

          media.setVolume(__WEBPACK_IMPORTED_MODULE_2__selectors__["I" /* getVolume */](state));
          media.setBalance(__WEBPACK_IMPORTED_MODULE_2__selectors__["a" /* getBalance */](state));
          Object(__WEBPACK_IMPORTED_MODULE_3__utils__["q" /* objectForEach */])(state.equalizer.sliders, (value, slider) => {
            if (slider === "preamp") {
              media.setPreamp(value);
            } else {
              // @ts-ignore I don't know how to teach TypeScript about objects
              // that use Slider as keys
              media.setEqBand(slider, value);
            }
          });
          break;
        }
    }

    return returnValue;
  };
});

/***/ }),
/* 186 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 187 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 188 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);


const getAsDataURI = text => `data:text/html;base64,${window.btoa(text)}`;
/* unused harmony export getAsDataURI */
 // Replaces deprecated "noshade" attribute

const noshadeStyle = {
  height: "2px",
  borderWidth: 0,
  color: "gray",
  backgroundColor: "gray"
}; // TODO: Move <html> tag out to the string creation step in order
// to avoid the warning.

const Playlist = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("head", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
  rel: "stylesheet",
  href: "null"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
  type: "text/css"
}, `
        body { background: #000040; }
        .para1 { margin-top: -42px; margin-left: 145px; margin-right: 10px; font-family: "font2, Arial"; font-size: 30px; line-height: 35px; text-align: left; color: #E1E1E1; }
        .para2 { margin-top: 15px; margin-left: 15px; margin-right: 50px; font-family: "font1, Arial Black"; font-size: 50px; line-height: 40px; text-align: left; color: #004080; }
        `), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Winamp Generated PlayList")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", {
  bgcolor: "#000080",
  topmargin: "0",
  leftmargin: "0",
  text: "#FFFFFF"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  align: "center"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "para2",
  align: "center"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "WINAMP")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "para1",
  align: "center"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "playlist"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
  align: "left",
  width: "90%",
  size: "1",
  color: "#FFBF00",
  style: noshadeStyle
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  align: "right"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
  border: "0",
  cellSpacing: "0",
  cellPadding: "0",
  width: "98%"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  face: "Arial",
  color: "#FFBF00"
}, props.numberOfTracks), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#409FFF",
  face: "Arial"
}, " track in playlist, average track length: "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  face: "Arial",
  color: "#FFBF00"
}, props.averageTrackLength))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#409FFF",
  face: "Arial"
}, "Playlist length: "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  face: "Arial",
  color: "#FFBF00"
}, props.playlistLengthMinutes), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#409FFF",
  face: "Arial"
}, " minutes "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  face: "Arial",
  color: "#FFBF00"
}, props.playlistLengthSeconds), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#409FFF",
  face: "Arial"
}, " second "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#409FFF",
  face: "Arial"
}, "Right-click ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "./"
}, "here"), " to save this HTML file.")))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("blockquote", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#FFBF00",
  face: "Arial"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("big", null, "Playlist files:"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  face: "Arial",
  color: "#FFFFFF"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, props.tracks.map(track => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  key: track
}, track, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
  align: "left",
  width: "90%",
  size: "1",
  color: "#FFBF00",
  style: noshadeStyle
})));

const createPlaylistHTML = props => {
  const node = document.createElement("div");
  Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Playlist, props), node);
  return node.innerHTML;
};

const createPlaylistURL = props => getAsDataURI(createPlaylistHTML(props));
/* harmony export (immutable) */ __webpack_exports__["a"] = createPlaylistURL;


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);

const getBalanceText = balance => {
  if (balance === 0) {
    return "Balance: Center";
  }

  const direction = balance > 0 ? "Right" : "Left";
  return `Balance: ${Math.abs(balance)}% ${direction}`;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getBalanceText;

const getVolumeText = volume => `Volume: ${volume}%`;
/* harmony export (immutable) */ __webpack_exports__["e"] = getVolumeText;

const getPositionText = (duration, seekToPercent) => {
  const newElapsedStr = __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* getTimeStr */](duration * seekToPercent / 100, false);
  const durationStr = __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* getTimeStr */](duration, false);
  return `Seek to: ${newElapsedStr}/${durationStr} (${seekToPercent}%)`;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = getPositionText;

const getDoubleSizeModeText = enabled => `${enabled ? "Disable" : "Enable"} doublesize mode`;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDoubleSizeModeText;


const formatHz = hz => hz < 1000 ? `${hz}HZ` : `${hz / 1000}KHZ`; // Format a number as a string, ensuring it has a + or - sign


const ensureSign = num => num > 0 ? `+${num}` : num.toString(); // Round to 1 and exactly 1 decimal point


const roundToTenths = num => (Math.round(num * 10) / 10).toFixed(1);

const getEqText = (band, level) => {
  const db = roundToTenths((level - 50) / 50 * 12);
  const label = band === "preamp" ? "Preamp" : formatHz(band);
  return `EQ: ${label} ${ensureSign(db)} DB`;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getEqText;


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = play;
/* harmony export (immutable) */ __webpack_exports__["d"] = pause;
/* harmony export (immutable) */ __webpack_exports__["l"] = stop;
/* harmony export (immutable) */ __webpack_exports__["c"] = nextN;
/* harmony export (immutable) */ __webpack_exports__["b"] = next;
/* harmony export (immutable) */ __webpack_exports__["f"] = previous;
/* harmony export (immutable) */ __webpack_exports__["i"] = seekForward;
/* harmony export (immutable) */ __webpack_exports__["h"] = seekBackward;
/* harmony export (immutable) */ __webpack_exports__["k"] = setVolume;
/* harmony export (immutable) */ __webpack_exports__["a"] = adjustVolume;
/* harmony export (immutable) */ __webpack_exports__["g"] = scrollVolume;
/* harmony export (immutable) */ __webpack_exports__["j"] = setBalance;
/* harmony export (immutable) */ __webpack_exports__["m"] = toggleRepeat;
/* harmony export (immutable) */ __webpack_exports__["n"] = toggleShuffle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(2);






function playRandomTrack() {
  return (dispatch, getState) => {
    const _getState = getState(),
          _getState$playlist = _getState.playlist,
          trackOrder = _getState$playlist.trackOrder,
          currentTrack = _getState$playlist.currentTrack;

    if (trackOrder.length === 0) {
      return;
    }

    let nextId;

    do {
      nextId = trackOrder[Math.floor(trackOrder.length * Math.random())];
    } while (nextId === currentTrack && trackOrder.length > 1); // TODO: Sigh... Technically, we should detect if we are looping only repeat if we are.
    // I think this would require pre-computing the "random" order of a playlist.


    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["B" /* PLAY_TRACK */],
      id: nextId
    });
  };
}

function play() {
  return (dispatch, getState) => {
    const state = getState();

    if (state.media.status === __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].STOPPED && state.playlist.currentTrack == null && state.playlist.trackOrder.length === 0) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_4____["s" /* openMediaFileDialog */])());
    } else {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["A" /* PLAY */]
      });
    }
  };
}
function pause() {
  return (dispatch, getState) => {
    const status = getState().media.status;

    if (status === __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].PLAYING) {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["z" /* PAUSE */]
      });
    } else {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["A" /* PLAY */]
      });
    }
  };
}
function stop() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_9" /* STOP */]
  };
}
function nextN(n) {
  return (dispatch, getState) => {
    const state = getState();

    if (state.media.shuffle) {
      dispatch(playRandomTrack());
      return;
    }

    const nextTrackId = Object(__WEBPACK_IMPORTED_MODULE_0__selectors__["S" /* nextTrack */])(state, n);

    if (nextTrackId == null) {
      return;
    }

    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["B" /* PLAY_TRACK */],
      id: nextTrackId
    });
  };
}
function next() {
  return nextN(1);
}
function previous() {
  return nextN(-1);
}
function seekForward(seconds) {
  return function (dispatch, getState) {
    const _getState$media = getState().media,
          timeElapsed = _getState$media.timeElapsed,
          length = _getState$media.length;

    if (length == null) {
      return;
    }

    const newTimeElapsed = timeElapsed + seconds;
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["I" /* SEEK_TO_PERCENT_COMPLETE */],
      percent: newTimeElapsed / length * 100
    });
  };
}
function seekBackward(seconds) {
  return seekForward(-seconds);
}
function setVolume(volume) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_3" /* SET_VOLUME */],
    volume: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* clamp */])(volume, 0, 100)
  };
}
function adjustVolume(volumeDiff) {
  return (dispatch, getState) => {
    const currentVolume = getState().media.volume;
    return dispatch(setVolume(currentVolume + volumeDiff));
  };
}
function scrollVolume(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const currentVolume = getState().media.volume; // Using pixels as percentage difference here is a bit arbirary, but... oh well.

    return dispatch(setVolume(currentVolume + e.deltaY));
  };
}
function setBalance(balance) {
  balance = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* clamp */])(balance, -100, 100); // The balance clips to the center

  if (Math.abs(balance) < 25) {
    balance = 0;
  }

  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["M" /* SET_BALANCE */],
    balance
  };
}
function toggleRepeat() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_13" /* TOGGLE_REPEAT */]
  };
}
function toggleShuffle() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_14" /* TOGGLE_SHUFFLE */]
  };
}

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addTracksFromReferences;
/* harmony export (immutable) */ __webpack_exports__["d"] = loadFilesFromReferences;
/* unused harmony export setSkinFromArrayBuffer */
/* unused harmony export setSkinFromFileReference */
/* harmony export (immutable) */ __webpack_exports__["i"] = setSkinFromUrl;
/* harmony export (immutable) */ __webpack_exports__["f"] = openEqfFileDialog;
/* harmony export (immutable) */ __webpack_exports__["g"] = openMediaFileDialog;
/* harmony export (immutable) */ __webpack_exports__["h"] = openSkinFileDialog;
/* unused harmony export fetchMediaDuration */
/* harmony export (immutable) */ __webpack_exports__["e"] = loadMediaFiles;
/* unused harmony export loadMediaFile */
/* unused harmony export fetchMediaTags */
/* unused harmony export setEqFromFileReference */
/* harmony export (immutable) */ __webpack_exports__["c"] = downloadPreset;
/* harmony export (immutable) */ __webpack_exports__["b"] = downloadHtmlPlaylist;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winamp_eqf__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winamp_eqf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_winamp_eqf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileUtils__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skinParser__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loadQueue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__playlist__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__equalizer__ = __webpack_require__(99);










// Lower is better
const DURATION_VISIBLE_PRIORITY = 5;
const META_DATA_VISIBLE_PRIORITY = 10;
const DURATION_PRIORITY = 15;
const META_DATA_PRIORITY = 20;
const loadQueue = new __WEBPACK_IMPORTED_MODULE_7__loadQueue__["a" /* default */]({
  threads: 4
});
function addTracksFromReferences(fileReferences, loadStyle, atIndex) {
  const tracks = Array.from(fileReferences).map(file => ({
    blob: file,
    defaultName: file.name
  }));
  return loadMediaFiles(tracks, loadStyle, atIndex);
}
const SKIN_FILENAME_MATCHER = new RegExp("(wsz|zip)$", "i");
const EQF_FILENAME_MATCHER = new RegExp("eqf$", "i");
function loadFilesFromReferences(fileReferences, loadStyle = __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].PLAY, atIndex = undefined) {
  return dispatch => {
    if (fileReferences.length < 1) {
      return;
    } else if (fileReferences.length === 1) {
      const fileReference = fileReferences[0];

      if (SKIN_FILENAME_MATCHER.test(fileReference.name)) {
        dispatch(setSkinFromFileReference(fileReference));
        return;
      } else if (EQF_FILENAME_MATCHER.test(fileReference.name)) {
        dispatch(setEqFromFileReference(fileReference));
        return;
      }
    }

    dispatch(addTracksFromReferences(fileReferences, loadStyle, atIndex));
  };
}
function setSkinFromArrayBuffer(arrayBuffer) {
  return async (dispatch, getState, {
    requireJSZip
  }) => {
    if (!requireJSZip) {
      alert("Webamp has not been configured to support custom skins.");
      return;
    }

    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["r" /* LOADING */]
    });
    let JSZip;

    try {
      JSZip = await requireJSZip();
    } catch (e) {
      console.error(e);
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["q" /* LOADED */]
      });
      alert("Failed to load the skin parser.");
      return;
    }

    try {
      const skinData = await Object(__WEBPACK_IMPORTED_MODULE_4__skinParser__["a" /* default */])(arrayBuffer, JSZip); // @ts-ignore TODO: We still need to type skinParser.

      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["_0" /* SET_SKIN_DATA */],
        data: {
          skinImages: skinData.images,
          skinColors: skinData.colors,
          skinPlaylistStyle: skinData.playlistStyle,
          skinCursors: skinData.cursors,
          skinRegion: skinData.region,
          skinGenLetterWidths: skinData.genLetterWidths,
          skinGenExColors: skinData.genExColors
        }
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["q" /* LOADED */]
      });
      alert(`Failed to parse skin`);
    }
  };
}
function setSkinFromFileReference(skinFileReference) {
  return async dispatch => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["r" /* LOADING */]
    });
    const arrayBuffer = await Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["b" /* genArrayBufferFromFileReference */])(skinFileReference);
    dispatch(setSkinFromArrayBuffer(arrayBuffer));
  };
}
function setSkinFromUrl(url) {
  return async dispatch => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["r" /* LOADING */]
    });

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      dispatch(setSkinFromArrayBuffer(response.arrayBuffer()));
    } catch (e) {
      console.error(e);
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["q" /* LOADED */]
      });
      alert(`Failed to download skin from ${url}`);
    }
  };
} // This function is private, since Winamp consumers can provide means for
// opening files via other methods. Only use the file type specific
// versions below, since they can defer to the user-defined behavior.

function _openFileDialog(accept) {
  return async dispatch => {
    const fileReferences = await Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["e" /* promptForFileReferences */])({
      accept
    });
    dispatch(loadFilesFromReferences(fileReferences));
  };
}

function openEqfFileDialog() {
  return _openFileDialog(".eqf");
}
function openMediaFileDialog() {
  return _openFileDialog(null);
}
function openSkinFileDialog() {
  return _openFileDialog(".zip, .wsz");
}
function fetchMediaDuration(url, id) {
  return (dispatch, getState) => {
    loadQueue.push(async () => {
      try {
        const duration = await Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["c" /* genMediaDuration */])(url);
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["W" /* SET_MEDIA_DURATION */],
          duration,
          id
        });
      } catch (e) {// TODO: Should we update the state to indicate that we don't know the length?
      }
    }, () => {
      const trackIsVisible = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["B" /* getTrackIsVisibleFunction */])(getState());
      return trackIsVisible(id) ? DURATION_VISIBLE_PRIORITY : DURATION_PRIORITY;
    });
  };
}
function loadMediaFiles(tracks, loadStyle = __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].NONE, atIndex = 0) {
  return dispatch => {
    if (loadStyle === __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].PLAY) {
      // I'm the worst. It just so happens that in every case that we autoPlay,
      // we should also clear all tracks.
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__playlist__["d" /* removeAllTracks */])());
    }

    tracks.forEach((track, i) => {
      const priority = i === 0 ? loadStyle : __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].NONE;
      dispatch(loadMediaFile(track, priority, atIndex + i));
    });
  };
}
function loadMediaFile(track, priority = __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].NONE, atIndex = 0) {
  return dispatch => {
    const id = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["z" /* uniqueId */])();
    const defaultName = track.defaultName,
          metaData = track.metaData,
          duration = track.duration;
    let canonicalUrl;

    if ("url" in track) {
      canonicalUrl = track.url.toString();
    } else if ("blob" in track) {
      canonicalUrl = URL.createObjectURL(track.blob);
    } else {
      throw new Error("Expected track to have either a blob or a url");
    }

    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["b" /* ADD_TRACK_FROM_URL */],
      url: canonicalUrl,
      duration: track.duration,
      defaultName,
      id,
      atIndex
    });

    switch (priority) {
      case __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].BUFFER:
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["d" /* BUFFER_TRACK */],
          id
        });
        break;

      case __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].PLAY:
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["B" /* PLAY_TRACK */],
          id
        });
        break;

      case __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].NONE:
      default:
        // If we're not going to load this right away,
        // we should set duration on our own
        if (duration != null) {
          dispatch({
            type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["W" /* SET_MEDIA_DURATION */],
            duration,
            id
          });
        } else {
          dispatch(fetchMediaDuration(canonicalUrl, id));
        }

    }

    if (metaData != null) {
      const artist = metaData.artist,
            title = metaData.title,
            album = metaData.album;
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["X" /* SET_MEDIA_TAGS */],
        artist,
        title,
        album,
        id
      });
    } else if ("blob" in track) {
      // Blobs can be loaded quickly
      dispatch(fetchMediaTags(track.blob, id));
    } else {
      dispatch(queueFetchingMediaTags(id));
    }
  };
}

function queueFetchingMediaTags(id) {
  return (dispatch, getState) => {
    const track = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["E" /* getTracks */])(getState())[id];
    loadQueue.push(() => dispatch(fetchMediaTags(track.url, id)), () => {
      const trackIsVisible = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["B" /* getTrackIsVisibleFunction */])(getState());
      return trackIsVisible(id) ? META_DATA_VISIBLE_PRIORITY : META_DATA_PRIORITY;
    });
  };
}

function fetchMediaTags(file, id) {
  return async (dispatch, getState, {
    requireMusicMetadata
  }) => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["v" /* MEDIA_TAG_REQUEST_INITIALIZED */],
      id
    });

    try {
      const metadata = await Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["d" /* genMediaTags */])(file, (await requireMusicMetadata())); // There's more data here, but we don't have a use for it yet:

      const _metadata$common = metadata.common,
            artist = _metadata$common.artist,
            title = _metadata$common.title,
            album = _metadata$common.album,
            picture = _metadata$common.picture;
      let albumArtUrl = null;

      if (picture && picture.length >= 1) {
        const byteArray = new Uint8Array(picture[0].data);
        const blob = new Blob([byteArray], {
          type: picture[0].format
        });
        albumArtUrl = URL.createObjectURL(blob);
      }

      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["X" /* SET_MEDIA_TAGS */],
        artist: artist ? artist : "",
        title: title ? title : "",
        album,
        albumArtUrl,
        id
      });
    } catch (e) {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["u" /* MEDIA_TAG_REQUEST_FAILED */],
        id
      });
    }
  };
}
function setEqFromFileReference(fileReference) {
  return async dispatch => {
    const arrayBuffer = await Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["b" /* genArrayBufferFromFileReference */])(fileReference);
    const eqf = Object(__WEBPACK_IMPORTED_MODULE_0_winamp_eqf__["parser"])(arrayBuffer);
    const preset = eqf.presets[0];
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__equalizer__["e" /* setPreamp */])(Object(__WEBPACK_IMPORTED_MODULE_2__utils__["o" /* normalize */])(preset.preamp)));
    __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* BANDS */].forEach(band => {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__equalizer__["a" /* setEqBand */])(band, Object(__WEBPACK_IMPORTED_MODULE_2__utils__["o" /* normalize */])(preset[`hz${band}`])));
    });
  };
}
function downloadPreset() {
  return (dispatch, getState) => {
    const state = getState();
    const data = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["g" /* getEqfData */])(state);
    const arrayBuffer = Object(__WEBPACK_IMPORTED_MODULE_0_winamp_eqf__["creator"])(data);
    const base64 = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* base64FromArrayBuffer */])(arrayBuffer);
    const dataURI = `data:application/zip;base64,${base64}`;
    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* downloadURI */])(dataURI, "entry.eqf");
  };
}
function downloadHtmlPlaylist() {
  return (dispatch, getState) => {
    const uri = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["p" /* getPlaylistURL */])(getState());
    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* downloadURI */])(uri, "Winamp Playlist.html");
  };
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(194);
var creator = __webpack_require__(195);

module.exports = {
  parser: parser,
  creator: creator
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(100);

function parser(arrayBuffer) {
  var data = {};
  var i = 0;
  var arr = new Int8Array(arrayBuffer);
  // Parse header
  data.type = String.fromCharCode.apply(
    null,
    arr.slice(i, CONSTANTS.HEADER.length)
  );
  if (data.type !== CONSTANTS.HEADER) {
    throw new Error("Invalid .eqf file.");
  }
  i += CONSTANTS.HEADER.length;
  // Skip "<ctrl-z>!--"
  i += 4;
  // Get the presets
  data.presets = [];
  while (i < arr.length) {
    var preset = {};
    // Get the name
    var nameStart = i;
    var nameEnd = nameStart + 257; // Str is fixed length
    // Str is null terminated
    while (arr[i] !== 0 && i <= nameEnd) {
      i++;
    }
    preset.name = String.fromCharCode.apply(null, arr.slice(nameStart, i));
    i = nameEnd; // Skip over any unused bytes

    // Get the levels
    CONSTANTS.PRESET_VALUES.forEach(function(valueName) {
      preset[valueName] = 64 - arr[i++]; // Adjust for inverse values
    });
    data.presets.push(preset);
  }
  return data;
}

module.exports = parser;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(100);

var FILL_SIZE = 4;
var PRESET_LENGTH = 257;

function creator(data) {
  var buffer = [];
  for (var i = 0; i < CONSTANTS.HEADER.length; i++) {
    buffer.push(CONSTANTS.HEADER.charCodeAt(i));
  }
  buffer.push(26); // <ctrl-z>
  var ending = "!--";
  for (var i = 0; i < ending.length; i++) {
    buffer.push(ending.charCodeAt(i));
  }
  if (!data.presets) {
    throw new Error("Eqf data is missing presets");
  }
  data.presets.forEach(function(preset) {
    var k = 0;
    for (; k < preset.name.length; k++) {
      buffer.push(preset.name.charCodeAt(k));
    }
    for (; k < PRESET_LENGTH; k++) {
      buffer.push(0);
    }

    CONSTANTS.PRESET_VALUES.forEach(function(valueName) {
      buffer.push(64 - preset[valueName]); // Adjust for inverse values
    });
  });
  return new Uint8Array(buffer).buffer;
}

module.exports = creator;


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skinSprites__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__regionParser__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(6);







const shallowMerge = objs => objs.reduce((prev, img) => Object.assign(prev, img), {});

const CURSORS = ["CLOSE", "EQCLOSE", "EQNORMAL", "EQSLID", "EQTITLE", "MAINMENU", "MMENU", "MIN", "NORMAL", "PCLOSE", "PNORMAL", "POSBAR", "PSIZE", "PTBAR", "PVSCROLL", "PWINBUT", "PWSNORM", "PWSSIZE", "SONGNAME", "TITLEBAR", "VOLBAL", "WINBUT", "WSNORMAL", "WSPOSBAR"
/*
 * > There are usually 4 more cursors in the skins: volbar.cur, wsclose.cur,
 * > wswinbut.cur, wsmin.cur, but they are never used, at least in the last
 * > versions of winamp, so there's no need of including them. The cursors
 * > shown when the mouse is over the app-buttons are the same in normal and
 * > winshade mode, except for the main menu button. You can make animated
 * > cursors, but you have to name them with the extension .cur (animated
 * > cursors are usually .ani files).
 *
 * -- Skinners Atlas
 *
 * "VOLBAR",
 * "WSCLOSE",
 * "WSWINBUT",
 * "WSMIN",
 *
 */
];

const _genImgFromBlob = async blob => new Promise((resolve, reject) => {
  const img = new Image();

  img.onload = () => {
    // Schedule cleanup of object url?
    // Maybe on next tick, or with requestidlecallback
    resolve(img);
  };

  img.onerror = () => reject("Failed to decode image");

  img.src = URL.createObjectURL(blob);
});

const genImgFromBlob = async blob => {
  if (window.createImageBitmap) {
    try {
      // Use this faster native browser API if available.
      return await window.createImageBitmap(blob);
    } catch (e) {
      console.warn("Encountered an error with createImageBitmap. Falling back to Image approach."); // There are some bugs in the new API. In case something goes wrong, we call fall back.

      return _genImgFromBlob(blob);
    }
  }

  return _genImgFromBlob(blob);
};

async function genFileFromZip(zip, fileName, ext, mode) {
  const regex = new RegExp(`^(.*/)?${fileName}(\.${ext})?$`, "i");
  const files = zip.file(regex);

  if (!files.length) {
    return null;
  } // Return a promise (awaitable).


  return {
    contents: await files[0].async(mode),
    name: files[0].name
  };
}

function getSpriteUrisFromImg(img, sprites) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  return sprites.reduce((images, sprite) => {
    canvas.height = sprite.height;
    canvas.width = sprite.width;
    context.drawImage(img, -sprite.x, -sprite.y);
    const image = canvas.toDataURL();
    images[sprite.name] = image;
    return images;
  }, {});
}

async function genImgFromFilename(zip, fileName) {
  // Winamp only supports .bmp images, but WACUP set a precidence of supporting
  // .png as well to reduce size. Since we care about size as well, we follow
  // suit. Our default skin uses .png to save 14kb.
  const file = await genFileFromZip(zip, fileName, "(png|bmp)", "blob");

  if (!file) {
    return null;
  }

  const mimeType = `image/${Object(__WEBPACK_IMPORTED_MODULE_5__utils__["h" /* getFileExtension */])(file.name) || "*"}`; // The spec for createImageBitmap() says the browser should try to sniff the
  // mime type, but it looks like Firefox does not. So we specify it here
  // explicitly.

  const typedBlob = new Blob([file.contents], {
    type: mimeType
  });
  return genImgFromBlob(typedBlob);
}

async function genSpriteUrisFromFilename(zip, fileName) {
  const img = await genImgFromFilename(zip, fileName);

  if (img == null) {
    return {};
  }

  return getSpriteUrisFromImg(img, __WEBPACK_IMPORTED_MODULE_2__skinSprites__["b" /* default */][fileName]);
}

async function getCursorFromFilename(zip, fileName) {
  const file = await genFileFromZip(zip, fileName, "CUR", "base64");
  return file && `data:image/x-win-bitmap;base64,${file.contents}`;
}

async function genPlaylistStyle(zip) {
  const pledit = await genFileFromZip(zip, "PLEDIT", "txt", "text");
  const data = pledit && Object(__WEBPACK_IMPORTED_MODULE_5__utils__["s" /* parseIni */])(pledit.contents).text;

  if (!data) {
    // Corrupt or missing PLEDIT.txt file.
    return __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* DEFAULT_SKIN */].playlistStyle;
  } // Winamp seems to permit colors that contain too many characters.
  // For compatibility with existing skins, we normalize them here.


  ["normal", "current", "normalbg", "selectedbg", "mbFG", "mbBG"].forEach(colorKey => {
    let color = data[colorKey];

    if (!color) {
      return;
    }

    if (color[0] !== "#") {
      color = `#${color}`;
    }

    data[colorKey] = color.slice(0, 7);
  });
  return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* DEFAULT_SKIN */].playlistStyle, data);
}

async function genVizColors(zip) {
  const viscolor = await genFileFromZip(zip, "VISCOLOR", "txt", "text");
  return viscolor ? Object(__WEBPACK_IMPORTED_MODULE_5__utils__["t" /* parseViscolors */])(viscolor.contents) : __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* DEFAULT_SKIN */].colors;
}

async function genImages(zip) {
  const imageObjs = await Promise.all(Object.keys(__WEBPACK_IMPORTED_MODULE_2__skinSprites__["b" /* default */]).map(async fileName => genSpriteUrisFromFilename(zip, fileName))); // Merge all the objects into a single object. Tests assert that sprite keys are unique.

  return shallowMerge(imageObjs);
}

async function genCursors(zip) {
  const cursorObjs = await Promise.all(CURSORS.map(async cursorName => ({
    [cursorName]: await getCursorFromFilename(zip, cursorName)
  })));
  return shallowMerge(cursorObjs);
}

async function genRegion(zip) {
  const region = await genFileFromZip(zip, "REGION", "txt", "text");
  return region ? Object(__WEBPACK_IMPORTED_MODULE_3__regionParser__["a" /* default */])(region.contents) : {};
}

async function genGenTextSprites(zip) {
  const img = await genImgFromFilename(zip, "GEN");

  if (img == null) {
    return null;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);

  const getLetters = (y, prefix) => {
    const getColorAt = x => context.getImageData(x, y, 1, 1).data.join(",");

    let x = 1;
    const backgroundColor = getColorAt(0);
    const height = 7;
    return __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* LETTERS */].map(letter => {
      let nextBackground = x;

      while (getColorAt(nextBackground) !== backgroundColor && nextBackground < canvas.width) {
        nextBackground++;
      }

      const width = nextBackground - x;
      const name = `${prefix}_${letter}`;
      const sprite = {
        x,
        y,
        height,
        width,
        name
      };
      x = nextBackground + 1;
      return sprite;
    });
  };

  const letterWidths = {};
  const sprites = [...getLetters(88, "GEN_TEXT_SELECTED"), ...getLetters(96, "GEN_TEXT")];
  sprites.forEach(sprite => {
    letterWidths[sprite.name] = sprite.width;
  });
  return [letterWidths, getSpriteUrisFromImg(img, sprites)];
}

async function genGenExColors(zip) {
  const img = await genImgFromFilename(zip, "GENEX");

  if (img == null) {
    return null;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);

  const getColorAt = x => `rgb(${context.getImageData(x, 0, 1, 1) // Discard the alpha channel
  .data.slice(0, 3).join(",")})`;

  const colors = {
    // (1) x=48: item background (background to edits, listviews, etc.)
    itemBackground: 48,
    // (2) x=50: item foreground (text colour of edits, listviews, etc.)
    itemForeground: 50,
    // (3) x=52: window background (used to set the bg color for the dialog)
    windowBackground: 52,
    // (4) x=54: button text colour
    buttonText: 54,
    // (5) x=56: window text colour
    windowText: 56,
    // (6) x=58: colour of dividers and sunken borders
    divider: 58,
    // (7) x=60: selection colour for entries inside playlists (nothing else yet)
    playlistSelection: 60,
    // (8) x=62: listview header background colour
    listHeaderBackground: 62,
    // (9) x=64: listview header text colour
    listHeaderText: 64,
    // (10) x=66: listview header frame top and left colour
    listHeaderFrameTopAndLeft: 66,
    // (11) x=68: listview header frame bottom and right colour
    listHeaderFrameBottomAndRight: 68,
    // (12) x=70: listview header frame colour, when pressed
    listHeaderFramePressed: 70,
    // (13) x=72: listview header dead area colour
    listHeaderDeadArea: 72,
    // (14) x=74: scrollbar colour #1
    scrollbarOne: 74,
    // (15) x=76: scrollbar colour #2
    scrollbarTwo: 76,
    // (16) x=78: pressed scrollbar colour #1
    pressedScrollbarOne: 78,
    // (17) x=80: pressed scrollbar colour #2
    pressedScrollbarTwo: 80,
    // (18) x=82: scrollbar dead area colour
    scrollbarDeadArea: 82,
    // (19) x=84 List view text colour highlighted
    listTextHighlighted: 84,
    // (20) x=86 List view background colour highlighted
    listTextHighlightedBackground: 86,
    // (21) x=88 List view text colour selected
    listTextSelected: 88,
    // (22) x=90 List view background colour selected
    listTextSelectedBackground: 90
  };
  return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["r" /* objectMap */])(colors, getColorAt);
} // A promise that, given an array buffer  returns a skin style object


async function skinParser(zipFileBuffer, JSZip) {
  const zip = await JSZip.loadAsync(zipFileBuffer);

  const _ref = await Promise.all([genVizColors(zip), genPlaylistStyle(zip), genImages(zip), genCursors(zip), genRegion(zip), genGenTextSprites(zip), genGenExColors(zip)]),
        _ref2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref, 7),
        colors = _ref2[0],
        playlistStyle = _ref2[1],
        images = _ref2[2],
        cursors = _ref2[3],
        region = _ref2[4],
        genTextSprites = _ref2[5],
        genExColors = _ref2[6];

  const _ref3 = genTextSprites || [null, {}],
        _ref4 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
        genLetterWidths = _ref4[0],
        genTextImages = _ref4[1];

  return {
    colors,
    playlistStyle,
    images: __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, images, genTextImages),
    genLetterWidths,
    cursors,
    region,
    genExColors
  };
}

/* harmony default export */ __webpack_exports__["a"] = (skinParser);

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pointPairs */
/* harmony export (immutable) */ __webpack_exports__["a"] = regionParser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);

function pointPairs(arr) {
  const pairedValues = [];

  for (let i = 0; i < arr.length; i += 2) {
    pairedValues.push(`${arr[i]},${arr[i + 1]}`);
  }

  return pairedValues;
}
function regionParser(regionStr) {
  const iniData = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["s" /* parseIni */])(regionStr);
  const data = {};
  Object.keys(iniData).forEach(section => {
    const _iniData$section = iniData[section],
          numpoints = _iniData$section.numpoints,
          pointlist = _iniData$section.pointlist;

    if (!numpoints || !pointlist) {
      return;
    }

    const pointCounts = numpoints.split(/\s*,\s*/).filter(val => val !== "");
    const points = pointPairs( // points can be separated by spaces, or by commas
    pointlist.split(/\s*[, ]\s*/).filter(val => val !== ""));
    let pointIndex = 0;
    const polygons = pointCounts.map(numStr => {
      const num = Number(numStr);
      const polygon = points.slice(pointIndex, pointIndex + num).join(" ");

      if (!polygon.length) {
        // It's possible that the skin author specified more polygons than provided points.
        return null;
      }

      pointIndex += num;
      return polygon;
    });
    const validPolygons = polygons.filter(polygon => polygon != null);

    if (validPolygons.length) {
      data[section] = validPolygons;
    }
  });
  return data;
}

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tinyqueue__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tinyqueue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tinyqueue__);

 // Push promises onto a queue with a priority.
// Run a given number of jobs in parallel
// Useful for prioritizing network requests

class LoadQueue {
  constructor({
    threads
  }) {
    // TODO: Consider not running items with zero priority
    // Priority is a function so that items can change their priority between
    // when their priority is evaluated.
    // For example, we might add a track to the playlist and then scroll to/away
    // from it before it gets processed.
    this._queue = new __WEBPACK_IMPORTED_MODULE_1_tinyqueue___default.a([], (a, b) => a.priority() - b.priority());
    this._availableThreads = threads;
  }

  push(task, priority) {
    const t = {
      task,
      priority
    };

    this._queue.push(t); // Wait until the next event loop to pick a task to run. This way, we can
    // enqueue multiple items in an event loop, and be sure they will be run in
    // priority order.


    setTimeout(() => {
      this._run();
    }, 0);
    return () => {
      // TODO: Could return a boolean representing if the task has already been
      // kicked off.
      this._queue = this._queue.filter(t1 => t1 !== t);
    };
  }

  _run() {
    while (this._availableThreads > 0) {
      if (this._queue.length === 0) {
        return;
      }

      this._availableThreads--;

      const t = this._queue.pop();

      const promise = t.task();
      __WEBPACK_IMPORTED_MODULE_0_invariant___default()(typeof promise.then === "function", `LoadQueue only supports loading Promises. Got ${promise}`);
      promise.then(() => {
        this._availableThreads++;

        this._run();
      });
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoadQueue;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = TinyQueue;
module.exports.default = TinyQueue;

function TinyQueue(data, compare) {
    if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);

    this.data = data || [];
    this.length = this.data.length;
    this.compare = compare || defaultCompare;

    if (this.length > 0) {
        for (var i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

TinyQueue.prototype = {

    push: function (item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function () {
        if (this.length === 0) return undefined;

        var top = this.data[0];
        this.length--;

        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this._down(0);
        }
        this.data.pop();

        return top;
    },

    peek: function () {
        return this.data[0];
    },

    _up: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var item = data[pos];

        while (pos > 0) {
            var parent = (pos - 1) >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    },

    _down: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var halfLength = this.length >> 1;
        var item = data[pos];

        while (pos < halfLength) {
            var left = (pos << 1) + 1;
            var right = left + 1;
            var best = data[left];

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
};


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emitter__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ContextMenuWrapper__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__MainWindow_MainContextMenu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__WindowManager__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__MainWindow__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__PlaylistWindow__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__EqualizerWindow__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__MediaLibraryWindow__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Skin__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__css_webamp_css__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__css_webamp_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__css_webamp_css__);



















/**
 * Constructs the windows to render, and tracks focus.
 */

class App extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor() {
    super();

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleWindowResize", () => {
      if (this._webampNode == null) {
        return;
      } // It's a bit tricky to measure the "natural" size of the browser window.
      // Specifically we want to know how large the window would be without our
      // own Webamp windows influencing it. To achieve this, we temporarily make
      // our container `overflow: hidden;`. We then make our container full
      // screen by setting the bottom/right properties to zero. This second part
      // allows our Webamp windows to stay visible during the resize. After we
      // measure, we set the style back so that we don't end up interfering with
      // click events outside of our Webamp windows.


      this._webampNode.style.right = 0;
      this._webampNode.style.bottom = 0;
      this._webampNode.style.overflow = "hidden";
      this.props.browserWindowSizeChanged(__WEBPACK_IMPORTED_MODULE_9__utils__["k" /* getWindowSize */]());
      this._webampNode.style.right = null;
      this._webampNode.style.bottom = null;
      this._webampNode.style.overflow = "visible";
    });

    this._emitter = new __WEBPACK_IMPORTED_MODULE_5__emitter__["a" /* default */]();
    this._windowNodes = {};
    this._bindings = {};
  }

  componentWillMount() {
    this._webampNode = document.createElement("div");
    this._webampNode.id = "webamp";
    this._webampNode.role = "application";
    this._webampNode.style.zIndex = this.props.zIndex;
    document.body.appendChild(this._webampNode);
    this.props.browserWindowSizeChanged(__WEBPACK_IMPORTED_MODULE_9__utils__["k" /* getWindowSize */]());
    window.addEventListener("resize", this._handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleWindowResize);
    document.body.removeChild(this._webampNode);
  }

  componentDidMount() {
    this._setFocus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.focused !== this.props.focused) {
      this._setFocus();
    }
  }

  _setFocus() {
    const binding = this._bindings[this.props.focused];

    if (binding && binding.node) {
      binding.node.focus();
    }
  }

  _gotRef(windowId, comp) {
    if (comp == null) {
      const binding = this._bindings[windowId];

      if (binding.remove) {
        binding.remove();
      }

      this._bindings[windowId] = null;
      return;
    }

    const node = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(comp);
    const binding = this._bindings[windowId];

    if (binding && binding.node === node) {
      return;
    }

    node.tabIndex = -1;

    const listener = e => this._emitter.trigger(windowId, e);

    node.addEventListener("keydown", listener);
    this._bindings[windowId] = {
      node,
      remove: () => {
        node.removeEventListener("keydown", listener);
      }
    };
  }

  _renderWindows() {
    const _this$props = this.props,
          media = _this$props.media,
          genWindowsInfo = _this$props.genWindowsInfo,
          filePickers = _this$props.filePickers,
          genWindowComponents = _this$props.genWindowComponents;
    return __WEBPACK_IMPORTED_MODULE_9__utils__["r" /* objectMap */](genWindowsInfo, (w, id) => {
      if (!w.open) {
        return null;
      }

      switch (id) {
        case __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].MAIN:
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__MainWindow__["a" /* default */], {
            ref: component => this._gotRef(id, component),
            analyser: media.getAnalyser(),
            filePickers: filePickers
          });

        case __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].EQUALIZER:
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__EqualizerWindow__["a" /* default */], {
            ref: component => this._gotRef(id, component)
          });

        case __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].PLAYLIST:
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__PlaylistWindow__["a" /* default */], {
            ref: component => this._gotRef(id, component),
            analyser: media.getAnalyser()
          });

        case __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].MEDIA_LIBRARY:
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__MediaLibraryWindow__["a" /* default */], {
            ref: component => this._gotRef(id, component)
          });

        default:
          if (!w.generic) {
            throw new Error("Tried to render an unknown window:", id);
          }

          const Component = genWindowComponents[id];
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, {
            ref: component => this._gotRef(id, component),
            title: w.title,
            windowId: id,
            onFocusedKeyDown: listener => this._emitter.on(id, listener),
            analyser: media.getAnalyser(),
            isEnabledVisualizer: this.props.visualizerStyle === id,
            playing: this.props.status === __WEBPACK_IMPORTED_MODULE_6__constants__["f" /* MEDIA_STATUS */].PLAYING,
            close: () => this.props.closeWindow(id)
          });
      }
    });
  }

  render() {
    const _this$props2 = this.props,
          closed = _this$props2.closed,
          container = _this$props2.container,
          filePickers = _this$props2.filePickers;

    if (closed) {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.createPortal(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__Skin__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ContextMenuWrapper__["a" /* default */], {
      renderContents: () => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__MainWindow_MainContextMenu__["a" /* default */], {
        filePickers: filePickers
      })
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__WindowManager__["a" /* default */], {
      windows: this._renderWindows(),
      container: container
    }))), this._webampNode);
  }

}

App.propTypes = {
  container: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(Element)
};

const mapStateToProps = state => ({
  visualizerStyle: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["H" /* getVisualizerStyle */])(state),
  status: state.media.status,
  focused: state.windows.focused,
  closed: state.display.closed,
  genWindowsInfo: state.windows.genWindows,
  zIndex: state.display.zIndex
});

const mapDispatchToProps = dispatch => ({
  closeWindow: id => dispatch(__WEBPACK_IMPORTED_MODULE_8__actionCreators__["f" /* closeWindow */](id)),
  browserWindowSizeChanged: size => dispatch(__WEBPACK_IMPORTED_MODULE_8__actionCreators__["c" /* browserWindowSizeChanged */](size))
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),
/* 201 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./context-menu.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./context-menu.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "#webamp-context-menu .context-menu {\n  left: 0px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n#webamp-context-menu .context-menu.bottom {\n  top: 12px;\n}\n\n#webamp-context-menu .context-menu.top {\n  top: 0px;\n}\n\n#webamp-context-menu .context-menu,\n#webamp-context-menu .context-menu ul {\n  z-index: 50; /* Gross */\n  background-color: #ffffff;\n  position: absolute;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  border: 1px solid #a7a394;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n#webamp-context-menu .context-menu li {\n  position: relative;\n  font-family: \"Tahoma\";\n  font-size: 11px;\n  color: black;\n  white-space: nowrap;\n  margin: 2px;\n  padding: 1px 18px 3px 18px;\n  display: block;\n}\n\n#webamp-context-menu .context-menu li.checked:before {\n  float: left;\n  /* TODO: Use an image */\n  content: \"\\2713\";\n  margin-left: -12px;\n}\n\n#webamp-context-menu .context-menu li.parent:after {\n  float: right;\n  content: \"\\25B8\";\n  margin-right: -12px;\n}\n#webamp-context-menu .context-menu li a {\n  text-decoration: none;\n  color: black;\n  cursor: default;\n}\n\n#webamp-context-menu .context-menu li:hover,\n#webamp-context-menu .context-menu li:hover a {\n  background-color: #224eb7;\n  color: #ffffff;\n}\n\n#webamp-context-menu .context-menu li.hr {\n  padding: 2px 0;\n}\n\n#webamp-context-menu .context-menu li.hr:hover {\n  background-color: #ffffff;\n}\n\n#webamp-context-menu .context-menu li.hr hr {\n  border: none;\n  height: 1px;\n  background-color: #a7a394;\n  margin: 0;\n  padding: 0;\n}\n\n#webamp-context-menu .context-menu ul {\n  display: none;\n  left: 100%;\n  margin-left: -3px;\n}\n\n#webamp-context-menu .context-menu li:hover ul {\n  display: block;\n}\n", ""]);

// exports


/***/ }),
/* 204 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu__ = __webpack_require__(12);





const PlaybackContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Previous",
  hotkey: "Z",
  onClick: props.previous
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Play",
  hotkey: "X",
  onClick: props.play
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Pause",
  hotkey: "C",
  onClick: props.pause
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Stop",
  hotkey: "V",
  onClick: props.stop
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Next",
  hotkey: "B",
  onClick: props.next
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Back 5 seconds",
  hotkey: "Left",
  onClick: () => props.seekBackward(5)
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Fwd 5 seconds",
  hotkey: "Right",
  onClick: () => props.seekForward(5)
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "10 tracks back",
  hotkey: "Num. 1",
  onClick: () => Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["q" /* nextN */])(-10)
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "10 tracks fwd",
  hotkey: "Num. 3",
  onClick: () => Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["q" /* nextN */])(10)
}));

const mapDispatchToProps = {
  previous: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["w" /* previous */],
  play: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["v" /* play */],
  pause: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["u" /* pause */],
  stop: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["U" /* stop */],
  next: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["p" /* next */],
  seekForward: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["G" /* seekForward */],
  seekBackward: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["F" /* seekBackward */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(PlaybackContextMenu));

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu__ = __webpack_require__(12);





const SkinContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["d" /* Parent */], {
  label: "Skins"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  onClick: props.openSkinFileDialog,
  label: "Load Skin..."
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  onClick: props.loadDefaultSkin,
  label: "<Base Skin>"
}), props.availableSkins.map(skin => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  key: skin.url,
  onClick: () => props.setSkin(skin.url),
  label: skin.name
})));

const mapStateToProps = state => ({
  availableSkins: state.settings.availableSkins
});

const mapDispatchToProps = {
  loadDefaultSkin: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["k" /* loadDefaultSkin */],
  openSkinFileDialog: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["t" /* openSkinFileDialog */],
  setSkin: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["P" /* setSkinFromUrl */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(SkinContextMenu));

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__snapUtils__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actionCreators__ = __webpack_require__(2);









const abuts = (a, b) => {
  // TODO: This is kinda a hack. They should really be touching, not just within snapping distance.
  // Also, overlapping should not count.
  const wouldMoveTo = __WEBPACK_IMPORTED_MODULE_5__snapUtils__["d" /* snap */](a, b);
  return wouldMoveTo.x !== undefined || wouldMoveTo.y !== undefined;
};

class WindowManager extends __WEBPACK_IMPORTED_MODULE_3_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "handleMouseDown", (key, e) => {
      if (!e.target.classList.contains("draggable")) {
        return;
      } // Prevent dragging from highlighting text.


      e.preventDefault();

      const _this$movingAndStatio = this.movingAndStationaryNodes(key),
            _this$movingAndStatio2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default()(_this$movingAndStatio, 2),
            moving = _this$movingAndStatio2[0],
            stationary = _this$movingAndStatio2[1];

      const mouseStart = {
        x: e.clientX,
        y: e.clientY
      };
      const browserWindowSize = this.props.browserWindowSize;
      const box = __WEBPACK_IMPORTED_MODULE_5__snapUtils__["c" /* boundingBox */](moving);

      const handleMouseMove = ee => {
        const proposedDiff = {
          x: ee.clientX - mouseStart.x,
          y: ee.clientY - mouseStart.y
        };
        const proposedWindows = moving.map(node => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, node, __WEBPACK_IMPORTED_MODULE_5__snapUtils__["a" /* applyDiff */](node, proposedDiff)));

        const proposedBox = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, box, __WEBPACK_IMPORTED_MODULE_5__snapUtils__["a" /* applyDiff */](box, proposedDiff));

        const snapDiff = __WEBPACK_IMPORTED_MODULE_5__snapUtils__["e" /* snapDiffManyToMany */](proposedWindows, stationary);
        const withinDiff = __WEBPACK_IMPORTED_MODULE_5__snapUtils__["f" /* snapWithinDiff */](proposedBox, browserWindowSize);
        const finalDiff = __WEBPACK_IMPORTED_MODULE_5__snapUtils__["b" /* applyMultipleDiffs */](proposedDiff, snapDiff, withinDiff);
        const windowPositionDiff = moving.reduce((diff, window) => {
          diff[window.key] = __WEBPACK_IMPORTED_MODULE_5__snapUtils__["a" /* applyDiff */](window, finalDiff);
          return diff;
        }, {});
        this.props.updateWindowPositions(windowPositionDiff, false);
      };

      const removeListeners = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", removeListeners);
      };

      window.addEventListener("mouseup", removeListeners);
      window.addEventListener("mousemove", handleMouseMove);
    });
  }

  movingAndStationaryNodes(key) {
    const windows = this.props.windowsInfo.filter(w => this.props.windows[w.key] != null && !this.props.getWindowHidden(w.key));
    const targetNode = windows.find(node => node.key === key);

    if (targetNode == null) {
      throw new Error("Tried to move a node that does not exist");
    }

    let movingSet = new Set([targetNode]); // Only the main window brings other windows along.

    if (key === "main") {
      const findAllConnected = __WEBPACK_IMPORTED_MODULE_5__snapUtils__["g" /* traceConnection */](abuts);
      movingSet = findAllConnected(windows, targetNode);
    }

    const stationary = windows.filter(w => !movingSet.has(w));
    const moving = Array.from(movingSet);
    return [moving, stationary];
  }

  render() {
    const style = {
      position: "absolute",
      top: 0,
      left: 0
    };
    const windows = this.props.windowsInfo.filter(w => this.props.windows[w.key]);
    return windows.map(w => __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
      key: w.key,
      onMouseDown: e => this.handleMouseDown(w.key, e),
      style: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, style, {
        transform: `translate(${w.x}px, ${w.y}px)`
      })
    }, this.props.windows[w.key]));
  }

}

const mapStateToProps = state => ({
  windowsInfo: __WEBPACK_IMPORTED_MODULE_6__selectors__["R" /* getWindowsInfo */](state),
  getWindowHidden: __WEBPACK_IMPORTED_MODULE_6__selectors__["K" /* getWindowHidden */](state),
  getWindowOpen: __WEBPACK_IMPORTED_MODULE_6__selectors__["L" /* getWindowOpen */](state),
  browserWindowSize: __WEBPACK_IMPORTED_MODULE_6__selectors__["b" /* getBrowserWindowSize */](state)
});

const mapDispatchToProps = dispatch => {
  return {
    updateWindowPositions: positions => dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actionCreators__["_5" /* updateWindowPositions */])(positions))
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(WindowManager));

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DropTarget__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MiniTime__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ClickedDiv__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ContextMenuTarget__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Visualizer__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ActionButtons__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__MainBalance__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Close__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ClutterBar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__MainContextMenu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Eject__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__EqToggleButton__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__PlaylistToggleButton__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Kbps__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Khz__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Marquee__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__MonoStereo__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Position__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Repeat__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Shade__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Minimize__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Shuffle__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Time__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__MainVolume__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__css_main_window_css__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__css_main_window_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__css_main_window_css__);

































class MainWindow extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleClick", () => {
      this.props.setFocus();
    });

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleDrop", e => {
      this.props.loadFilesFromReferences(e);
    });
  }

  render() {
    const _this$props = this.props,
          focused = _this$props.focused,
          loading = _this$props.loading,
          doubled = _this$props.doubled,
          mainShade = _this$props.mainShade,
          llama = _this$props.llama,
          status = _this$props.status,
          working = _this$props.working,
          filePickers = _this$props.filePickers;
    const className = __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      window: true,
      play: status === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* MEDIA_STATUS */].PLAYING,
      stop: status === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* MEDIA_STATUS */].STOPPED,
      pause: status === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* MEDIA_STATUS */].PAUSED,
      selected: focused === __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].MAIN,
      shade: mainShade,
      draggable: true,
      loading,
      doubled,
      llama
    });
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__DropTarget__["a" /* default */], {
      id: "main-window",
      className: className,
      onMouseDown: this._handleClick,
      handleDrop: this._handleDrop,
      onWheel: this.props.scrollVolume
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "title-bar",
      className: "selected draggable",
      onDoubleClick: this.props.toggleMainWindowShadeMode
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__ContextMenuTarget__["a" /* default */], {
      id: "option-context",
      bottom: true,
      handle: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ClickedDiv__["a" /* default */], {
        id: "option",
        title: "Winamp Menu"
      })
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__MainContextMenu__["a" /* default */], {
      filePickers: filePickers
    })), mainShade && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__MiniTime__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_28__Minimize__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__Shade__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__Close__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "status"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__ClutterBar__["a" /* default */], null), !working && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "play-pause"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "work-indicator",
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
        selected: working
      })
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__Time__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Visualizer__["a" /* default */], {
      analyser: this.props.analyser
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "media-info"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23__Marquee__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__Kbps__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__Khz__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__MonoStereo__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31__MainVolume__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__MainBalance__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "windows"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__EqToggleButton__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__PlaylistToggleButton__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25__Position__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__ActionButtons__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__Eject__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "shuffle-repeat"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_29__Shuffle__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__Repeat__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      id: "about",
      target: "blank",
      href: "https://github.com/captbaritone/webamp",
      title: "About"
    }));
  }

}
/* unused harmony export MainWindow */


const mapStateToProps = state => {
  const status = state.media.status,
        _state$display = state.display,
        loading = _state$display.loading,
        doubled = _state$display.doubled,
        llama = _state$display.llama,
        working = _state$display.working,
        focused = state.windows.focused;
  return {
    mainShade: Object(__WEBPACK_IMPORTED_MODULE_6__selectors__["O" /* getWindowShade */])(state)("main"),
    status,
    loading,
    doubled,
    llama,
    working,
    focused
  };
};

const mapDispatchToProps = {
  setFocus: () => ({
    type: __WEBPACK_IMPORTED_MODULE_9__actionTypes__["U" /* SET_FOCUSED_WINDOW */],
    window: __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].MAIN
  }),
  loadFilesFromReferences: e => Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["l" /* loadFilesFromReferences */])(e.dataTransfer.files),
  removeAllTracks: __WEBPACK_IMPORTED_MODULE_5__actionCreators__["y" /* removeAllTracks */],
  toggleMainWindowShadeMode: __WEBPACK_IMPORTED_MODULE_5__actionCreators__["Y" /* toggleMainWindowShadeMode */],
  scrollVolume: __WEBPACK_IMPORTED_MODULE_5__actionCreators__["E" /* scrollVolume */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(MainWindow));

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./mini-time.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./mini-time.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "#webamp .mini-time {\n  display: block;\n  height: 6px;\n  width: 25px;\n}\n\n#webamp .mini-time.blinking .character:not(.background-character) {\n  animation: blink 2s step-start 1s infinite;\n  -webkit-animation: blink 2s step-start 1s infinite;\n}\n\n#webamp .mini-time .background-character {\n  z-index: 1;\n}\n\n#webamp .mini-time .character {\n  position: absolute;\n  top: 0;\n  z-index: 2;\n}\n", ""]);

// exports


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);




const ActionButtons = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "actions"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "previous",
  onClick: props.previous,
  title: "Previous Track"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "play",
  onClick: props.play,
  title: "Play"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "pause",
  onClick: props.pause,
  title: "Pause"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "stop",
  onClick: props.stop,
  title: "Stop"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "next",
  onClick: props.next,
  title: "Next Track"
}));

const mapDispatchToProps = dispatch => {
  return {
    previous: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["w" /* previous */])()),
    play: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["v" /* play */])()),
    pause: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["u" /* pause */])()),
    stop: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["U" /* stop */])()),
    next: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["p" /* next */])())
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(ActionButtons));

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Balance__ = __webpack_require__(108);



const offsetFromBalance = balance => {
  const percent = Math.abs(balance) / 100;
  const sprite = Math.floor(percent * 27);
  const offset = sprite * 15;
  return offset;
};
/* unused harmony export offsetFromBalance */


const MainBalance = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Balance__["a" /* default */], {
  id: "balance",
  style: {
    backgroundPosition: `0 -${offsetFromBalance(props.balance)}px`
  }
});

const mapStateToProps = state => ({
  balance: state.media.balance
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(MainBalance));

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClickedDiv__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);





const Close = ({
  onClick
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ClickedDiv__["a" /* default */], {
  id: "close",
  onClick: onClick,
  title: "Close"
});

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["e" /* close */])())
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(Close));

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(2);






const ClutterBar = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "clutter-bar"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "button-o"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "button-a"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "button-i"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  title: "Toggle Doublesize Mode",
  id: "button-d",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.doubled
  }),
  onMouseUp: props.handleMouseUp,
  onMouseDown: props.handleMouseDown
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "button-v"
}));

const mapStateToProps = state => ({
  doubled: state.display.doubled
});

const mapDispatchToProps = dispatch => ({
  handleMouseDown: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["T" /* SET_FOCUS */],
    input: "double"
  }),
  handleMouseUp: () => {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actionCreators__["V" /* toggleDoubleSizeMode */])());
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_19" /* UNSET_FOCUS */]
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(ClutterBar));

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);




const Eject = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "eject",
  onClick: props.openMediaFileDialog,
  title: "Open File(s)"
});

const mapDispatchToProps = {
  openMediaFileDialog: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["s" /* openMediaFileDialog */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(Eject));

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(2);






const EqToggleButton = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "equalizer-button",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.getWindowOpen("equalizer")
  }),
  onClick: props.handleClick,
  title: "Toggle Graphical Equalizer"
});

const mapStateToProps = state => ({
  getWindowOpen: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["L" /* getWindowOpen */])(state)
});

const mapDispatchToProps = {
  handleClick: () => Object(__WEBPACK_IMPORTED_MODULE_4__actionCreators__["_3" /* toggleWindow */])("equalizer")
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(EqToggleButton));

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(2);






const PlaylistToggleButton = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "playlist-button",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.getWindowOpen("playlist")
  }),
  onClick: props.handleClick,
  title: "Toggle Playlist Editor"
});

const mapStateToProps = state => ({
  getWindowOpen: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["L" /* getWindowOpen */])(state)
});

const mapDispatchToProps = {
  handleClick: () => Object(__WEBPACK_IMPORTED_MODULE_4__actionCreators__["_3" /* toggleWindow */])("playlist")
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(PlaylistToggleButton));

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CharacterString__ = __webpack_require__(34);




const Kbps = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "kbps"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CharacterString__["a" /* default */], null, props.kbps));

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state => ({
  kbps: state.media.kbps
}))(Kbps));

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CharacterString__ = __webpack_require__(34);




const Khz = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "khz"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CharacterString__["a" /* default */], null, props.khz));

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state => state.media)(Khz));

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CharacterString__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(5);

// Single line text display that can animate and hold multiple registers
// Knows how to display various modes like tracking, volume, balance, etc.





const CHAR_WIDTH = 5;
const MARQUEE_MAX_LENGTH = 31; // Always positive modulus

const mod = (n, m) => (n % m + m) % m;
/* unused harmony export mod */


const isLong = text => text.length >= MARQUEE_MAX_LENGTH; // Given text and step, how many pixels should it be shifted?


const stepOffset = (text, step, pixels) => {
  if (!isLong(text)) {
    return 0;
  }

  const stepOffsetWidth = step * CHAR_WIDTH; // Steps move one char at a time

  const offset = stepOffsetWidth + pixels;
  const stringLength = text.length * CHAR_WIDTH;
  return mod(offset, stringLength);
};
/* unused harmony export stepOffset */
 // Format an int as pixels

const pixelUnits = pixels => `${pixels}px`;
/* unused harmony export pixelUnits */
 // If text is wider than the marquee, it needs to loop

const loopText = text => isLong(text) ? text + text : text.padEnd(MARQUEE_MAX_LENGTH, " ");
/* unused harmony export loopText */


class Marquee extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(props) {
    super(props);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "stepHandle", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "handleMouseDown", e => {
      const xStart = e.clientX;
      this.setState({
        stepping: false
      });

      const handleMouseMove = ee => {
        const diff = ee.clientX - xStart;
        this.setState({
          dragOffset: -diff
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove); // TODO: Remove this listener

        setTimeout(() => {
          this.setState({
            stepping: true
          });
        }, 1000);
        document.removeEventListener("mouseUp", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    this.state = {
      stepping: true,
      dragOffset: 0
    };
    this.stepHandle = null;
  }

  componentDidMount() {
    this.stepHandle = setInterval(() => {
      if (this.state.stepping) {
        this.props.stepMarquee();
      }
    }, 220);
  }

  componentWillUnmount() {
    if (this.stepHandle) {
      clearTimeout(this.stepHandle);
    }
  }

  render() {
    const _this$props = this.props,
          text = _this$props.text,
          marqueeStep = _this$props.marqueeStep;
    const offset = stepOffset(text, marqueeStep, this.state.dragOffset);
    const offsetPixels = pixelUnits(-offset);
    const style = {
      whiteSpace: "nowrap",
      willChange: "transform",
      transform: `translateX(${offsetPixels})`
    };
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "marquee",
      className: "text",
      onMouseDown: this.handleMouseDown,
      title: "Song Title"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      style: style
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CharacterString__["a" /* default */], null, loopText(text))));
  }

}

const mapStateToProps = state => ({
  marqueeStep: state.display.marqueeStep,
  text: __WEBPACK_IMPORTED_MODULE_5__selectors__["j" /* getMarqueeText */](state)
});

const mapDispatchToProps = dispatch => {
  return {
    stepMarquee: () => dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_8" /* STEP_MARQUEE */]
    })
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Marquee));

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);





const MonoStereo = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "mono-stereo"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "stereo",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.channels === 2
  })
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "mono",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.channels === 1
  })
}));

const mapStateToProps = state => {
  return {
    channels: __WEBPACK_IMPORTED_MODULE_3__selectors__["c" /* getChannels */](state)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(MonoStereo));

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);




const Position = ({
  position,
  seekToPercentComplete,
  displayedPosition,
  setPosition
}) => {
  // In shade mode, the position slider shows up differently depending on if
  // it's near the start, middle or end of its progress
  let className = "";

  if (position <= 33) {
    className = "left";
  } else if (position >= 66) {
    className = "right";
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    id: "position",
    className: className,
    type: "range",
    min: "0",
    max: "100",
    step: "1",
    value: displayedPosition,
    onInput: setPosition,
    onChange: () => {}
    /* React complains without this, can probably rename onInput to onChange */
    ,
    onMouseUp: seekToPercentComplete,
    onMouseDown: setPosition,
    title: "Seeking Bar"
  });
};

const mapStateToProps = ({
  media,
  userInput
}) => {
  let position;

  if (media.length) {
    position = Math.floor(media.timeElapsed) / media.length * 100;
  } else {
    position = 0;
  }

  const displayedPosition = userInput.focus === "position" ? userInput.scrubPosition : position;
  return {
    displayedPosition,
    position
  };
};

const mapDispatchToProps = dispatch => ({
  seekToPercentComplete: e => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["I" /* SEEK_TO_PERCENT_COMPLETE */],
      percent: e.target.value
    });
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_19" /* UNSET_FOCUS */]
    });
  },
  setPosition: e => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["T" /* SET_FOCUS */],
      input: "position"
    });
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["Z" /* SET_SCRUB_POSITION */],
      position: e.target.value
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Position));

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContextMenuWrapper__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContextMenu__ = __webpack_require__(12);







const Repeat = ({
  repeat,
  handleClick
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContextMenuWrapper__["a" /* default */], {
  renderContents: () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
    checked: repeat,
    label: "Repeat",
    onClick: handleClick,
    hotkey: "(R)"
  })
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "repeat",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: repeat
  }),
  onClick: handleClick,
  title: "Toggle Repeat"
}));

const mapStateToProps = state => ({
  repeat: state.media.repeat
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["_0" /* toggleRepeat */])())
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Repeat));

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClickedDiv__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);





const Shade = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ClickedDiv__["a" /* default */], {
  id: "shade",
  onMouseDown: props.handleClick,
  onDoubleClick: e => e.stopPropagation(),
  title: "Toggle Windowshade Mode"
});

const mapDispatchToProps = {
  handleClick: __WEBPACK_IMPORTED_MODULE_3__actionCreators__["Y" /* toggleMainWindowShadeMode */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(() => ({}), mapDispatchToProps)(Shade));

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClickedDiv__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);





const Minimize = ({
  minimize
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ClickedDiv__["a" /* default */], {
  id: "minimize",
  title: "Minimize",
  onClick: minimize
});

const mapDispatchToProps = dispatch => ({
  minimize: () => dispatch(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["o" /* minimize */]())
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(Minimize));

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContextMenuWrapper__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContextMenu__ = __webpack_require__(12);







const Shuffle = ({
  shuffle,
  handleClick
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContextMenuWrapper__["a" /* default */], {
  renderContents: () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
    checked: shuffle,
    label: "Shuffle",
    onClick: handleClick,
    hotkey: "(S)"
  })
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "shuffle",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: shuffle
  }),
  onClick: handleClick,
  title: "Toggle Shuffle"
}));

const mapStateToProps = state => ({
  shuffle: state.media.shuffle
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["_1" /* toggleShuffle */])())
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Shuffle));

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);






const Time = ({
  timeElapsed,
  length,
  timeMode,
  toggleTimeMode
}) => {
  const seconds = timeMode === __WEBPACK_IMPORTED_MODULE_4__constants__["h" /* TIME_MODE */].ELAPSED ? timeElapsed : length - timeElapsed;
  const timeObj = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["i" /* getTimeObj */])(seconds);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "time",
    onClick: toggleTimeMode,
    className: "countdown"
  }, timeMode === __WEBPACK_IMPORTED_MODULE_4__constants__["h" /* TIME_MODE */].REMAINING && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "minus-sign"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "minute-first-digit",
    className: `digit digit-${timeObj.minutesFirstDigit}`
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "minute-second-digit",
    className: `digit digit-${timeObj.minutesSecondDigit}`
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "second-first-digit",
    className: `digit digit-${timeObj.secondsFirstDigit}`
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "second-second-digit",
    className: `digit digit-${timeObj.secondsSecondDigit}`
  }));
};

const mapStateToProps = state => state.media;

const mapDispatchToProps = dispatch => ({
  toggleTimeMode: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_15" /* TOGGLE_TIME_MODE */]
  })
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Time));

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Volume__ = __webpack_require__(109);





const MainVolume = props => {
  const volume = props.volume;
  const percent = volume / 100;
  const sprite = Math.round(percent * 28);
  const offset = (sprite - 1) * 15;
  const style = {
    backgroundPosition: `0 -${offset}px`
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "volume",
    style: style
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Volume__["a" /* default */], null));
};

const mapStateToProps = state => ({
  volume: __WEBPACK_IMPORTED_MODULE_2__selectors__["I" /* getVolume */](state)
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(MainVolume));

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(230);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./main-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./main-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #main-window {\n  position: absolute;\n  height: 116px;\n  width: 275px;\n  /* Ask the browser to scale showing large pixels if possible */\n  image-rendering: -moz-crisp-edges; /* Firefox */\n  image-rendering: -o-crisp-edges; /* Opera */\n  image-rendering: -webkit-optimize-contrast; /* Safari */\n  image-rendering: pixelated; /* Only in Chrome > 40 */\n  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n#webamp #title-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 14px;\n  width: 275px;\n}\n\n#webamp #option-context,\n#webamp #minimize,\n#webamp #shade,\n#webamp #close {\n  position: absolute;\n  height: 9px;\n  width: 9px;\n  top: 3px;\n}\n\n#webamp #title-bar #option {\n  width: 100%;\n  height: 100%;\n}\n\n#webamp #title-bar #option-context {\n  left: 6px;\n}\n#webamp #title-bar #minimize {\n  left: 244px;\n}\n#webamp #title-bar #shade {\n  left: 254px;\n}\n#webamp #title-bar #close {\n  left: 264px;\n}\n#webamp #clutter-bar {\n  position: absolute;\n  top: 22px;\n  left: 10px;\n  height: 43px;\n  width: 8px;\n}\n\n#webamp #clutter-bar div {\n  position: absolute;\n  height: 7px;\n  width: 8px;\n  left: 0px;\n}\n\n#webamp #clutter-bar #button-o {\n  top: 3px;\n  height: 8px;\n}\n#webamp #clutter-bar #button-a {\n  top: 11px;\n}\n#webamp #clutter-bar #button-i {\n  top: 18px;\n}\n#webamp #clutter-bar #button-d {\n  top: 25px;\n  height: 8px;\n}\n#webamp #clutter-bar #button-v {\n  top: 33px;\n}\n\n#webamp #play-pause {\n  position: absolute;\n  top: 28px;\n  left: 26px;\n  height: 9px;\n  width: 9px;\n  background-repeat: no-repeat;\n}\n\n#webamp .play #work-indicator,\n#webamp #work-indicator.selected {\n  position: absolute;\n  top: 28px;\n  left: 24px;\n  height: 9px;\n  width: 3px;\n}\n#webamp .status #time {\n  position: absolute;\n  left: 39px;\n  top: 26px;\n  /* Just to make it clickable */\n  height: 13px;\n  width: 59px;\n}\n\n#webamp .stop .status #time {\n  display: none;\n}\n#webamp .pause .status #time {\n  animation: blink 2s step-start 1s infinite;\n  -webkit-animation: blink 2s step-start 1s infinite;\n}\n\n#webamp .status #time #minus-sign {\n  /* Note that this get's augmented by the skin CSS if NUM_EX.BMP is present */\n  position: absolute;\n  top: 6px;\n  left: -1px;\n  width: 5px;\n  height: 1px;\n}\n\n#webamp .status #time #minute-first-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 9px;\n  height: 13px;\n  width: 9px;\n}\n#webamp .status #time #minute-second-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 21px;\n  height: 13px;\n  width: 9px;\n}\n#webamp .status #time #second-first-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 39px;\n  height: 13px;\n  width: 9px;\n}\n#webamp .status #time #second-second-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 51px;\n  height: 13px;\n  width: 9px;\n}\n\n#webamp #main-window #visualizer {\n  position: absolute;\n  top: 43px;\n  left: 24px;\n}\n\n#webamp #main-window.shade #visualizer {\n  top: 5px;\n  left: 79px;\n}\n\n#webamp #main-window.stop #visualizer {\n  display: none;\n}\n\n#webamp .text {\n  display: none;\n}\n\n#webamp #marquee {\n  position: absolute;\n  left: 111px;\n  top: 24px;\n  width: 155px;\n  height: 6px;\n  overflow: hidden;\n  display: block;\n  padding: 3px 0px; /* Ensure the target is correct for the cursor */\n}\n\n#webamp .media-info #kbps {\n  position: absolute;\n  left: 111px;\n  top: 43px;\n  width: 15px;\n  height: 6px;\n  overflow: hidden;\n}\n\n#webamp .stop .media-info #kbps {\n  display: none;\n}\n\n#webamp .media-info #khz {\n  position: absolute;\n  left: 156px;\n  top: 43px;\n  width: 10px;\n  height: 6px;\n  overflow: hidden;\n}\n\n#webamp .stop .media-info #khz {\n  display: none;\n}\n\n#webamp .media-info .mono-stereo {\n  position: absolute;\n  left: 212px;\n  top: 41px;\n  width: 57px;\n  height: 12px;\n}\n\n#webamp .media-info .mono-stereo div {\n  position: absolute;\n  height: 12px;\n}\n\n#webamp .media-info .mono-stereo #mono {\n  width: 27px;\n}\n\n#webamp .media-info .mono-stereo #stereo {\n  left: 27px;\n  width: 29px;\n}\n\n#webamp #volume {\n  position: absolute;\n  left: 107px;\n  top: 57px;\n  height: 13px;\n  width: 68px;\n  background-position: 0 0;\n}\n\n#webamp #volume input {\n  height: 13px;\n  /* The input itself, is actually 3px shorter than the background\n     * https://twitter.com/LuigiHann/status/959275940688867328\n     */\n  width: 65px;\n  display: block;\n}\n#webamp #volume input::-webkit-slider-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n#webamp #volume input::-moz-range-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n\n#webamp #balance {\n  position: absolute;\n  left: 177px;\n  top: 57px;\n  height: 13px;\n  width: 38px;\n  background-position: 0 0;\n}\n\n#webamp #balance::-webkit-slider-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n#webamp #balance::-moz-range-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n\n#webamp .windows {\n  position: absolute;\n  left: 219px;\n  top: 58px;\n  width: 46px;\n  height: 12px;\n}\n\n#webamp .windows div {\n  position: absolute;\n  width: 23px;\n  height: 12px;\n}\n\n#webamp .windows #equalizer-button {\n  left: 0;\n}\n\n#webamp .windows #playlist-button {\n  left: 23px;\n}\n\n#webamp #position {\n  position: absolute;\n  left: 16px;\n  top: 72px;\n  width: 248px;\n  height: 10px;\n}\n\n#webamp #position::-webkit-slider-thumb {\n  height: 10px;\n  width: 29px;\n  /*\n     * Fix the strange bug in Safair/mobile-chrome\n     * http://stackoverflow.com/questions/26727769/rendering-glitch-when-manipulating-range-input-value-via-javascript-in-webkit\n     */\n  -webkit-box-sizing: border-box;\n  position: relative;\n}\n\n#webamp #position::-moz-range-thumb {\n  height: 10px;\n  width: 29px;\n}\n\n/* For some reason, we can't use display: none here */\n#webamp .stop #position::-webkit-slider-thumb {\n  visibility: hidden;\n}\n#webamp .stop #position::-moz-range-thumb {\n  visibility: hidden;\n}\n\n/* For some reason this is needed for the position slider to show up now that\n * we are using React.\n */\n#webamp .play #position::-webkit-slider-thumb {\n  visibility: visible;\n}\n\n#webamp .actions div {\n  height: 18px;\n  width: 23px;\n  position: absolute;\n}\n\n#webamp .actions #previous {\n  top: 88px;\n  left: 16px;\n}\n#webamp .actions #play {\n  top: 88px;\n  left: 39px;\n}\n#webamp .actions #pause {\n  top: 88px;\n  left: 62px;\n}\n#webamp .actions #stop {\n  top: 88px;\n  left: 85px;\n}\n#webamp .actions #next {\n  top: 88px;\n  left: 108px;\n  width: 22px;\n}\n\n#webamp #eject {\n  position: absolute;\n  top: 89px;\n  left: 136px;\n  height: 16px;\n  width: 22px;\n}\n\n#webamp .shuffle-repeat {\n  position: absolute;\n  top: 89px;\n  left: 164px;\n  width: 74px;\n}\n\n#webamp .shuffle-repeat div {\n  position: absolute;\n  height: 15px;\n}\n\n#webamp .shuffle-repeat #shuffle {\n  width: 47px;\n}\n\n#webamp .shuffle-repeat #repeat {\n  left: 46px;\n  width: 28px;\n}\n\n#webamp #about {\n  position: absolute;\n  top: 91px;\n  left: 253px;\n  height: 15px;\n  width: 13px;\n}\n\n#webamp .digit {\n  position: absolute;\n  display: inline-block;\n  width: 9px;\n  height: 13px;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n}\n\n/* Shade View */\n#webamp #main-window.shade {\n  height: 14px;\n}\n\n#webamp .shade .media-info,\n#webamp .shade .windows,\n#webamp .shade #volume,\n#webamp .shade #balance,\n#webamp .shade .shuffle-repeat,\n#webamp .shade .status {\n  display: none;\n}\n#webamp .shade #title-bar {\n}\n\n#webamp .shade .actions div {\n  position: absolute;\n}\n#webamp .shade .actions #previous,\n#webamp .shade .actions #previous:active {\n  background: none;\n  height: 10px;\n  width: 7px;\n  top: 2px;\n  left: 169px;\n}\n#webamp .shade .actions #play,\n#webamp .shade .actions #play:active {\n  background: none;\n  height: 10px;\n  width: 10px;\n  top: 2px;\n  left: 176px;\n}\n#webamp .shade .actions #pause,\n#webamp .shade .actions #pause:active {\n  background: none;\n  height: 10px;\n  width: 9px;\n  top: 2px;\n  left: 186px;\n}\n#webamp .shade .actions #stop,\n#webamp .shade .actions #stop:active {\n  background: none;\n  height: 10px;\n  width: 9px;\n  top: 2px;\n  left: 195px;\n}\n#webamp .shade .actions #next,\n#webamp .shade .actions #next:active {\n  background: none;\n  height: 10px;\n  width: 10px;\n  top: 2px;\n  left: 204px;\n}\n#webamp .shade #eject,\n#webamp .shade #eject:active {\n  height: 10px;\n  width: 10px;\n  top: 2px;\n  left: 215px;\n  background: none;\n}\n\n#webamp .shade #position {\n  position: absolute;\n  left: 226px;\n  top: 4px;\n  width: 17px;\n  height: 7px;\n}\n\n#webamp .shade #position::-webkit-slider-thumb {\n  height: 7px;\n  width: 3px;\n  /* This make it appear. Not sure why */\n  background: none;\n}\n\n#webamp .shade #position::-moz-range-thumb {\n  height: 7px;\n  width: 3px;\n  /* This make it appear. Not sure why */\n  background: none;\n}\n\n#webamp #main-window .mini-time {\n  position: absolute;\n  top: 4px;\n  left: 127px;\n}\n", ""]);

// exports


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DropTarget__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Visualizer__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__PlaylistShade__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AddMenu__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__RemoveMenu__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__SelectionMenu__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__MiscMenu__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ListMenu__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__PlaylistResizeTarget__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__PlaylistActionArea__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__TrackList__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ScrollBar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__css_playlist_window_css__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__css_playlist_window_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__css_playlist_window_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__types__ = __webpack_require__(46);

























class PlaylistWindow extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleDrop", (e, targetCoords) => {
      const top = e.clientY - targetCoords.y;
      const atIndex = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["d" /* clamp */])(this.props.offset + Math.round((top - 23) / __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* TRACK_HEIGHT */]), 0, this.props.maxTrackIndex + 1);
      this.props.loadFilesFromReferences(e, atIndex);
    });
  }

  render() {
    const _this$props = this.props,
          skinPlaylistStyle = _this$props.skinPlaylistStyle,
          focusPlaylist = _this$props.focusPlaylist,
          focused = _this$props.focused,
          playlistSize = _this$props.playlistSize,
          playlistWindowPixelSize = _this$props.playlistWindowPixelSize,
          playlistShade = _this$props.playlistShade,
          close = _this$props.close,
          toggleShade = _this$props.toggleShade,
          analyser = _this$props.analyser;

    if (playlistShade) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__PlaylistShade__["a" /* default */], null);
    }

    const style = {
      color: skinPlaylistStyle.normal,
      backgroundColor: skinPlaylistStyle.normalbg,
      fontFamily: `${skinPlaylistStyle.font}, Arial, sans-serif`,
      height: `${playlistWindowPixelSize.height}px`,
      width: `${playlistWindowPixelSize.width}px`
    };
    const classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()("window", "draggable", {
      selected: focused === __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].PLAYLIST,
      wide: playlistSize[0] > 2
    });
    const showSpacers = playlistSize[0] % 2 === 0;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__DropTarget__["a" /* default */], {
      id: "playlist-window",
      className: classes,
      style: style,
      onMouseDown: focusPlaylist,
      handleDrop: this._handleDrop,
      onWheel: this.props.scrollVolume
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top draggable",
      onDoubleClick: toggleShade
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-left draggable"
    }), showSpacers && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-left-spacer draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-left-fill draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-title draggable"
    }), showSpacers && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-right-spacer draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-right-fill draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-right draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "playlist-shade-button",
      onClick: toggleShade
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "playlist-close-button",
      onClick: close
    }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-middle draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-middle-left draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-middle-center"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__TrackList__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-middle-right draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__ScrollBar__["a" /* default */], null))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-bottom draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-bottom-left draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__AddMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__RemoveMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__SelectionMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__MiscMenu__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-bottom-center draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-bottom-right draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-visualizer",
      onClick: this.props.toggleVisualizerStyle
    },
    /* TODO: Resize the visualizer so it fits */
    false && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Visualizer__["a" /* default */] // @ts-ignore Visualizer is not yet typed
    , {
      analyser: analyser
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__PlaylistActionArea__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__ListMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "playlist-scroll-up-button",
      onClick: this.props.scrollUpFourTracks
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "playlist-scroll-down-button",
      onClick: this.props.scrollDownFourTracks
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__PlaylistResizeTarget__["a" /* default */], null))));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    focusPlaylist: () => dispatch({
      type: __WEBPACK_IMPORTED_MODULE_5__actionTypes__["U" /* SET_FOCUSED_WINDOW */],
      window: __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].PLAYLIST
    }),
    close: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actionCreators__["f" /* closeWindow */])("playlist")),
    toggleShade: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actionCreators__["Z" /* togglePlaylistShadeMode */])()),
    toggleVisualizerStyle: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actionCreators__["_2" /* toggleVisualizerStyle */])()),
    scrollUpFourTracks: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actionCreators__["D" /* scrollUpFourTracks */])()),
    scrollDownFourTracks: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actionCreators__["B" /* scrollDownFourTracks */])()),
    loadFilesFromReferences: (e, startIndex) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actionCreators__["l" /* loadFilesFromReferences */])(e.dataTransfer.files, __WEBPACK_IMPORTED_MODULE_4__constants__["e" /* LOAD_STYLE */].NONE, startIndex)),
    scrollVolume: e => dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actionCreators__["E" /* scrollVolume */])(e))
  };
};

const mapStateToProps = state => {
  const focused = state.windows.focused,
        length = state.media.length,
        trackOrder = state.playlist.trackOrder;
  return {
    offset: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["s" /* getScrollOffset */])(state),
    maxTrackIndex: trackOrder.length - 1,
    playlistWindowPixelSize: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["M" /* getWindowPixelSize */])(state)("playlist"),
    focused,
    skinPlaylistStyle: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["x" /* getSkinPlaylistStyle */])(state),
    playlistSize: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["P" /* getWindowSize */])(state)("playlist"),
    playlistShade: Boolean(Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["O" /* getWindowShade */])(state)("playlist")),
    duration: length
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(PlaylistWindow));

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CharacterString__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PlaylistResizeTarget__ = __webpack_require__(110);











class PlaylistShade extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  _addedWidth() {
    return this.props.playlistSize[0] * __WEBPACK_IMPORTED_MODULE_6__constants__["o" /* WINDOW_RESIZE_SEGMENT_WIDTH */];
  }

  _trimmedName() {
    const name = this.props.name;

    if (name == null) {
      return "[No file]";
    }

    const MIN_NAME_WIDTH = 205;
    const nameLength = (MIN_NAME_WIDTH + this._addedWidth()) / __WEBPACK_IMPORTED_MODULE_6__constants__["b" /* CHARACTER_WIDTH */];
    return name.length > nameLength ? name.slice(0, nameLength - 1) + __WEBPACK_IMPORTED_MODULE_6__constants__["j" /* UTF8_ELLIPSIS */] : name;
  }

  _time() {
    const _this$props = this.props,
          length = _this$props.length,
          name = _this$props.name;
    return name == null ? "" : Object(__WEBPACK_IMPORTED_MODULE_4__utils__["j" /* getTimeStr */])(length);
  }

  render() {
    const _this$props2 = this.props,
          toggleShade = _this$props2.toggleShade,
          close = _this$props2.close,
          focusPlaylist = _this$props2.focusPlaylist,
          focused = _this$props2.focused;
    const style = {
      width: `${__WEBPACK_IMPORTED_MODULE_6__constants__["p" /* WINDOW_WIDTH */] + this._addedWidth()}px`
    };
    const classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()("window", "draggable", {
      selected: focused === __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].PLAYLIST
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "playlist-window-shade",
      className: classes,
      style: {
        width: style.width
      },
      onMouseDown: focusPlaylist,
      onDoubleClick: toggleShade
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "left"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "right draggable"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "playlist-shade-track-title"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__CharacterString__["a" /* default */], null, this._trimmedName())), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "playlist-shade-time"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__CharacterString__["a" /* default */], null, this._time())), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__PlaylistResizeTarget__["a" /* default */], {
      widthOnly: true
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "playlist-shade-button",
      onClick: toggleShade
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "playlist-close-button",
      onClick: close
    }))));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    focusPlaylist: () => dispatch({
      type: __WEBPACK_IMPORTED_MODULE_5__actionTypes__["U" /* SET_FOCUSED_WINDOW */],
      window: __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].PLAYLIST
    }),
    close: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actionCreators__["f" /* closeWindow */])("playlist")),
    toggleShade: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actionCreators__["Z" /* togglePlaylistShadeMode */])())
  };
};

const mapStateToProps = state => {
  const focused = state.windows.focused,
        length = state.media.length;
  return {
    focused,
    playlistSize: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["P" /* getWindowSize */])(state)("playlist"),
    trackOrder: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["m" /* getOrderedTracks */])(state),
    length,
    name: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["k" /* getMinimalMediaText */])(state)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(PlaylistShade));

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fileUtils__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PlaylistMenu__ = __webpack_require__(35);







const el = document.createElement("input");
el.type = "file"; // @ts-ingore

const DIR_SUPPORT = // @ts-ignore
typeof el.webkitdirectory !== "undefined" || // @ts-ignore
typeof el.mozdirectory !== "undefined" || // @ts-ignore
typeof el.directory !== "undefined";
/* eslint-disable no-alert */

const AddMenu = ({
  nextIndex,
  addFilesAtIndex,
  addDirAtIndex
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__PlaylistMenu__["a" /* default */], {
  id: "playlist-add-menu"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "add-url",
  onClick: () => alert("Not supported in Webamp")
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "add-dir",
  onClick: () => addDirAtIndex(nextIndex)
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "add-file",
  onClick: () => addFilesAtIndex(nextIndex)
}));

const mapStateToProps = state => ({
  nextIndex: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["z" /* getTrackCount */])(state)
});

const mapDispatchToProps = dispatch => ({
  addFilesAtIndex: async nextIndex => {
    const fileReferences = await Object(__WEBPACK_IMPORTED_MODULE_5__fileUtils__["e" /* promptForFileReferences */])();
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* addTracksFromReferences */])(fileReferences, __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* LOAD_STYLE */].NONE, nextIndex));
  },
  addDirAtIndex: async nextIndex => {
    if (!DIR_SUPPORT) {
      alert("Not supported in your browser");
      return;
    }

    const fileReferences = await Object(__WEBPACK_IMPORTED_MODULE_5__fileUtils__["e" /* promptForFileReferences */])({
      directory: true
    });
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* addTracksFromReferences */])(fileReferences, __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* LOAD_STYLE */].NONE, nextIndex));
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(AddMenu));

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);



let cursorX;
let cursorY;
window.document.addEventListener("mousemove", e => {
  cursorX = e.pageX;
  cursorY = e.pageY;
}); // We implement hover ourselves, because we hate ourselves and https://stackoverflow.com/a/13259049/1263117

class PlaylistMenuEntry extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(props) {
    super(props);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "node", void 0);

    this.state = {
      hover: false
    };
  }

  componentDidMount() {
    if (this.node == null) {
      return;
    }

    const domRect = this.node.getBoundingClientRect();
    this.setState({
      hover: cursorX >= domRect.left && cursorX <= domRect.right && cursorY >= domRect.top && cursorY <= domRect.bottom
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      ref: node => this.node = node,
      onMouseEnter: () => this.setState({
        hover: true
      }),
      onMouseLeave: () => this.setState({
        hover: false
      }),
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
        hover: this.state.hover
      })
    }, this.props.children);
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlaylistMenuEntry;


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__ = __webpack_require__(35);





const RemoveMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__["a" /* default */], {
  id: "playlist-remove-menu"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "remove-misc",
  onClick: () => alert("Not supported in Webamp")
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "remove-all",
  onClick: props.removeAll
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "crop",
  onClick: props.crop
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "remove-selected",
  onClick: props.removeSelected
}));

const mapDispatchToProps = dispatch => {
  return {
    removeSelected: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["z" /* removeSelectedTracks */])()),
    removeAll: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["y" /* removeAllTracks */])()),
    crop: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["g" /* cropPlaylist */])())
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(() => ({}), mapDispatchToProps)(RemoveMenu));

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__ = __webpack_require__(35);





const SelectionMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__["a" /* default */], {
  id: "playlist-selection-menu"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "invert-selection",
  onClick: props.invertSelection
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "select-zero",
  onClick: props.selectZero
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "select-all",
  onClick: props.selectAll
}));

const mapDispatchToProps = dispatch => {
  return {
    invertSelection: () => dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["n" /* INVERT_SELECTION */]
    }),
    selectAll: () => dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["J" /* SELECT_ALL */]
    }),
    selectZero: () => dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["K" /* SELECT_ZERO */]
    })
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(SelectionMenu));

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PlaylistMenu__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SortContextMenu__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MiscOptionsContextMenu__ = __webpack_require__(239);





const MiscMenu = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__PlaylistMenu__["a" /* default */], {
  id: "playlist-misc-menu"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "sort-list",
  onClick: e => e.stopPropagation()
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SortContextMenu__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "file-info",
  onClick: () => alert("Not supported in Webamp")
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "misc-options",
  onClick: e => e.stopPropagation()
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__MiscOptionsContextMenu__["a" /* ConnectedMiscOptionsContextMenu */], null)));

/* harmony default export */ __webpack_exports__["a"] = (MiscMenu);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContextMenuTarget__ = __webpack_require__(48);






/* eslint-disable no-alert */

/* TODO: This should really be kitty-corner to the upper right hand corner of the MiscMenu */
const SortContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContextMenuTarget__["a" /* default */], {
  style: {
    width: "100%",
    height: "100%"
  },
  top: true,
  handle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null)
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Sort list by title",
  onClick: props.sortListByTitle
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Reverse list",
  onClick: props.reverseList
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Randomize list",
  onClick: props.randomizeList
}));

const mapDispatchToProps = dispatch => {
  return {
    reverseList: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["A" /* reverseList */])()),
    randomizeList: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["x" /* randomizeList */])()),
    sortListByTitle: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["S" /* sortListByTitle */])())
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(SortContextMenu));

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContextMenu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenuTarget__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(2);






const MiscOptionsContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenuTarget__["a" /* default */], {
  style: {
    width: "100%",
    height: "100%"
  },
  top: true,
  handle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null)
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ContextMenu__["c" /* Node */], {
  onClick: props.downloadHtmlPlaylist,
  label: "Generate HTML playlist"
}));

const mapDispatchToProps = dispatch => {
  return {
    downloadHtmlPlaylist: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actionCreators__["h" /* downloadHtmlPlaylist */])())
  };
};

const ConnectedMiscOptionsContextMenu = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(MiscOptionsContextMenu);
/* harmony export (immutable) */ __webpack_exports__["a"] = ConnectedMiscOptionsContextMenu;


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__ = __webpack_require__(35);





const ListMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__["a" /* default */], {
  id: "playlist-list-menu"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "new-list",
  onClick: props.removeAllTracks
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "save-list",
  onClick: () => alert("Not supported in Webamp")
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "load-list",
  onClick: () => alert("Not supported in Webamp")
}));

const mapDispatchToProps = dispatch => {
  return {
    removeAllTracks: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["y" /* removeAllTracks */]
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(ListMenu));

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MiniTime__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RunningTimeDisplay__ = __webpack_require__(242);






const PlaylistWindow = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RunningTimeDisplay__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-action-buttons"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-previous-button",
  onClick: props.previous
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-play-button",
  onClick: props.play
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-pause-button",
  onClick: props.pause
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-stop-button",
  onClick: props.stop
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-next-button",
  onClick: props.next
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-eject-button",
  onClick: props.openMediaFileDialog
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__MiniTime__["a" /* default */], null));

const mapDispatchToProps = dispatch => {
  return {
    play: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["v" /* play */])()),
    pause: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["u" /* pause */])()),
    stop: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["U" /* stop */])()),
    openMediaFileDialog: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["s" /* openMediaFileDialog */])()),
    next: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["p" /* next */])()),
    previous: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["w" /* previous */])())
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(PlaylistWindow));

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CharacterString__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);





// While all the browsers I care about support String.prototype.padEnd,
// Not all node versions do, and I want tests to pass in Jest...
// Sigh.
function rightPad(str, len, fillChar) {
  while (str.length < len) {
    str += fillChar;
  }

  return str;
}

const RunningTimeDisplay = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-running-time-display draggable"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CharacterString__["a" /* default */], null, rightPad(props.runningTimeMessage, 18, " "))));

const mapStateToProps = state => ({
  runningTimeMessage: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["r" /* getRunningTimeMessage */])(state)
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(RunningTimeDisplay));

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TrackCell__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TrackTitle__ = __webpack_require__(245);











function getNumberLength(number) {
  return number.toString().length;
}

class TrackList extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_node", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleMoveClick", e => {
      if (!this._node) {
        return;
      }

      const _this$_node$getBoundi = this._node.getBoundingClientRect(),
            top = _this$_node$getBoundi.top,
            bottom = _this$_node$getBoundi.bottom,
            left = _this$_node$getBoundi.left,
            right = _this$_node$getBoundi.right;

      const mouseStart = e.clientY;
      let lastDiff = 0;

      const handleMouseMove = ee => {
        const y = ee.clientY,
              x = ee.clientX;

        if (y < top || y > bottom || x < left || x > right) {
          // Mouse is outside the track list
          return;
        }

        const proposedDiff = Math.floor((y - mouseStart) / __WEBPACK_IMPORTED_MODULE_5__constants__["i" /* TRACK_HEIGHT */]);

        if (proposedDiff !== lastDiff) {
          const diffDiff = proposedDiff - lastDiff;
          this.props.dragSelected(diffDiff);
          lastDiff = proposedDiff;
        }
      };

      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleMouseMove);
      });
      window.addEventListener("mousemove", handleMouseMove);
    });
  }

  _renderTracks(format) {
    return this.props.trackIds.map((id, i) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TrackCell__["a" /* default */], {
      key: id,
      id: id,
      index: this.props.offset + i,
      handleMoveClick: this._handleMoveClick
    }, format(id, i)));
  }

  render() {
    const _this$props = this.props,
          tracks = _this$props.tracks,
          offset = _this$props.offset;
    const maxTrackNumberLength = getNumberLength(this.props.numberOfTracks);

    const paddedTrackNumForIndex = i => (i + 1 + offset).toString().padStart(maxTrackNumberLength, "\u00A0");

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      ref: node => {
        this._node = node;
      },
      className: "playlist-tracks",
      style: {
        height: "100%"
      },
      onClick: this.props.selectZero,
      onWheel: this.props.scrollPlaylistByDelta
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-track-titles"
    }, this._renderTracks((id, i) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__TrackTitle__["a" /* default */], {
      id: id,
      paddedTrackNumber: paddedTrackNumForIndex(i)
    }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-track-durations"
    }, this._renderTracks(id => Object(__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getTimeStr */])(tracks[id].duration))));
  }

}

const mapDispatchToProps = dispatch => ({
  selectZero: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["K" /* SELECT_ZERO */]
  }),
  dragSelected: offset => dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actionCreators__["j" /* dragSelected */])(offset)),
  scrollPlaylistByDelta: e => dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actionCreators__["C" /* scrollPlaylistByDelta */])(e))
});

const mapStateToProps = state => ({
  offset: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["s" /* getScrollOffset */])(state),
  trackIds: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["G" /* getVisibleTrackIds */])(state),
  tracks: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["E" /* getTracks */])(state),
  numberOfTracks: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["l" /* getNumberOfTracks */])(state)
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(TrackList));

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(5);







class TrackCell extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_onMouseDown", e => {
      if (e.shiftKey) {
        this.props.shiftClick(e);
        return;
      } else if (e.metaKey || e.ctrlKey) {
        this.props.ctrlClick(e);
        return;
      }

      if (!this.props.selected) {
        this.props.click();
      }

      this.props.handleMoveClick(e);
    });
  }

  render() {
    const _this$props = this.props,
          skinPlaylistStyle = _this$props.skinPlaylistStyle,
          selected = _this$props.selected,
          current = _this$props.current,
          children = _this$props.children,
          onDoubleClick = _this$props.onDoubleClick;
    const style = {
      backgroundColor: selected ? skinPlaylistStyle.selectedbg : undefined,
      color: current ? skinPlaylistStyle.current : undefined
    };
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()("track-cell", {
        selected,
        current
      }),
      style: style,
      onClick: e => e.stopPropagation(),
      onMouseDown: this._onMouseDown,
      onContextMenu: e => e.preventDefault(),
      onDoubleClick: onDoubleClick
    }, children);
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    skinPlaylistStyle: __WEBPACK_IMPORTED_MODULE_5__selectors__["x" /* getSkinPlaylistStyle */](state),
    selected: __WEBPACK_IMPORTED_MODULE_5__selectors__["t" /* getSelectedTrackIds */](state).has(ownProps.id),
    current: __WEBPACK_IMPORTED_MODULE_5__selectors__["d" /* getCurrentTrackId */](state) === ownProps.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  shiftClick: e => {
    e.preventDefault();
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["_6" /* SHIFT_CLICKED_TRACK */],
      index: ownProps.index
    });
  },
  ctrlClick: e => {
    e.preventDefault();
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["j" /* CTRL_CLICKED_TRACK */],
      index: ownProps.index
    });
  },
  click: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["f" /* CLICKED_TRACK */],
    index: ownProps.index
  }),
  onDoubleClick: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["B" /* PLAY_TRACK */],
    id: ownProps.id
  })
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(TrackCell));

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__(5);




const TrackTitle = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, props.paddedTrackNumber, ". ", props.title);

const mapStateToProps = (state, ownProps) => ({
  title: Object(__WEBPACK_IMPORTED_MODULE_2__selectors__["A" /* getTrackDisplayName */])(state)(ownProps.id)
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(TrackTitle));

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__(5);






const Handle = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-scrollbar-handle"
});

const ScrollBar = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default.a, {
  className: "playlist-scrollbar",
  type: "range",
  min: 0,
  max: 100,
  step: 1,
  value: props.playlistScrollPosition,
  onChange: props.setPlaylistScrollPosition,
  vertical: true,
  handle: Handle,
  disabled: props.allTracksAreVisible
});

const mapDispatchToProps = {
  setPlaylistScrollPosition: position => Object(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["N" /* setPlaylistScrollPosition */])(100 - position)
};

const mapStateToProps = state => ({
  playlistScrollPosition: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["o" /* getPlaylistScrollPosition */])(state),
  allTracksAreVisible: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["G" /* getVisibleTrackIds */])(state).length === state.playlist.length
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(ScrollBar));

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(248), __esModule: true };

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(249);
module.exports = __webpack_require__(26).Object.assign;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(36);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(251) });


/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(50);
var gOPS = __webpack_require__(67);
var pIE = __webpack_require__(52);
var toObject = __webpack_require__(119);
var IObject = __webpack_require__(117);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(38)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(31);
var toLength = __webpack_require__(253);
var toAbsoluteIndex = __webpack_require__(254);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(63);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(63);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(256), __esModule: true };

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(257);
__webpack_require__(263);
module.exports = __webpack_require__(74).f('iterator');


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(258)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(121)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(63);
var defined = __webpack_require__(62);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(72);
var descriptor = __webpack_require__(49);
var setToStringTag = __webpack_require__(73);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(27)(IteratorPrototype, __webpack_require__(32)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(28);
var anObject = __webpack_require__(37);
var getKeys = __webpack_require__(50);

module.exports = __webpack_require__(30) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(17).document;
module.exports = document && document.documentElement;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(20);
var toObject = __webpack_require__(119);
var IE_PROTO = __webpack_require__(64)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(264);
var global = __webpack_require__(17);
var hide = __webpack_require__(27);
var Iterators = __webpack_require__(71);
var TO_STRING_TAG = __webpack_require__(32)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(265);
var step = __webpack_require__(266);
var Iterators = __webpack_require__(71);
var toIObject = __webpack_require__(31);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(121)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(268), __esModule: true };

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(269);
__webpack_require__(274);
__webpack_require__(275);
__webpack_require__(276);
module.exports = __webpack_require__(26).Symbol;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(17);
var has = __webpack_require__(20);
var DESCRIPTORS = __webpack_require__(30);
var $export = __webpack_require__(36);
var redefine = __webpack_require__(122);
var META = __webpack_require__(270).KEY;
var $fails = __webpack_require__(38);
var shared = __webpack_require__(65);
var setToStringTag = __webpack_require__(73);
var uid = __webpack_require__(51);
var wks = __webpack_require__(32);
var wksExt = __webpack_require__(74);
var wksDefine = __webpack_require__(75);
var enumKeys = __webpack_require__(271);
var isArray = __webpack_require__(272);
var anObject = __webpack_require__(37);
var isObject = __webpack_require__(29);
var toIObject = __webpack_require__(31);
var toPrimitive = __webpack_require__(61);
var createDesc = __webpack_require__(49);
var _create = __webpack_require__(72);
var gOPNExt = __webpack_require__(273);
var $GOPD = __webpack_require__(124);
var $DP = __webpack_require__(28);
var $keys = __webpack_require__(50);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(123).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(52).f = $propertyIsEnumerable;
  __webpack_require__(67).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(70)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(27)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(51)('meta');
var isObject = __webpack_require__(29);
var has = __webpack_require__(20);
var setDesc = __webpack_require__(28).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(38)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(50);
var gOPS = __webpack_require__(67);
var pIE = __webpack_require__(52);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(118);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(31);
var gOPN = __webpack_require__(123).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 274 */
/***/ (function(module, exports) {



/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75)('asyncIterator');


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75)('observable');


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(278), __esModule: true };

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(279);
module.exports = __webpack_require__(26).Object.setPrototypeOf;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(36);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(280).set });


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(29);
var anObject = __webpack_require__(37);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(113)(Function.call, __webpack_require__(124).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(282), __esModule: true };

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(283);
var $Object = __webpack_require__(26).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(36);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(72) });


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Track = function Track(props) {
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = (0, _extends3['default'])({
    visibility: included ? 'visible' : 'hidden'
  }, style, positonStyle);
  return _react2['default'].createElement('div', { className: className, style: elStyle });
}; /* eslint-disable react/prop-types */
exports['default'] = Track;
module.exports = exports['default'];

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(125);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(68);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(69);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(76);

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = createSlider;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(286);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(77);

var _warning2 = _interopRequireDefault(_warning);

var _Steps = __webpack_require__(290);

var _Steps2 = _interopRequireDefault(_Steps);

var _Marks = __webpack_require__(291);

var _Marks2 = _interopRequireDefault(_Marks);

var _Handle = __webpack_require__(292);

var _Handle2 = _interopRequireDefault(_Handle);

var _utils = __webpack_require__(126);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3['default'])(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      (0, _classCallCheck3['default'])(this, ComponentEnhancer);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = utils.getMousePosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.removeDocumentEvents();
        _this.onStart(position);
        _this.addDocumentMouseEvents();
        utils.pauseEvent(e);
      };

      _this.onTouchStart = function (e) {
        if (utils.isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = utils.getTouchPosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (utils.isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = utils.getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          utils.pauseEvent(e);
          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd(e);
        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        _this.onEnd();
        _this.removeDocumentEvents();
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = utils.getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = utils.getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (false) {
        var step = props.step,
            max = props.max,
            min = props.min;

        (0, _warning2['default'])(step && Math.floor(step) === step ? (max - min) % step === 0 : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      }
      _this.handlesRefs = {};
      return _this;
    }

    ComponentEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (_Component.prototype.componentWillUnmount) _Component.prototype.componentWillUnmount.call(this);
      this.removeDocumentEvents();
    };

    ComponentEnhancer.prototype.componentDidMount = function componentDidMount() {
      // Snapshot testing cannot handle refs, so be sure to null-check this.
      this.document = this.sliderRef && this.sliderRef.ownerDocument;
    };

    ComponentEnhancer.prototype.addDocumentTouchEvents = function addDocumentTouchEvents() {
      // just work for Chrome iOS Safari and Android Browser
      this.onTouchMoveListener = (0, _addEventListener2['default'])(this.document, 'touchmove', this.onTouchMove);
      this.onTouchUpListener = (0, _addEventListener2['default'])(this.document, 'touchend', this.onEnd);
    };

    ComponentEnhancer.prototype.addDocumentMouseEvents = function addDocumentMouseEvents() {
      this.onMouseMoveListener = (0, _addEventListener2['default'])(this.document, 'mousemove', this.onMouseMove);
      this.onMouseUpListener = (0, _addEventListener2['default'])(this.document, 'mouseup', this.onEnd);
    };

    ComponentEnhancer.prototype.removeDocumentEvents = function removeDocumentEvents() {
      /* eslint-disable no-unused-expressions */
      this.onTouchMoveListener && this.onTouchMoveListener.remove();
      this.onTouchUpListener && this.onTouchUpListener.remove();

      this.onMouseMoveListener && this.onMouseMoveListener.remove();
      this.onMouseUpListener && this.onMouseUpListener.remove();
      /* eslint-enable no-unused-expressions */
    };

    ComponentEnhancer.prototype.focus = function focus() {
      if (!this.props.disabled) {
        this.handlesRefs[0].focus();
      }
    };

    ComponentEnhancer.prototype.blur = function blur() {
      if (!this.props.disabled) {
        this.handlesRefs[0].blur();
      }
    };

    ComponentEnhancer.prototype.getSliderStart = function getSliderStart() {
      var slider = this.sliderRef;
      var rect = slider.getBoundingClientRect();

      return this.props.vertical ? rect.top : rect.left;
    };

    ComponentEnhancer.prototype.getSliderLength = function getSliderLength() {
      var slider = this.sliderRef;
      if (!slider) {
        return 0;
      }

      var coords = slider.getBoundingClientRect();
      return this.props.vertical ? coords.height : coords.width;
    };

    ComponentEnhancer.prototype.calcValue = function calcValue(offset) {
      var _props = this.props,
          vertical = _props.vertical,
          min = _props.min,
          max = _props.max;

      var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
      var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
      return value;
    };

    ComponentEnhancer.prototype.calcValueByPos = function calcValueByPos(position) {
      var pixelOffset = position - this.getSliderStart();
      var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
      return nextValue;
    };

    ComponentEnhancer.prototype.calcOffset = function calcOffset(value) {
      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max;

      var ratio = (value - min) / (max - min);
      return ratio * 100;
    };

    ComponentEnhancer.prototype.saveHandle = function saveHandle(index, handle) {
      this.handlesRefs[index] = handle;
    };

    ComponentEnhancer.prototype.render = function render() {
      var _classNames;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          className = _props3.className,
          marks = _props3.marks,
          dots = _props3.dots,
          step = _props3.step,
          included = _props3.included,
          disabled = _props3.disabled,
          vertical = _props3.vertical,
          min = _props3.min,
          max = _props3.max,
          children = _props3.children,
          maximumTrackStyle = _props3.maximumTrackStyle,
          style = _props3.style,
          railStyle = _props3.railStyle,
          dotStyle = _props3.dotStyle,
          activeDotStyle = _props3.activeDotStyle;

      var _Component$prototype$ = _Component.prototype.render.call(this),
          tracks = _Component$prototype$.tracks,
          handles = _Component$prototype$.handles;

      var sliderClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, _classNames[prefixCls + '-with-marks'] = Object.keys(marks).length, _classNames[prefixCls + '-disabled'] = disabled, _classNames[prefixCls + '-vertical'] = vertical, _classNames[className] = className, _classNames));
      return _react2['default'].createElement(
        'div',
        {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onMouseUp: disabled ? noop : this.onMouseUp,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        },
        _react2['default'].createElement('div', {
          className: prefixCls + '-rail',
          style: (0, _extends3['default'])({}, maximumTrackStyle, railStyle)
        }),
        tracks,
        _react2['default'].createElement(_Steps2['default'], {
          prefixCls: prefixCls,
          vertical: vertical,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }),
        handles,
        _react2['default'].createElement(_Marks2['default'], {
          className: prefixCls + '-mark',
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min
        }),
        children
      );
    };

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = (0, _extends3['default'])({}, Component.propTypes, {
    min: _propTypes2['default'].number,
    max: _propTypes2['default'].number,
    step: _propTypes2['default'].number,
    marks: _propTypes2['default'].object,
    included: _propTypes2['default'].bool,
    className: _propTypes2['default'].string,
    prefixCls: _propTypes2['default'].string,
    disabled: _propTypes2['default'].bool,
    children: _propTypes2['default'].any,
    onBeforeChange: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    onAfterChange: _propTypes2['default'].func,
    handle: _propTypes2['default'].func,
    dots: _propTypes2['default'].bool,
    vertical: _propTypes2['default'].bool,
    style: _propTypes2['default'].object,
    minimumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    maximumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    handleStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    trackStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    railStyle: _propTypes2['default'].object,
    dotStyle: _propTypes2['default'].object,
    activeDotStyle: _propTypes2['default'].object,
    autoFocus: _propTypes2['default'].bool,
    onFocus: _propTypes2['default'].func,
    onBlur: _propTypes2['default'].func
  }), _class.defaultProps = (0, _extends3['default'])({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = (0, _objectWithoutProperties3['default'])(_ref, ['index']);

      delete restProps.dragging;
      return _react2['default'].createElement(_Handle2['default'], (0, _extends3['default'])({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
module.exports = exports['default'];

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(287);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__(288);

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventBaseObject = __webpack_require__(289);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(58);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = void 0;
    var deltaY = void 0;
    var delta = void 0;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = void 0;
    var doc = void 0;
    var body = void 0;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2["default"].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = void 0;
  var l = void 0;
  var prop = void 0;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports["default"] = DomEventObject;
module.exports = exports['default'];

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports['default'];

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(77);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0, _warning2['default'])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (var i = min; i <= max; i = i + step) {
      if (points.indexOf(i) >= 0) continue;
      points.push(i);
    }
  }
  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0, _extends3['default'])({ bottom: offset }, dotStyle) : (0, _extends3['default'])({ left: offset }, dotStyle);
    if (isActived) {
      style = (0, _extends3['default'])({}, style, activeDotStyle);
    }

    var pointClassName = (0, _classnames2['default'])((_classNames = {}, _classNames[prefixCls + '-dot'] = true, _classNames[prefixCls + '-dot-active'] = isActived, _classNames));

    return _react2['default'].createElement('span', { className: pointClassName, style: style, key: point });
  });

  return _react2['default'].createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

exports['default'] = Steps;
module.exports = exports['default'];

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = typeof markPoint === 'object' && !_react2['default'].isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classnames2['default'])((_classNames = {}, _classNames[className + '-text'] = true, _classNames[className + '-text-active'] = isActive, _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      width: markWidth + '%',
      marginLeft: -markWidth / 2 + '%',
      left: (point - min) / range * 100 + '%'
    };

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? (0, _extends3['default'])({}, style, markPoint.style) : style;
    return _react2['default'].createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point
      },
      markLabel
    );
  });

  return _react2['default'].createElement(
    'div',
    { className: className },
    elements
  );
};

exports['default'] = Marks;
module.exports = exports['default'];

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(125);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(68);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(69);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(76);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Handle = function (_React$Component) {
  (0, _inherits3['default'])(Handle, _React$Component);

  function Handle() {
    (0, _classCallCheck3['default'])(this, Handle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Handle.prototype.focus = function focus() {
    this.handle.focus();
  };

  Handle.prototype.blur = function blur() {
    this.handle.blur();
  };

  Handle.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        vertical = _props.vertical,
        offset = _props.offset,
        style = _props.style,
        disabled = _props.disabled,
        min = _props.min,
        max = _props.max,
        value = _props.value,
        tabIndex = _props.tabIndex,
        restProps = (0, _objectWithoutProperties3['default'])(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);


    var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
    var elStyle = (0, _extends3['default'])({}, style, postionStyle);
    var ariaProps = {};
    if (value !== undefined) {
      ariaProps = (0, _extends3['default'])({}, ariaProps, {
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      });
    }
    return _react2['default'].createElement('div', (0, _extends3['default'])({
      ref: function ref(node) {
        return _this2.handle = node;
      },
      role: 'slider',
      tabIndex: tabIndex || 0
    }, ariaProps, restProps, {
      className: className,
      style: elStyle
    }));
  };

  return Handle;
}(_react2['default'].Component);

exports['default'] = Handle;


Handle.propTypes = {
  className: _propTypes2['default'].string,
  vertical: _propTypes2['default'].bool,
  offset: _propTypes2['default'].number,
  style: _propTypes2['default'].object,
  disabled: _propTypes2['default'].bool,
  min: _propTypes2['default'].number,
  max: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  tabIndex: _propTypes2['default'].number
};
module.exports = exports['default'];

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

exports['default'] = KeyCode;
module.exports = exports['default'];

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./playlist-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./playlist-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #playlist-window {\n  display: flex;\n  flex-direction: column;\n}\n\n#webamp .playlist-top {\n  width: 100%;\n  min-height: 20px;\n  max-height: 20px;\n  position: relative;\n  display: flex;\n}\n\n#webamp .playlist-top-left {\n  width: 25px;\n}\n\n#webamp .playlist-top-left-spacer {\n  width: 12px;\n}\n\n#webamp .playlist-top-left-fill {\n  flex-grow: 1;\n  background-position: right;\n}\n\n#webamp .playlist-top-right-spacer {\n  /* This goes to the right of the center */\n  width: 13px;\n}\n\n#webamp .playlist-top-right-fill {\n  flex-grow: 1;\n  background-position: right;\n}\n\n#webamp .playlist-top-title {\n  width: 100px;\n}\n\n#webamp .playlist-top-right {\n  width: 25px;\n}\n\n#webamp .playlist-middle {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}\n\n#webamp .playlist-middle-left {\n  background-repeat: repeat-y;\n  width: 12px;\n  min-width: 12px;\n}\n\n#webamp .playlist-middle-center {\n  flex-grow: 1;\n  padding: 3px 0;\n  min-width: 0; /* Not sure why this is needed */\n}\n\n#webamp .playlist-tracks {\n  display: flex;\n  flex: 1 0 auto;\n}\n\n#webamp .playlist-tracks .track-cell {\n  height: 13px;\n  line-height: 13px;\n  font-size: 9px;\n  letter-spacing: 0.5px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n#webamp .playlist-track-durations > div {\n  padding-right: 3px;\n  text-align: right;\n}\n\n#webamp .playlist-track-titles {\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n\n#webamp .playlist-track-titles > div {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#webamp .playlist-middle-right {\n  background-repeat: repeat-y;\n  background-position: top right;\n  width: 20px;\n  min-width: 20px;\n  position: relative;\n  padding-bottom: 18px;\n}\n\n#webamp .playlist-scrollbar {\n  height: 100%;\n  width: 8px;\n  margin-left: 5px;\n}\n\n#webamp .playlist-scrollbar-handle {\n  width: 8x;\n  height: 18px;\n}\n\n#webamp .playlist-bottom {\n  width: 100%;\n  height: 38px;\n  min-height: 38px;\n  max-height: 38px;\n  position: relative;\n}\n\n#webamp .playlist-bottom-left {\n  width: 125px;\n  height: 100%;\n  position: absolute;\n}\n\n#webamp .playlist-menu li {\n  list-style: none;\n  display: none;\n  width: 22px;\n  height: 18px;\n  padding: 0;\n  margin: 0;\n}\n\n#webamp .playlist-menu li > div {\n  height: 100%;\n}\n\n#webamp .playlist-menu ul {\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n}\n\n#webamp .playlist-menu.selected li {\n  display: block;\n}\n\n#webamp .playlist-menu .bar {\n  position: absolute;\n  bottom: 0;\n  left: -3px;\n  width: 3px;\n  height: 54px;\n}\n\n#webamp #playlist-add-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 14px;\n  width: 22px;\n  height: 18px;\n}\n\n#webamp #playlist-remove-menu.playlist-menu .bar {\n  height: 72px;\n}\n\n#webamp #playlist-remove-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 43px;\n  width: 22px;\n  height: 18px;\n}\n\n#webamp #playlist-selection-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 72px;\n  width: 22px;\n  height: 18px;\n}\n\n#webamp #playlist-misc-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 101px;\n  width: 22px;\n  height: 18px;\n}\n\n#webamp #playlist-list-menu {\n  position: absolute;\n  bottom: 12px;\n  right: 22px;\n  width: 22px;\n  height: 18px;\n}\n\n#webamp .playlist-bottom-right {\n  width: 150px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n}\n\n#webamp .playlist-running-time-display {\n  position: absolute;\n  top: 10px;\n  left: 7px;\n  height: 10px;\n}\n\n#webamp .playlist-action-buttons {\n  position: absolute;\n  top: 22px;\n  left: 3px;\n  display: flex;\n}\n\n#webamp .playlist-action-buttons > div {\n  height: 10px;\n  width: 10px;\n}\n\n#webamp #playlist-window .playlist-visualizer {\n  width: 75px;\n  height: 100%;\n  position: absolute;\n  right: 150px;\n  display: none; /* Only show if the window is wide enough */\n}\n\n#webamp #playlist-window.wide .playlist-visualizer {\n  display: block;\n}\n\n#webamp #playlist-window .mini-time {\n  position: absolute;\n  top: 23px;\n  left: 66px;\n}\n\n#webamp #playlist-window #playlist-resize-target {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  height: 20px;\n  width: 20px;\n}\n\n#webamp #playlist-close-button {\n  position: absolute;\n  right: 2px;\n  height: 9px;\n  width: 9px;\n  top: 3px;\n}\n\n#webamp #playlist-shade-button {\n  position: absolute;\n  right: 12px;\n  height: 9px;\n  width: 9px;\n  top: 3px;\n}\n\n#webamp #playlist-window-shade {\n  height: 14px;\n}\n\n#webamp #playlist-window-shade .left {\n  height: 14px;\n  background-repeat: no-repeat;\n}\n\n#webamp #playlist-window-shade .right {\n  height: 14px;\n  background-repeat: no-repeat;\n  background-position-x: right;\n}\n\n#webamp #playlist-window #playlist-scroll-up-button,\n#webamp #playlist-window #playlist-scroll-down-button {\n  position: absolute;\n  width: 8px;\n  height: 5px;\n  right: 7px;\n}\n\n#webamp #playlist-window #playlist-scroll-up-button {\n  top: 2px;\n}\n#webamp #playlist-window #playlist-scroll-down-button {\n  top: 8px;\n}\n\n#webamp #playlist-window-shade #playlist-resize-target {\n  position: absolute;\n  right: 20px;\n  top: 3px;\n  height: 9px;\n  width: 9px;\n}\n\n#webamp #playlist-shade-track-title {\n  position: absolute;\n  top: 4px;\n  left: 5px;\n}\n\n#webamp #playlist-shade-time {\n  position: absolute;\n  top: 4px;\n  right: 30px;\n}\n\n#webamp #playlist-window #visualizer {\n  position: absolute;\n  /* TODO: These numbers are not quite right */\n  top: 10px;\n  left: 5px;\n}\n", ""]);

// exports


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Band__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EqOn__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__EqAuto__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__EqGraph__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__PresetsContextMenu__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__EqualizerShade__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_equalizer_window_css__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_equalizer_window_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__css_equalizer_window_css__);
















const bandClassName = band => `band-${band}`;

const EqualizerWindow = props => {
  const doubled = props.doubled,
        selected = props.selected,
        shade = props.shade;
  const className = __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
    selected,
    doubled,
    shade,
    window: true,
    draggable: true
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "equalizer-window",
    className: className,
    onMouseDown: props.focusWindow,
    onWheel: props.scrollVolume
  }, props.shade ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__EqualizerShade__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "equalizer-top title-bar draggable",
    onDoubleClick: props.toggleEqualizerShadeMode
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "equalizer-shade",
    onClick: props.toggleEqualizerShadeMode
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "equalizer-close",
    onClick: props.closeEqualizerWindow
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__EqOn__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__EqAuto__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__EqGraph__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__PresetsContextMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Band__["a" /* default */], {
    id: "preamp",
    band: "preamp",
    onChange: props.setPreampValue
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "plus12db",
    onClick: props.setEqToMax
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "zerodb",
    onClick: props.setEqToMid
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "minus12db",
    onClick: props.setEqToMin
  }), __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* BANDS */].map(hertz => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Band__["a" /* default */], {
    key: hertz,
    id: bandClassName(hertz),
    band: hertz,
    onChange: props.setHertzValue(hertz)
  }))));
};

EqualizerWindow.propTypes = {
  doubled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  selected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  shade: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
}; // This does not use the shorthand object syntax becuase `setHertzValue` needs
// to return a function.

const mapDispatchToProps = dispatch => ({
  focusWindow: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["U" /* SET_FOCUSED_WINDOW */],
    window: __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].EQUALIZER
  }),
  setPreampValue: value => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["O" /* setPreamp */])(value)),
  setEqToMin: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["L" /* setEqToMin */])()),
  setEqToMid: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["K" /* setEqToMid */])()),
  setEqToMax: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["J" /* setEqToMax */])()),
  setHertzValue: hertz => value => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["I" /* setEqBand */])(hertz, value)),
  closeEqualizerWindow: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["f" /* closeWindow */])("equalizer")),
  toggleEqualizerShadeMode: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["X" /* toggleEqualizerShadeMode */])()),
  scrollVolume: e => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["E" /* scrollVolume */])(e))
});

const mapStateToProps = state => ({
  doubled: state.display.doubled,
  selected: state.windows.focused === __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].EQUALIZER,
  shade: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["O" /* getWindowShade */])(state)("equalizer")
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(EqualizerWindow));

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);




const MAX_VALUE = 100; // Given a value between 1-100, return the sprite number (0-27)

const spriteNumber = value => {
  const percent = value / 100;
  return Math.round(percent * 27);
};
/* unused harmony export spriteNumber */
 // Given a sprite number, return the x,y

const spriteOffsets = number => {
  const x = number % 14;
  const y = Math.floor(number / 14);
  return {
    x,
    y
  };
};
/* unused harmony export spriteOffsets */


const Handle = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "rc-slider-handle"
});

const Band = ({
  value,
  backgroundPosition,
  id,
  onChange,
  handleMouseDown,
  handleMouseUp
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: id,
  className: "band",
  style: {
    backgroundPosition
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default.a, {
  type: "range",
  min: 0,
  max: MAX_VALUE,
  step: 1,
  value: MAX_VALUE - value,
  vertical: true,
  onChange: onChange,
  onBeforeChange: handleMouseDown,
  onAfterChange: handleMouseUp,
  handle: Handle
}));

const mapStateToProps = (state, ownProps) => {
  const value = state.equalizer.sliders[ownProps.band];

  const _spriteOffsets = spriteOffsets(spriteNumber(value)),
        x = _spriteOffsets.x,
        y = _spriteOffsets.y;

  const xOffset = x * 15; // Each sprite is 15px wide

  const yOffset = y * 65; // Each sprite is 15px tall

  const backgroundPosition = `-${xOffset}px -${yOffset}px`;
  return {
    id: ownProps.id,
    value,
    backgroundPosition
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleMouseDown: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["N" /* SET_BAND_FOCUS */],
    input: "eq",
    bandFocused: ownProps.band
  }),
  handleMouseUp: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_19" /* UNSET_FOCUS */]
  })
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Band));

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);





const EqOn = props => {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "on",
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      selected: props.on
    }),
    onClick: props.toggleEq
  });
};

const mapStateToProps = state => ({
  on: state.equalizer.on
});

const mapDispatchProps = dispatch => {
  return {
    toggleEq: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["W" /* toggleEq */])())
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchProps)(EqOn));

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);





const EqAuto = props => {
  const className = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.auto
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "auto",
    className: className,
    onClick: props.toggleAuto
  });
};

const mapStateToProps = state => {
  return {
    auto: state.equalizer.auto
  };
};

const mapDispatchToProps = () => dispatch => {
  // We don't support auto.
  return {
    toggleAuto: () => dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["Q" /* SET_EQ_AUTO */],
      value: false
    })
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(EqAuto));

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cardinal_spline_js__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cardinal_spline_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cardinal_spline_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(4);







class EqGraph extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.canvasCtx = this.canvas.getContext("2d");
    this.canvasCtx.imageSmoothingEnabled = false;
    this.width = this.canvas.width * 1; // Cast to int

    this.height = this.canvas.height * 1; // Cast to int

    if (this.props.lineColorsImage) {
      this.createColorPattern(this.props.lineColorsImage);
    }

    if (this.props.preampLineUrl) {
      this.createPreampLineImage(this.props.preampLineUrl);
    }
  }

  componentDidUpdate() {
    this.canvasCtx.clearRect(0, 0, this.width, this.height);
    this.drawPreampLine();
    this.drawEqLine(); // This should paint on top of the preamp line
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.lineColorsImage !== nextProps.lineColorsImage) {
      this.createColorPattern(nextProps.lineColorsImage);
    }

    if (this.props.preampLineUrl !== nextProps.preampLineUrl) {
      this.createPreampLineImage(nextProps.preampLineUrl);
    }

    return true;
  }

  createPreampLineImage(preampLineUrl) {
    const preampLineImg = new Image();

    preampLineImg.onload = () => {
      this.setState({
        preampLineImg
      });
    };

    preampLineImg.src = preampLineUrl;
  }

  createColorPattern(lineColorsImage) {
    const bgImage = new Image();

    bgImage.onload = () => {
      const colorsCanvas = document.createElement("canvas");
      const colorsCtx = colorsCanvas.getContext("2d");
      colorsCanvas.width = bgImage.width * 2;
      colorsCanvas.height = bgImage.height * 2;
      colorsCtx.drawImage(bgImage, 0, 0, colorsCanvas.width, colorsCanvas.height);
      this.setState({
        colorPattern: this.canvasCtx.createPattern(colorsCanvas, "repeat-x")
      });
    };

    bgImage.src = lineColorsImage;
  }

  drawEqLine() {
    if (!this.state.colorPattern) {
      // The skin has not finished loading yet
      return;
    }

    const props = this.props;
    const amplitudes = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* BANDS */].map(band => props[band]);
    this.canvasCtx.strokeStyle = this.state.colorPattern;
    this.canvasCtx.lineWidth = 2;
    this.canvasCtx.beginPath();
    const paddingLeft = 4; // TODO: This should be 3

    const min = 1;
    const max = 31;
    const points = amplitudes.reduce((prev, value, i) => {
      const percent = (100 - value) / 100;
      const y = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["v" /* percentToRange */])(percent, min, max);
      return prev.concat(paddingLeft + i * 16, y);
    }, []); // Spline between points in order to create nice curves

    const tension = 0.5;
    const resolution = 4; // Points in each segment

    const smoothPoints = Object(__WEBPACK_IMPORTED_MODULE_3_cardinal_spline_js__["getCurvePoints"])(points, tension, resolution);

    for (let i = 0; i < smoothPoints.length; i += 2) {
      // Splining can push peaks out of bounds. So we fudge them back in.
      const y = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* clamp */])(smoothPoints[i + 1], min, max);
      this.canvasCtx.lineTo(smoothPoints[i], y);
    }

    this.canvasCtx.stroke();
  }

  drawPreampLine() {
    const preampLineImg = this.state.preampLineImg;

    if (!preampLineImg) {
      // The skin has not finished loading yet
      return;
    }

    const preampValue = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["v" /* percentToRange */])(this.props.preamp / 100, 0, 30);
    this.canvasCtx.drawImage(this.state.preampLineImg, 0, preampValue, preampLineImg.width * 2, preampLineImg.height * 2);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
      id: "eqGraph",
      ref: node => this.canvas = node,
      width: "152",
      height: "32"
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(state => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.equalizer.sliders, {
  lineColorsImage: state.display.skinImages.EQ_GRAPH_LINE_COLORS,
  preampLineUrl: state.display.skinImages.EQ_PREAMP_LINE
}))(EqGraph));

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

/*	Curve calc function for canvas 2.3.8
 *	(c) Epistemex 2013-2018
 *	www.epistemex.com
 *	License: MIT
 */
function getCurvePoints(h,t,f,c){if(typeof h==="undefined"||h.length<2){return new Float32Array(0)}t=typeof t==="number"?t:0.5;f=typeof f==="number"?f:25;var j,d=1,e=h.length,n=0,m=(e-2)*f+2+(c?2*f:0),k=new Float32Array(m),a=new Float32Array((f+2)<<2),b=4;j=h.slice(0);if(c){j.unshift(h[e-1]);j.unshift(h[e-2]);j.push(h[0],h[1])}else{j.unshift(h[1]);j.unshift(h[0]);j.push(h[e-2],h[e-1])}a[0]=1;for(;d<f;d++){var o=d/f,p=o*o,r=p*o,q=r*2,s=p*3;a[b++]=q-s+1;a[b++]=s-q;a[b++]=r-2*p+o;a[b++]=r-p}a[++b]=1;g(j,a,e,t);if(c){j=[];j.push(h[e-4],h[e-3],h[e-2],h[e-1],h[0],h[1],h[2],h[3]);g(j,a,4,t)}function g(G,z,B,M){for(var A=2,H;A<B;A+=2){var C=G[A],D=G[A+1],E=G[A+2],F=G[A+3],I=(E-G[A-2])*M,J=(F-G[A-1])*M,K=(G[A+4]-C)*M,L=(G[A+5]-D)*M,u=0,v,w,x,y;for(H=0;H<f;H++){v=z[u++];w=z[u++];x=z[u++];y=z[u++];k[n++]=v*C+w*E+x*I+y*K;k[n++]=v*D+w*F+x*J+y*L}}}e=c?0:h.length-2;k[n++]=h[e++];k[n]=h[e];return k}if(true){exports.getCurvePoints=getCurvePoints};

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContextMenuTarget__ = __webpack_require__(48);






const PresetsContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContextMenuTarget__["a" /* default */], {
  top: true,
  id: "presets-context",
  handle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "presets"
  })
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  onClick: props.openEqfFileDialog,
  label: "Load"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  onClick: props.downloadPreset,
  label: "Save"
}));

const mapDispatchToProps = dispatch => {
  return {
    openEqfFileDialog: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["r" /* openEqfFileDialog */])()),
    downloadPreset: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["i" /* downloadPreset */])())
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(PresetsContextMenu));

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Volume__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Balance__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionCreators__ = __webpack_require__(2);







const EqualizerShade = props => {
  const volume = props.volume,
        balance = props.balance;
  const classes = ["left", "center", "right"];
  const eqVolumeClassName = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["w" /* segment */])(0, 100, volume, classes);
  const eqBalanceClassName = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["w" /* segment */])(-100, 100, balance, classes);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "draggable",
    onDoubleClick: props.toggleEqualizerShadeMode,
    style: {
      width: "100%",
      height: "100%"
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "equalizer-shade",
    onClick: props.toggleEqualizerShadeMode
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "equalizer-close",
    onClick: props.closeWindow
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Volume__["a" /* default */], {
    id: "equalizer-volume",
    className: eqVolumeClassName
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Balance__["a" /* default */], {
    id: "equalizer-balance",
    className: eqBalanceClassName
  }));
};

const mapDispatchToProps = dispatch => {
  return {
    closeWindow: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["f" /* closeWindow */])("equalizer")),
    toggleEqualizerShadeMode: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["X" /* toggleEqualizerShadeMode */])())
  };
};

const mapStateToProps = state => ({
  volume: state.media.volume,
  balance: state.media.balance
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(EqualizerShade));

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(305);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./equalizer-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./equalizer-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #equalizer-window {\n  height: 116px;\n  width: 275px;\n}\n\n#webamp #equalizer-window.shade {\n  height: 14px;\n}\n\n#webamp #equalizer-volume {\n  position: absolute;\n  left: 61px;\n  top: 4px;\n  height: 6px;\n  width: 97px;\n  background-position: 0 0;\n}\n\n#webamp #equalizer-volume::-webkit-slider-thumb {\n  height: 7px;\n  width: 3px;\n}\n\n#webamp #equalizer-volume::-moz-range-thumb {\n  height: 7px;\n  width: 3px;\n}\n\n#webamp #equalizer-balance {\n  position: absolute;\n  left: 164px;\n  top: 4px;\n  height: 6px;\n  width: 43px;\n  background-position: 0 0;\n}\n\n#webamp #equalizer-balance::-webkit-slider-thumb {\n  height: 7px;\n  width: 3px;\n}\n\n#webamp #equalizer-balance::-moz-range-thumb {\n  height: 7px;\n  width: 3px;\n}\n\n#webamp .equalizer-top {\n  height: 14px;\n  width: 275px;\n  position: relative;\n}\n\n#webamp #equalizer-close {\n  position: absolute;\n  height: 9px;\n  width: 9px;\n  left: 264px;\n  top: 3px;\n}\n\n#webamp #equalizer-shade {\n  position: absolute;\n  height: 9px;\n  width: 9px;\n  left: 254px;\n  top: 3px;\n}\n\n#webamp #on {\n  position: absolute;\n  width: 26px;\n  height: 12px;\n  top: 18px;\n  left: 14px;\n}\n\n#webamp #auto {\n  position: absolute;\n  width: 32px;\n  height: 12px;\n  top: 18px;\n  left: 40px;\n}\n\n#webamp #presets-context {\n  position: absolute;\n  width: 44px;\n  height: 12px;\n  top: 18px;\n  left: 217px;\n}\n\n#webamp #presets {\n  width: 100%;\n  height: 100%;\n}\n\n#webamp #eqGraph {\n  position: absolute;\n  width: 113px;\n  height: 19px;\n  top: 17px;\n  left: 86px;\n}\n\n#webamp #preamp {\n  position: absolute;\n  left: 21px;\n  top: 38px;\n}\n\n#webamp #plus12db {\n  position: absolute;\n  left: 45px;\n  top: 36px;\n  width: 22px;\n  height: 8px;\n}\n\n#webamp #zerodb {\n  position: absolute;\n  left: 45px;\n  top: 64px;\n  width: 22px;\n  height: 8px;\n}\n\n#webamp #minus12db {\n  position: absolute;\n  left: 45px;\n  top: 95px;\n  width: 22px;\n  height: 8px;\n}\n\n#webamp #band-60 {\n  position: absolute;\n  left: 78px;\n  top: 38px;\n}\n\n#webamp #band-170 {\n  position: absolute;\n  left: 96px;\n  top: 38px;\n}\n\n#webamp #band-310 {\n  position: absolute;\n  left: 114px;\n  top: 38px;\n}\n\n#webamp #band-600 {\n  position: absolute;\n  left: 132px;\n  top: 38px;\n}\n\n#webamp #band-1000 {\n  position: absolute;\n  left: 150px;\n  top: 38px;\n}\n\n#webamp #band-3000 {\n  position: absolute;\n  left: 168px;\n  top: 38px;\n}\n\n#webamp #band-6000 {\n  position: absolute;\n  left: 186px;\n  top: 38px;\n}\n\n#webamp #band-12000 {\n  position: absolute;\n  left: 204px;\n  top: 38px;\n}\n\n#webamp #band-14000 {\n  position: absolute;\n  left: 222px;\n  top: 38px;\n}\n\n#webamp #band-16000 {\n  position: absolute;\n  left: 240px;\n  top: 38px;\n}\n\n#webamp .band {\n  width: 14px;\n  height: 63px;\n}\n\n#webamp .band .rc-slider {\n  height: 51px;\n  width: 14px;\n  margin-top: 6px;\n}\n\n#webamp .band .rc-slider .rc-slider-handle {\n  width: 11px;\n  height: 11px;\n  margin: -6px 0 0 1px;\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GenWindow__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_media_library_window_css__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_media_library_window_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_media_library_window_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Sidebar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ArtistsTable__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AlbumsTable__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__TracksTable__ = __webpack_require__(315);













class MediaLibraryWindow extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  constructor(props) {
    super(props);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleSidebarMouseDown", e => {
      const startX = e.pageX;
      const initialWidth = this.state.sidebarWidth;

      this._onMouseMove(moveEvent => {
        this.setState({
          sidebarWidth: initialWidth + moveEvent.pageX - startX
        });
      });
    });

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handlePlaylistResizeMouseDown", e => {
      const startY = e.pageY;
      const initialHeight = this.state.topPlaylistSectionHeight;

      this._onMouseMove(moveEvent => {
        this.setState({
          topPlaylistSectionHeight: initialHeight + moveEvent.pageY - startY
        });
      });
    });

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleArtistsResizeMouseDown", e => {
      const startX = e.pageX;
      const initialWidth = this.state.artistsPanelWidth;

      this._onMouseMove(moveEvent => {
        this.setState({
          artistsPanelWidth: initialWidth + moveEvent.pageX - startX
        });
      });
    });

    this.state = {
      sidebarWidth: 100,
      topPlaylistSectionHeight: 200,
      artistsPanelWidth: 150
    };
  }

  _onMouseMove(cb) {
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", cb);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", cb);
    document.addEventListener("mouseup", handleMouseUp);
  }

  render() {
    const colors = this.props.skinGenExColors;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__GenWindow__["a" /* default */], {
      title: "Winamp Library",
      windowId: __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].MEDIA_LIBRARY
    }, ({
      height,
      width
    }) => __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", {
      id: "webamp-media-library",
      style: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden"
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", {
      className: "webamp-media-library-vertical-divider",
      onMouseDown: this._handleSidebarMouseDown
    }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", {
      className: "webamp-media-library-vertical-divider-line"
    })), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        flexShrink: 1,
        flexGrow: 1,
        // https://stackoverflow.com/a/35609992/1263117
        overflow: "hidden"
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", {
      className: "webamp-media-library-horizontal-divider",
      onMouseDown: this._handlePlaylistResizeMouseDown
    }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", {
      className: "webamp-media-library-horizontal-divider-line"
    })), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__TracksTable__["a" /* default */], null))));
  }

}

const mapStateToProps = state => {
  return {
    skinGenExColors: __WEBPACK_IMPORTED_MODULE_7__selectors__["w" /* getSkinGenExColors */](state)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(MediaLibraryWindow));

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_gen_window_css__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_gen_window_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_gen_window_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ResizeTarget__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__types__ = __webpack_require__(46);










const Text = ({
  children
}) => {
  const letters = children.split("");
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, letters.map((letter, i) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    key: i,
    className: `draggable gen-text-letter gen-text-${letter === " " ? "space" : letter.toLowerCase()}`
  })));
};

const CHROME_WIDTH = 19;
const CHROME_HEIGHT = 34;
// Named export for testing
const GenWindow = ({
  selected,
  children,
  close,
  title,
  setFocus,
  windowId,
  windowSize,
  setGenWindowSize,
  width,
  height
}) => {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()("gen-window", "window", {
      selected
    }),
    onMouseDown: () => setFocus(windowId),
    style: {
      width,
      height
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-top draggable"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-top-left draggable"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-top-left-fill draggable"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-top-left-end draggable"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-top-title draggable"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Text, null, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-top-right-end draggable"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-top-right-fill draggable"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-top-right draggable"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-close selected",
    onClick: () => close(windowId)
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-middle"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-middle-left draggable"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-middle-left-bottom draggable"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-middle-center"
  }, children({
    width: width - CHROME_WIDTH,
    height: height - CHROME_HEIGHT
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-middle-right draggable"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-middle-right-bottom draggable"
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-bottom draggable"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-bottom-left draggable"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "gen-bottom-right draggable"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ResizeTarget__["a" /* default */], {
    currentSize: windowSize,
    setWindowSize: size => setGenWindowSize(windowId, size),
    id: "gen-resize-target"
  }))));
};
/* unused harmony export GenWindow */


const mapStateToProps = (state, ownProps) => {
  const _getWindowPixelSize = Object(__WEBPACK_IMPORTED_MODULE_6__selectors__["M" /* getWindowPixelSize */])(state)(ownProps.windowId),
        width = _getWindowPixelSize.width,
        height = _getWindowPixelSize.height;

  return {
    width,
    height,
    selected: state.windows.focused === ownProps.windowId,
    windowSize: state.windows.genWindows[ownProps.windowId].size
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFocus: windowId => dispatch({
      type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["U" /* SET_FOCUSED_WINDOW */],
      window: windowId
    }),
    close: windowId => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["f" /* closeWindow */])(windowId)),
    setGenWindowSize: (windowId, size) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["R" /* setWindowSize */])(windowId, size))
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(GenWindow));

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(309);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./gen-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./gen-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "#webamp .gen-text-space {\n  width: 5px;\n}\n\n#webamp .gen-text-letter {\n  height: 7px;\n  display: inline-block;\n}\n\n#webamp .gen-window {\n  /* Default size */\n  width: 275px;\n  height: 116px;\n  display: flex;\n  flex-direction: column;\n}\n\n#webamp .gen-top {\n  height: 20px;\n  display: flex;\n  flex-direction: row;\n}\n\n#webamp .gen-top-left {\n  width: 25px;\n  height: 20px;\n}\n\n#webamp .gen-top-title {\n  line-height: 7px;\n  margin-top: 2px;\n  /* TODO: This should be a conciquence of the repeating tiles, not hard coded */\n  padding: 0 3px 0 4px;\n}\n\n#webamp .gen-top-left-fill {\n  flex-grow: 1;\n  height: 20px;\n  background-position: left;\n}\n\n#webamp .gen-top-right-fill {\n  flex-grow: 1;\n  height: 20px;\n  background-position: right;\n}\n\n#webamp .gen-top-left-end {\n  width: 25px;\n  height: 20px;\n}\n\n#webamp .gen-top-right {\n  width: 25px;\n  height: 20px;\n}\n\n#webamp .gen-top-right-end {\n  width: 25px;\n  height: 20px;\n}\n\n#webamp .gen-close {\n  width: 9px;\n  height: 9px;\n  position: absolute;\n  right: 2px;\n  top: 3px;\n}\n\n#webamp .gen-middle {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n\n#webamp .gen-middle-left {\n  width: 11px;\n}\n\n#webamp .gen-middle-left-bottom {\n  width: 11px;\n  height: 24px;\n  bottom: 0;\n  position: absolute;\n}\n\n#webamp .gen-middle-center {\n  flex-grow: 1;\n  position: relative;\n}\n\n#webamp .gen-middle-right {\n  width: 8px;\n}\n\n#webamp .gen-middle-right-bottom {\n  width: 8px;\n  height: 24px;\n  bottom: 0;\n  position: absolute;\n}\n\n#webamp .gen-bottom {\n  height: 14px;\n  background-repeat: repeat-x;\n}\n\n#webamp .gen-bottom-left {\n  position: absolute;\n  left: 0;\n  width: 125px;\n  height: 14px;\n}\n\n#webamp .gen-bottom-right {\n  position: absolute;\n  right: 0;\n  width: 125px;\n  height: 14px;\n}\n\n#webamp .gen-bottom-right #gen-resize-target {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  height: 20px;\n  width: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./media-library-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./media-library-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "#webamp-media-library {\n  font-size: 11px;\n  font-family: \"MS Sans Serif\", \"Segoe UI\", sans-serif;\n  -webkit-font-smoothing: none;\n  padding-right: 2px;\n  padding-bottom: 3px;\n}\n\n#webamp-media-library input {\n  height: 15px;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n}\n\n#webamp-media-library th {\n  font-weight: normal;\n  text-align: left;\n  padding-left: 5px;\n  white-space: nowrap;\n  height: 14px;\n}\n\n#webamp-media-library td {\n  white-space: nowrap;\n}\n#webamp-media-library ul {\n  list-style: none;\n}\n\n#webamp-media-library ul {\n  padding: 0;\n  margin: 0;\n}\n\n#webamp-media-library ul li ul {\n  padding-left: 10px;\n}\n\n#webamp-media-library .webamp-media-library-table {\n  width: 100%;\n  border-spacing: unset;\n}\n#webamp-media-library .webamp-media-library-vertical-divider {\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 4px;\n  padding-right: 4px;\n  cursor: col-resize;\n}\n\n#webamp-media-library .webamp-media-library-vertical-divider-line {\n  width: 1px;\n  height: 100%;\n}\n\n#webamp-media-library .webamp-media-library-horizontal-divider {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 0px;\n  padding-right: 0px;\n  cursor: row-resize;\n}\n\n#webamp-media-library .webamp-media-library-horizontal-divider-line {\n  height: 1px;\n  width: 100%;\n}\n\n#webamp-media-library button {\n  border: none;\n  color: inherit;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  height: 18px;\n  cursor: inherit;\n  /* TODO: I think only the center is supposed to stretch */\n  background-size: 100% 18px;\n  min-width: 53px;\n  margin-right: 4px;\n}\n\n#webamp-media-library-track-summary-duration {\n  /* This plus the margin-right on the button add up to 8px; */\n  margin-left: 4px;\n}\n", ""]);

// exports


/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class Sidebar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
      className: "webamp-media-library-item",
      style: {
        flexGrow: 1
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, "Local Media", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, "Audio"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, "Video"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, "Playlist"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, "Devices", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, "CD E:"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, "Internet Radio"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, "Internet TV"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", {
      style: {
        width: "100%",
        marginTop: 1
      }
    }, "Library"));
  }

}
/* unused harmony export default */


/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class ArtistsTable extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
      className: "webamp-media-library-item",
      style: {
        height: "100%"
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", {
      className: "webamp-media-library-table"
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Artist"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Album"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Tracks"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "All (1 artist)"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "1"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "1")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "Ben Mason"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "1"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "1")))));
  }

}
/* unused harmony export default */


/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class AlbumsTable extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
      className: "webamp-media-library-item",
      style: {
        flexGrow: 1
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", {
      className: "webamp-media-library-table",
      style: {
        overflow: "scroll"
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Album"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Tracks"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "All (1 album)"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "1")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "Ben Mason"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "1")))));
  }

}
/* unused harmony export default */


/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fileUtils__ = __webpack_require__(44);






class TracksTable extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 2
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
      style: {
        paddingBottom: 3,
        display: "flex",
        flexDirection: "row"
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "Search:"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", {
      style: {
        marginLeft: 12,
        flexGrow: 1
      },
      type: "text",
      className: "webamp-media-library-item",
      onChange: e => this.setState({
        filter: e.target.value
      })
    })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
      style: {
        flexGrow: 1,
        overflowY: "scroll"
      },
      className: "webamp-media-library-item"
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", {
      className: "webamp-media-library-table",
      style: {
        overflow: "scroll"
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Artist"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Title"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Album"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Length"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Track #"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Genere"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Year"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Filename"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, this.props.filterTracks(this.state.filter).map(track => {
      return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", {
        key: track.id
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, track.artist), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, track.title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, track.album), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, __WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getTimeStr */](track.duration)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "1"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "Primus"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "2001"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, track.url == null ? track.defaultName : __WEBPACK_IMPORTED_MODULE_4__fileUtils__["a" /* filenameFromUrl */](track.url)));
    })))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
      style: {
        marginTop: 2
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", null, "Play"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", null, "Enqueue"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", null, "Play all"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", null, "Enqueue all"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", {
      id: "webamp-media-library-track-summary-duration"
    }, "1 item [3:25]")));
  }

}

const mapStateToProps = state => {
  return {
    tracks: Object.values(__WEBPACK_IMPORTED_MODULE_2__selectors__["E" /* getTracks */](state)),
    filterTracks: __WEBPACK_IMPORTED_MODULE_2__selectors__["F" /* getTracksMatchingFilter */](state)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(TracksTable));

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skinSelectors__ = __webpack_require__(317);

// Dynamically set the css background images for all the sprites





const CSS_PREFIX = "#webamp";
const mapRegionNamesToIds = {
  normal: "mainWindowClipPath",
  windowshade: "shadeMainWindowClipPath",
  equalizer: "equalizerWindowClipPath",
  equalizerws: "shadeEqualizerWindowClipPath"
};
const mapRegionNamesToMatcher = {
  normal: "#main-window:not(.shade)",
  windowshade: "#main-window.shade",
  equalizer: "#equalizer-window:not(.shade)",
  equalizerws: "#equalizer-window.shade"
};

const numExIsUsed = skinImages => !!skinImages.DIGIT_0_EX;

class Css extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  componentWillMount() {
    const style = document.createElement("style");
    style.type = "text/css";
    style.id = "webamp-skin";
    document.head.appendChild(style);
    this.style = style;
  }

  componentWillUnmount() {
    this.style.remove();
    this.style = null;
  }

  render() {
    return Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["createPortal"])(this.props.children, this.style);
  }

}

class ClipPaths extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  componentWillMount() {
    const paths = document.createElement("div");
    document.body.appendChild(paths);
    this.paths = paths;
  }

  componentWillUnmount() {
    this.paths.remove();
    this.paths = null;
  }

  render() {
    // this.props.children should be an object containing arrays of strings. The
    // keys are ids, and the arrays are arrays of polygon point strings
    const children = this.props.children;
    return Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["createPortal"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
      height: 0,
      width: 0
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("defs", null, Object.keys(children).map(id => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
      id: id,
      key: id
    }, children[id].map((points, i) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
      points: points,
      key: i
    })))))), this.paths);
  }

}

const FALLBACKS = {
  MAIN_BALANCE_BACKGROUND: "MAIN_VOLUME_BACKGROUND",
  MAIN_BALANCE_THUMB: "MAIN_VOLUME_THUMB",
  MAIN_BALANCE_THUMB_ACTIVE: "MAIN_VOLUME_THUMB_SELECTED"
};

const Skin = props => {
  const skinImages = props.skinImages,
        skinCursors = props.skinCursors,
        skinGenLetterWidths = props.skinGenLetterWidths;

  if (!skinImages || !skinCursors) {
    return null;
  }

  const cssRules = [];
  Object.keys(__WEBPACK_IMPORTED_MODULE_5__skinSelectors__["b" /* imageSelectors */]).forEach(imageName => {
    const imageUrl = skinImages[imageName] || skinImages[FALLBACKS[imageName]];

    if (imageUrl) {
      __WEBPACK_IMPORTED_MODULE_5__skinSelectors__["b" /* imageSelectors */][imageName].forEach(selector => {
        cssRules.push(`${CSS_PREFIX} ${selector} {background-image: url(${imageUrl})}`);
      });
    }
  });

  if (skinGenLetterWidths != null) {
    __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* LETTERS */].forEach(letter => {
      const width = skinGenLetterWidths[`GEN_TEXT_${letter}`];
      const selectedWidth = skinGenLetterWidths[`GEN_TEXT_SELECTED_${letter}`];
      cssRules.push(`${CSS_PREFIX} .gen-text-${letter.toLowerCase()} {width: ${width}px;}`);
      cssRules.push(`${CSS_PREFIX} .selected .gen-text-${letter.toLowerCase()} {width: ${selectedWidth}px;}`);
    });
  }

  Object.keys(__WEBPACK_IMPORTED_MODULE_5__skinSelectors__["a" /* cursorSelectors */]).forEach(cursorName => {
    const cursorUrl = skinCursors[cursorName];

    if (cursorUrl) {
      __WEBPACK_IMPORTED_MODULE_5__skinSelectors__["a" /* cursorSelectors */][cursorName].forEach(selector => {
        cssRules.push(`${// TODO: Fix this hack
        // Maybe our CSS name spacing should be based on some other class/id
        // than the one we use for defining the main div.
        // That way it could be shared by both the player and the context menu.
        selector.startsWith("#webamp-context-menu") ? "" : CSS_PREFIX} ${selector} {cursor: url(${cursorUrl}), auto}`);
      });
    }
  });

  if (numExIsUsed(skinImages)) {
    // This alternate number file requires that the minus sign be
    // formatted differently.
    cssRules.push(`${CSS_PREFIX} .status #time #minus-sign { top: 0px; left: -1px; width: 9px; height: 13px; }`);
  }

  const clipPaths = {};

  for (const _ref of Object.entries(props.skinRegion)) {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref, 2);

    const regionName = _ref2[0];
    const polygons = _ref2[1];

    if (polygons) {
      const matcher = mapRegionNamesToMatcher[regionName];
      const id = mapRegionNamesToIds[regionName];
      clipPaths[id] = polygons;
      cssRules.push(`${CSS_PREFIX} ${matcher} { clip-path: url(#${id}); }`);
    }
  } // TODO: Find a way to make this declarative.


  cssRules.push(`#webamp-media-library {
       background-color: ${props.skinGenExColors.windowBackground};
       color: ${props.skinGenExColors.windowText};
    }`);
  cssRules.push(`#webamp-media-library input {
       caret-color: ${props.skinGenExColors.windowText};
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-item {
       color: ${props.skinGenExColors.itemForeground};
       background-color: ${props.skinGenExColors.itemBackground};
       border-right: 1px solid ${props.skinGenExColors.divider};
       border-bottom: 1px solid ${props.skinGenExColors.divider};
    }`);
  cssRules.push(`#webamp-media-library button {
       color: ${props.skinGenExColors.buttonText};
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-vertical-divider {
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-vertical-divider-line,
     #webamp-media-library .webamp-media-library-horizontal-divider-line
     {
       background-color: ${props.skinGenExColors.divider};
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-table {
       color: ${props.skinGenExColors.itemForeground};
       background-color: ${props.skinGenExColors.itemBackground};
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-table thead {
       color: ${props.skinGenExColors.listHeaderText};
       background-color: ${props.skinGenExColors.listHeaderBackground};
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-table thead th {
       border-top: 1px solid ${props.skinGenExColors.listHeaderFrameTopAndLeft};
       border-left: 1px solid ${props.skinGenExColors.listHeaderFrameTopAndLeft};
       border-bottom: 1px solid ${props.skinGenExColors.listHeaderFrameBottomAndRight};
       border-right: 1px solid ${props.skinGenExColors.listHeaderFrameBottomAndRight};
    }`);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Css, null, cssRules.join("\n")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ClipPaths, null, clipPaths));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(state => ({
  skinImages: state.display.skinImages,
  skinCursors: state.display.skinCursors,
  skinRegion: state.display.skinRegion,
  skinGenLetterWidths: state.display.skinGenLetterWidths,
  skinGenExColors: state.display.skinGenExColors
}))(Skin));

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skinSprites__ = __webpack_require__(101);


const imageSelectors = {
  MAIN_BALANCE_BACKGROUND: ["#balance"],
  MAIN_BALANCE_THUMB: ["#balance::-webkit-slider-thumb", "#balance::-moz-range-thumb"],
  MAIN_BALANCE_THUMB_ACTIVE: ["#balance::-webkit-slider-thumb:active", "#balance::-moz-range-thumb:active"],
  MAIN_PREVIOUS_BUTTON: [".actions #previous"],
  MAIN_PREVIOUS_BUTTON_ACTIVE: [".actions #previous:active"],
  MAIN_PLAY_BUTTON: [".actions #play"],
  MAIN_PLAY_BUTTON_ACTIVE: [".actions #play:active"],
  MAIN_PAUSE_BUTTON: [".actions #pause"],
  MAIN_PAUSE_BUTTON_ACTIVE: [".actions #pause:active"],
  MAIN_STOP_BUTTON: [".actions #stop"],
  MAIN_STOP_BUTTON_ACTIVE: [".actions #stop:active"],
  MAIN_NEXT_BUTTON: [".actions #next"],
  MAIN_NEXT_BUTTON_ACTIVE: [".actions #next:active"],
  MAIN_EJECT_BUTTON: ["#eject"],
  MAIN_EJECT_BUTTON_ACTIVE: ["#eject:active"],
  MAIN_WINDOW_BACKGROUND: ["#main-window"],
  MAIN_STEREO: [".media-info #stereo", ".stop .media-info #stereo.selected"],
  MAIN_STEREO_SELECTED: [".media-info #stereo.selected"],
  MAIN_MONO: [".media-info #mono", ".stop .media-info #mono.selected"],
  MAIN_MONO_SELECTED: [".media-info #mono.selected"],
  NO_MINUS_SIGN: ["#time #minus-sign"],
  MINUS_SIGN: ["#time.countdown #minus-sign"],
  DIGIT_0: [".digit-0"],
  DIGIT_1: [".digit-1"],
  DIGIT_2: [".digit-2"],
  DIGIT_3: [".digit-3"],
  DIGIT_4: [".digit-4"],
  DIGIT_5: [".digit-5"],
  DIGIT_6: [".digit-6"],
  DIGIT_7: [".digit-7"],
  DIGIT_8: [".digit-8"],
  DIGIT_9: [".digit-9"],
  NO_MINUS_SIGN_EX: ["#time #minus-sign"],
  MINUS_SIGN_EX: ["#time.countdown #minus-sign"],
  DIGIT_0_EX: [".digit-0"],
  DIGIT_1_EX: [".digit-1"],
  DIGIT_2_EX: [".digit-2"],
  DIGIT_3_EX: [".digit-3"],
  DIGIT_4_EX: [".digit-4"],
  DIGIT_5_EX: [".digit-5"],
  DIGIT_6_EX: [".digit-6"],
  DIGIT_7_EX: [".digit-7"],
  DIGIT_8_EX: [".digit-8"],
  DIGIT_9_EX: [".digit-9"],
  MAIN_PLAYING_INDICATOR: [".play #play-pause"],
  MAIN_PAUSED_INDICATOR: [".pause #play-pause"],
  MAIN_STOPPED_INDICATOR: [".stop #play-pause"],
  MAIN_NOT_WORKING_INDICATOR: ["#work-indicator"],
  MAIN_WORKING_INDICATOR: ["#work-indicator.selected"],
  PLAYLIST_TOP_TILE: [".playlist-top-left-fill", ".playlist-top-left-spacer", ".playlist-top-right-fill", ".playlist-top-right-spacer"],
  PLAYLIST_TOP_LEFT_CORNER: [".playlist-top-left"],
  PLAYLIST_TITLE_BAR: [".playlist-top-title"],
  PLAYLIST_TOP_RIGHT_CORNER: [".playlist-top-right"],
  PLAYLIST_TOP_TILE_SELECTED: [".selected .playlist-top-left-fill", ".selected .playlist-top-left-spacer", ".selected .playlist-top-right-fill", ".selected .playlist-top-right-spacer"],
  PLAYLIST_TOP_LEFT_SELECTED: [".selected .playlist-top-left"],
  PLAYLIST_TITLE_BAR_SELECTED: [".selected .playlist-top-title"],
  PLAYLIST_TOP_RIGHT_CORNER_SELECTED: [".selected .playlist-top-right"],
  PLAYLIST_LEFT_TILE: [".playlist-middle-left"],
  PLAYLIST_RIGHT_TILE: [".playlist-middle-right"],
  PLAYLIST_SCROLL_HANDLE: [".playlist-scrollbar-handle"],
  PLAYLIST_SCROLL_HANDLE_SELECTED: [".playlist-scrollbar-handle:active"],
  PLAYLIST_BOTTOM_TILE: [".playlist-bottom"],
  PLAYLIST_BOTTOM_LEFT_CORNER: [".playlist-bottom-left"],
  PLAYLIST_BOTTOM_RIGHT_CORNER: [".playlist-bottom-right"],
  PLAYLIST_VISUALIZER_BACKGROUND: [".playlist-visualizer"],
  PLAYLIST_SHADE_BACKGROUND: ["#playlist-window-shade"],
  PLAYLIST_SHADE_BACKGROUND_LEFT: ["#playlist-window-shade .left"],
  PLAYLIST_SHADE_BACKGROUND_RIGHT: ["#playlist-window-shade .right"],
  PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED: ["#playlist-window-shade.selected .right"],
  PLAYLIST_ADD_MENU_BAR: ["#playlist-add-menu.selected .bar"],
  PLAYLIST_ADD_URL: ["#playlist-add-menu .add-url"],
  PLAYLIST_ADD_URL_SELECTED: ["#playlist-add-menu .hover .add-url"],
  PLAYLIST_ADD_DIR: ["#playlist-add-menu .add-dir"],
  PLAYLIST_ADD_DIR_SELECTED: ["#playlist-add-menu .hover .add-dir"],
  PLAYLIST_ADD_FILE: ["#playlist-add-menu .add-file"],
  PLAYLIST_ADD_FILE_SELECTED: ["#playlist-add-menu .hover .add-file"],
  PLAYLIST_REMOVE_MENU_BAR: ["#playlist-remove-menu.selected .bar"],
  PLAYLIST_REMOVE_ALL: ["#playlist-remove-menu .remove-all"],
  PLAYLIST_REMOVE_ALL_SELECTED: ["#playlist-remove-menu .hover .remove-all"],
  PLAYLIST_CROP: ["#playlist-remove-menu .crop"],
  PLAYLIST_CROP_SELECTED: ["#playlist-remove-menu .hover .crop"],
  PLAYLIST_REMOVE_SELECTED: ["#playlist-remove-menu .remove-selected"],
  PLAYLIST_REMOVE_SELECTED_SELECTED: ["#playlist-remove-menu .hover .remove-selected"],
  PLAYLIST_REMOVE_MISC: ["#playlist-remove-menu .remove-misc"],
  PLAYLIST_REMOVE_MISC_SELECTED: ["#playlist-remove-menu .hover .remove-misc"],
  PLAYLIST_SELECT_MENU_BAR: ["#playlist-selection-menu.selected .bar"],
  PLAYLIST_INVERT_SELECTION: ["#playlist-selection-menu .invert-selection"],
  PLAYLIST_INVERT_SELECTION_SELECTED: ["#playlist-selection-menu .hover .invert-selection"],
  PLAYLIST_SELECT_ZERO: ["#playlist-selection-menu .select-zero"],
  PLAYLIST_SELECT_ZERO_SELECTED: ["#playlist-selection-menu .hover .select-zero"],
  PLAYLIST_SELECT_ALL: ["#playlist-selection-menu .select-all"],
  PLAYLIST_SELECT_ALL_SELECTED: ["#playlist-selection-menu .hover .select-all"],
  PLAYLIST_CLOSE_SELECTED: ["#playlist-close-button:active"],
  PLAYLIST_COLLAPSE_SELECTED: ["#playlist-window #playlist-shade-button:active"],
  PLAYLIST_EXPAND_SELECTED: ["#playlist-window-shade #playlist-shade-button:active"],
  PLAYLIST_MISC_MENU_BAR: ["#playlist-misc-menu.selected .bar"],
  PLAYLIST_MISC_OPTIONS: ["#playlist-misc-menu .misc-options"],
  PLAYLIST_MISC_OPTIONS_SELECTED: ["#playlist-misc-menu .hover .misc-options"],
  PLAYLIST_FILE_INFO: ["#playlist-misc-menu .file-info"],
  PLAYLIST_FILE_INFO_SELECTED: ["#playlist-misc-menu .hover .file-info"],
  PLAYLIST_SORT_LIST: ["#playlist-misc-menu .sort-list"],
  PLAYLIST_SORT_LIST_SELECTED: ["#playlist-misc-menu .hover .sort-list"],
  PLAYLIST_LIST_BAR: ["#playlist-list-menu.selected .bar"],
  PLAYLIST_NEW_LIST: ["#playlist-list-menu .new-list"],
  PLAYLIST_NEW_LIST_SELECTED: ["#playlist-list-menu .hover .new-list"],
  PLAYLIST_LOAD_LIST: ["#playlist-list-menu .load-list"],
  PLAYLIST_LOAD_LIST_SELECTED: ["#playlist-list-menu .hover .load-list"],
  PLAYLIST_SAVE_LIST: ["#playlist-list-menu .save-list"],
  PLAYLIST_SAVE_LIST_SELECTED: ["#playlist-list-menu .hover .save-list"],
  EQ_WINDOW_BACKGROUND: ["#equalizer-window:not(.shade)"],
  EQ_TITLE_BAR: [".equalizer-top"],
  EQ_TITLE_BAR_SELECTED: [".selected .equalizer-top"],
  EQ_SLIDER_BACKGROUND: [".band"],
  EQ_SLIDER_THUMB: [".band .rc-slider-handle"],
  // But the "active" pseudo selector on the parent, since clicking
  // anywhere on the track moves the slider.
  EQ_SLIDER_THUMB_SELECTED: [".band .rc-slider:active .rc-slider-handle"],
  EQ_ON_BUTTON: ["#on"],
  EQ_ON_BUTTON_DEPRESSED: ["#on:active"],
  EQ_ON_BUTTON_SELECTED: ["#on.selected"],
  EQ_ON_BUTTON_SELECTED_DEPRESSED: ["#on.selected:active"],
  EQ_AUTO_BUTTON: ["#auto"],
  EQ_AUTO_BUTTON_DEPRESSED: ["#auto:active"],
  EQ_AUTO_BUTTON_SELECTED: ["#auto.selected"],
  EQ_AUTO_BUTTON_SELECTED_DEPRESSED: ["#auto.selected:active"],
  EQ_GRAPH_BACKGROUND: ["#eqGraph"],
  EQ_PRESETS_BUTTON: ["#presets"],
  EQ_PRESETS_BUTTON_SELECTED: ["#presets:active"],
  EQ_PREAMP_LINE: ["#preamp-line"],
  EQ_SHADE_BACKGROUND: ["#equalizer-window.shade"],
  EQ_SHADE_BACKGROUND_SELECTED: ["#equalizer-window.shade.selected"],
  EQ_SHADE_VOLUME_SLIDER_LEFT: ["#equalizer-volume.left::-webkit-slider-thumb", "#equalizer-volume.left::-moz-range-thumb"],
  EQ_SHADE_VOLUME_SLIDER_CENTER: ["#equalizer-volume.center::-webkit-slider-thumb", "#equalizer-volume.center::-moz-range-thumb"],
  EQ_SHADE_VOLUME_SLIDER_RIGHT: ["#equalizer-volume.right::-webkit-slider-thumb", "#equalizer-volume.right::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_LEFT: ["#equalizer-balance.left::-webkit-slider-thumb", "#equalizer-balance.left::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_CENTER: ["#equalizer-balance.center::-webkit-slider-thumb", "#equalizer-balance.center::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_RIGHT: ["#equalizer-balance.right::-webkit-slider-thumb", "#equalizer-balance.right::-moz-range-thumb"],
  EQ_MAXIMIZE_BUTTON_ACTIVE: ["#equalizer-shade:active"],
  EQ_MINIMIZE_BUTTON_ACTIVE: ["#equalizer-window.shade #equalizer-shade:active"],
  EQ_CLOSE_BUTTON: ["#equalizer-window.selected #equalizer-close"],
  EQ_CLOSE_BUTTON_ACTIVE: ["#equalizer-window #equalizer-close:active"],
  MAIN_POSITION_SLIDER_BACKGROUND: ["#position"],
  MAIN_POSITION_SLIDER_THUMB: ["#position::-webkit-slider-thumb", "#position::-moz-range-thumb"],
  MAIN_POSITION_SLIDER_THUMB_SELECTED: ["#position:active::-webkit-slider-thumb", "#position:active::-moz-range-thumb"],
  MAIN_SHUFFLE_BUTTON: ["#shuffle"],
  MAIN_SHUFFLE_BUTTON_DEPRESSED: ["#shuffle:active"],
  MAIN_SHUFFLE_BUTTON_SELECTED: ["#shuffle.selected"],
  MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED: ["#shuffle.selected:active"],
  MAIN_REPEAT_BUTTON: ["#repeat"],
  MAIN_REPEAT_BUTTON_DEPRESSED: ["#repeat:active"],
  MAIN_REPEAT_BUTTON_SELECTED: ["#repeat.selected"],
  MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED: ["#repeat.selected:active"],
  MAIN_EQ_BUTTON: ["#equalizer-button"],
  MAIN_EQ_BUTTON_SELECTED: ["#equalizer-button.selected"],
  MAIN_EQ_BUTTON_DEPRESSED: ["#equalizer-button:active"],
  MAIN_EQ_BUTTON_DEPRESSED_SELECTED: ["#equalizer-button.selected:active"],
  MAIN_PLAYLIST_BUTTON: ["#playlist-button"],
  MAIN_PLAYLIST_BUTTON_SELECTED: ["#playlist-button.selected"],
  MAIN_PLAYLIST_BUTTON_DEPRESSED: ["#playlist-button:active"],
  MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED: ["#playlist-button.selected:active"],
  MAIN_TITLE_BAR: ["#title-bar"],
  MAIN_TITLE_BAR_SELECTED: [".selected #title-bar"],
  MAIN_EASTER_EGG_TITLE_BAR: [".llama #title-bar"],
  MAIN_EASTER_EGG_TITLE_BAR_SELECTED: [".llama.selected #title-bar"],
  MAIN_OPTIONS_BUTTON: [".selected #title-bar #option.clicked"],
  MAIN_OPTIONS_BUTTON_DEPRESSED: [".selected #title-bar #option:active", ".selected #title-bar #option.selected"],
  MAIN_MINIMIZE_BUTTON: [".selected #title-bar #minimize.clicked"],
  MAIN_MINIMIZE_BUTTON_DEPRESSED: [".selected #title-bar #minimize:active"],
  MAIN_SHADE_BUTTON: [".selected #title-bar #shade.clicked"],
  MAIN_SHADE_BUTTON_DEPRESSED: [".selected #title-bar #shade:active"],
  MAIN_CLOSE_BUTTON: [".selected #title-bar #close.clicked"],
  MAIN_CLOSE_BUTTON_DEPRESSED: [".selected #title-bar #close:active"],
  MAIN_CLUTTER_BAR_BACKGROUND: ["#clutter-bar"],
  MAIN_CLUTTER_BAR_BACKGROUND_DISABLED: ["#clutter-bar.disabled"],
  MAIN_CLUTTER_BAR_BUTTON_O_SELECTED: ["#button-o:active", "#button-0.selected"],
  MAIN_CLUTTER_BAR_BUTTON_A_SELECTED: ["#button-a:active", "#button-a.selected"],
  MAIN_CLUTTER_BAR_BUTTON_I_SELECTED: ["#button-i:active", "#button-i.selected"],
  MAIN_CLUTTER_BAR_BUTTON_D_SELECTED: ["#button-d:active", "#button-d.selected"],
  MAIN_CLUTTER_BAR_BUTTON_V_SELECTED: ["#button-v:active", "#button-v.selected"],
  MAIN_SHADE_BACKGROUND: [".shade #title-bar"],
  MAIN_SHADE_BACKGROUND_SELECTED: [".shade.selected #title-bar"],
  MAIN_SHADE_BUTTON_SELECTED: [".shade.selected #title-bar #shade"],
  MAIN_SHADE_BUTTON_SELECTED_DEPRESSED: [".shade #title-bar #shade:active"],
  MAIN_SHADE_POSITION_BACKGROUND: [".shade #position"],
  MAIN_SHADE_POSITION_THUMB: [".shade #position::-moz-range-thumb", ".shade #position::-webkit-slider-thumb"],
  MAIN_SHADE_POSITION_THUMB_LEFT: [".shade #position.left::-moz-range-thumb", ".shade #position.left::-webkit-slider-thumb"],
  MAIN_SHADE_POSITION_THUMB_RIGHT: [".shade #position.right::-moz-range-thumb", ".shade #position.right::-webkit-slider-thumb"],
  MAIN_VOLUME_BACKGROUND: ["#volume"],
  MAIN_VOLUME_THUMB: ["#volume input::-webkit-slider-thumb", "#volume input::-moz-range-thumb"],
  MAIN_VOLUME_THUMB_SELECTED: ["#volume input::-webkit-slider-thumb:active", "#volume input::-moz-range-thumb:active"],
  GEN_TOP_CENTER_FILL: [".gen-window .gen-top"],
  GEN_TOP_LEFT: [".gen-window .gen-top-left"],
  GEN_TOP_LEFT_END: [".gen-window .gen-top-left-end"],
  GEN_TOP_RIGHT: [".gen-window .gen-top-right"],
  GEN_TOP_RIGHT_END: [".gen-window .gen-top-right-end"],
  GEN_TOP_LEFT_RIGHT_FILL: [".gen-window .gen-top-left-fill", ".gen-window .gen-top-right-fill"],
  GEN_TOP_CENTER_FILL_SELECTED: [".gen-window.selected .gen-top"],
  GEN_TOP_LEFT_SELECTED: [".gen-window.selected .gen-top-left"],
  GEN_TOP_LEFT_END_SELECTED: [".gen-window.selected .gen-top-left-end"],
  GEN_TOP_RIGHT_SELECTED: [".gen-window.selected .gen-top-right"],
  GEN_TOP_RIGHT_END_SELECTED: [".gen-window.selected .gen-top-right-end"],
  GEN_TOP_LEFT_RIGHT_FILL_SELECTED: [".gen-window.selected .gen-top-left-fill", ".gen-window.selected .gen-top-right-fill"],
  GEN_BOTTOM_LEFT: [".gen-window .gen-bottom-left"],
  GEN_BOTTOM_RIGHT: [".gen-window .gen-bottom-right"],
  GEN_BOTTOM_FILL: [".gen-window .gen-bottom"],
  GEN_MIDDLE_LEFT: [".gen-window .gen-middle-left"],
  GEN_MIDDLE_LEFT_BOTTOM: [".gen-window .gen-middle-left-bottom"],
  GEN_MIDDLE_RIGHT: [".gen-window .gen-middle-right"],
  GEN_MIDDLE_RIGHT_BOTTOM: [".gen-window .gen-middle-right-bottom"],
  GEN_CLOSE_SELECTED: [".gen-window .gen-close:active"],
  GENEX_BUTTON_BACKGROUND_UNPRESSED: ["#webamp-media-library button"]
};
/* harmony export (immutable) */ __webpack_exports__["b"] = imageSelectors;

Object.keys(__WEBPACK_IMPORTED_MODULE_1__skinSprites__["a" /* FONT_LOOKUP */]).forEach(character => {
  const key = Object(__WEBPACK_IMPORTED_MODULE_1__skinSprites__["c" /* imageConstFromChar */])(character);
  const code = character.charCodeAt(0);
  imageSelectors[key] = [`.character-${code}`];
});
__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LETTERS */].forEach(character => {
  imageSelectors[`GEN_TEXT_${character}`] = [`.gen-text-${character.toLowerCase()}`];
  imageSelectors[`GEN_TEXT_SELECTED_${character}`] = [`.gen-window.selected .gen-text-${character.toLowerCase()}`];
});
const cursorSelectors = {
  CLOSE: ["#title-bar #close"],
  // This is not quite right. There are some areas that show this cursor
  // but are not clickable.
  EQSLID: ["#equalizer-window .band .rc-slider"],
  EQNORMAL: ["#equalizer-window"],
  EQCLOSE: ["#equalizer-window #equalizer-close"],
  EQTITLE: ["#equalizer-window .title-bar", "#equalizer-window.shade", "#equalizer-window.shade input"],
  MAINMENU: ["#main-window #option", "#webamp-context-menu .context-menu"],
  MIN: ["#main-window #minimize"],
  NORMAL: [// Use this as the default cursor.
  ".window", ".window input", // Otherwise
  "#main-window", "#main-window.shade #title-bar"],
  MMENU: ["#main-window.shade #option"],
  PNORMAL: ["#playlist-window"],
  // TODO: This is should really only apply to the top part of the top.
  // The chrome around the playlist window is larger than others. The
  // cursor only applies to the same height as the other window's chrome.
  PTBAR: ["#playlist-window .playlist-top"],
  PCLOSE: ["#playlist-window #playlist-close-button", "#playlist-window-shade #playlist-close-button"],
  PWINBUT: ["#playlist-window #playlist-shade-button", "#playlist-window-shade #playlist-shade-button"],
  POSBAR: ["#main-window #position"],
  PSIZE: ["#playlist-window #playlist-resize-target"],
  PWSSIZE: ["#playlist-window-shade #playlist-resize-target"],
  PWSNORM: ["#playlist-window-shade"],
  // TODO: The target for this is not quite right.
  PVSCROLL: ["#playlist-window .playlist-scrollbar"],
  SONGNAME: ["#main-window #marquee"],
  TITLEBAR: ["#main-window #title-bar"],
  VOLBAL: ["#volume", "#volume input", "#balance"],
  WINBUT: ["#main-window #shade"],
  WSNORMAL: ["#main-window.shade #title-bar"],
  WSPOSBAR: ["#main-window.shade #position"]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cursorSelectors;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./webamp.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./webamp.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "/* Rules used by all windows */\n\n#webamp {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* Prevent accidental highlighting */\n#webamp canvas {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n#webamp * {\n  /* Some environments globably change the box-sizing */\n  box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n}\n\n#webamp *:focus {\n  outline: 0;\n}\n\n/* Range input css reset */\n#webamp input[type=\"range\"] {\n  -webkit-appearance: none;\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n}\n#webamp input[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 0;\n  background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-thumb {\n  border: none;\n  border-radius: 0;\n  background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-track {\n  border: none;\n  background: none;\n}\n#webamp input[type=\"range\"]:focus {\n  outline: none;\n}\n#webamp input[type=\"range\"]::-moz-focus-outer {\n  border: 0;\n}\n\n#webamp a:focus {\n  outline: none;\n}\n\n/* Animation */\n@keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#webamp .character {\n  display: inline-block;\n  vertical-align: top;\n  width: 5px;\n  height: 6px;\n  /* background-image: TEXT.BMP via Javascript */\n  text-indent: -9999px;\n}\n\n#webamp .window {\n  position: absolute;\n  /* Ask the browser to scale showing large pixels if possible */\n  image-rendering: -moz-crisp-edges; /* Firefox */\n  image-rendering: -o-crisp-edges; /* Opera */\n  image-rendering: -webkit-optimize-contrast; /* Safari */\n  image-rendering: pixelated; /* Only in Chrome > 40 */\n  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n#webamp .window {\n  /* Work around rendering bug with clip-path */\n  -webkit-transform: translateZ(0);\n}\n#webamp .window.doubled {\n  -moz-transform: translateZ(0) scale(2);\n  -moz-transform-origin: top left;\n  -webkit-transform: translateZ(0) scale(2);\n  -webkit-transform-origin: top left;\n}\n", ""]);

// exports


/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindHotkeys;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);



const IGNORE_EVENTS_FROM_TAGS = new Set(["input", "textarea", "select"]);
function bindHotkeys(dispatch) {
  let keylog = [];
  const trigger = [78, // N
  85, // U
  76, // L
  76, // L
  83, // S
  79, // O
  70, // F
  84 // T
  ];

  const listener = e => {
    if (e.target instanceof Element && IGNORE_EVENTS_FROM_TAGS.has(e.target.tagName.toLowerCase())) {
      return;
    }

    if (e.ctrlKey) {
      switch (e.keyCode) {
        case 68:
          // CTRL+D
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["V" /* toggleDoubleSizeMode */])());
          e.preventDefault(); // Supress the "Bookmark" action on windows.

          break;

        case 76:
          // CTRL+L FIXME
          break;

        case 82:
          // CTRL+R
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["A" /* reverseList */])());
          break;

        case 84:
          // CTRL+T
          dispatch({
            type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_15" /* TOGGLE_TIME_MODE */]
          });
          break;
      }
    } else if (e.altKey) {
      switch (e.keyCode) {
        case 87:
          // ALT+W
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["_3" /* toggleWindow */])("main"));
          break;

        case 69:
          // ALT+E
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["_3" /* toggleWindow */])("playlist"));
          break;

        case 71:
          // ALT+G
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["_3" /* toggleWindow */])("equalizer"));
          break;
      }
    } else {
      switch (e.keyCode) {
        case 37:
          // left arrow
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["F" /* seekBackward */])(5));
          break;

        case 38:
          // up arrow
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["b" /* adjustVolume */])(1));
          break;

        case 39:
          // right arrow
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["G" /* seekForward */])(5));
          break;

        case 40:
          // down arrow
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["b" /* adjustVolume */])(-1));
          break;

        case 66:
          // B
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["p" /* next */])());
          break;

        case 67:
          // C
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["u" /* pause */])());
          break;

        case 76:
          // L
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["s" /* openMediaFileDialog */])());
          break;

        case 82:
          // R
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["_0" /* toggleRepeat */])());
          break;

        case 83:
          // S
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["_1" /* toggleShuffle */])());
          break;

        case 86:
          // V
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["U" /* stop */])());
          break;

        case 88:
          // X
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["v" /* play */])());
          break;

        case 90:
          // Z
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["w" /* previous */])());
          break;

        case 96:
          // numpad 0
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["s" /* openMediaFileDialog */])());
          break;

        case 97:
          // numpad 1
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["q" /* nextN */])(-10));
          break;

        case 98:
          // numpad 2
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["b" /* adjustVolume */])(-1));
          break;

        case 99:
          // numpad 3
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["q" /* nextN */])(10));
          break;

        case 100:
          // numpad 4
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["w" /* previous */])());
          break;

        case 101:
          // numpad 5
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["v" /* play */])());
          break;

        case 102:
          // numpad 6
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["p" /* next */])());
          break;

        case 103:
          // numpad 7
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["F" /* seekBackward */])(5));
          break;

        case 104:
          // numpad 8
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["b" /* adjustVolume */])(1));
          break;

        case 105:
          // numpad 9
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["G" /* seekForward */])(5));
          break;
      }
    } // Easter Egg
    // Ignore escape. Usually this gets swallowed by the browser, but not always.


    if (e.keyCode !== 27) {
      keylog.push(e.keyCode);
      keylog = keylog.slice(-8);

      if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* arraysAreEqual */])(keylog, trigger)) {
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_12" /* TOGGLE_LLAMA_MODE */]
        });
      }
    }
  };

  document.addEventListener("keydown", listener);
  return () => {
    document.removeEventListener("keydown", listener);
  };
}

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emitter__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elementSource__ = __webpack_require__(322);


/* Emulate the native <audio> element with Web Audio API */



// import detectChannels from "./detectChannels";
class Media {
  constructor() {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_emitter", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_context", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_channels", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_balance", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_staticSource", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_preamp", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_chanSplit", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_leftGain", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_rightGain", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_chanMerge", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_analyser", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_gainNode", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_source", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_bands", void 0);

    this._emitter = new __WEBPACK_IMPORTED_MODULE_2__emitter__["a" /* default */](); // @ts-ignore Typescript does not know about webkitAudioContext

    this._context = new (window.AudioContext || window.webkitAudioContext)(); // Fix for iOS and Chrome (Canary) which require that the context be created
    // or resumed by a user interaction.
    // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    // https://gist.github.com/laziel/7aefabe99ee57b16081c
    // Via: https://stackoverflow.com/a/43395068/1263117

    if (this._context.state === "suspended") {
      const resume = async () => {
        await this._context.resume();

        if (this._context.state === "running") {
          document.body.removeEventListener("touchend", resume, false);
          document.body.removeEventListener("click", resume, false);
          document.body.removeEventListener("keydown", resume, false);
        }
      };

      document.body.addEventListener("touchend", resume, false);
      document.body.addEventListener("click", resume, false);
      document.body.addEventListener("keydown", resume, false);
    } // We don't currently know how many channels


    this._channels = null;
    this._balance = 0; // The _source node has to be recreated each time it's stopped or
    // paused, so we don't create it here. Instead we create this dummy
    // node wich the real source will connect to.
    // TODO: Maybe we can get rid of this now that we are using AudioAbstraction?

    this._staticSource = this._context.createAnalyser(); // Just a noop node
    // Create the preamp node

    this._preamp = this._context.createGain(); // Create the spliter node

    this._chanSplit = this._context.createChannelSplitter(2); // Create the gains for left and right

    this._leftGain = this._context.createGain();
    this._rightGain = this._context.createGain(); // Create channel merge

    this._chanMerge = this._context.createChannelMerger(2); // Create the analyser node for the visualizer

    this._analyser = this._context.createAnalyser();
    this._analyser.fftSize = 2048; // don't smooth audio analysis

    this._analyser.smoothingTimeConstant = 0.0; // Create the gain node for the volume control

    this._gainNode = this._context.createGain(); // Connect all the nodes in the correct way
    // (Note, source is created and connected later)
    //
    //                <source>
    //                    |
    //                    |_____________
    //                    |             \
    //                <preamp>          |
    //                    |             | <-- Optional bypass
    //           [...biquadFilters]     |
    //                    |_____________/
    //                    |
    //    (split using createChannelSplitter)
    //                    |
    //                   / \
    //                  /   \
    //          <leftGain><rightGain>
    //                  \   /
    //                   \ /
    //                    |
    //     (merge using createChannelMerger)
    //                    |
    //               <chanMerge>
    //                    |
    //                    |\
    //                    | <analyser>
    //                  <gain>
    //                    |
    //              <destination>

    this._source = new __WEBPACK_IMPORTED_MODULE_3__elementSource__["a" /* default */](this._context, this._staticSource);

    this._source.on("positionChange", () => {
      this._emitter.trigger("timeupdate");
    });

    this._source.on("ended", () => {
      this._emitter.trigger("ended");
    });

    this._source.on("statusChange", () => {
      switch (this._source.getStatus()) {
        case __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* MEDIA_STATUS */].PLAYING:
          this._emitter.trigger("playing");

          break;
      }

      this._emitter.trigger("timeupdate");
    });

    this._source.on("loaded", () => {
      this._emitter.trigger("fileLoaded");
    });

    this._staticSource.connect(this._preamp);

    let output = this._preamp;
    this._bands = {};
    __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* BANDS */].forEach((band, i) => {
      const filter = this._context.createBiquadFilter();

      this._bands[band] = filter;

      if (i === 0) {
        // The first filter, includes all lower frequencies
        filter.type = "lowshelf";
      } else if (i === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* BANDS */].length - 1) {
        // The last filter, includes all higher frequencies
        filter.type = "highshelf";
      } else {
        filter.type = "peaking";
      }

      filter.frequency.value = band;
      filter.gain.value = 0;
      output.connect(filter);
      output = filter;
    });
    output.connect(this._chanSplit); // Connect split channels to left / right gains

    this._chanSplit.connect(this._leftGain, 0);

    this._chanSplit.connect(this._rightGain, 1); // Reconnect the left / right gains to the merge node


    this._leftGain.connect(this._chanMerge, 0, 0);

    this._rightGain.connect(this._chanMerge, 0, 1);

    this._chanMerge.connect(this._gainNode);

    this._chanMerge.connect(this._analyser);

    this._gainNode.connect(this._context.destination);
  }

  _setChannels(num) {
    const assumedChannels = num == null ? 2 : num;

    this._chanSplit.disconnect();

    this._chanSplit.connect(this._leftGain, 0); // If we only have one channel, use it for both left and right.


    this._chanSplit.connect(this._rightGain, assumedChannels === 1 ? 0 : 1);

    this._channels = num;

    this._emitter.trigger("channelupdate");
  }

  getAnalyser() {
    return this._analyser;
  }
  /* Properties */


  duration() {
    return this._source.getDuration();
  }

  timeElapsed() {
    return this._source.getTimeElapsed();
  }

  timeRemaining() {
    return this.duration() - this.timeElapsed();
  }

  percentComplete() {
    return this.timeElapsed() / this.duration() * 100;
  }

  channels() {
    return this._channels == null ? 2 : this._channels;
  }

  sampleRate() {
    return this._source.getSampleRate();
  }
  /* Actions */


  async play() {
    await this._source.play();

    if (this._channels == null) {// Temporarily disabled https://github.com/captbaritone/webamp/issues/551

      /*
      detectChannels(this._staticSource)
        .then(channels => {
          this._setChannels(channels);
        })
        .catch(() => {
          this._setChannels(null);
        });
      */
    }
  }

  pause() {
    this._source.pause();
  }

  stop() {
    this._source.stop();
  }
  /* Actions with arguments */


  seekToPercentComplete(percent) {
    const seekTime = this.duration() * (percent / 100);
    this.seekToTime(seekTime);
  } // From 0-1


  setVolume(volume) {
    this._gainNode.gain.value = volume / 100;
  } // From 0-1


  setPreamp(value) {
    this._preamp.gain.value = value / 100;
  } // From -100 to 100


  setBalance(balance) {
    let changeVal = Math.abs(balance) / 100; // Hack for Firefox. Having either channel set to 0 seems to revert us
    // to equal balance.

    changeVal = changeVal - 0.00000001;

    if (balance > 0) {
      // Right
      this._leftGain.gain.value = 1 - changeVal;
      this._rightGain.gain.value = 1;
    } else if (balance < 0) {
      // Left
      this._leftGain.gain.value = 1;
      this._rightGain.gain.value = 1 - changeVal;
    } else {
      // Center
      this._leftGain.gain.value = 1;
      this._rightGain.gain.value = 1;
    }

    this._balance = balance;
  }

  setEqBand(band, value) {
    const db = value / 100 * 24 - 12;
    this._bands[band].gain.value = db;
  }

  disableEq() {
    this._staticSource.disconnect();

    this._staticSource.connect(this._chanSplit);
  }

  enableEq() {
    this._staticSource.disconnect();

    this._staticSource.connect(this._preamp);
  }
  /* Listeners */


  on(event, callback) {
    this._emitter.on(event, callback);
  }

  seekToTime(time) {
    this._source.seekToTime(time);
  } // Used only for the initial load, since it must have a CORS header


  async loadFromUrl(url, autoPlay) {
    this._emitter.trigger("waiting");

    await this._source.loadUrl(url);

    this._setChannels(null);

    this._emitter.trigger("stopWaiting");

    if (autoPlay) {
      this.play();
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Media;


/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(4);




class ElementSource {
  on(eventType, cb) {
    return this._emitter.on(eventType, cb);
  }

  constructor(context, destination) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_emitter", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_context", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_source", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_destination", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_audio", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_stalled", void 0);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_status", void 0);

    this._emitter = new __WEBPACK_IMPORTED_MODULE_1__emitter__["a" /* default */]();
    this._context = context;
    this._destination = destination;
    this._audio = document.createElement("audio");
    this._audio.crossOrigin = "anonymous";
    this._stalled = false;
    this._status = __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].STOPPED;

    this._audio.addEventListener("suspend", () => {
      this._setStalled(true);
    });

    this._audio.addEventListener("durationchange", () => {
      this._emitter.trigger("loaded");

      this._setStalled(false);
    });

    this._audio.addEventListener("ended", () => {
      this._emitter.trigger("ended");

      this._setStatus(__WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].STOPPED);
    }); // TODO: Throttle to 50 (if needed)


    this._audio.addEventListener("timeupdate", () => {
      this._emitter.trigger("positionChange");
    });

    this._audio.addEventListener("error", e => {
      switch (this._audio.error.code) {
        case 1:
          // The fetching of the associated resource was aborted by the user's request.
          console.error("MEDIA_ERR_ABORTED", e);
          break;

        case 2:
          console.error("MEDIA_ERR_NETWORK", e); // Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.

          break;

        case 3:
          // Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.
          // There is a bug in Chrome where improperly terminated mp3s can cuase this error.
          // https://bugs.chromium.org/p/chromium/issues/detail?id=794782
          // Related: Commit f44e826c83c74fef04c2c448af30cfb353b28312
          console.error("PIPELINE_ERROR_DECODE", e);
          break;

        case 4:
          console.error("MEDIA_ERR_SRC_NOT_SUPPORTED", e); // The associated resource or media provider object (such as a MediaStream) has been found to be unsuitable.

          break;
      } // Rather than just geting stuck in this error state, we can just pretend this is
      // the end of the track.


      this._emitter.trigger("ended");

      this._setStatus(__WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].STOPPED);
    });

    this._source = this._context.createMediaElementSource(this._audio);

    this._source.connect(destination);
  }

  _setStalled(stalled) {
    this._stalled = stalled;

    this._emitter.trigger("stallChanged");
  }

  disconnect() {
    this._source.disconnect();
  } // Async for now, for compatibility with BufferAudioSource
  // TODO: This does not need to be async


  async loadUrl(url) {
    this._audio.src = url;
  }

  async play() {
    if (this._status !== __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].PAUSED) {
      this.seekToTime(0);
    }

    try {
      await this._audio.play();
    } catch (err) {//
    }

    this._setStatus(__WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].PLAYING);
  }

  pause() {
    this._audio.pause();

    this._setStatus(__WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].PAUSED);
  }

  stop() {
    this._audio.pause();

    this._audio.currentTime = 0;

    this._setStatus(__WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].STOPPED);
  }

  seekToTime(time) {
    /* TODO: We could check if this is actually seekable:
    const { seekable } = this._audio;
    for (let i = 0; i < seekable.length; i++) {
      console.log("start", seekable.start(i), "end", seekable.end(i));
    }
    */
    this._audio.currentTime = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* clamp */])(time, 0, this.getDuration());

    this._emitter.trigger("positionChange");
  }

  getStalled() {
    return this._stalled;
  }

  getStatus() {
    return this._status;
  }

  getDuration() {
    const duration = this._audio.duration; // Safari on iOS currently has a strange behavior where it reports
    // the duration as infinity if an Accept-Ranges header is not returned.
    // For now, 0 is better even though it's still wrong.

    return isNaN(duration) || duration === Infinity ? 0 : duration;
  }

  getTimeElapsed() {
    return this._audio.currentTime;
  }

  getNumberOfChannels() {
    return this._source.channelCount;
  }

  getSampleRate() {
    // This is a lie. This is the sample rate of the context, not the
    // underlying source media.
    return this._context.sampleRate;
  }

  _setStatus(status) {
    this._status = status;

    this._emitter.trigger("statusChange");
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ElementSource;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./base-skin.min.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./base-skin.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module

// exports


/***/ })
/******/ ])["default"];
});