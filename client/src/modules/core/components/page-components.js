/**
 * Some nice layout components courtesy of Toby. If you want your apps
 * to conform to the nqm style then keep using these.
 */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// material-ui
import FormControl from "@material-ui/core/FormControl";
import {withStyles} from "@material-ui/core/styles";
const styleSheet = () => {
  return {
    contentMain: {
      flex: "0 1 960px",
      fontSize: "calc(13px + (18 - 13) * (100vw - 320px) / (960 - 320))",
      padding: 10,
    },
    contentPage: {
      display: "flex",
      overflow: "auto",
    },
    contentSpacer: {
      flex: "1 1 auto",
    },
    datePicker: {
      marginRight: 5,
      position: "inherit",
    },
    editActions: {
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: "10px 0px",
    },
    pageHeading: {
      margin: "0px 0px 10px 0px",
    },
  };
};

const div = (props) => <div {...props} />;
const h1 = (props) => <h1 {...props} />;

const PageComponent = ({classes, className, component: Component, componentClassName, ...rest}) => {
  return (
    <Component className={classnames(classes[componentClassName], className)} {...rest} />
  );
};

PageComponent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  component: PropTypes.any,
  componentClassName: PropTypes.string.isRequired,
};

const PageComponentWithStyle = withStyles(styleSheet, {name: "nqm-page-components"})(PageComponent);

export const PageHeading = (props) => (
  <PageComponentWithStyle
    component={h1}
    componentClassName="pageHeading"
    {...props}
  />
);

export const ContentMain = (props) => (
  <PageComponentWithStyle
    component={div}
    componentClassName="contentMain"
    {...props}
  />
);

export const ContentPage = (props) => (
  <PageComponentWithStyle
    component={div}
    componentClassName="contentPage"
    {...props}
  />
);

export const ContentSpacer = (props) => (
  <PageComponentWithStyle
    component={div}
    componentClassName="contentSpacer"
    {...props}
  />
);

export const EditActions = (props) => (
  <PageComponentWithStyle
    component={div}
    componentClassName="editActions"
    {...props}
  />
);

export const DatePickerFormControl = (props) => (
  <PageComponentWithStyle
    component={FormControl}
    componentClassName="datePicker"
    {...props}
  />
);
