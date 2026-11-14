import type {PrismTheme} from 'prism-react-renderer';

/**
 * Code themes built from the site palette (see src/css/custom.css):
 * blue keywords, teal strings, violet functions, orange numbers and
 * muted grey comments, on the same surface colours as the rest of the
 * site. One for light mode and one for the black dark mode.
 */

export const lightCodeTheme: PrismTheme = {
  plain: {color: '#0e1726', backgroundColor: '#f7f8fa'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#6b7383', fontStyle: 'italic'}},
    {types: ['punctuation'], style: {color: '#46505f'}},
    {types: ['operator'], style: {color: '#46505f'}},
    {types: ['keyword', 'atrule', 'important', 'rule'], style: {color: '#0b5ad9'}},
    {types: ['builtin', 'class-name', 'maybe-class-name', 'namespace'], style: {color: '#0847ad'}},
    {types: ['function', 'function-variable', 'method'], style: {color: '#6d28d9'}},
    {types: ['string', 'char', 'attr-value', 'url', 'template-string', 'regex'], style: {color: '#0f766e'}},
    {types: ['number', 'boolean', 'constant', 'symbol'], style: {color: '#c2410c'}},
    {types: ['variable', 'parameter', 'property'], style: {color: '#9a3412'}},
    {types: ['tag', 'selector', 'section'], style: {color: '#0b5ad9'}},
    {types: ['attr-name', 'key'], style: {color: '#6d28d9'}},
    {types: ['inserted'], style: {color: '#15803d'}},
    {types: ['deleted'], style: {color: '#b91c1c'}},
    {types: ['bold'], style: {fontWeight: 'bold'}},
    {types: ['italic'], style: {fontStyle: 'italic'}},
  ],
};

export const darkCodeTheme: PrismTheme = {
  plain: {color: '#e5e5e5', backgroundColor: '#111111'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#7c7c7c', fontStyle: 'italic'}},
    {types: ['punctuation'], style: {color: '#a3a3a3'}},
    {types: ['operator'], style: {color: '#a3a3a3'}},
    {types: ['keyword', 'atrule', 'important', 'rule'], style: {color: '#60a5fa'}},
    {types: ['builtin', 'class-name', 'maybe-class-name', 'namespace'], style: {color: '#93c5fd'}},
    {types: ['function', 'function-variable', 'method'], style: {color: '#c4a6ff'}},
    {types: ['string', 'char', 'attr-value', 'url', 'template-string', 'regex'], style: {color: '#5eead4'}},
    {types: ['number', 'boolean', 'constant', 'symbol'], style: {color: '#ffa45c'}},
    {types: ['variable', 'parameter', 'property'], style: {color: '#fdba74'}},
    {types: ['tag', 'selector', 'section'], style: {color: '#60a5fa'}},
    {types: ['attr-name', 'key'], style: {color: '#c4a6ff'}},
    {types: ['inserted'], style: {color: '#4ade80'}},
    {types: ['deleted'], style: {color: '#f87171'}},
    {types: ['bold'], style: {fontWeight: 'bold'}},
    {types: ['italic'], style: {fontStyle: 'italic'}},
  ],
};
