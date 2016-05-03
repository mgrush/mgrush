webpackJsonp([1],{

/***/ 0:
/*!*******************************!*\
  !*** ./pages/manage/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(/*! ./index.less */ 207);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(/*! react-dom */ 13);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Header = __webpack_require__(/*! ../../components/Header */ 38);

	var _Header2 = _interopRequireDefault(_Header);

	var _AsideMenu = __webpack_require__(/*! ../../components/AsideMenu */ 97);

	var _AsideMenu2 = _interopRequireDefault(_AsideMenu);

	var _dataList = __webpack_require__(/*! ./components/data-list */ 117);

	var _dataList2 = _interopRequireDefault(_dataList);

	var _Login = __webpack_require__(/*! ../../components/Login */ 105);

	var _Login2 = _interopRequireDefault(_Login);

	var _LoginAction = __webpack_require__(/*! ../../components/Actions/LoginAction */ 96);

	var _LoginAction2 = _interopRequireDefault(_LoginAction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 页面导航条设置
	var headerConfig = {
		// 已登陆用户显示的与用户相关的操作
		userMenuList: [[{
			name: "个人中心",
			onClick: function onClick() {
				alert("个人中心");
			}
		}, {
			name: "我的战绩",
			onClick: function onClick() {
				alert("我的战绩");
			}
		}], [{
			name: "退出",
			onClick: function onClick() {
				_LoginAction2.default.submitLogout();
			}
		}]]
	};

	_reactDom2.default.render(_react2.default.createElement(_Header2.default, headerConfig), document.getElementById("header"));

	// 自动创建react组件容器
	function createContainer(uniqueId) {
		var container = document.createElement("div");
		container.id = uniqueId;
		container.className = "content";

		document.body.appendChild(container);

		return container;
	}

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

/***/ 39:
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

/***/ 97:
/*!***************************************!*\
  !*** ./components/AsideMenu/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(/*! ./index.less */ 193);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(/*! ../Base/util */ 19);

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

/***/ 100:
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(/*! ./index.less */ 195);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(/*! ../Base/util */ 19);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 21)))

/***/ },

/***/ 104:
/*!***********************************!*\
  !*** ./components/Layer/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(/*! ./index.less */ 199);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(/*! react-dom */ 13);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _util = __webpack_require__(/*! ../Base/util */ 19);

	var _util2 = _interopRequireDefault(_util);

	var _Container = __webpack_require__(/*! ../Container */ 98);

	var _Container2 = _interopRequireDefault(_Container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
				return _Container2.default.destroyComponent(this);
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

			return _Container2.default.renderComponent(Modal, props);
		}
	};

		exports.default = Layer;

/***/ },

/***/ 110:
/*!*************************************!*\
  !*** ./components/Table/actions.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _constants = __webpack_require__(/*! ./constants */ 39);

	var _constants2 = _interopRequireDefault(_constants);

	var _Dispatcher = __webpack_require__(/*! ../Dispatcher */ 37);

	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		create: function create(data) {
			_Dispatcher2.default.dispatch({
				actionType: _constants2.default.ADD_ITEM,
				data: data
			});
		}
		};

/***/ },

/***/ 111:
/*!***********************************!*\
  !*** ./components/Table/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(/*! ./index.less */ 202);

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(/*! react-dom */ 13);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _actions = __webpack_require__(/*! ./actions */ 110);

	var _actions2 = _interopRequireDefault(_actions);

	var _store = __webpack_require__(/*! ./store */ 112);

	var _store2 = _interopRequireDefault(_store);

	var _constants = __webpack_require__(/*! ./constants */ 39);

	var _constants2 = _interopRequireDefault(_constants);

	var _util = __webpack_require__(/*! ../Base/util */ 19);

	var _util2 = _interopRequireDefault(_util);

	var _Form = __webpack_require__(/*! ../Form */ 100);

	var _Form2 = _interopRequireDefault(_Form);

	var _Layer = __webpack_require__(/*! ../Layer */ 104);

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

/***/ 112:
/*!***********************************!*\
  !*** ./components/Table/store.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _events = __webpack_require__(/*! events */ 60);

	var _constants = __webpack_require__(/*! ./constants */ 39);

	var _constants2 = _interopRequireDefault(_constants);

	var _util = __webpack_require__(/*! ../Base/util */ 19);

	var _util2 = _interopRequireDefault(_util);

	var _Dispatcher = __webpack_require__(/*! ../Dispatcher */ 37);

	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

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

	_Dispatcher2.default.register(function (action) {
		switch (action.actionType) {
			case _constants2.default.ADD_ITEM:
				TableStore.create(action.data);
				TableStore.emitChange();
		}
	});

	exports.default = TableStore;

/***/ },

/***/ 117:
/*!**********************************************!*\
  !*** ./pages/manage/components/data-list.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(/*! react */ 4);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(/*! ../../../components/Table */ 111);

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

/***/ 193:
/*!*****************************************!*\
  !*** ./components/AsideMenu/index.less ***!
  \*****************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 195:
/*!************************************!*\
  !*** ./components/Form/index.less ***!
  \************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 199:
/*!*************************************!*\
  !*** ./components/Layer/index.less ***!
  \*************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 202:
/*!*************************************!*\
  !*** ./components/Table/index.less ***!
  \*************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 207:
/*!*********************************!*\
  !*** ./pages/manage/index.less ***!
  \*********************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=index.js.map