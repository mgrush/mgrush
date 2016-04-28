webpackJsonp([1],{

/***/ 0:
/*!*******************************!*\
  !*** ./pages/manage/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(/*! ./index.less */ 202);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(/*! react-dom */ 18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Header = __webpack_require__(/*! ../../components/Header */ 98);

	var _Header2 = _interopRequireDefault(_Header);

	var _AsideMenu = __webpack_require__(/*! ../../components/AsideMenu */ 96);

	var _AsideMenu2 = _interopRequireDefault(_AsideMenu);

	var _dataList = __webpack_require__(/*! ./data-list */ 240);

	var _dataList2 = _interopRequireDefault(_dataList);

	var _Login = __webpack_require__(/*! ../../components/Login */ 255);

	var _Login2 = _interopRequireDefault(_Login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 测试
	_Login2.default.show();

	// 自动创建react组件容器
	function createContainer(uniqueId) {
		var container = document.createElement("div");
		container.id = uniqueId;
		container.className = "content";

		document.body.appendChild(container);

		return container;
	}

	// 页面导航条设置
	_reactDom2.default.render(_react2.default.createElement(_Header2.default, null), document.getElementById("header"));

	// 左侧导航配置
	var MenuConfig = [{
		title: "我的工作",
		items: [{
			title: "我的数据表格",
			onClick: function onClick(uniqueId) {
				var content = document.getElementById(uniqueId);
				if (!content) {
					_reactDom2.default.render(_react2.default.createElement(_dataList2.default, null), createContainer(uniqueId));
				} else {
					console.log("显示 content");
				}
			}
		}, {
			"title": "我的申请单列表",
			"pageUrl": "http://a.b.com"
		}, {
			"title": "我的申请单列表",
			"pageUrl": "http://a.b.com"
		}]
	}, {
		title: "我的工作1",
		items: [{
			"title": "我的申请单列表",
			"pageUrl": "http://a.b.com"
		}, {
			"title": "我的申请单列表",
			"pageUrl": "http://a.b.com"
		}, {
			"title": "我的申请单列表",
			"pageUrl": "http://a.b.com"
		}]
	}];

	// 渲染左侧导航条
		_reactDom2.default.render(_react2.default.createElement(_AsideMenu2.default, { menuConfig: MenuConfig }), document.getElementById("aside"));

/***/ },

/***/ 35:
/*!***************************************!*\
  !*** ./components/Table/constants.js ***!
  \***************************************/
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 定义组件通用常量
	var Constants = {

		// change事件名称
		CHANGE_EVENT: Symbol(),

		// 创建数据
		ADD_ITEM: Symbol(),

		// 删除数据
		DEL_ITEM: Symbol(),

		// 更新数据
		UPDATE_ITEM: Symbol(),

		// 本地缓存数据
		CLIENT_DATA: Symbol(),

		// 远程数据
		REMOTE_DATA: Symbol()
	};

		exports.default = Constants;

/***/ },

/***/ 55:
/*!*********************************!*\
  !*** ./components/Base/util.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 基本方法定义
	var BaseUtil = Object.assign({}, {
		// 仿照Array.map方法对obj进行处理并返回数组

		map: function map(obj, callback) {
			var mapResult = [];

			for (var pname in obj) {
				mapResult.push(callback(pname, obj[pname]));
			}

			return mapResult;
		},


		// 克隆对象
		clone: function clone(obj, filterFunc) {
			var newObj = {};

			for (var pname in obj) {
				if (filterFunc(pname, obj[pname])) {
					newObj[pname] = obj[pname];
				}
			}

			return newObj;
		},


		// 判断是否是数组
		isArray: function isArray(target) {
			return Object.prototype.toString.call(target) === "[object Array]";
		},


		// 判断是否是对象
		isObject: function isObject(target) {
			return Object.prototype.toString.call(target) === "[object Object]";
		},


		// 判断是否是方法
		isFunc: function isFunc(target) {
			return Object.prototype.toString.call(target) === "[object Function]";
		},


		// 获取远程json数据
		getJSON: function getJSON(url, params) {
			return new Promise(function (resolve, reject) {
				$.getJSON(url, params, function (result) {
					resolve(result);
				});
			});
		}
	});

		exports.default = BaseUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 20)))

/***/ },

