"use strict"

import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import App from "./views/App";
import FrontPage from "./views/front-page/front-page";
import NotFound from "./views/not-found/not-found";

export default (
   <Route
      path="/exlab"
      component={ App }
   >
      <IndexRoute
         name="home"
         component={ FrontPage }
      />
      <Route path="1" component={ FrontPage } />
      <Route path="2" component={ FrontPage } />
      <Route path="*" name="404" component={ NotFound } />
   </Route>
);
