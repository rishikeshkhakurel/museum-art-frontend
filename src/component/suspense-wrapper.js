import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";

const SuspenseWrapper = (props) => {
  return <Suspense fallback={<Loading />}>{props?.children}</Suspense>;
};

SuspenseWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SuspenseWrapper;
