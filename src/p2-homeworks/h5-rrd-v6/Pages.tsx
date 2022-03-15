import React from 'react'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import { Navigate, Route, Routes } from 'react-router-dom'


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    // add paths
}

function Pages() {
    return (
        <div>
            {/* Routes выбирает первый подходящий роут */}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={'/'} element={<Navigate to={PATH.JUNIOR}/>}/>
                <Route path={'/'} element={<Navigate to={PATH.JUNIOR_PLUS}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<Junior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<JuniorPlus/>}/>
                {/* add routes */}

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
