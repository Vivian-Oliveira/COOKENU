export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToRecipesList = (history) => {
    history.push("/")
}

export const goToAddRecipes = (history) => {
    history.push("/adicionar-receita")
}

export const goToRecipeDetail = (history, id) => {
    history.push(`/detalhe/${id}`)
}