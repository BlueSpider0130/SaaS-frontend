export default function({ store, redirect }) {
    console.log("this is start of midddleware")
    var auth_info = ''
    if (typeof window !== 'undefined') {
        auth_info = localStorage.getItem('user_email')
    } else {
        auth_info = ''
    }

    if (!auth_info) {
        return redirect('/signin-page')
    }

}