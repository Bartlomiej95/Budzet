import React, { Fragment, useMemo } from "react";
import PropTypes from "prop-types";
import { InlineButton, RegularButton } from "./Button.css";
import { Link } from "react-router-dom";

function Button({ variant, children, ...props }) {
  const { to } = props;

  //funkcja useMemo będzie renderowac się tylko przy zmianie funkcji variant
  const Component = useMemo(() => {
    switch (variant) {
      case "inline":
        return InlineButton;
      case "regular":
        return RegularButton;
      default:
        return RegularButton;
    }
  }, [variant]);

  const content = useMemo(() => <Component {...props}>{children}</Component>, [
    props,
    children,
  ]);
  return to ? <Link {...props}>{content}</Link> : <> {content} </>;
}

Button.propTypes = {
  variant: PropTypes.oneOf(["inline", "regular"]),
};

export default Button;
