import * as React from "react";
import ListItem from "./ListItem";
import { User } from "../interfaces";
import { ReactNode } from "react";

type Props = {
  items: User[];
};

const List = ({ items }: Props): ReactNode => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
