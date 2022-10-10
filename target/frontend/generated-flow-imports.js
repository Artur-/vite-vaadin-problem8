export const addCssBlock = function(block, before = false) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head[before ? 'insertBefore' : 'appendChild'](tpl.content, document.head.firstChild);
};

import { css, unsafeCSS, registerStyles } from '@vaadin/vaadin-themable-mixin';
import $cssFromFile_0 from 'Frontend/cssimport-textfield.css?inline';
const $css_0 = typeof $cssFromFile_0  === 'string' ? unsafeCSS($cssFromFile_0) : $cssFromFile_0;
registerStyles('vaadin-text-field', $css_0, {moduleId: 'flow_css_mod_0'});
import $cssFromFile_1 from 'Frontend/cssimport.css?inline';
const $css_1 = typeof $cssFromFile_1  === 'string' ? unsafeCSS($cssFromFile_1) : $cssFromFile_1;
addCssBlock(`<style>${$css_1}</style>`);

import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/flow-frontend/AddonLitComponent.ts';
import '@vaadin/flow-frontend/dndConnector-es6.js';
import '@vaadin/flow-frontend/lumo-includes.ts';
import '@vaadin/flow-frontend/templates/LitComponent.ts';
import '@vaadin/flow-frontend/templates/PolymerComponent.ts';
import '@vaadin/flow-frontend/templates/ReflectivelyReferencedComponent.ts';
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import 'package-outside-npm/index.js';
import 'package2-outside-npm/index.js';
import 'Frontend/jsonloader.js';
import 'Frontend/testscopebuttonloader.js';
import 'Frontend/testscopemaploader.js';