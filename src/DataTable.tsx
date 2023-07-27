import React from "react";
import styled from "@emotion/styled";

interface Item {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface DataTableProps {
  items: Item[];
}

const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
`;

const Td = styled.td<{ stocked: boolean }>`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: ${(props) => (props.stocked ? "inherit" : "#f2f2f2")};
  color: ${(props) => (props.stocked ? "inherit" : "red")};
`;

const DataTable: React.FC<DataTableProps> = ({ items }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <Th>Category</Th>
          <Th>Name</Th>
          <Th>Price</Th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <Td stocked={item.stocked}>{item.category}</Td>
            <Td stocked={item.stocked}>{item.name}</Td>
            <Td stocked={item.stocked}>{item.price}</Td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default DataTable;
