import "./Css/Profile.css";

function Profile({ open, onClose, user }) {
    if (!open) return null;

    return (
        <div className="profile-overlay">
            <div className="profile-card">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ×
                </button>

                {user ? (
                    <>
                        <div className="profile-header">
                            <div className="avatar">
                                {user.name.charAt(0).toUpperCase()}
                            </div>

                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>

                        <div className="profile-body">
                            <div>
                                <strong>Mobile</strong>
                                <p>{user.mobileNo}</p>
                            </div>

                            <div>
                                <strong>Joined</strong>
                                <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <h3>Loading...</h3>
                )}

            </div>
        </div>
    );
}

export default Profile;