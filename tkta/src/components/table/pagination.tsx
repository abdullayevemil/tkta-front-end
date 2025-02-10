import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  currentPage: number;
  pagesCount: number;
  itemsPerPage: number;
  setCurrentPage: ({
    pageSize,
    pageIndex,
  }: {
    pageSize: number;
    pageIndex: number;
  }) => void;
}

export function TablePagination({
  currentPage,
  setCurrentPage,
  pagesCount,
  itemsPerPage,
}: Props) {
  const handlePageChange = (page: number) => {
    setCurrentPage({ pageSize: itemsPerPage, pageIndex: page });
  };

  return (
    <Pagination className="justify-end text-buttonHoverText">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="hover:cursor-pointer hover:text-textPrimary"
            onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
          />
        </PaginationItem>
        {Array.from({ length: pagesCount }, (_, index) => (
          <PaginationItem
            key={index}
            className={`rounded-lg ${
              currentPage === index ? "text-textPrimary" : ""
            }`}
          >
            <PaginationLink
              className="bg-buttonHoverText hover:cursor-pointer hover:text-textPrimary"
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationEllipsis></PaginationEllipsis>

        <PaginationItem>
          <PaginationNext
            className="hover:cursor-pointer hover:text-textPrimary"
            onClick={() =>
              currentPage < pagesCount - 1
                ? handlePageChange(currentPage + 1)
                : null
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
