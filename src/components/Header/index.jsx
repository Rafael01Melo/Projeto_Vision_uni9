import PropTypes  from "prop-types";
import "./style.css";

export function Header(props){
    console.log(props);
    return (
        <header>
        <h1>
          {props.title}
        </h1>
      </header>
    )
}

Header.prototype = {
  title: PropTypes.string
}