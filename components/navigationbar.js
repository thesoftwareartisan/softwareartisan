import Link from "next/link";
export default function NavigationBar () {
    return (<div className="navbar">
        <Link href="/"><img className="logo" src="/banner-logo.png"/></Link>
        {navPages.map(page => (<NavButton name={page.name} path={page.path}/>))}
    </div>);
}
const navPages = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Contact",
        path: "/contact"
    },
    {
        name: "Blog",
        path: "/blog"
    }
];

function NavButton (props){
    return (<Link href={props.path}>
        <div className="navbutton">
          <span className="Label">{props.name}</span>
        </div>
      </Link>)
}