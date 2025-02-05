function Email({email, toggleRead, toggleStar, changeMail}) {
    return (
        <li
              key={email.id}
              className={`email ${email.read ? 'read' : 'unread'}`}
              onClick={() => changeMail(email)}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                  onClick={(s) => s.stopPropagation()}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                  onClick={(s) => s.stopPropagation()}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
    );
}


export default Email