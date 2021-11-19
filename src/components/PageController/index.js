import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';

import './PageController.scss';

const PageController = (props) => {
  const { pages, currentPage, onChange } = props;

  const onChangePage = (e, page) => {
    onChange(page);
  };

  return(
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <Pagination
        count={pages}
        page={currentPage}
        onChange={onChangePage}
        color="primary"
      />
    </nav>
  )
};

PageController.propTypes = {
  pages: PropTypes.number,
  currentPage: PropTypes.number,
  onChange: PropTypes.func,
};

PageController.defaultProps = {
  pages: 1,
  currentPage: 1,
  onChange: () => {},
};

export default PageController;
