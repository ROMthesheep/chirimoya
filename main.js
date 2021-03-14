(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--10-2!./src/app/themes/dark.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--10-2!./src/app/themes/dark.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\nbody {\n  background: black;\n  background-color: black;\n  font-family: \"Open Sans\", Arial, sans-serif;\n  font-size: 42px;\n  font-weight: normal;\n  color: lightgrey;\n  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2); }\nh1, h2, h3, h4, h5, h6 {\n  text-transform: uppercase;\n  text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.2); }\nh3, h4 {\n  text-transform: none; }\nh1 {\n  color: #20a549;\n  font-size: 2.5em; }\nh2 {\n  font-size: 1.6em; }\nh3 {\n  font-size: 1.3em; }\nh4 {\n  font-size: 1em; }\n#previous {\n  color: #20a549; }\n#next {\n  color: #20a549; }\ncode {\n  font-family: monospace; }\npre code {\n  display: block;\n  padding: 5px;\n  overflow: auto;\n  max-height: 400px;\n  word-wrap: normal; }\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--10-2!./src/app/themes/light.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--10-2!./src/app/themes/light.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\nbody {\n  background: #fff;\n  background-color: #fff;\n  font-family: \"Open Sans\", Arial, sans-serif;\n  font-size: 32px;\n  font-weight: normal;\n  color: #666666;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2); }\nh1, h2, h3, h4, h5, h6 {\n  text-transform: uppercase;\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2); }\nh3, h4 {\n  text-transform: none; }\nh1 {\n  color: #20a549;\n  font-size: 2.5em; }\nh2 {\n  font-size: 1.6em; }\nh3 {\n  font-size: 1.3em; }\nh4 {\n  font-size: 1em; }\n#previous {\n  color: #20a549; }\n#next {\n  color: #20a549; }\ncode {\n  font-family: monospace; }\npre code {\n  display: block;\n  padding: 5px;\n  overflow: auto;\n  max-height: 400px;\n  word-wrap: normal; }\n"

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/themes/dark.scss":
/*!**************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/themes/dark.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/raw-loader!../../../node_modules/postcss-loader/lib??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--10-2!./dark.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--10-2!./src/app/themes/dark.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/themes/light.scss":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/themes/light.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/raw-loader!../../../node_modules/postcss-loader/lib??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--10-2!./light.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--10-2!./src/app/themes/light.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
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

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
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

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<presentation [theme]=\"'light'\" [transition]=\"'fade'\" (keydown)=\"toogleControl($event)\" (click)=\"nextSlide()\" (contextmenu)=\"prevSlide($event)\" >\r\n\r\n  <slide>\r\n    <img src=\"./assets/img/chirimoya.svg\" width=\"400px\">\r\n    <h1>Chirimoya</h1>\r\n    <h3>Presentation software based on Angular</h3>\r\n    <h3>Luis José Sánchez</h3>\r\n  </slide>\r\n\r\n  <slide>\r\n    Download presentation template:\r\n    <source-code [code]=\"consoleCode1\" [language]=\"'console'\"></source-code>\r\n    Install dependencies:\r\n    <source-code [code]=\"consoleCode2\" [language]=\"'console'\"></source-code>\r\n    Launch presentation:\r\n    <source-code [code]=\"consoleCode3\" [language]=\"'console'\"></source-code>\r\n  </slide>\r\n\r\n  <slide>\r\n    <code>app.component.html</code>\r\n    <source-code [code]=\"presentationCode\" [language]=\"'html'\"></source-code>\r\n  </slide>\r\n\r\n  <slide>\r\n    <h1>Slide title here</h1>\r\n    <p>This is a paragraph. You can insert any HTML code inside a slide.</p>\r\n  </slide>\r\n\r\n  <slide>\r\n    <h1>Unordered list</h1>\r\n    <ul>\r\n      <li>Benemeritaarapetecan al ataquerl. </li>\r\n      <li>Condemor mamaar.</li>\r\n      <li>No te digo trigo por no llamarte Rodrigor</li>\r\n      <li>A gramenawer de la pradera</li>\r\n    </ul>\r\n  </slide>\r\n\r\n  <slide>\r\n    <h1>Font a. icons</h1>\r\n    <p>\r\n      <fa name=\"snowflake-o fa-3x\"></fa>\r\n      <fa name=\"handshake-o fa-3x\"></fa>\r\n      <fa name=\"bicycle fa-3x\"></fa>\r\n      <fa name=\"battery-full fa-3x\"></fa>\r\n      <fa name=\"coffee fa-3x\"></fa>\r\n      <fa name=\"heart fa-3x\"></fa>\r\n      <fa name=\"desktop fa-3x\"></fa>\r\n      <fa name=\"leaf fa-3x\"></fa>\r\n      <fa name=\"microphone fa-3x\"></fa>\r\n      <fa name=\"money fa-3x\"></fa>\r\n      <fa name=\"paper-plane fa-3x\"></fa>\r\n      <fa name=\"picture-o fa-3x\"></fa>\r\n      <fa name=\"shopping-cart fa-3x\"></fa>\r\n      <fa name=\"star fa-3x\"></fa>\r\n      <fa name=\"tree fa-3x\"></fa>\r\n      <fa name=\"trophy fa-3x\"></fa>\r\n      <fa name=\"wrench fa-3x\"></fa>\r\n      <fa name=\"thumbs-o-up fa-3x\"></fa>\r\n      <fa name=\"umbrella fa-3x\"></fa>\r\n      <fa name=\"spinner fa-3x\"></fa>\r\n      <fa name=\"bar-chart-o fa-3x\"></fa>\r\n      <fa name=\"bitcoin fa-3x\"></fa>\r\n      <fa name=\"arrow-right fa-3x\"></fa>\r\n      <fa name=\"font-awesome fa-3x\"></fa>\r\n      <fa name=\"github fa-3x\"></fa>\r\n      <fa name=\"linux fa-3x\"></fa>\r\n      <fa name=\"linkedin fa-3x\"></fa>\r\n      <fa name=\"twitter fa-3x\"></fa>\r\n      <fa name=\"whatsapp fa-3x\"></fa>\r\n      <fa name=\"vk fa-3x\"></fa>\r\n    </p>\r\n  </slide>\r\n\r\n  <slide>\r\n    <h1>Font a. icons</h1>\r\n    <br>\r\n    <div>\r\n      <code>\r\n        &lt;fa name=&quot;linux fa-5x&quot;&gt;&lt;/fa&gt;\r\n      </code>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div>\r\n      <fa name=\"linux fa-5x\"></fa>\r\n    </div>\r\n  </slide>\r\n\r\n\r\n  <slide>\r\n    <h1>Transitions</h1>\r\n    <h2>fade - zoom - scroll - none</h2>\r\n  </slide>\r\n\r\n  <slide [transition]=\"'zoom'\">\r\n    <h1>Transitions</h1>\r\n    <source-code [code]=\"htmlCodeZoomPresentation\" [language]=\"'html'\"></source-code>\r\n  </slide>\r\n\r\n  <slide [transition]=\"'zoom'\">\r\n    <h1>Transitions</h1>\r\n    <source-code [code]=\"htmlCodeZoomSlide\" [language]=\"'html'\"></source-code>\r\n  </slide>\r\n\r\n  <slide [transition]=\"'scroll'\">\r\n    <h1>Transitions</h1>\r\n    <source-code [code]=\"htmlCodeScroll\" [language]=\"'html'\"></source-code>\r\n  </slide>\r\n\r\n  <slide>\r\n    <h1>Code highlight</h1>\r\n    <source-code [code]=\"htmlCode\" [language]=\"'html'\"></source-code>\r\n  </slide>\r\n\r\n  <slide>\r\n    <code>app.component.html</code>\r\n    <source-code [code]=\"highlight1\" [language]=\"'html'\"></source-code>\r\n  </slide>\r\n\r\n  <slide>\r\n    <code>app.component.ts</code>\r\n    <source-code [code]=\"highlight2\" [language]=\"'typescript'\"></source-code>\r\n  </slide>\r\n\r\n  <slide>\r\n    <source-code [code]=\"javaCode\" [language]=\"'java'\"></source-code>\r\n  </slide>\r\n\r\n  <slide>\r\n    <p>You can insert your own Angular components inside the slides</p>\r\n    <source-code [code]=\"usdEurConverter\" [language]=\"'html'\"></source-code>\r\n  </slide>\r\n\r\n  <slide>\r\n    <h1>USD - EUR Converter</h1>\r\n    <usd-eur-converter></usd-eur-converter>\r\n  </slide>\r\n\r\n  <slide>\r\n    <img src=\"./assets/img/awesome.jpg\" alt=\"\">\r\n  </slide>\r\n\r\n  <slide>\r\n    <h2>Random Number Generator</h2>\r\n    <random-number-generator></random-number-generator>\r\n  </slide>\r\n\r\n  <slide>\r\n    <h1>Build presentation</h1>\r\n    <source-code [code]=\"buildCode\" [language]=\"'console'\"></source-code>\r\n    <p>\r\n      Your presentation will be in\r\n      <b>dist</b> folder.\r\n    </p>\r\n    <p>Launch it by double-clicking on\r\n      <b>index.html</b>\r\n    </p>\r\n  </slide>\r\n\r\n  <slide>\r\n    <h1>Thanks!</h1>\r\n  </slide>\r\n\r\n  <slide>\r\n    <img class=\"circle\" width=\"200px\" src=\"./assets/img/luisjose.jpg\" alt=\"\">\r\n    <h3><fa name=\"twitter\"></fa> @luisjoseprofe</h3>\r\n  </slide>\r\n\r\n</presentation>\r\n\r\n\r\n<!--\r\n\r\n  You can choose presentation theme:\r\n  - light\r\n  - dark\r\n  \r\n  More themes soon. You are welcome to colaborate.\r\n\r\n  IMPORTANT: Notice the simple quotes for strings.\r\n  For example:\r\n    [theme]=\"'dark'\" IS CORRECT\r\n    [theme]=\"dark\" IS INCORRECT\r\n\r\n  -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  cursor: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n@-webkit-keyframes gentleHover {\n  0% {\n    -webkit-transform: translate(0, 15px) rotate(0deg);\n            transform: translate(0, 15px) rotate(0deg); }\n  50% {\n    -webkit-transform: translate(0, -15px) rotate(0deg);\n            transform: translate(0, -15px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(0, 15px) rotate(0deg);\n            transform: translate(0, 15px) rotate(0deg); } }\n\n@keyframes gentleHover {\n  0% {\n    -webkit-transform: translate(0, 15px) rotate(0deg);\n            transform: translate(0, 15px) rotate(0deg); }\n  50% {\n    -webkit-transform: translate(0, -15px) rotate(0deg);\n            transform: translate(0, -15px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(0, 15px) rotate(0deg);\n            transform: translate(0, 15px) rotate(0deg); } }\n\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg); } }\n\n@keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg); } }\n\n@-webkit-keyframes heartBeat {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  14% {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3); }\n  28% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  42% {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3); }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes heartBeat {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  14% {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3); }\n  28% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  42% {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3); }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slides_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slides.service */ "./src/app/slides.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(slidesService) {
        this.slidesService = slidesService;
        this.consoleCode1 = 'git clone https://github.com/LuisJoseSanchez/chirimoya';
        this.consoleCode2 = "\ncd chirimoya\nnpm install\n  ";
        this.consoleCode3 = "ng serve";
        this.presentationCode = "  <presentation>\n    <slide>\n      <h1>My presentation</h1>\n      <p>Ese pedazo de ese hombree fistro.</p>\n    </slide>\n\n    <slide>\n      <p>Lorem ipsum</p>\n    </slide>\n  </presentation>";
        this.htmlCode = "\n  <h1>Hello</h1>\n  <p>fistrum pecador</p>\n  ";
        this.highlight1 = "\n  <slide>\n    <source-code [code]=\"javaCode\" [language]=\"'java'\">\n    </source-code>\n  </slide>\n  ";
        this.highlight2 = "\n  javaCode = `\n  public class HelloWorld {\n    public static void main(String[] args) {\n      System.out.println(\"Hello world!\");\n    }\n  }`;";
        this.javaCode = "\n  public class HelloWorld {\n    public static void main(String[] args) {\n      System.out.println(\"Hello world!\");\n    }\n  }\n  ";
        this.usdEurConverter = "\n  <slide>\n    <h1>USD - EUR Converter</h1>\n    <usd-eur-converter></usd-eur-converter>\n  </slide>\n  ";
        this.htmlCodeZoomPresentation = "\n  <presentation [transition]=\"zoom\">\n    \n\n  </presentation>\n  ";
        this.htmlCodeZoomSlide = "\n  <slide [transition]=\"zoom\">\n    \n\n  </slide>\n  ";
        this.htmlCodeScroll = "\n  <slide [transition]=\"scroll\">\n    \n\n  </slide>\n  ";
        this.buildCode = "\n  ng build --prod --base-href ./\n  ";
    }
    AppComponent.prototype.nextSlide = function () {
        this.slidesService.goToNextSlide();
    };
    AppComponent.prototype.prevSlide = function ($event) {
        $event.preventDefault();
        this.slidesService.goToPreviousSlide();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_slides_service__WEBPACK_IMPORTED_MODULE_1__["SlidesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presentation/presentation.component */ "./src/app/presentation/presentation.component.ts");
/* harmony import */ var _slide_slide_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slide/slide.component */ "./src/app/slide/slide.component.ts");
/* harmony import */ var _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./source-code/source-code.component */ "./src/app/source-code/source-code.component.ts");
/* harmony import */ var _usd_eur_converter_usd_eur_converter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usd-eur-converter/usd-eur-converter.component */ "./src/app/usd-eur-converter/usd-eur-converter.component.ts");
/* harmony import */ var _slides_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slides.service */ "./src/app/slides.service.ts");
/* harmony import */ var _random_number_generator_random_number_generator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./random-number-generator/random-number-generator.component */ "./src/app/random-number-generator/random-number-generator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"],
                _slide_slide_component__WEBPACK_IMPORTED_MODULE_8__["SlideComponent"],
                _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_9__["SourceCodeComponent"],
                _usd_eur_converter_usd_eur_converter_component__WEBPACK_IMPORTED_MODULE_10__["UsdEurConverterComponent"],
                _random_number_generator_random_number_generator_component__WEBPACK_IMPORTED_MODULE_12__["RandomNumberGeneratorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__["AngularFontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__["HighlightModule"].forRoot({ theme: 'rainbow' }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_slides_service__WEBPACK_IMPORTED_MODULE_11__["SlidesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/presentation/presentation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/presentation/presentation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/presentation/presentation.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/presentation/presentation.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/presentation/presentation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/presentation/presentation.component.ts ***!
  \********************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slides_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slides.service */ "./src/app/slides.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
})(KEY_CODE || (KEY_CODE = {}));
var PresentationComponent = /** @class */ (function () {
    function PresentationComponent(slidesService) {
        this.slidesService = slidesService;
    }
    PresentationComponent.prototype.ngOnInit = function () {
        this.slidesService.setTransition(this.transition);
        this.slidesService.initNumberOfSlides();
        this.slidesService.loadSlides();
        this.slidesService.setNumbersToSlides();
        //this.slidesService.setNumbersToSourceCode();
        this.slidesService.setCurrentSlideNumber(1);
        this.applyTheme();
    };
    PresentationComponent.prototype.keyEvent = function (event) {
        switch (event.keyCode) {
            case KEY_CODE.RIGHT_ARROW:
            case KEY_CODE.SPACE:
                this.slidesService.goToNextSlide();
                break;
            case KEY_CODE.LEFT_ARROW:
                this.slidesService.goToPreviousSlide();
                break;
            default:
        }
    };
    PresentationComponent.prototype.applyTheme = function () {
        switch (this.theme) {
            case 'light':
                __webpack_require__(/*! style-loader!./../themes/light.scss */ "./node_modules/style-loader/index.js!./src/app/themes/light.scss");
                break;
            case 'dark':
                __webpack_require__(/*! style-loader!./../themes/dark.scss */ "./node_modules/style-loader/index.js!./src/app/themes/dark.scss");
                break;
            default:
                __webpack_require__(/*! style-loader!./../themes/light.scss */ "./node_modules/style-loader/index.js!./src/app/themes/light.scss");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PresentationComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PresentationComponent.prototype, "transition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PresentationComponent.prototype, "showProgressBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PresentationComponent.prototype, "cursorType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PresentationComponent.prototype, "cursorPosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PresentationComponent.prototype, "keyEvent", null);
    PresentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'presentation',
            template: __webpack_require__(/*! ./presentation.component.html */ "./src/app/presentation/presentation.component.html"),
            styles: [__webpack_require__(/*! ./presentation.component.scss */ "./src/app/presentation/presentation.component.scss")]
        }),
        __metadata("design:paramtypes", [_slides_service__WEBPACK_IMPORTED_MODULE_1__["SlidesService"]])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/random-number-generator/random-number-generator.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/random-number-generator/random-number-generator.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"random-number-generator\">\r\n  From\r\n  <input [(ngModel)]=a type=\"number\">\r\n    to\r\n    <input [(ngModel)]=b type=\"number\">\r\n  <button (click)=\"generateNumber()\">Generate</button>\r\n</div>\r\n\r\n<h1>{{ randomNumber }}</h1>"

/***/ }),

