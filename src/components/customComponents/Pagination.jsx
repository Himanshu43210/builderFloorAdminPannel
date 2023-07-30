import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ page, handlePageChange }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        defaultPage={1}
      />
    </Stack>
  );
}
