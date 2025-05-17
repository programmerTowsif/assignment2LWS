export default function ListOfUser({ users, serUsers, status }) {
  const filteredUsers = users.filter((user) =>
    status === "ALL" ? true : user.satus === status
  );
  console.log(filteredUsers);

  const handleDeliverClick = (idToUpdate) => {
    const updateUsers = users.map((user) =>
      user.id === idToUpdate ? { ...user, satus: "DELIVER" } : user
    );

    serUsers(updateUsers);
  };
  const handleDeletedClick = (idToDelet) => {
    const deleteUsers = users.filter((user) => user.id !== idToDelet);
    serUsers(deleteUsers);
  };
  return (
    <>
      {users.length > 0 ? (
        filteredUsers.map((user, index) => {
          const { id, name, items, amount, satus } = user;

          return (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-3">{id}</td>
              <td className="py-3">{name}</td>
              <td className="py-3">{items}</td>
              <td className="py-3">{amount}</td>
              <td className="py-3">
                <span className="text-red-500">{satus}</span>
              </td>
              <td className="py-3">
                {satus === "DELIVER" ? (
                  <button className="bg-green-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                    DELIVERED
                  </button>
                ) : (
                  <>
                    <button
                      className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                      onClick={() => handleDeletedClick(id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                      onClick={() => handleDeliverClick(id)}
                    >
                      DELIVER
                    </button>
                  </>
                )}
              </td>
            </tr>
          );
        })
      ) : (
        <div>Dose not your in here</div>
      )}
    </>
  );
}
