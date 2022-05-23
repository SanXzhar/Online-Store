import React from "react";
import {Router, Redirect, Route, Routes} from "react-router-dom";
import { authRoutes, publicRouter } from "../router";

const AppRouter = () => {
    const isAuth = false 
    return ( 
        <Routes>
                
                {isAuth && authRoutes.map(({ path, Component})=> 
                    <Route key={path} path={path} element = {<Component />} exact/>
                )}
                {publicRouter.map(({ path, Component})=> 
                    <Route key={path} path={path} element = {<Component />} exact/>
                )}
            
        </Routes>
     );
}
 
export default AppRouter;