import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleUsersDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-3xl">users:{users.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full border border-gray-200">
          {/* <!-- Table Head --> */}
          <thead>
            <tr class="bg-gray-100">
              <th class="px-4 py-2 border">#</th>
              <th class="px-4 py-2 border">Name</th>
              <th class="px-4 py-2 border">Email</th>
              <th class="px-4 py-2 border">Created At</th>
              <th class="px-4 py-2 border">Last SignIn Time</th>
              <th class="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          {/* <!-- Table Body --> */}
          <tbody>
            {users.map((user) => (
              <tr key={user._id} class="hover:bg-gray-50">
                <td class="px-4 py-2 border">1</td>
                <td class="px-4 py-2 border">{user.name}</td>
                <td class="px-4 py-2 border">{user.email}</td>
                <td class="px-4 py-2 border">{user.createdAt}</td>
                <td class="px-4 py-2 border">{user.lastSignInTime}</td>
                <td class="px-4 py-2 border">
                  <button class="btn btn-xs btn-info mr-2">Edit</button>
                  <button
                    onClick={() => handleUsersDelete(user._id)}
                    class="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
