"use strict";
(self["webpackChunkbiomob_v_11"] = self["webpackChunkbiomob_v_11"] || []).push([["account"],{

/***/ "./src/main/webapp/app/modules/account/index.tsx":
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/modules/account/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary-route */ "./src/main/webapp/app/shared/error/error-boundary-route.tsx");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings */ "./src/main/webapp/app/modules/account/settings/settings.tsx");
/* harmony import */ var _password_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password/password */ "./src/main/webapp/app/modules/account/password/password.tsx");




const Routes = ({ match }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { path: `${match.url}/settings`, component: _settings_settings__WEBPACK_IMPORTED_MODULE_2__["default"] }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { path: `${match.url}/password`, component: _password_password__WEBPACK_IMPORTED_MODULE_3__["default"] })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);


/***/ }),

/***/ "./src/main/webapp/app/modules/account/password/password.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/password/password.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPage": () => (/* binding */ PasswordPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/store */ "./src/main/webapp/app/config/store.ts");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/layout/password/password-strength-bar */ "./src/main/webapp/app/shared/layout/password/password-strength-bar.tsx");
/* harmony import */ var _password_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.reducer */ "./src/main/webapp/app/modules/account/password/password.reducer.ts");








const PasswordPage = () => {
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,_password_reducer__WEBPACK_IMPORTED_MODULE_6__.reset)());
        dispatch((0,app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__.getSession)());
        return () => {
            dispatch((0,_password_reducer__WEBPACK_IMPORTED_MODULE_6__.reset)());
        };
    }, []);
    const handleValidSubmit = ({ currentPassword, newPassword }) => {
        dispatch((0,_password_reducer__WEBPACK_IMPORTED_MODULE_6__.savePassword)({ currentPassword, newPassword }));
    };
    const updatePassword = event => setPassword(event.target.value);
    const account = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.authentication.account);
    const successMessage = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.password.successMessage);
    const errorMessage = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.password.errorMessage);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (successMessage) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(successMessage);
        }
        else if (errorMessage) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(errorMessage);
        }
    }, [successMessage, errorMessage]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Row, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Col, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "password-title" },
                    "Senha para ",
                    account.login),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedForm, { id: "password-form", onSubmit: handleValidSubmit },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "currentPassword", label: "Senha atual", placeholder: 'Senha atual', type: "password", validate: {
                            required: { value: true, message: 'Sua senha é obrigatória' },
                        }, "data-cy": "currentPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "newPassword", label: "Nova senha", placeholder: 'Nova senha', type: "password", validate: {
                            required: { value: true, message: 'Sua senha é obrigatória.' },
                            minLength: { value: 4, message: 'Sua senha é obrigada a ter pelo menos 4 caracteres.' },
                            maxLength: { value: 50, message: 'Sua senha não pode ser maior que 50 caracteres.' },
                        }, onChange: updatePassword, "data-cy": "newPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_5__["default"], { password: password }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "confirmPassword", label: "Confirme a nova senha", placeholder: "Confirme a nova senha", type: "password", validate: {
                            required: { value: true, message: 'Sua confirmação de senha é obrigatória.' },
                            minLength: { value: 4, message: 'Sua confirmação de senha é obrigada a ter pelo menos 4 caracteres.' },
                            maxLength: { value: 50, message: 'Sua confirmação de senha não pode ser maior que 50 caracteres.' },
                            validate: v => v === password || 'As senhas não são iguais!',
                        }, "data-cy": "confirmPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Button, { color: "success", type: "submit", "data-cy": "submit" }, "Salvar"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordPage);


/***/ }),

/***/ "./src/main/webapp/app/modules/account/settings/settings.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/settings/settings.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/store */ "./src/main/webapp/app/config/store.ts");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.reducer */ "./src/main/webapp/app/modules/account/settings/settings.reducer.ts");







const SettingsPage = () => {
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    const account = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.authentication.account);
    const successMessage = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.settings.successMessage);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__.getSession)());
        return () => {
            dispatch((0,_settings_reducer__WEBPACK_IMPORTED_MODULE_5__.reset)());
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (successMessage) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(successMessage);
        }
    }, [successMessage]);
    const handleValidSubmit = values => {
        dispatch((0,_settings_reducer__WEBPACK_IMPORTED_MODULE_5__.saveAccountSettings)(Object.assign(Object.assign({}, account), values)));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { id: "settings-title" },
                    "Configura\u00E7\u00F5es de usu\u00E1rio para ",
                    account.login),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedForm, { id: "settings-form", onSubmit: handleValidSubmit, defaultValues: account },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "firstName", label: "Primeiro Nome", id: "firstName", placeholder: "Seu primeiro nome", validate: {
                            required: { value: true, message: 'Seu primeiro nome é obrigatório.' },
                            minLength: { value: 1, message: 'Seu primeiro nome tem que ter pelo menos 1 caractere.' },
                            maxLength: { value: 50, message: 'Seu primeiro nome não pode passar de 50 caracteres.' },
                        }, "data-cy": "firstname" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "lastName", label: "\u00DAltimo Nome", id: "lastName", placeholder: "Seu \u00FAltimo nome", validate: {
                            required: { value: true, message: 'Seu último nome é obrigatório.' },
                            minLength: { value: 1, message: 'Seu último nome tem que ter pelo menos 1 caractere.' },
                            maxLength: { value: 50, message: 'Seu último nome não pode passar de 50 caracteres.' },
                        }, "data-cy": "lastname" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "email", label: "Email", placeholder: 'Seu email', type: "email", validate: {
                            required: { value: true, message: 'Seu email é obrigatório.' },
                            minLength: { value: 5, message: 'Seu email tem que ter pelo menos 1 caractere.' },
                            maxLength: { value: 254, message: 'Seu email não pode passar de 50 caracteres.' },
                            validate: v => (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.isEmail)(v) || 'Seu email é inválido.',
                        }, "data-cy": "email" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, { color: "primary", type: "submit", "data-cy": "submit" }, "Salvar"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);


/***/ })

}]);
//# sourceMappingURL=account.chunk.js.map