/* @ds-bundle: {"format":4,"namespace":"INTIADesignSystem_dce07d","components":[{"name":"GroupMark","sourcePath":"components/brand/GroupMark.jsx"},{"name":"Nacre","sourcePath":"components/brand/Nacre.jsx"},{"name":"PerfumeLabel","sourcePath":"components/brand/PerfumeLabel.jsx"},{"name":"Bottle","sourcePath":"components/commerce/Bottle.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"ScentPyramid","sourcePath":"components/commerce/ScentPyramid.jsx"},{"name":"ScentSelector","sourcePath":"components/commerce/ScentSelector.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/brand/GroupMark.jsx":"306e38ec85e7","components/brand/Nacre.jsx":"80047b80b18c","components/brand/PerfumeLabel.jsx":"2d06dd0899c9","components/commerce/Bottle.jsx":"24e6c99c2dad","components/commerce/ProductCard.jsx":"9e02b0fb60f8","components/commerce/ScentPyramid.jsx":"262802bfaef7","components/commerce/ScentSelector.jsx":"09c737ca21fd","components/content/Accordion.jsx":"200fe20ef3a8","components/content/Quote.jsx":"9267daca5236","components/content/SectionHeader.jsx":"f0fcfa0d2fe9","components/core/Badge.jsx":"c6ed29556276","components/core/Button.jsx":"69bc60034052","components/core/Icon.jsx":"bffd9a42cf94","components/core/IconButton.jsx":"465d6c999ff2","components/core/Rule.jsx":"3da9692609f6","components/forms/Checkbox.jsx":"ee8dd29a0fa6","components/forms/Input.jsx":"1555632e5faf","components/forms/QuantityStepper.jsx":"dd3e1f4a459d","components/forms/Select.jsx":"921d08346f70","components/navigation/Footer.jsx":"f03f175e2141","components/navigation/NavBar.jsx":"b6d740d382f1","ui_kits/intia-web/App.jsx":"889b248c42cd","ui_kits/intia-web/BagDrawer.jsx":"beac94a633c5","ui_kits/intia-web/HomeScreen.jsx":"9350036bc1ed","ui_kits/intia-web/LibraryScreen.jsx":"b92c376ac075","ui_kits/intia-web/ProductScreen.jsx":"2b4c4e09fe8e","ui_kits/intia-web/data.js":"c472cc6fd03e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.INTIADesignSystem_dce07d = window.INTIADesignSystem_dce07d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GroupMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The INTIA dome, coloured by olfactive group — the brand's coding device:
   "the half-circle shape is coloured based on the perfume group". */
