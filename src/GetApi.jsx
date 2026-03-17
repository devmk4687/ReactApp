import { React, useEffect, useState } from "react";
import axios from "axios";

function GetApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Fetch API Data</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
export default GetApi;