/***/ 56:
/*!*********************************!*\
  !*** ./components/base/util.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 基本方法定义
	var BaseUtil = Object.assign({}, {
		// 仿照Array.map方法对obj进行处理并返回数组

		map: function map(obj, callback) {
			var mapResult = [];

			for (var pname in obj) {
				mapResult.push(callback(pname, obj[pname]));
			}

			return mapResult;
		},


		// 克隆对象
		clone: function clone(obj, filterFunc) {
			var newObj = {};

			for (var pname in obj) {
				if (filterFunc(pname, obj[pname])) {
					newObj[pname] = obj[pname];
				}
			}

			return newObj;
		},


		// 判断是否是数组
		isArray: function isArray(target) {
			return Object.prototype.toString.call(target) === "[object Array]";
		},


		// 判断是否是对象
		isObject: function isObject(target) {
			return Object.prototype.toString.call(target) === "[object Object]";
		},


		// 判断是否是方法
		isFunc: function isFunc(target) {
			return Object.prototype.toString.call(target) === "[object Function]";
		},


		// 获取远程json数据
		getJSON: function getJSON(url, params) {
			return new Promise(function (resolve, reject) {
				$.getJSON(url, params, function (result) {
					resolve(result);
				});
			});
		}
	});

		exports.default = BaseUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 20)))

/***/ },

/***/ 57:
/*!****************************************!*\
  !*** ./components/dispatcher/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _flux = __webpack_require__(/*! flux */ 112);

	var AppDispatcher = new _flux.Dispatcher();

	exports.default = AppDispatcher;

/***/ },

/***/ 96:
/*!***************************************!*\
  !*** ./components/AsideMenu/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(/*! ./index.less */ 187);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(/*! ../Base/util */ 55);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var itemHeight = 4; // rem

	var AsideMenu = function (_React$Component) {
		_inherits(AsideMenu, _React$Component);

		function AsideMenu(props) {
			_classCallCheck(this, AsideMenu);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(AsideMenu).call(this, props));
		}

		_createClass(AsideMenu, [{
			key: "render",
			value: function render() {
				var _this2 = this;

				var menuList = this.props.menuConfig.map(function (group, index) {
					var styleMap = {
						height: group.items.length * itemHeight + "rem"
					};

					var itemList = group.items.map(function (item, index) {
						return _react2.default.createElement(
							"div",
							{ className: "item", key: index, onClick: _this2.onItemClick.bind(_this2, item, new Date().getTime()) },
							item.title
						);
					});

					return _react2.default.createElement(
						"div",
						{ className: "group", key: index },
						_react2.default.createElement(
							"div",
							{ className: "group-name", onClick: _this2.toggleMenu.bind(_this2) },
							_react2.default.createElement(
								"span",
								null,
								group.title
							),
							_react2.default.createElement("i", { className: "icon-angle-up" })
						),
						_react2.default.createElement(
							"div",
							{ className: "group-items", "data-length": group.items.length, style: styleMap },
							itemList
						)
					);
				});

				return _react2.default.createElement(
					"div",
					{ className: "m-aside-menu" },
					menuList
				);
			}
		}, {
			key: "toggleMenu",
			value: function toggleMenu(event) {
				var target = event.target.className.includes("group-name") ? event.target : event.target.parentNode;
				var groupItems = target.nextSibling;
				var itemCount = groupItems.getAttribute("data-length");
				var className = target.lastChild.getAttribute("class");

				if (className.includes("icon-angle-up")) {
					target.nextSibling.style.height = "0rem";
					target.lastChild.className = "icon-angle-down";
				} else {
					target.nextSibling.style.height = itemCount * itemHeight + "rem";
					target.lastChild.className = "icon-angle-up";
				}
			}
		}, {
			key: "onItemClick",
			value: function onItemClick(item, uniqueId) {
				item.onClick && item.onClick(uniqueId);
			}
		}]);

		return AsideMenu;
	}(_react2.default.Component);

	AsideMenu.defaultProps = {
		menuConfig: []
	};
		exports.default = AsideMenu;

/***/ },