function GroupMark({
  color = 'var(--group-flower)',
  size = 48,
  nacre = true,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size / 2,
      borderRadius: 'var(--radius-dome)',
      background: color,
      position: 'relative',
      overflow: 'hidden',
      display: 'block'
    }
  }, nacre && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--nacre-veil)',
      opacity: .42,
      mixBlendMode: 'screen'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { GroupMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GroupMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Nacre.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The iridescent veil — "a whisper of inner glow beneath matte restraint".
   Wrap any neutral surface; never use over a saturated colour. */
function Nacre({
  intensity = .5,
  animated = false,
  radius = 'inherit',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: radius,
      pointerEvents: 'none',
      opacity: intensity,
      background: 'var(--nacre-sheen)',
      backgroundSize: animated ? '220% 220%' : '100% 100%',
      animation: animated ? 'intia-nacre 9s var(--ease-breath) infinite alternate' : 'none',
      mixBlendMode: 'soft-light',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Nacre });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Nacre.jsx", error: String((e && e.message) || e) }); }

// components/brand/PerfumeLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The pack/label lockup exactly as specified on the brand whiteboard:
   INTIA / THE PERFUME / 00N GROUP / NAME, with the group-coloured dome. */
function PerfumeLabel({
  index = '001',
  group = 'GOURMAND',
  name = 'ROAST VANILLA',
  color = 'var(--group-gourmand)',
  volume = '50 ml e',
  surface = 'pearl',
  style,
  ...rest
}) {
  const dark = surface === 'ink';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-5)',
      minWidth: 210,
      background: dark ? 'var(--wash-ink)' : surface === 'ivory' ? 'var(--surface-card)' : 'var(--wash-pearl)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-strong)',
      border: '1px solid ' + (dark ? 'var(--border-inverse)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: dark ? 'none' : 'var(--shadow-pearl)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--nacre-veil)',
      opacity: dark ? .14 : .5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: dark ? '../../assets/logo-wordmark-ivory.png' : '../../assets/logo-wordmark.png',
    alt: "INTIA",
    style: {
      width: 88,
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(246,242,236,.66)' : 'var(--text-secondary)'
    }
  }, "The Perfume"), /*#__PURE__*/React.createElement(__ds_scope.GroupMark, {
    color: color,
    size: 54,
    style: {
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(246,242,236,.66)' : 'var(--text-secondary)'
    }
  }, index, " ", group), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      lineHeight: 1.15,
      textAlign: 'center',
      letterSpacing: '0.01em'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      letterSpacing: '0.14em',
      color: dark ? 'rgba(246,242,236,.5)' : 'var(--text-muted)'
    }
  }, volume));
}
Object.assign(__ds_scope, { PerfumeLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PerfumeLabel.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Bottle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Geometric stand-in for the packaging described in the brief: frosted-glass
   body, rose-gold or wood cap, capsule silhouette. Not a packshot. */
function Bottle({
  tint = 'var(--pearl-200)',
  cap = 'var(--rosegold-500)',
  form = 'flacon',
  width = 96,
  label,
  style,
  ...rest
}) {
  const h = form === 'tube' ? width * 2.3 : width * 2.05;
  const capH = form === 'tube' ? h * 0.09 : h * 0.15;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width,
      height: h,
      display: 'flex',
      flexDirection: form === 'tube' ? 'column-reverse' : 'column',
      alignItems: 'center',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: width * (form === 'tube' ? 0.5 : 0.44),
      height: capH,
      background: cap,
      borderRadius: form === 'tube' ? '0 0 var(--radius-sm) var(--radius-sm)' : 'var(--radius-dome)'
    }
  }), form !== 'tube' && /*#__PURE__*/React.createElement("div", {
    style: {
      width: width * 0.24,
      height: h * 0.035,
      background: cap,
      opacity: .55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: tint,
      borderRadius: form === 'tube' ? 'var(--radius-lg) var(--radius-lg) 4px 4px' : 'var(--radius-capsule)',
      boxShadow: 'var(--shadow-pearl)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: '0 0 16%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--nacre-veil)',
      opacity: .55
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--graphite-700)',
      opacity: .72
    }
  }, label)));
}
Object.assign(__ds_scope, { Bottle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Bottle.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ScentPyramid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ROWS = [['top', 'Top'], ['middle', 'Heart'], ['base', 'Base']];
function ScentPyramid({
  top = [],
  middle = [],
  base = [],
  accent = 'var(--rosegold-500)',
  style,
  ...rest
}) {
  const map = {
    top,
    middle,
    base
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }), ROWS.map(([k, l], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '88px 1fr',
      gap: 'var(--space-5)',
      alignItems: 'baseline',
      padding: 'var(--space-4) 0',
      borderTop: i === 0 ? '1px solid var(--border-hairline)' : 'none',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-ls)',
      textTransform: 'uppercase',
      color: accent
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      lineHeight: 1.45,
      color: 'var(--text-strong)'
    }
  }, (map[k] || []).join(' · ')))));
}
Object.assign(__ds_scope, { ScentPyramid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ScentPyramid.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ScentSelector.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScentSelector({
  scents = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      ...style
    }
  }), scents.map(s => {
    const on = s.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => onChange && onChange(s.id),
      "aria-pressed": on,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-2)',
        background: 'transparent',
        border: 0,
        padding: '6px 4px 0',
        cursor: 'pointer',
        borderBottom: '1px solid ' + (on ? 'var(--graphite-900)' : 'transparent'),
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.GroupMark, {
      color: s.color,
      size: 42
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--eyebrow-size)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, s.label));
  }));
}
Object.assign(__ds_scope, { ScentSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ScentSelector.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  attribution,
  tone = 'ink',
  style,
  ...rest
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 'var(--max-narrow)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--display-3-size)',
      lineHeight: 1.28,
      color: inv ? 'var(--text-inverse)' : 'var(--text-strong)'
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-ls)',
      textTransform: 'uppercase',
      color: inv ? 'var(--rosegold-300)' : 'var(--text-muted)'
    }
  }, attribution));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'ink',
  size = '2',
  style,
  ...rest
}) {
  const fg = tone === 'inverse' ? 'var(--text-inverse)' : 'var(--text-strong)';
  const sizes = {
    '1': 'var(--display-1-size)',
    '2': 'var(--display-2-size)',
    '3': 'var(--display-3-size)'
  };
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 'var(--max-narrow)' : 'none',
      margin: align === 'center' ? '0 auto' : 0,
      ...style
    }
  }), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-ls)',
      textTransform: 'uppercase',
      color: tone === 'inverse' ? 'var(--rosegold-300)' : 'var(--text-muted)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: sizes[size],
      lineHeight: 1.08,
      letterSpacing: '-0.01em',
      color: fg,
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-lh)',
      color: tone === 'inverse' ? 'rgba(246,242,236,.72)' : 'var(--text-secondary)',
      maxWidth: 'var(--max-prose)',
      margin: 0
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: 'var(--ivory-200)',
    fg: 'var(--graphite-700)',
    bd: 'var(--border-hairline)'
  },
  ink: {
    bg: 'var(--graphite-900)',
    fg: 'var(--ivory-100)',
    bd: 'var(--graphite-900)'
  },
  pearl: {
    bg: 'var(--pearl-200)',
    fg: 'var(--graphite-800)',
    bd: 'transparent'
  },
  metal: {
    bg: 'transparent',
    fg: 'var(--rosegold-700)',
    bd: 'var(--border-metal)'
  },
  success: {
    bg: 'var(--status-success-tint)',
    fg: 'var(--status-success)',
    bd: 'transparent'
  },
  warning: {
    bg: 'var(--status-warning-tint)',
    fg: 'var(--status-warning)',
    bd: 'transparent'
  },
  danger: {
    bg: 'var(--status-danger-tint)',
    fg: 'var(--status-danger)',
    bd: 'transparent'
  }
};
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 26,
      padding: '0 13px',
      background: t.bg,
      color: t.fg,
      border: '1px solid ' + t.bd,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-ls)',
      textTransform: 'uppercase',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  name,
  kind = 'The Perfume',
  index,
  group,
  price,
  volume = '50 ml',
  tint = 'var(--pearl-200)',
  accent = 'var(--group-flower)',
  image,
  form = 'flacon',
  badge,
  onSelect,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
    onClick: onSelect,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      cursor: onSelect ? 'pointer' : 'default',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'var(--transition-surface)',
      transform: hover ? 'translateY(-5px)' : 'none',
      boxShadow: hover ? 'var(--shadow-lift)' : 'var(--shadow-soft)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: tint,
      height: 290,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--nacre-veil)',
      opacity: .5
    }
  }), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'relative'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Bottle, {
    form: form,
    tint: "rgba(255,255,255,.55)",
    cap: accent,
    width: form === 'tube' ? 86 : 96,
    style: {
      position: 'relative'
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "pearl"
  }, badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.GroupMark, {
    color: accent,
    size: 30
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, index ? index + ' · ' : '', group || kind), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-4-size)',
      lineHeight: 1.15,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 'auto',
      paddingTop: 'var(--space-4)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      color: 'var(--text-secondary)',
      letterSpacing: '0.06em'
    }
  }, /*#__PURE__*/React.createElement("span", null, volume), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, price))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.469.0/icons/';
