"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebouncedSearch = void 0;
var react_1 = require("react");
var useDebouncedSearch = function (onSearch, options) {
    if (options === void 0) { options = {}; }
    var _a = options.delay, delay = _a === void 0 ? 200 : _a, _b = options.minLength, minLength = _b === void 0 ? 0 : _b;
    var _c = (0, react_1.useState)(false), isTyping = _c[0], setIsTyping = _c[1];
    var timerRef = (0, react_1.useRef)(null);
    var debouncedSearch = (0, react_1.useCallback)(function (value) {
        setIsTyping(true);
        console.log("Searching ".concat(value));
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(function () {
            setIsTyping(false);
            if (value.trim().length > minLength) {
                onSearch(value);
            }
        }, delay);
    }, [delay, minLength, onSearch]);
    return { debouncedSearch: debouncedSearch, isTyping: isTyping };
};
exports.useDebouncedSearch = useDebouncedSearch;
