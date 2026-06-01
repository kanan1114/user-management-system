import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {

  const [users, setUsers] = useState([]);
const [search, setSearch] = useState("");
  useEffect(() => {

    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const deleteUser = async (index) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/users/${index}`
      );

      setUsers(
        users.filter((_, i) => i !== index)
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        Admin Dashboard
      </h2>

      <div className="row mb-4">

  <div className="col-md-4">
    <div className="card shadow p-3">
      <h5>Total Users</h5>
      <h2>{users.length}</h2>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card shadow p-3">
      <h5>Active Users</h5>
      <h2>{users.length}</h2>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card shadow p-3">
      <h5>Registered Today</h5>
      <h2>{users.length}</h2>
    </div>
  </div>

</div>

      <div className="card shadow">

        <div className="card-body">

          <h4 className="mb-3">
            Registered Users
          </h4>
<input
  className="form-control mb-3"
  placeholder="Search User"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
          <table className="table table-bordered">

            <thead>

              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

            {users
  .filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((user, index) => (

    <tr key={index}>

      <td>{user.name}</td>

      <td>{user.email}</td>

      <td>{user.mobile}</td>

    </tr>

))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;