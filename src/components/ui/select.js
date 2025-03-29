import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Select = ({ children, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className={classNames('relative', className)} {...props}>
      <button
        type="button"
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleToggle}
      >
        {selectedValue || 'Select an option'}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onSelect: handleSelect })
          )}
        </div>
      )}
    </div>
  );
};

const SelectTrigger = ({ children }) => {
  return <>{children}</>;
};

const SelectContent = ({ children }) => {
  return <>{children}</>;
};

const SelectItem = ({ children, value, onSelect }) => {
  return (
    <div
      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect(value)}
    >
      {children}
    </div>
  );
};

const SelectValue = ({ placeholder }) => {
  return <span>{placeholder}</span>;
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  className: '',
};

SelectItem.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

SelectValue.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue };