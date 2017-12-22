var CropperJsVue =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(1);

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.2.1/cropper.min.css';
document.getElementsByTagName('head')[0].appendChild(link);

var CropperJsVue = {
  install: function install(Vue, Cropper) {
    (0, _components2.default)(Vue, Cropper);
  }
};

exports.default = CropperJsVue;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Vue, Cropper) {
  Vue.component('cropperjs-vue', {
    template: '\n      <div>\n        <img id="image" :src="img"/>\n      </div>\n    ',
    props: {
      img: '',
      viewMode: {
        type: Number,
        default: 1
      },
      aspectRatio: {
        type: Number,
        default: 1
      }
    },
    data: function data() {
      return {
        test: 'Hello World',
        cropper: null,
        result: null
      };
    },
    mounted: function mounted() {
      this._initCropper();
    },

    methods: {
      crop: function crop(e) {
        this.$emit('crop', this.cropper.getCroppedCanvas().toDataURL('image/jpeg'));
      },
      rotate: function rotate(degree) {
        this.cropper.rotate(degree);
      },
      reset: function reset() {
        this.cropper.reset();
      },
      clear: function clear() {
        this.cropper.clear();
      },
      destroy: function destroy() {
        this.cropper.destroy();
      },
      _initCropper: function _initCropper() {
        var image = document.getElementById('image');
        console.log(image);
        this.cropper = new Cropper(image, {
          viewMode: this.viewMode,
          aspectRatio: this.aspectRatio
        });
      }
    }
  });
};

/***/ })
/******/ ]);