/***/ "./src/app/random-number-generator/random-number-generator.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/random-number-generator/random-number-generator.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".random-number-generator {\n  display: flex;\n  padding: 12px;\n  justify-content: space-around;\n  align-items: center;\n  border: 1px solid gray;\n  border-radius: 8px;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);\n  margin: 8px; }\n\ninput {\n  color: gray;\n  font-size: 1.1em;\n  width: 169px; }\n\nbutton {\n  color: gray;\n  font-size: 1.1em; }\n\nh1 {\n  font-size: 8em; }\n"

/***/ }),

/***/ "./src/app/random-number-generator/random-number-generator.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/random-number-generator/random-number-generator.component.ts ***!
  \******************************************************************************/
/*! exports provided: RandomNumberGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomNumberGeneratorComponent", function() { return RandomNumberGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RandomNumberGeneratorComponent = /** @class */ (function () {
    function RandomNumberGeneratorComponent() {
        this.a = 0;
        this.b = 0;
        this.randomNumber = 0;
    }
    RandomNumberGeneratorComponent.prototype.ngOnInit = function () {
    };
    RandomNumberGeneratorComponent.prototype.generateNumber = function () {
        this.randomNumber = Math.floor(Math.random() * (this.b - this.a + 1)) + 1;
    };
    RandomNumberGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'random-number-generator',
            template: __webpack_require__(/*! ./random-number-generator.component.html */ "./src/app/random-number-generator/random-number-generator.component.html"),
            styles: [__webpack_require__(/*! ./random-number-generator.component.scss */ "./src/app/random-number-generator/random-number-generator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RandomNumberGeneratorComponent);
    return RandomNumberGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/slide/slide.component.html":
/*!********************************************!*\
  !*** ./src/app/slide/slide.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"slide\"\r\n  *ngIf=\"visible\"\r\n  [@animation]=\"animationState\">\r\n\r\n  <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/slide/slide.component.scss":
/*!********************************************!*\
  !*** ./src/app/slide/slide.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.visible {\r\n  visibility: visible;\r\n}\r\n\r\n.invisible {\r\n  visibility: hidden;\r\n}*/\n"

/***/ }),

/***/ "./src/app/slide/slide.component.ts":
/*!******************************************!*\
  !*** ./src/app/slide/slide.component.ts ***!
  \******************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _slides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slides.service */ "./src/app/slides.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlideComponent = /** @class */ (function () {
    function SlideComponent(slidesService, element) {
        this.slidesService = slidesService;
        this.element = element;
        this.transition = "";
        this.thisIsTheFirstSlide = false;
        this.thisIsTheLastSlide = false;
        this.animationState = 'invisible';
    }
    SlideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideNumber = this.element.nativeElement.slideNumber;
        this.visible = (this.slideNumber === 1);
        this.thisIsTheFirstSlide = (this.slideNumber === 1);
        this.animate();
        this.slidesService.currentSlideNumber$.subscribe(function (sn) {
            _this.currentSlideNumber = sn;
            _this.visible = (_this.slideNumber === _this.currentSlideNumber);
            _this.thisIsTheFirstSlide = (_this.slideNumber === 1);
            _this.thisIsTheLastSlide = (_this.slideNumber === _this.slidesService.numberOfSlides);
            _this.animate();
        });
    };
    SlideComponent.prototype.goToPreviousSlide = function () {
        this.slidesService.goToPreviousSlide();
    };
    SlideComponent.prototype.goToNextSlide = function () {
        this.slidesService.goToNextSlide();
    };
    SlideComponent.prototype.animate = function () {
        var _this = this;
        var initialState;
        var finalState;
        if (this.transition == "") {
            // Get default transition
            this.transition = this.slidesService.getTransition();
        }
        switch (this.transition) {
            case 'fade':
                initialState = 'invisible';
                finalState = 'visible';
                break;
            case 'zoom':
                initialState = 'tiny';
                finalState = 'big';
                break;
            case 'scroll':
                initialState = 'outOfScreen';
                finalState = 'insideScreen';
                break;
        }
        if (this.transition != 'none') {
            this.animationState = initialState;
            setTimeout(function () {
                _this.animationState = finalState;
                console.log(finalState);
            }, 10);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "transition", void 0);
    SlideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slide',
            template: __webpack_require__(/*! ./slide.component.html */ "./src/app/slide/slide.component.html"),
            styles: [__webpack_require__(/*! ./slide.component.scss */ "./src/app/slide/slide.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(400deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('invisible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('tiny', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0.1)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('big', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('outOfScreen', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(1800px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('insideScreen', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('invisible => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('800ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('invisible => rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1000ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('tiny => big', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('800ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('outOfScreen => insideScreen', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('800ms')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [_slides_service__WEBPACK_IMPORTED_MODULE_2__["SlidesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "./src/app/slides.service.ts":
/*!***********************************!*\
  !*** ./src/app/slides.service.ts ***!
  \***********************************/
/*! exports provided: SlidesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesService", function() { return SlidesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlidesService = /** @class */ (function () {
    function SlidesService() {
        this.currentSlideNumber = 1;
        this.currentSlideNumber$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SlidesService.prototype.initNumberOfSlides = function () {
        this.numberOfSlides = document.getElementsByTagName('slide').length;
    };
    SlidesService.prototype.loadSlides = function () {
        this.slides = document.getElementsByTagName('slide');
    };
    SlidesService.prototype.setNumbersToSlides = function () {
        var i = 1;
        for (var _i = 0, _a = this.slides; _i < _a.length; _i++) {
            var slide = _a[_i];
            slide.slideNumber = i++;
        }
    };
    SlidesService.prototype.setCurrentSlideNumber = function (sn) {
        this.currentSlideNumber = sn;
        this.currentSlideNumber$.next(sn);
    };
    SlidesService.prototype.getCurrentSlideNumber = function () {
        return this.currentSlideNumber$;
    };
    SlidesService.prototype.setNumberOfSlides = function (ns) {
        this.numberOfSlides = ns;
    };
    SlidesService.prototype.goToPreviousSlide = function () {
        if (this.currentSlideNumber > 1) {
            this.currentSlideNumber--;
        }
        this.currentSlideNumber$.next(this.currentSlideNumber);
    };
    SlidesService.prototype.goToNextSlide = function () {
        if (this.currentSlideNumber < this.numberOfSlides) {
            this.currentSlideNumber++;
        }
        this.currentSlideNumber$.next(this.currentSlideNumber);
    };
    SlidesService.prototype.setTransition = function (t) {
        this.transition = t;
    };
    SlidesService.prototype.getTransition = function () {
        return this.transition;
    };
    SlidesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SlidesService);
    return SlidesService;
}());



/***/ }),

/***/ "./src/app/source-code/source-code.component.html":
/*!********************************************************!*\
  !*** ./src/app/source-code/source-code.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\r\n  <code\r\n    highlight [code]=\"code\"\r\n    [language]=\"[language]\">\r\n  </code>\r\n</pre>"

/***/ }),

