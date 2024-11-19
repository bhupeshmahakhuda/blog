import React from 'react';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import { Route, Routes } from 'react-router-dom';

import Blog from './blog';
import Post from './post';
import Tag from './tag';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="blog/*" element={<Blog />} />
        <Route path="post/*" element={<Post />} />
        <Route path="tag/*" element={<Tag />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
