import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

const TableHeader = ({
  name,
  sortable = true,
  sort_field,
  sort_direction,
  sortChanged = () => {},
  children,
}) => {
  return (
    <th onClick={(e) => sortChanged(name)}>
      <div className=" flex justify-between items-center gap-1 cursor-pointer">
        {children}
        <div>
          <ChevronUpIcon
            className={
              "w-4 " +
              (sort_field === name && sort_direction === "asc"
                ? "text-red-700"
                : "")
            }
          />
          <ChevronDownIcon
            className={
              "w-4 -mt-2 " +
              (sort_field === name && sort_direction === "desc"
                ? "text-red-700"
                : "")
            }
          />
        </div>
      </div>
    </th>
  );
};

export default TableHeader;