/***/ 97:
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(/*! ./index.less */ 188);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(/*! ../Base/util */ 55);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_React$Component) {
		_inherits(Form, _React$Component);

		function Form(props) {
			_classCallCheck(this, Form);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));
		}

		// 通过表单ID获取表单的数据


		_createClass(Form, [{
			key: "render",
			value: function render() {
				var itemList = _util2.default.map(this.props.columns, function (pname, pvalue) {
					return _react2.default.createElement(
						"div",
						{ className: "item", key: pname },
						_react2.default.createElement(
							"label",
							{ htmlFor: pname },
							pvalue.title || pvalue
						),
						_react2.default.createElement("input", { type: "text", defaultValue: "", id: pname, placeholder: pvalue.hint || "" })
					);
				});

				return _react2.default.createElement(
					"div",
					{ className: "m-form", id: this.props.formId },
					itemList
				);
			}
		}], [{
			key: "getFormData",
			value: function getFormData() {
				var formId = arguments.length <= 0 || arguments[0] === undefined ? "default-form" : arguments[0];
				var formData = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var $content = arguments.length <= 2 || arguments[2] === undefined ? $("#" + formId) : arguments[2];

				$content.find("input, select, textarea").each(function (index, item) {
					formData[$(item).attr("name") || $(item).attr("id")] = $(item).val();
				});

				return formData;
			}
		}]);

		return Form;
	}(_react2.default.Component);

	Form.defaultProps = {
		formId: "default-form",
		columns: {}
	};
		exports.default = Form;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 20)))

/***/ },

/***/ 99:
/*!***********************************!*\
  !*** ./components/Layer/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(/*! ./index.less */ 190);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(/*! react-dom */ 18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _util = __webpack_require__(/*! ../Base/util */ 55);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = {
		__refers: [],
		__containers: [],

		createContainer: function createContainer() {
			var container = document.createElement("div");
			container.id = new Date().getTime();

			this.__containers.push(document.body.appendChild(container));

			return container;
		},

		renderComponent: function renderComponent(Component, props) {
			var container = this.createContainer();

			this.__containers.push(container);
			this.__refers.push(_reactDom2.default.render(_react2.default.createElement(Component, props), container));
		},

		destroyComponent: function destroyComponent(refer) {
			var referIndex = this.__refers.indexOf(refer);
			var container = this.__containers[referIndex];

			this.__refers.splice(referIndex);
			this.__containers.splice(referIndex);

			container.remove();
		}
	};

	var Modal = function (_React$Component) {
		_inherits(Modal, _React$Component);

		function Modal(props) {
			_classCallCheck(this, Modal);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));
		}

		_createClass(Modal, [{
			key: "render",
			value: function render() {
				var _this2 = this;

				var actionList = this.props.actions.map(function (item, index) {
					return _react2.default.createElement(
						"span",
						{ className: item.className || "", key: index, "data-index": index, onClick: _this2.onToolbarItemClick.bind(_this2) },
						item.name
					);
				});

				return _react2.default.createElement(
					"div",
					{ className: "m-modal", id: this.props.id, onClick: this.onCloseDomClick.bind(this), ref: "mContent" },
					_react2.default.createElement(
						"div",
						{ className: "main" },
						_react2.default.createElement(
							"div",
							{ className: "title" },
							_react2.default.createElement(
								"h3",
								null,
								this.props.title
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "content" },
							this.props.content
						),
						_react2.default.createElement(
							"div",
							{ className: "toolbar" },
							actionList
						)
					)
				);
			}

			// 点击工具栏需要执行的回调

		}, {
			key: "onToolbarItemClick",
			value: function onToolbarItemClick(event) {
				var itemIndex = event.target.getAttribute("data-index");
				var actionItem = this.props.actions[itemIndex];

				if ("function" != typeof actionItem.action || actionItem.action() != false) {
					this.remove();
				}
			}

			// 点击关闭按钮或者wrap区域，关闭当前弹窗

		}, {
			key: "onCloseDomClick",
			value: function onCloseDomClick(event) {
				var className = event.target.getAttribute("class") || "";

				if (className.indexOf("m-modal") >= 0 || className.indexOf("close-icon") >= 0) {
					this.remove();
				}
			}

			// 删除dom节点

		}, {
			key: "remove",
			value: function remove() {
				return Container.destroyComponent(this);
			}
		}]);

		return Modal;
	}(_react2.default.Component);

	Modal.defaultProps = {
		id: "default-modal",
		title: "标题",
		content: "",
		actions: [{
			name: "确定",
			action: function action($content) {
				$content.remove();
			}
		}]
	};


	var Layer = {
		modal: function modal() {
			var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

			return Container.renderComponent(Modal, props);
		}
	};

		exports.default = Layer;

