import routes from "../routes";
export const getJoin = (req, res) => {

    res.render("join");
}

export const postJoin = (req, res) => {
    const{
        body: {name, email, password, password2}
    } = req;
    // 비밀번호와 비밀번호 확인 값이 다르면 회원가입 할 수 없도록 하기
    if(password !== password2){
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // To Do: Register User
        // To DO: Log user in
        res.redirect(routes.home)
    }
}

export const getLogin = (req, res) => res.render("login", {pageTitle: "Log In"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}



export const logout = (req, res) => {
    // To Do: Process Log out
    res.redirect(routes.home);
}

export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");