/* INTIA uses Lucide (1.5px stroke) as its icon set — see readme ICONOGRAPHY. */
function Icon({
  name = 'sparkles',
  size = 18,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = CDN + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flex: '0 0 auto',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }), items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: 'var(--space-5) 0',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--body-md-size)',
        letterSpacing: '0.04em',
        color: 'var(--text-strong)'
      }
    }, it.title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: on ? 'minus' : 'plus',
      size: 16,
      style: {
        color: 'var(--text-muted)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: on ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height var(--dur-base) var(--ease-quiet)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        padding: '0 0 var(--space-5)',
        maxWidth: 'var(--max-prose)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-light)',
        fontSize: 'var(--body-md-size)',
        lineHeight: 'var(--body-md-lh)',
        color: 'var(--text-secondary)'
      }
    }, it.body)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--button-size)',
  letterSpacing: 'var(--button-ls)',
  textTransform: 'uppercase',
  fontWeight: 'var(--weight-regular)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  transition: 'var(--transition-control)',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    height: 38,
    padding: '0 20px'
  },
  md: {
    height: 46,
    padding: '0 28px'
  },
  lg: {
    height: 56,
    padding: '0 40px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    borderColor: 'var(--action-primary-bg)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--action-secondary-fg)',
    borderColor: 'var(--action-secondary-border)'
  },
  metal: {
    background: 'transparent',
    color: 'var(--action-metal-fg)',
    borderColor: 'var(--action-metal-border)'
  },
  pearl: {
    background: 'var(--surface-pearl)',
    color: 'var(--graphite-900)',
    borderColor: 'transparent'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    borderColor: 'transparent',
    padding: '0 4px'
  },
  inverse: {
    background: 'var(--ivory-100)',
    color: 'var(--graphite-900)',
    borderColor: 'var(--ivory-100)'
  }
};
const hovers = {
  primary: {
    background: 'var(--action-primary-bg-hover)',
    borderColor: 'var(--action-primary-bg-hover)'
  },
  secondary: {
    background: 'var(--action-secondary-bg-hover)',
    borderColor: 'var(--ash-300)'
  },
  metal: {
    background: 'var(--action-metal-bg-hover)'
  },
  pearl: {
    background: 'var(--pearl-300)'
  },
  ghost: {
    color: 'var(--graphite-900)'
  },
  inverse: {
    background: 'var(--ivory-300)',
    borderColor: 'var(--ivory-300)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...(disabled ? {
      opacity: .36,
      cursor: 'not-allowed'
    } : null),
    ...(press && !disabled ? {
      opacity: .84
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: 'translateY(0.5px)'
    }
  }, children), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 15
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon = 'search',
  label,
  size = 'md',
  variant = 'plain',
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const v = variant === 'outline' ? {
    border: '1px solid var(--border-hairline)'
  } : {
    border: '1px solid transparent'
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover && !disabled ? 'var(--ivory-200)' : 'transparent',
      color: 'var(--text-primary)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .38 : 1,
      transition: 'var(--transition-control)',
      ...v,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rule({
  label,
  tone = 'hairline',
  align = 'center',
  style,
  ...rest
}) {
  const color = tone === 'metal' ? 'var(--border-metal)' : tone === 'inverse' ? 'var(--border-inverse)' : 'var(--border-hairline)';
  const line = /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: color
    }
  });
  if (!label) return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
    style: {
      border: 0,
      height: 1,
      background: color,
      margin: 0,
      ...style
    }
  }));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      ...style
    }
  }), align !== 'left' && line, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-ls)',
      textTransform: 'uppercase',
      color: tone === 'inverse' ? 'var(--text-inverse)' : tone === 'metal' ? 'var(--rosegold-700)' : 'var(--text-muted)'
    }
  }, label), line);
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    readOnly: !onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: 2,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (checked ? 'var(--graphite-900)' : 'var(--border-hairline)'),
      background: checked ? 'var(--graphite-900)' : 'var(--surface-card)',
      borderRadius: 'var(--radius-sm)',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    color: "var(--ivory-100)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-md-size)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: uid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--field-height)',
      padding: '0 14px',
      background: disabled ? 'var(--ivory-200)' : 'var(--surface-card)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--body-md-size)',
      border: '1px solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--graphite-700)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      transition: 'var(--transition-control)'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuantityStepper({
  value = 1,
  min = 1,
  max = 9,
  onChange,
  style,
  ...rest
}) {
  const step = d => {
    const n = Math.min(max, Math.max(min, value + d));
    if (n !== value && onChange) onChange(n);
  };
  const btn = {
    width: 38,
    height: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    color: 'var(--text-primary)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 'var(--control-height)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      opacity: value <= min ? .3 : 1
    },
    onClick: () => step(-1),
    "aria-label": "Decrease quantity"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 28,
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-md-size)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      opacity: value >= max ? .3 : 1
    },
    onClick: () => step(1),
    "aria-label": "Increase quantity"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 14
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    id: uid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: '100%',
      height: 'var(--field-height)',
      padding: '0 38px 0 14px',
      appearance: 'none',
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--body-md-size)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      outline: 'none'
    }
  }), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  columns = [],
  logo = 'assets/logo-lockup-ivory.png',
  note = 'INTIA — Silent Radiance. Soft Strength. Still Indulgence.',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--text-inverse)',
      padding: 'var(--space-9) var(--gutter-page) var(--space-6)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr repeat(' + Math.max(columns.length, 1) + ',1fr)',
      gap: 'var(--space-8)',
      maxWidth: 'var(--max-content)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "INTIA",
    style: {
      width: 104
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--body-sm-size)',
      lineHeight: 1.7,
      color: 'rgba(246,242,236,.62)',
      maxWidth: '34ch'
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'flex-end',
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Join the letter",
    placeholder: "Email address"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse",
    size: "md"
  }, "Join"))), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--rosegold-300)'
    }
  }, c.title), c.items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--body-sm-size)',
      color: 'rgba(246,242,236,.72)'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: 'var(--space-8) auto 0',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-inverse)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(246,242,236,.44)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Biopharma Laboratories Italy s.r.l. \u2014 Bologna"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 INTIA")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  links = [],
  active,
  onNavigate,
  bagCount = 0,
  tone = 'light',
  logo = 'assets/logo-wordmark.png',
  style,
  ...rest
}) {
  const inv = tone === 'inverse';
  const fg = inv ? 'var(--text-inverse)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--gutter-page)',
      background: inv ? 'transparent' : 'var(--frost-bg)',
      backdropFilter: inv ? 'none' : 'var(--frost-blur)',
      WebkitBackdropFilter: inv ? 'none' : 'var(--frost-blur)',
      borderBottom: '1px solid ' + (inv ? 'var(--border-inverse)' : 'var(--border-hairline)'),
      color: fg,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center',
      flex: 1,
      minWidth: 0,
      paddingRight: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNavigate && onNavigate(l.id),
    style: {
      background: 'transparent',
      border: 0,
      padding: '4px 0',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--label-size)',
      letterSpacing: 'var(--label-ls)',
      textTransform: 'uppercase',
      color: fg,
      opacity: active === l.id ? 1 : .62,
      borderBottom: '1px solid ' + (active === l.id ? 'currentColor' : 'transparent'),
      transition: 'var(--transition-control)'
    }
  }, l.label))), /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "INTIA",
    style: {
      height: 19,
      flex: '0 0 auto',
      filter: inv ? 'invert(1) brightness(1.6)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-1)',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Search"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "user",
    label: "Account"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "shopping-bag",
    label: "Bag"
  }), bagCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      minWidth: 16,
      height: 16,
      padding: '0 4px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--graphite-900)',
      color: 'var(--ivory-100)',
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, bagCount))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intia-web/App.jsx
try { (() => {
const {
  NavBar,
  Footer
} = window.INTIADesignSystem_dce07d;
function App() {
  const [route, setRoute] = React.useState({
    name: 'home'
  });
  const [bag, setBag] = React.useState([]);
  const [bagOpen, setBagOpen] = React.useState(false);
  const open = id => {
    setRoute({
      name: 'product',
      id
    });
    window.scrollTo(0, 0);
  };
  const add = (s, qty) => {
    setBag(b => {
      const e = b.find(x => x.id === s.id);
      return e ? b.map(x => x.id === s.id ? {
        ...x,
        qty: x.qty + qty
      } : x) : [...b, {
        ...s,
        qty
      }];
    });
    setBagOpen(true);
  };
  const setQty = (id, n) => setBag(b => b.map(x => x.id === id ? {
    ...x,
    qty: n
  } : x));
  const links = [{
    id: 'perfume',
    label: 'The Perfume'
  }, {
    id: 'longevity',
    label: 'Scentual Longevity'
  }, {
    id: 'house',
    label: 'The House'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logo: "../../assets/logo-wordmark.png",
    links: links,
    active: route.name === 'home' ? null : 'perfume',
    bagCount: bag.reduce((a, i) => a + i.qty, 0),
    onNavigate: id => {
      setRoute({
        name: id === 'perfume' ? 'library' : 'home'
      });
      window.scrollTo(0, 0);
    }
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      const b = e.target.closest('[aria-label="Bag"]');
      if (b) setBagOpen(true);
    }
  }, route.name === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    onOpen: open,
    onShop: () => setRoute({
      name: 'library'
    })
  }), route.name === 'library' && /*#__PURE__*/React.createElement(LibraryScreen, {
    onOpen: open
  }), route.name === 'product' && /*#__PURE__*/React.createElement(ProductScreen, {
    id: route.id,
    onSelect: id => setRoute({
      name: 'product',
      id
    }),
    onAdd: add
  })), /*#__PURE__*/React.createElement(Footer, {
    logo: "../../assets/logo-lockup-ivory.png",
    note: "INTIA \u2014 Silent Radiance. Soft Strength. Still Indulgence.",
    columns: [{
      title: 'Shop',
      items: ['The Perfume', 'The Cream', 'The Gloss', 'The Langerie']
    }, {
      title: 'House',
      items: ['Our story', 'Dualities', 'Journal']
    }, {
      title: 'Care',
      items: ['Shipping', 'Returns', 'Contact']
    }]
  }), /*#__PURE__*/React.createElement(BagDrawer, {
    open: bagOpen,
    items: bag,
    onClose: () => setBagOpen(false),
    onQty: setQty
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intia-web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intia-web/BagDrawer.jsx
try { (() => {
const {
  Button,
  IconButton,
  QuantityStepper,
  Bottle,
  Checkbox,
  GroupMark
} = window.INTIADesignSystem_dce07d;
function BagDrawer({
  open,
  items,
  onClose,
  onQty
}) {
  const total = items.reduce((a, i) => a + i.qty * parseInt(i.price.replace(/\D/g, ''), 10), 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      pointerEvents: open ? 'auto' : 'none',
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-overlay)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-quiet)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 430,
      background: 'var(--surface-card)',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform var(--dur-base) var(--ease-quiet)',
      boxShadow: 'var(--shadow-lift)',
      borderRadius: 'var(--radius-lg) 0 0 var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "intia-eyebrow",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Your bag (", items.length, ")"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Close bag",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--body-md-size)'
    }
  }, "Your bag is empty."), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '76px 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: i.tint,
      height: 100,
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Bottle, {
    width: 34,
    tint: "rgba(255,255,255,.6)",
    cap: i.color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(GroupMark, {
    color: i.color,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "intia-eyebrow",
    style: {
      color: 'var(--text-muted)'
    }
  }, i.index, " ", i.group)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: i.qty,
    onChange: n => onQty(i.id, n)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-sm-size)'
    }
  }, i.price)))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'var(--space-5)',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Add a hand-written note",
    description: "Free, written in-house"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-md-size)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "\u20AC", total)), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true
  }, "Checkout"))));
}
Object.assign(window, {
  BagDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intia-web/BagDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intia-web/HomeScreen.jsx
try { (() => {
const {
  SectionHeader,
  Button,
  ProductCard,
  Quote,
  Rule,
  Bottle,
  GroupMark,
  Nacre,
  Icon
} = window.INTIADesignSystem_dce07d;
function Hero({
  onShop
}) {
  const c = window.INTIA_DATA.copy;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 660,
      display: 'grid',
      gridTemplateColumns: '1.02fr .98fr',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: 'var(--space-9) var(--gutter-page)',
      background: 'var(--wash-ivory)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: 580
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "intia-eyebrow",
    style: {
      color: 'var(--rosegold-700)'
    }
  }, c.heroKicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-1-size)',
      lineHeight: 'var(--display-1-lh)',
      letterSpacing: 'var(--display-1-ls)',
      color: 'var(--text-strong)'
    }
  }, c.heroTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-lh)',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, c.heroLede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onShop,
    iconRight: "arrow-right"
  }, "The Perfume"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "metal"
  }, "Scentual Longevity")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-3)'
    }
  }, c.tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 520,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: "url('../../assets/imagery/still-amber-glass.png') center/cover"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 20,
      left: 24,
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'rgba(246,242,236,.8)'
    }
  }, "Brand imagery \u2014 from the INTIA brief")));
}
function Mistifications() {
  const c = window.INTIA_DATA.copy;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) var(--gutter-page)',
      background: 'var(--surface-pearl)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Nacre, {
    intensity: 0.5,
    animated: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, c.mistifications.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-4-size)',
      color: 'var(--text-strong)'
    }
  }, m)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--rosegold-700)',
      alignSelf: 'center'
    }
  }, "Repair \xB7 Refresh \xB7 Recharge")));
}
function Library({
  onOpen
}) {
  const p = window.INTIA_DATA.perfumes;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) var(--gutter-page)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "The Perfume",
    title: "Five scents, coded by group",
    lede: "The half-circle carries the olfactive group \u2014 gourmand, airy, flower, citrus, cherry. The base is always the same."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, p.slice(0, 3).map(s => /*#__PURE__*/React.createElement(ProductCard, {
    key: s.id,
    index: s.index,
    group: s.group,
    name: s.name,
    price: s.price,
    tint: s.tint,
    accent: s.color,
    badge: s.badge,
    onSelect: () => onOpen(s.id)
  })))));
}
function Dualities() {
  const c = window.INTIA_DATA.copy;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: 'var(--space-10) var(--gutter-page)',
      background: "var(--surface-ink) url('../../assets/imagery/wash-bronze-dust.png') center/cover",
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-ink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 900,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-ivory.png",
    style: {
      width: 46,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement(Quote, {
    tone: "inverse",
    attribution: "Our philosophy lives in dualities"
  }, "INTIA is beauty in quiet form \u2014 the stillness between breath and glow."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)',
      width: '100%',
      marginTop: 'var(--space-4)'
    }
  }, c.dualities.map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rosegold-300)'
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 24,
      color: 'rgba(246,242,236,.74)'
    }
  }, b))))));
}
function Longevity({
  onOpen
}) {
  const l = window.INTIA_DATA.longevity;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) var(--gutter-page)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Line 01",
    title: "Scentual Longevity",
    lede: "Total repair featuring KeraBio K31. Textures named for what they feel like: cashmere, fine silk, satin, lacquer."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)'
    }
  }, l.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    group: p.kind + ' ' + p.sub,
    price: p.price,
    volume: p.volume,
    form: p.form,
    tint: p.tint,
    accent: p.accent,
    badge: p.badge
  })))));
}
function HomeScreen({
  onOpen,
  onShop
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onShop: onShop
  }), /*#__PURE__*/React.createElement(Mistifications, null), /*#__PURE__*/React.createElement(Library, {
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement(Dualities, null), /*#__PURE__*/React.createElement(Longevity, null));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intia-web/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intia-web/LibraryScreen.jsx
try { (() => {
const {
  SectionHeader,
  ProductCard,
  Select,
  Rule,
  GroupMark
} = window.INTIADesignSystem_dce07d;
function LibraryScreen({
  onOpen
}) {
  const [sort, setSort] = React.useState('By group');
  const p = window.INTIA_DATA.perfumes;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--gutter-page) var(--space-9)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "The Perfume",
    title: "Hair perfume, 50 ml",
    lede: "Multipeptide hair perfume: fragrance that stays, odour that doesn't.",
    size: "2"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, p.map(s => /*#__PURE__*/React.createElement(GroupMark, {
    key: s.id,
    color: s.color,
    size: 34,
    label: s.index
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Sort",
    value: sort,
    onChange: e => setSort(e.target.value),
    options: ['By group', 'Newest', 'Price']
  }))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, p.map(s => /*#__PURE__*/React.createElement(ProductCard, {
    key: s.id,
    index: s.index,
    group: s.group,
    name: s.name,
    price: s.price,
    tint: s.tint,
    accent: s.color,
    badge: s.badge,
    onSelect: () => onOpen(s.id)
  })))));
}
Object.assign(window, {
  LibraryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intia-web/LibraryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intia-web/ProductScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Bottle,
  ScentSelector,
  ScentPyramid,
  Accordion,
  QuantityStepper,
  Rule,
  Icon,
  PerfumeLabel,
  Nacre
} = window.INTIADesignSystem_dce07d;
function ProductScreen({
  id,
  onSelect,
  onAdd
}) {
  const data = window.INTIA_DATA;
  const s = data.perfumes.find(x => x.id === id) || data.perfumes[0];
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 660
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: s.tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Nacre, {
    intensity: 0.5
  }), /*#__PURE__*/React.createElement(Bottle, {
    width: 200,
    tint: "rgba(255,255,255,.6)",
    cap: s.color,
    label: s.group,
    style: {
      position: 'relative'
    }
  }), s.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 26,
      left: 26
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "pearl"
  }, s.badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 20,
      left: 26,
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Packshot placeholder")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9) var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "intia-eyebrow",
    style: {
      color: s.color
    }
  }, s.index, " \xB7 ", s.group, " \xB7 ", s.family), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-2-size)',
      lineHeight: 'var(--display-2-lh)'
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-lh)',
      color: 'var(--text-secondary)'
    }
  }, s.line), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-secondary)'
    }
  }, data.copy.back), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(ScentSelector, {
    value: s.id,
    onChange: onSelect,
    scents: data.perfumes.map(x => ({
      id: x.id,
      label: x.name,
      color: x.color
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onAdd(s, qty),
    style: {
      flex: 1
    }
  }, "Add to bag \u2014 ", s.price)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--body-sm-size)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 14
  }), " Dispatched from Bologna within 48 hours \xB7 50 ml e"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9) var(--gutter-page)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 250px',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "metal",
    label: "The olfactory pyramid"
  }), s.pyramidTbc ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-4-size)',
      color: 'var(--text-muted)'
    }
  }, "Pyramid to be confirmed by the perfumer.") : /*#__PURE__*/React.createElement(ScentPyramid, {
    accent: s.color,
    top: s.top,
    middle: s.middle,
    base: s.base
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: 'How to use',
      body: data.copy.directions
    }, {
      title: 'Full ingredients (INCI)',
      body: data.copy.inci
    }, {
      title: 'Shipping & returns',
      body: 'Dispatched from Bologna within 48 hours. PAO 12M. External use only — avoid eyes.'
    }]
  })), /*#__PURE__*/React.createElement(PerfumeLabel, {
    index: s.index,
    group: s.group,
    name: s.name,
    color: s.color
  }))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intia-web/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intia-web/data.js