/***/ },

/***/ 100:
/*!*************************************!*\
  !*** ./components/Table/actions.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _constants = __webpack_require__(/*! ./constants */ 35);

	var _constants2 = _interopRequireDefault(_constants);

	var _dispatcher = __webpack_require__(/*! ../dispatcher */ 57);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		create: function create(data) {
			_dispatcher2.default.dispatch({
				actionType: _constants2.default.ADD_ITEM,
				data: data
			});
		}
		};

/***/ },

/***/ 101:
/*!***********************************!*\
  !*** ./components/Table/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(/*! ./index.less */ 191);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(/*! react-dom */ 18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _actions = __webpack_require__(/*! ./actions */ 100);

	var _actions2 = _interopRequireDefault(_actions);

	var _store = __webpack_require__(/*! ./store */ 102);

	var _store2 = _interopRequireDefault(_store);

	var _constants = __webpack_require__(/*! ./constants */ 35);

	var _constants2 = _interopRequireDefault(_constants);

	var _util = __webpack_require__(/*! ../base/util */ 56);

	var _util2 = _interopRequireDefault(_util);

	var _Form = __webpack_require__(/*! ../Form */ 97);

	var _Form2 = _interopRequireDefault(_Form);

	var _Layer = __webpack_require__(/*! ../Layer */ 99);

	var _Layer2 = _interopRequireDefault(_Layer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Table = function (_React$Component) {
		_inherits(Table, _React$Component);

		// 需要显示的数据列表

		function Table(props) {
			_classCallCheck(this, Table);

			// 判断数据来源是本地数据（CLIENT_DATA）还是服务端数据（REMOTE_DATA）

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

			_this.dataType = _util2.default.isArray(props.data) ? _constants2.default.CLIENT_DATA : _constants2.default.REMOTE_DATA;

			_this.state = {
				count: 0,
				page: props.page || 0,
				size: props.size || 15,
				title: props.title || "",
				columns: props.columns || {}
			};

			// 获取数据列表
			_this.getDataSource();

			// 监听数据变化
			_store2.default.addChangeListener(_this.onChange.bind(_this));
			return _this;
		}

		// 获取指定分页的数据


		_createClass(Table, [{
			key: "getDataSource",
			value: function getDataSource(page) {
				var _this2 = this;

				var dataSource = this.props.data;
				var queryParams = Object.assign({
					size: this.state.size,
					page: page || this.state.page
				}, this.props.params);

				_store2.default.getData(dataSource, queryParams).then(function (result) {
					_this2.setState(Object.assign(_this2.state, {
						data: result.data,
						count: result.count
					}));
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;

				// 表格标题
				var dataThs = _util2.default.map(this.state.columns, function (pname, pvalue) {
					return _react2.default.createElement(
						"th",
						{ "data-key": pname, key: pname },
						_util2.default.isObject(pvalue) ? pvalue.title : pvalue
					);
				});

				// 表格数据列表
				var dataRows = this.state.data && this.state.data.length ? this.state.data.map(function (item, index) {
					var columns = _util2.default.map(_this3.state.columns, function (pname, column) {
						var isObj = _util2.default.isObject(column);
						var hasMap = isObj && _util2.default.isObject(column.map);
						var hasRender = isObj && _util2.default.isFunc(column.render);
						var pvalue = hasMap ? column.map[item[pname]] : item[pname];

						return _react2.default.createElement(
							"td",
							{ "data-key": pname, key: pname },
							hasRender ? column.render(pvalue) : pvalue
						);
					});

					return _react2.default.createElement(
						"tr",
						{ key: index, "data-id": item.id },
						columns
					);
				}) : _react2.default.createElement(
					"tr",
					null,
					_react2.default.createElement(
						"td",
						{ colSpan: 10000 },
						"暂无数据！"
					)
				);

				// 分页
				var pageCount = Math.ceil(this.state.count / this.state.size);
				var pageNav = new Array(pageCount).fill(0).map(function (item, index) {
					return _react2.default.createElement(
						"li",
						{ key: index, onClick: _this3.onPageItemClick.bind(_this3), "data-value": index, className: index == _this3.state.page ? "selected" : "" },
						index + 1
					);
				});

				return _react2.default.createElement(
					"div",
					{ className: "m-datalist" },
					_react2.default.createElement(
						"div",
						{ className: "search-content" },
						_react2.default.createElement(
							"div",
							{ className: "button", onClick: this.showAppendModal.bind(this) },
							"添加记录"
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "table-content" },
						_react2.default.createElement(
							"div",
							{ className: "t-title" },
							this.state.title
						),
						_react2.default.createElement(
							"table",
							{ className: "" },
							_react2.default.createElement(
								"thead",
								null,
								_react2.default.createElement(
									"tr",
									null,
									dataThs
								)
							),
							_react2.default.createElement(
								"tbody",
								null,
								dataRows
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "t-footer" },
							_react2.default.createElement(
								"ul",
								null,
								pageNav
							)
						)
					)
				);
			}
		}, {
			key: "showAppendModal",
			value: function showAppendModal(event) {
				var columns = _util2.default.clone(this.state.columns, function (pname, item) {
					return !_util2.default.isObject(item) || item.editable !== false;
				});

				var props = {
					title: "这里是标题",
					content: _react2.default.createElement(_Form2.default, { columns: columns }),
					actions: [{
						name: "确定",
						className: "confirm",
						action: function action() {
							var formData = _Form2.default.getFormData();

							console.log(formData);
						}
					}, {
						name: "取消",
						className: "cancel",
						action: function action() {}
					}]
				};

				_Layer2.default.modal(props);

				/*
	   ReactDom.render(
	   	<Modal {...modalConfig} />,
	   	document.getElementById("container")
	   );
	   */

				/**
	   TableActions.create({
	   	id : 26,
	   	name : "miracle",
	   	age : "18",
	   	gender : "female"
	   });
	   **/
			}
		}, {
			key: "onChange",
			value: function onChange() {
				this.setState({
					page: 0,
					size: 15,
					data: _store2.default.getData()
				});
			}
		}, {
			key: "onPageItemClick",
			value: function onPageItemClick(event) {
				var page = event.target.getAttribute("data-value");

				if (this.dataType === _constants2.default.CLIENT_DATA) {} else {
					this.getDataSource(page);
				}
			}
		}]);

		return Table;
	}(_react2.default.Component);

	Table.defaultProps = {
		count: 0, // 记录总数
		page: 0, // 当前的page页码
		size: 15, // 每一页显示的数据的多少
		title: "", // 表格的标题
		columns: {}, // 列设置
		data: [] };
		exports.default = Table;

/***/ },

/***/ 102:
/*!***********************************!*\
  !*** ./components/Table/store.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _events = __webpack_require__(/*! events */ 110);

	var _constants = __webpack_require__(/*! ./constants */ 35);

	var _constants2 = _interopRequireDefault(_constants);

	var _util = __webpack_require__(/*! ../base/util */ 56);

	var _util2 = _interopRequireDefault(_util);

	var _dispatcher = __webpack_require__(/*! ../dispatcher */ 57);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TableStore = Object.assign({}, _events.EventEmitter.prototype, {
		getData: function getData(dataSource, params) {
			return new Promise(function (resolve, reject) {
				// 缓存数据
				if (_util2.default.isArray(dataSource)) {
					return resolve({
						data: dataSource,
						count: dataSource.length
					});
				}

				// 服务端异步数据
				_util2.default.getJSON(dataSource, params).then(function (result) {
					if (result.status == 0) {
						resolve(result);
					} else {
						reject(result.msg);
					}
				});
			});
		},
		create: function create(itemData) {},
		emitChange: function emitChange() {
			this.emit(_constants2.default.CHANGE_EVENT);
		},
		addChangeListener: function addChangeListener(callback) {
			this.on(_constants2.default.CHANGE_EVENT, callback);
		},
		removeChangeListener: function removeChangeListener(callback) {
			this.removeListener(_constants2.default.CHANGE_EVENT, callback);
		}
	});

	_dispatcher2.default.register(function (action) {
		switch (action.actionType) {
			case _constants2.default.ADD_ITEM:
				TableStore.create(action.data);
				TableStore.emitChange();
		}
	});

	exports.default = TableStore;

/***/ },

/***/ 110:
/*!*****************************!*\
  !*** ../~/events/events.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events) this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler)) return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) {
	      listeners[i].apply(this, args);
	    }
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events) this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type]) return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0) return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;

	  if (!this._events) return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length) {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    }
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function (type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function (emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },

/***/ 111:
/*!**********************************!*\
  !*** ../~/fbjs/lib/invariant.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

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

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

/***/ },

