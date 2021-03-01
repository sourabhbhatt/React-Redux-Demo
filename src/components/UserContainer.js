import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import ReactImageMagnify from 'react-image-magnify';



function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
                <div >
                    <div className="container">
                        <h1>Image Magnify Demo </h1>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                // isFluidWidth: true,
                                src: 'https://scontent.fdel27-1.fna.fbcdn.net/v/t1.0-9/119430867_1693351694161054_7688702278952764951_o.jpg?_nc_cat=108&ccb=3&_nc_sid=84a396&_nc_ohc=HxnRIRme9qgAX-Ne_l1&_nc_ht=scontent.fdel27-1.fna&oh=94d51513accb239d448bbc260517d6c2&oe=60617046'
                                , height: 400,
                                width: 400
                            },
                            largeImage: {
                                src: 'https://scontent.fdel27-1.fna.fbcdn.net/v/t1.0-9/119430867_1693351694161054_7688702278952764951_o.jpg?_nc_cat=108&ccb=3&_nc_sid=84a396&_nc_ohc=HxnRIRme9qgAX-Ne_l1&_nc_ht=scontent.fdel27-1.fna&oh=94d51513accb239d448bbc260517d6c2&oe=60617046',
                                width: 1200,
                                height: 1800
                            }
                        }} />
                    </div>


                    <h2>A Demo User List using JavaScript Demo API</h2>
                    <div>
                        {
                            userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
                        }
                    </div>
                </div>
            )
}

const mapStateToProp = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToProp = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(UserContainer)
