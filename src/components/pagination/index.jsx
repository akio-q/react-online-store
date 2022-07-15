// import { Component } from "react";

// export default class Pagination extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {

//         }
//     }

//     render () {
//         return (
//             <div>Hello from Pagination!</div>
//         );
//     }
// }

const PaginationItem = ({ pageIndex }) => {
    return (
        <li className="pagination__page-link">
            { pageIndex + 1 }
        </li>
    );
}

const Pagination = ({ totalPages = 0 }) => {
    return (
        <nav className="pagination">
            <div className="pagination__page-link previous" data-element="nav-prev">
                <i className="pagination__back icon-arrow-left"></i>
            </div>
            <ul className="pagination__page-list" data-element="pagination">
                {
                    new Array(totalPages).fill(1).map((_, index) => {
                        return <PaginationItem pageIndex={index} />
                    })
                }
            </ul>
            <div className="pagination__page-link next" data-element="nav-next">
            <i className="pagination__forward icon-arrow-right"></i>
            </div>
        </nav>
    );
}

export default Pagination;