/***/ "./src/app/source-code/source-code.component.scss":
/*!********************************************************!*\
  !*** ./src/app/source-code/source-code.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pre, code {\n  font-family: Courier New, Courier, monospace;\n  text-align: left; }\n\npre {\n  padding: 0px;\n  margin: 0px; }\n\ncode {\n  margin: 0px; }\n"

/***/ }),

/***/ "./src/app/source-code/source-code.component.ts":
/*!******************************************************!*\
  !*** ./src/app/source-code/source-code.component.ts ***!
  \******************************************************/
/*! exports provided: SourceCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceCodeComponent", function() { return SourceCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SourceCodeComponent = /** @class */ (function () {
    function SourceCodeComponent() {
        this.code = '';
        this.language = '';
    }
    SourceCodeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SourceCodeComponent.prototype, "code", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SourceCodeComponent.prototype, "language", void 0);
    SourceCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'source-code',
            template: __webpack_require__(/*! ./source-code.component.html */ "./src/app/source-code/source-code.component.html"),
            styles: [__webpack_require__(/*! ./source-code.component.scss */ "./src/app/source-code/source-code.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SourceCodeComponent);
    return SourceCodeComponent;
}());



/***/ }),

/***/ "./src/app/usd-eur-converter/usd-eur-converter.component.html":
/*!********************************************************************!*\
  !*** ./src/app/usd-eur-converter/usd-eur-converter.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"usd-eur-converter\">\r\n  USD <input [(ngModel)]=usd (keyup)=\"updateEuros()\">\r\n  <fa name=\"arrows-h fa-2x\"></fa>\r\n  EUR <input [(ngModel)]=eur (keyup)=\"updateUsd()\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/usd-eur-converter/usd-eur-converter.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/usd-eur-converter/usd-eur-converter.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".usd-eur-converter {\n  display: flex;\n  padding: 12px;\n  justify-content: space-around;\n  align-items: center;\n  border: 1px solid gray;\n  border-radius: 8px;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4); }\n\ninput {\n  color: gray;\n  font-size: 1.1em;\n  width: 169px; }\n"

/***/ }),

/***/ "./src/app/usd-eur-converter/usd-eur-converter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/usd-eur-converter/usd-eur-converter.component.ts ***!
  \******************************************************************/
/*! exports provided: UsdEurConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsdEurConverterComponent", function() { return UsdEurConverterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsdEurConverterComponent = /** @class */ (function () {
    function UsdEurConverterComponent() {
        this.usd = 0;
        this.eur = 0;
    }
    UsdEurConverterComponent.prototype.ngOnInit = function () {
    };
    UsdEurConverterComponent.prototype.updateEuros = function () {
        this.eur = this.usd * 0.833;
    };
    UsdEurConverterComponent.prototype.updateUsd = function () {
        this.usd = this.eur / 0.833;
    };
    UsdEurConverterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'usd-eur-converter',
            template: __webpack_require__(/*! ./usd-eur-converter.component.html */ "./src/app/usd-eur-converter/usd-eur-converter.component.html"),
            styles: [__webpack_require__(/*! ./usd-eur-converter.component.scss */ "./src/app/usd-eur-converter/usd-eur-converter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UsdEurConverterComponent);
    return UsdEurConverterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Mierda\proyectos question mark\chirimoya\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map