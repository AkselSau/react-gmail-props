function EmailView({changeMail, selectedMail}) {
    return (
        <article className="email-content">
          <div className="title">
            <h1>{selectedMail.title}</h1>
          </div>
          <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <div className="sender-info">
                <h2>{selectedMail.sender}</h2>
              </div>
              <div className="user-info">
                <p>
                </p>
              </div>
            </div>
            <div className="date-info">
              <p></p>
            </div>
          </header>
          <section className="email-body">
            <div className="content">
                <p>Email text field</p>
            </div>
          </section>
          <section className="email-actions">
            <button onClick={() => changeMail(false)}>Back</button>
          </section>
        </article>
    );
}


export default EmailView