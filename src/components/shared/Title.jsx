/* eslint-disable react/prop-types */
import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "ChatBOX",
  description = "this is the Chat App called ChatBOX",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
