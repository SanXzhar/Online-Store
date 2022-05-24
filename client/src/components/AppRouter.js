import React, { useContext } from "react";
import {Router, Redirect, Route, Routes} from "react-router-dom";
import { Context } from "..";
import { authRoutes, publicRouter } from "../router";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return ( 
        <Routes>
                
                {user.isAuth && authRoutes.map(({ path, Component})=> 
                    <Route key={path} path={path} element = {<Component />} exact/>
                )}
                {publicRouter.map(({ path, Component})=> 
                    <Route key={path} path={path} element = {<Component />} exact/>
                )}
            
        </Routes>
     );
}
 
export default AppRouter;