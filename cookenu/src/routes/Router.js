import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage'
import LoginPage from '../pages/LoginPge/LoginPage'
import RecipesDetailPage from '../pages/RecipesDetailPage/RecipeDetailPage'
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPaje'

export const Router = ({setRightButtonText}) => {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginPage setRightButtonText={setRightButtonText} />
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage setRightButtonText={setRightButtonText} />
            </Route>
            <Route exact path="/">
                <RecipesListPage />
            </Route>
            <Route exact path="/adicionar-receita">
                <AddRecipesPage />
            </Route>
            <Route exact path="/detalhe/:id">
                <RecipesDetailPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>

    )
}

export default Router