/***/ 112:
/*!**************************!*\
  !*** ../~/flux/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

		module.exports.Dispatcher = __webpack_require__(/*! ./lib/Dispatcher */ 113);

/***/ },

/***/ 113:
/*!***********************************!*\
  !*** ../~/flux/lib/Dispatcher.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 111);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ?  true ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ?  true ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	}();

	module.exports = Dispatcher;

/***/ },

/***/ 187:
/*!*****************************************!*\
  !*** ./components/AsideMenu/index.less ***!
  \*****************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 188:
/*!************************************!*\
  !*** ./components/Form/index.less ***!
  \************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 190:
/*!*************************************!*\
  !*** ./components/Layer/index.less ***!
  \*************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 191:
/*!*************************************!*\
  !*** ./components/Table/index.less ***!
  \*************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 202:
/*!*********************************!*\
  !*** ./pages/manage/index.less ***!
  \*********************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 240:
/*!***********************************!*\
  !*** ./pages/manage/data-list.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(/*! ../../components/Table */ 101);

	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tableProps = {
		title: "数据表格标题",
		columns: {
			id: {
				title: "序号",
				editable: false
			},
			username: "姓名",
			age: "年龄",
			gender: {
				title: "性别",
				map: {
					0: "女",
					1: "男"
				},
				hint: "请选择性别"
			},
			_operation: {
				title: "操作",
				render: function render() {
					return _react2.default.createElement(
						"div",
						{ className: "t-operation" },
						_react2.default.createElement(
							"span",
							{ className: "edit" },
							"编辑"
						),
						_react2.default.createElement(
							"span",
							{ className: "delete" },
							"删除"
						)
					);
				}
			}
		},
		data: "/user/getUserList"
	};

	var DataList = function (_React$Component) {
		_inherits(DataList, _React$Component);

		function DataList() {
			_classCallCheck(this, DataList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(DataList).apply(this, arguments));
		}

		_createClass(DataList, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "m-data-list" },
					_react2.default.createElement(_Table2.default, tableProps)
				);
			}
		}]);

		return DataList;
	}(_react2.default.Component);

	exports.default = DataList;
		;

/***/ },

/***/ 255:
/*!***********************************!*\
  !*** ./components/Login/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(/*! ./index.less */ 256);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(/*! react-dom */ 18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function createContainer() {
		var container = document.createElement("div");
		container.className = "content";

		document.body.appendChild(container);

		return container;
	}

	var LoginComp = function (_React$Component) {
		_inherits(LoginComp, _React$Component);

		function LoginComp() {
			_classCallCheck(this, LoginComp);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginComp).apply(this, arguments));
		}

		_createClass(LoginComp, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement("div", { className: "m-login" });
			}
		}]);

		return LoginComp;
	}(_react2.default.Component);

	var Login = {
		show: function () {
			var loginInstance = null;

			return function () {
				if (loginInstance == null) {
					loginInstance = _reactDom2.default.render(_react2.default.createElement(LoginComp, null), createContainer());
				}
			};
		}(),

		hide: function hide() {}
	};

		exports.default = Login;

/***/ },

/***/ 256:
/*!*************************************!*\
  !*** ./components/Login/index.less ***!
  \*************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=index.js.map