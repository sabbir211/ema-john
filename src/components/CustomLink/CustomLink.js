import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                // className={match ? " text-indigo-600" : " text-red-500"}
                style={{ color: match ? "yellow" : "white" }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
}
export default CustomLink;