/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var testsContext = __webpack_require__(1);

	var runnable = testsContext.keys();

	runnable.forEach(testsContext);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./common/components/main_layout.js": 2,
		"./common/reducers.js": 20,
		"./helpers/fixtures.js": 21
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _main_layout = __webpack_require__(3);

	var _main_layout2 = _interopRequireDefault(_main_layout);

	var _server = __webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('MainLayout', function () {
	  var context = void 0;

	  beforeEach(function () {
	    context = {
	      location: {
	        hash: "#/"
	      }
	    };
	  });

	  it('renders the footer', function () {
	    (0, _server.renderToString)((0, _main_layout2.default)(null, context)).should.containEql('footer');
	  });
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = MainLayout;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(10);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(7);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(12);

	var _index8 = _interopRequireDefault(_index7);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./index.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _utils = __webpack_require__(14);

	var _bemCn = __webpack_require__(9);

	var _bemCn2 = _interopRequireDefault(_bemCn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	function MainLayout(_, _ref) {
	  _objectDestructuringEmpty(_ref);

	  var b = (0, _bemCn2.default)('main-layout');

	  var content = function content() {
	    if ((0, _utils.route)(location) === 'splash') {
	      return _react2.default.createElement(_index2.default, null);
	    } else if ((0, _utils.route)(location) === 'service') {
	      return _react2.default.createElement(_index6.default, { service: location.hash.split('/')[2] });
	    } else if ((0, _utils.route)(location) === 'info') {
	      return _react2.default.createElement(_index4.default, { page: location.hash.split('/')[1] });
	    }
	  };

	  return _react2.default.createElement(
	    'div',
	    { className: b() },
	    content(),
	    _react2.default.createElement(_index8.default, null)
	  );
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Splash;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./index.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _index = __webpack_require__(7);

	var _index2 = _interopRequireDefault(_index);

	var _bemCn = __webpack_require__(9);

	var _bemCn2 = _interopRequireDefault(_bemCn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	function Splash(_, _ref) {
	  _objectDestructuringEmpty(_ref);

	  var b = (0, _bemCn2.default)('splash');

	  var services = [{ name: 'media literacy' }, { name: 'data analysis' }, { name: 'design' }, { name: 'code' }];

	  return _react2.default.createElement(
	    'div',
	    { className: b() },
	    _react2.default.createElement(
	      'h1',
	      null,
	      'CREATE'
	    ),
	    _react2.default.createElement(
	      'h4',
	      null,
	      'A tutoring company teaching kids 21st century job skills'
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: b('services') },
	      services.map(function (service, i) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#/service/' + service.name },
	          _react2.default.createElement(
	            'div',
	            { className: b('service'), key: i },
	            service.name
	          )
	        );
	      })
	    )
	  );
	}

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Service;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./index.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _bemCn = __webpack_require__(9);

	var _bemCn2 = _interopRequireDefault(_bemCn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	function Service(_ref, _ref2) {
	  var service = _ref.service;

	  _objectDestructuringEmpty(_ref2);

	  var b = (0, _bemCn2.default)('service');

	  var content = function content(service) {
	    switch (service) {
	      case 'code':
	        return {
	          description: 'Coding is the practice of writing instructions that a computer can execute to achieve a specific task, or series of tasks.  Learning a computer language is similar to learning a human language, except that the rules and syntaxes required for interpretation are much more strict.  Computers lack lanugage flexibility, but when programmed correctly they are capable of processing information millions of times faster than a human would be capable of.',
	          quote: {
	            text: 'In theory, there is no difference between theory and practice. But, in practice, there is.',
	            by: 'Jan L. A. van de Snepscheut'
	          }
	        };
	      case 'design':
	        return {
	          description: 'Design is the set of physical and social patterns to be used in the development of an object or system.  Effective design takes into consideration the various important features of an object, which often include: aesthetics, functionality, materials, and interaction.  Design is a human tool that allows us to shape our environment in ways that give meaning and happiness to our lives.',
	          quote: {
	            text: 'You can use an eraser on the drafting table or a sledgehammer on the construction site.',
	            by: 'Frank Lloyd Wright'
	          }
	        };
	      case 'data analysis':
	        return {
	          description: 'hi',
	          quote: ''
	        };
	      case 'media literacy':
	        return {
	          description: 'A question is a desire for knowledge.  The ability to ask deep questions about the situations we face gives us the experience to form our own thoughts opinions, and also lets us make informed decisions in line with our beliefs.',
	          quote: {
	            text: '',
	            by: ''
	          }
	        };
	      default:
	        return {
	          description: null,
	          quote: ''
	        };
	    }
	  };

	  return _react2.default.createElement(
	    'div',
	    { className: b() },
	    _react2.default.createElement(
	      'h1',
	      null,
	      service
	    ),
	    _react2.default.createElement(
	      'h4',
	      null,
	      content(service).description
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: b('quote') },
	      _react2.default.createElement(
	        'div',
	        { className: b('quote__text') },
	        content(service).quote.text
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: b('quote__by') },
	        '\u2014 ',
	        content(service).quote.by
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: b('blog-posts') },
	      'blog posts about ',
	      service
	    )
	  );
	}

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = require("bem-cn");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Info;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(11);

	var _bemCn = __webpack_require__(9);

	var _bemCn2 = _interopRequireDefault(_bemCn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	function Info(_ref, _ref2) {
	  var page = _ref.page;

	  _objectDestructuringEmpty(_ref2);

	  var b = (0, _bemCn2.default)('info');

	  return _react2.default.createElement(
	    'div',
	    { className: b() },
	    _react2.default.createElement(
	      'h1',
	      null,
	      page.toUpperCase()
	    )
	  );
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Footer;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./index.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _utils = __webpack_require__(14);

	var _bemCn = __webpack_require__(9);

	var _bemCn2 = _interopRequireDefault(_bemCn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	function Footer(_, _ref) {
	  _objectDestructuringEmpty(_ref);

	  var b = (0, _bemCn2.default)('footer');

	  return _react2.default.createElement(
	    'div',
	    { className: b() },
	    _react2.default.createElement(
	      'ul',
	      { className: b('links') },
	      _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '#/services' },
	          'Services'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '#/philosophy' },
	          'Philosophy'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '#/history' },
	          'History'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '#/book' },
	          'Book a Session'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: b('established') },
	      _react2.default.createElement(
	        'p',
	        null,
	        'New York, NY'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'Est. 2016'
	      )
	    )
	  );
	}

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.route = exports.snakeCase = exports.read = undefined;

	var _lodash = __webpack_require__(15);

	var _events = __webpack_require__(16);

	var _events2 = _interopRequireDefault(_events);

	var _nodeUuid = __webpack_require__(17);

	var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var read = exports.read = function read(url) {
	  return fetch(url, {
	    method: 'GET',
	    headers: {
	      'Http-Authorization': 'replace-me'
	    }
	  }).then(function (res) {
	    if (res.status >= 400) {
	      throw new Error("Bad response from server");
	    }
	    return res.json();
	  }).then(function (res) {
	    return res;
	  });
	};

	var snakeCase = exports.snakeCase = function snakeCase(str) {
	  return str.replace(' ', '_').toLowerCase();
	};

	var route = exports.route = function route(location) {
	  var hashLocation = location.hash.split('#/')[1];
	  if (hashLocation.split('/')[0] == 'service') {
	    return 'service';
	  } else if (['services', 'philosophy', 'history'].includes(hashLocation)) {
	    return 'info';
	  } else {
	    return 'splash';
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

/***/ }
/******/ ]);