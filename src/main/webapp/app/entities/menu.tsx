import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/blog">
        Blog
      </MenuItem>
      <MenuItem icon="asterisk" to="/post">
        Post
      </MenuItem>
      <MenuItem icon="asterisk" to="/tag">
        Tag
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
