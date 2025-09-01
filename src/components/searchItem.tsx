import type { UserInfo } from "../types/userInfo"

export default function SearchItem(userProps: UserInfo) {
    return (
        <>
            <div onClick={() => {
                window.location.href = `/user/${userProps.id}`;
            }} className="card">
                <img src={userProps.avatar_url} alt={userProps.login} />
                <h3>{userProps.login}</h3>
                {/* TODO: on click... */}
            </div>
        </>
    )
}