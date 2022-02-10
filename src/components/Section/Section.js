import PropTypes from 'prop-types';
import './Section.css'

function Section({ title, children }) {
  return (
    <div className="section">
      {title && <h2 className="section_title"> {title}</h2>}

      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;