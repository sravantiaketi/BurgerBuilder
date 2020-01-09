import  React  from "react";
import Bar from '../../hoc/Bar'
import classes from './Layout.css';

const layout = (props) => (
   
   <Bar>
        <div>Sidebar</div>
        <main className={classes.Content}>
            {props.children}
        </main>
   </Bar>
);


export default layout;