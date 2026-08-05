import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{ padding: '20px', background: 'white' }}>
      <h2>HireSphere</h2>
      <br />
      <Link to='/'>Home</Link>
      <Link to='/jobs'>Jobs</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}
