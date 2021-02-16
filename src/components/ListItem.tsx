import React from "react";
import Link from "next/link";

import { User } from "../interfaces";

type Props = {
  data: User;
};

const ListItem: React.FC<Props> = (props: Props) => (
  <Link href="/users/[id]" as={`/users/${props.data.id}`}>
    <a>
      {props.data.id}: {props.data.name}
    </a>
  </Link>
);

export default ListItem;
