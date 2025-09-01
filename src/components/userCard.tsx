import type { UserInfo } from "../types/userInfo";


export default function UserCard(userProps: UserInfo) {
    return (
        <>
            <div className="card">
                <img src={userProps.avatar_url} alt={userProps.login} />
                <h1>{userProps.login}</h1>
                <a href={userProps.html_url}>Profile</a>
                {/* TODO: repos here, map through a collection of repos - define types and component to render */}
            </div>
        </>
    )
}