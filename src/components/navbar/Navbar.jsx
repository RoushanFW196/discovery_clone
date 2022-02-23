import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authentication";

export const Navbar = () => {
    const {user} = useAuth()
    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(logout())
    }
    return <div className="navbar">
        <div className="flex">
            <img className="logo" src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNhMWEyYTMiPjxwYXRoIGQ9Ik0xNy4yLDQwLjEzMzMzYy0yLjA2NzY1LC0wLjAyOTI0IC0zLjk5MDg3LDEuMDU3MDkgLTUuMDMzMjIsMi44NDNjLTEuMDQyMzYsMS43ODU5MiAtMS4wNDIzNiwzLjk5NDc0IDAsNS43ODA2NmMxLjA0MjM2LDEuNzg1OTIgMi45NjU1OCwyLjg3MjI1IDUuMDMzMjIsMi44NDNoMTM3LjZjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzek0xNy4yLDgwLjI2NjY3Yy0yLjA2NzY1LC0wLjAyOTI0IC0zLjk5MDg3LDEuMDU3MDkgLTUuMDMzMjIsMi44NDNjLTEuMDQyMzYsMS43ODU5MiAtMS4wNDIzNiwzLjk5NDc0IDAsNS43ODA2NmMxLjA0MjM2LDEuNzg1OTIgMi45NjU1OCwyLjg3MjI1IDUuMDMzMjIsMi44NDNoMTM3LjZjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzek0xNy4yLDEyMC40Yy0yLjA2NzY1LC0wLjAyOTI0IC0zLjk5MDg3LDEuMDU3MDkgLTUuMDMzMjIsMi44NDNjLTEuMDQyMzYsMS43ODU5MiAtMS4wNDIzNiwzLjk5NDc0IDAsNS43ODA2NmMxLjA0MjM2LDEuNzg1OTIgMi45NjU1OCwyLjg3MjI1IDUuMDMzMjIsMi44NDNoMTM3LjZjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" />
            <img className="dislogo" src="https://www.discoveryplus.in/129c5de772422db12a69e397768bd8ec.png" />
            <Link to="../">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/mindblown">Mindblown</Link>
            <Link to="/premium">Premium</Link> 
        </div>
        <div className="flex f1">
            <form id="searchform">
                <input id="searchinput" type="text" placeholder="Search for a show, episode etc." />
            </form>
            {!user&&<button><Link id="sin" to="../login">Sign In</Link></button>}
            {user&&<button onClick={handleSubmit}>Sign out</button>}
        </div>
    </div>
}