try { (() => {
/* Transcribed from the INTIA brand brief + product whiteboard (uploads/INTIA.pdf,
   uploads/INTIA - BRAND BRIEF.pdf) and the earlier INCI/pyramid files.
   Prices and volumes are the client's own figures where stated. */
window.INTIA_DATA = {
  perfumes: [{
    id: 'roast-vanilla',
    index: '001',
    group: 'Gourmand',
    name: 'Roast Vanilla',
    price: '€25',
    color: 'var(--group-gourmand)',
    tint: 'var(--group-gourmand-tint)',
    family: 'Wood × Pearl',
    line: 'Salted praline and vanilla under a pearly glow.',
    top: ['Pistachio', 'Almond'],
    middle: ['Heliotrope', 'Jasmin'],
    base: ['Caramel', 'Vanilla', 'Salt', 'Sandalwood']
  }, {
    id: 'bare-air',
    index: '002',
    group: 'Airy',
    name: 'Bare Air',
    price: '€35',
    color: 'var(--group-airy)',
    tint: 'var(--group-airy-tint)',
    family: 'Glass × Pearl',
    line: 'The no-perfume perfume. Skin, air, light.',
    badge: 'Hero',
    top: [],
    middle: [],
    base: [],
    pyramidTbc: true
  }, {
    id: 'ambrosia',
    index: '003',
    group: 'Flower',
    name: 'Ambrosia',
    price: '€25',
    color: 'var(--group-flower)',
    tint: 'var(--group-flower-tint)',
    family: 'Gold × Pearl',
    line: 'Sun-warmed nectar held down by dry sandalwood.',
    top: ['Cassis', 'Grapefruit', 'Mandarin', 'Green'],
    middle: ['Mango', 'Apple', 'Peach', 'Pineapple', 'Rose', 'Violet'],
    base: ['Sandalwood']
  }, {
    id: 'crispy-orange',
    index: '004',
    group: 'Citrus',
    name: 'Crispy Orange',
    price: '€25',
    color: 'var(--group-citrus)',
    tint: 'var(--group-citrus-tint)',
    family: 'Steel × Pearl',
    line: 'Cold-pressed citrus, cut clean.',
    top: [],
    middle: [],
    base: [],
    pyramidTbc: true
  }, {
    id: 'black-cherry',
    index: '005',
    group: 'Cherry on top',
    name: 'Black Cherry',
    price: '€25',
    color: 'var(--group-cherry)',
    tint: 'var(--group-cherry-tint)',
    family: 'Stone × Pearl',
    line: 'Aldehydic cherry over balsamic caramel.',
    top: ['Orange', 'Citrus', 'Aldehydic', 'Bergamot'],
    middle: ['Floral', 'Confer', 'Tropical fruits', 'Peach'],
    base: ['Balsamic', 'Caramel']
  }],
  longevity: [{
    id: 'nectar',
    name: 'Nectar',
    kind: 'The Cream',
    sub: '(Moon)',
    volume: '150 ml',
    price: '€20',
    form: 'tube',
    tint: 'var(--sand-100)',
    accent: 'var(--bronze-500)'
  }, {
    id: 'gloss',
    name: 'Gloss',
    kind: 'The Oil',
    sub: '(Soul)',
    volume: '50 ml',
    price: '€25',
    form: 'flacon',
    tint: 'var(--matter-gold-tint)',
    accent: 'var(--matter-gold)'
  }, {
    id: 'langerie',
    name: 'The Langerie',
    kind: 'The Satin',
    sub: '(Satin)',
    volume: '50 ml',
    price: '€25',
    form: 'flacon',
    tint: 'var(--rosegold-100)',
    accent: 'var(--rosegold-500)'
  }, {
    id: 'lunar-elixir',
    name: 'Lunar Elixir',
    kind: 'The Elixir',
    sub: 'KeraDuo',
    volume: '—',
    price: 'Coming',
    form: 'flacon',
    tint: 'var(--matter-steel-tint)',
    accent: 'var(--matter-steel)',
    badge: 'Soon'
  }],
  copy: {
    tagline: 'Silent Radiance. Soft Strength. Still Indulgence.',
    heroKicker: 'SCENTual hair care',
    heroTitle: 'Where radiance whispers',
    heroLede: 'Each formula blends scientific performance with sensorial emotion — scent that stays, care that transforms, beauty that whispers.',
    promise: 'Formulas that work. Textures that ground. Design that breathes. Beauty that feels like peace.',
    mistifications: ['Take damage away', 'Take the city away', 'Take the stress away'],
    directions: 'Spray onto dry hair from 15–20 cm. Apply to lengths and ends. Reapply anytime.',
    inci: 'Aqua, Alcohol Denat, Polysorbate 20, Parfum, Zinc Ricinoleate, Hydrolyzed SR-(Tripeptide-137 Hexapeptide-40 sh-Polypeptide-184 sh-Polypeptide-146), Propanediol, Tetrasodium Glutamate Diacetate, Benzyl Alcohol, Linalool, Rose Ketones.',
    back: 'A fine-fragrance hybrid multipeptide perfume that refreshes hair and helps neutralize unwanted odours. Supports a stronger feel and helps repair the look of damage, leaving lengths soft, smooth, and refined over time.',
    dualities: [['Earth', 'Ether'], ['Structure', 'Flow'], ['Precision', 'Emotion'], ['Industrial', 'Intimate']]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intia-web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.GroupMark = __ds_scope.GroupMark;

__ds_ns.Nacre = __ds_scope.Nacre;

__ds_ns.PerfumeLabel = __ds_scope.PerfumeLabel;

__ds_ns.Bottle = __ds_scope.Bottle;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ScentPyramid = __ds_scope.ScentPyramid;

__ds_ns.ScentSelector = __ds_scope.ScentSelector;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
