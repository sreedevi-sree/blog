
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Switch, Route, useHistory } from "react-router-dom";
import { AddBlog } from "./AddBlog";
import { Bloglist } from "./Bloglist";


export function Home() {
    const history=useHistory();

  return (
    <div>
          <AppBar position="static">
            <Toolbar>          
                <Button style={{marginLeft:"auto"}} color="inherit" 
                onClick={()=>history.push("/blog/home/addblog")}>Create Blog</Button>
            </Toolbar>
          </AppBar>

     <Switch>

      <Route  path="/blog/home/addblog">           
      <AddBlog />
        </Route>     

      </Switch>      
     
      <Bloglist />
    </div>
  );
}


