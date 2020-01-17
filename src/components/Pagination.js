import React from "react";

export default function Pagination({ postperpage, totalpage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalpage / postperpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number =>
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
