import React from 'react'

const withAuthenticate = (Component) => LoginPage => {
    return (
        class extends React.Component {
            constructor() {
                super();
                this.state = {

                }
            }
    render() {
        if (localStorage.username) {
            return <Component />
        } else {
            return <LoginPage />
        }
        }
    }
    )
}

export default withAuthenticate;