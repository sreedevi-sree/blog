import React from "react";
import { useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Welcome } from "./Welcome";

export function UserList({ userList, setUserList }) {
  const history = useHistory();

  return (
    <div>
      <section className="user-list">
        {userList.map((user, index) => (
          // To disply name and movie in welcome app to fetch data from initial setup
          <Welcome
            key={index}
            name={user.name}
            pic={user.pic}
            id={index}

            deleteButton={<IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => {
                const remainingUsers = userList.filter((user, idx) => {
                  const removeIdx = index;
                  return idx !== removeIdx;
                }
                );
                setUserList(remainingUsers);
              }}
              aria-label="delete"
              color="error">
              <DeleteIcon />
            </IconButton>}
            editButton={<IconButton
              onClick={() => history.push("/users/edit/" + index)}
              aria-label="delete"
              color="info">
              <EditIcon />
            </IconButton>} />
        ))}
      </section>
    </div>
  );
}
