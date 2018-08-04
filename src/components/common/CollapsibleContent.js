import React from "react";
import PropTypes from "prop-types";

function CollapsibleContent({ children, isOpen }) {
  const style = isOpen
    ? {
        transition:
          "opacity .25s, font-size .5s .25s, margin .5s .25s, padding .5s .25s, height .5s"
      }
    : {
        fontSize: 0,
        margin: 0,
        opacity: 0,
        padding: 0,
        height: 0,
        transition:
          "font-size .5s .25s, margin .5s .25s, padding .5s .25s, height .5s"
      };
  return (
    <div style={style} className={!isOpen ? "collapsed" : undefined}>
      {children}
    </div>
  );
}

CollapsibleContent.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired
};

CollapsibleContent.defaultProps = {
  children: null
};

export default CollapsibleContent;
