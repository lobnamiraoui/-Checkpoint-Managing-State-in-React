import React from 'react';

function Filter({ setFilter, currentFilter }) {
  return (
    <div className="filters">
      <button
        onClick={() => setFilter('all')}
        className={currentFilter === 'all' ? 'active' : ''}
      >
        All Tasks
      </button>
      <button
        onClick={() => setFilter('active')}
        className={currentFilter === 'active' ? 'active' : ''}
      >
        Active Tasks
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={currentFilter === 'completed' ? 'active' : ''}
      >
        Completed Tasks
      </button>
    </div>
  );
}

export default Filter;