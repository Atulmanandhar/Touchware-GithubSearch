import ReactPaginate from "react-paginate";

interface Props {
  totalPages: number;
  currentLimit: number;
  onPageChange: (pageNo: number) => void;
  currentPage: number;
}

const CustomPagination = ({
  totalPages,
  currentLimit,
  onPageChange,
  currentPage,
}: Props) => {
  //dividing by 1000 as the github v3 api doesnt allow to fetch after item 1000
  const calcPageCount = Math.ceil(
    Math.min(totalPages / currentLimit, 1000 / currentLimit)
  );

  const handlePageChange = ({ selected }: { selected: number }) => {
    onPageChange(selected + 1);
  };

  return (
    <div>
      <ReactPaginate
        pageCount={calcPageCount}
        onPageChange={handlePageChange}
        forcePage={currentPage - 1}
        marginPagesDisplayed={2}
        previousLabel="<"
        nextLabel=">"
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
};

export default CustomPagination;
