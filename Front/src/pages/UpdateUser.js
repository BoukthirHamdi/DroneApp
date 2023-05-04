// import React, { useState } from 'react';
// //import { updateUser } from '../utils/APIRoutes';
// import axios from 'axios';
// import { useEffect } from 'react';



// const UpdateUser = (props) => {
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [grade, setGrade] = useState("");
//   const [role, setRole] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     axios.get(`/usersModel/${props.match.params.id}`)
//       .then((res) => {
//         setName(res.data.name);
//         setUsername(res.data.username);
//         setPassword(res.data.password);
//         setGrade(res.data.grade);
//         setRole(res.data.role);
//         setEmail(res.data.email);
//         setPhone(res.data.phone);
//         setImages(res.data.images);
//       })
//       .catch((err) => console.log(err));
//   }, [props.match.params.id]);

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const updatedUser = {
//       name,
//       username,
//       password,
//       grade,
//       role,
//       email,
//       phone,
//       images
//     };

//     axios.put(`/usersModel/${props.match.params.id}`, updatedUser)
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));

//     window.location = "/";
//   };

//   return (
//     <div>
//       <h3>Update User</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label>Name: </label>
//           <input
//             type="text"
//             required
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Username: </label>
//           <input
//             type="text"
//             required
//             className="form-control"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password: </label>
//           <input
//             type="password"
//             required
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Grade: </label>
//           <input
//             type="text"
//             className="form-control"
//             value={grade}
//             onChange={(e) => setGrade(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Role: </label>
//           <input
//             type="text"
//             className="form-control"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email: </label>
//           <input
//             type="email"
//             required
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone: </label>
//           <input
//             type="text"
//             required
//             className="form-control"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Images: </label>
//           <input
//             type="text"
//             required
//             className="Form-control"
//             value={[]}
//             onChange={(e) => setImages(e.target.value)}
//             />
//         </div>
//         <button type="submit" className="btn-btn-primary">Update User</button>
//         </form>
//         </div>
//   );
// };
//   export default UpdateUser();