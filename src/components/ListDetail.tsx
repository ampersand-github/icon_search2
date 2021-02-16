import * as React from "react";

import { User } from "../interfaces";
import { ReactNode } from "react";

type ListDetailProps = {
  item: User;
};

const ListDetail = ({ item: user }: ListDetailProps): ReactNode => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
